import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { isEqual } from 'lodash-es';
import { MenuItem } from '../../../models/menu-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
/**
 * @name Menu
 * @description A menu allows to navigate between differents parts of the application.
 * @path components
 * @documented true
 */
export class ENOVOSMenu {
  constructor() {
    this.iconOnly = false;
    this.indented = false;
    this.level = 0;
    this.items = [];
    this.menuItems = [];
    this.classNames = {
      EL: 'menu',
      ITEM: '__item',
      ICON__CONTAINER: '__icon-container',
      BADGE__CONTAINER: '__badge-container',
      IMAGE__CONTAINER: '__image-container',
      LEADING: '--leading',
      TRAILING: '--trailing',
      INDENTED: '--indented',
      ICON: '__icon',
      BADGE: '__badge',
      IMAGE: '__image',
      LEFT: '--left',
      RIGHT: '--right',
    };
  }
  /**
   * @description Set the default active item
   */
  async setActiveItem(key) {
    this.activeItem = key;
  }
  async setItems(data) {
    this.items = data;
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && newData.length > 0) {
      this.initData();
    }
  }
  initData() {
    const menuItems = [];
    this.items.map(item => menuItems.push(new MenuItem(item)));
    this.menuItems = menuItems;
  }
  componentWillLoad() {
    this.initData();
  }
  /**
   * @description Init component variables
   */
  handleTheme() {
    const handleThemeChange = theme => {
      Array.from(this.el.classList).filter(className => {
        return className.startsWith('theme--');
      }).forEach(themeClassName => {
        this.el.classList.remove(themeClassName);
      });
      // Add new theme class
      this.el.classList.add(`theme--${theme}`);
    };
    themeOnChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  /**
   * @description Define the event on menu items
   */
  clickMenuItemHandler(e, item) {
    e.preventDefault();
    if (item.getProp('disabled') !== true) {
      this.clickMenuItem.emit(item);
    }
    return false;
  }
  /**
   * @description Set the active item class depending the activeItem property
   * @return {string}
   */
  isActiveItemClass(item) {
    return (this.activeItem === item.getProp('id')) ? `${this.classNames.EL}${this.classNames.ITEM}--active` : '';
  }
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isDisabledItemClass(item) {
    return (item.getProp('disabled') === true) ? `${this.classNames.EL}${this.classNames.ITEM}--disabled` : '';
  }
  isNoLinkItemClass(item) {
    return (item.getProp('link') === false) ? `${this.classNames.EL}${this.classNames.ITEM}--no-link` : '';
  }
  /**
   * @description Get component size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  displayComponent(item, position) {
    const className = (position === 'trailing') ? this.classNames.TRAILING : this.classNames.LEADING;
    switch (item[`${position}`].type) {
      case 'badge':
        return h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.BADGE__CONTAINER}` },
          h("eds-badge", { class: [
              `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.BADGE}`,
              `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.BADGE}${className}`,
            ].join(' '), size: item.getProp(position).content.size, styles: item.getProp(position).content.styles, text: item.getProp(position).content.text }));
      case 'image':
        return h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.IMAGE__CONTAINER}` },
          h("eds-image", { class: [
              `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.IMAGE}`,
              `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.IMAGE}${className}`,
            ].join(' '), src: item.getProp(position).content.src }));
      default:
        return h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` },
          h("eds-icon", { class: [
              `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
              `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}${className}`,
            ].join(' '), icon: item.hasProp(`${position}.content.icon`) ? item.getProp(`${position}.content.icon`) : (item.hasProp(`${position}.content`) ? item.getProp(`${position}.content`) : ''), styles: item.getProp(position).content.styles }));
    }
  }
  render() {
    return (h("ul", { class: [
        this.classNames.EL,
        this.indented ? `${this.classNames.EL}${this.classNames.INDENTED}--level-${this.level}` : '',
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        this.getSize(),
      ].join(' ') }, this.menuItems.map(item => {
      if (item.hasProp('id')) {
        return h("li", null,
          h("a", { href: "#", id: `menu_${item.getProp('id')}`, onClick: e => this.clickMenuItemHandler(e, item), class: [
              `${this.classNames.EL}${this.classNames.ITEM}`,
              this.isActiveItemClass(item),
              this.isNoLinkItemClass(item),
              this.isDisabledItemClass(item),
            ].join(' ') },
            item.getProp('leading') ? this.displayComponent(item, 'leading') : '',
            !this.iconOnly
              ? h("span", null, item.getProp('text'))
              : '',
            item.getProp('trailing') ? this.displayComponent(item, 'trailing') : ''),
          (item.hasProp('children'))
            ? h("eds-menu", { indented: true, items: item.getProp('children'), level: this.indented ? this.level + 1 : 0, activeItem: this.activeItem })
            : '');
      }
    })));
  }
  static get is() { return "eds-menu"; }
  static get originalStyleUrls() { return {
    "$": ["menu.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["menu.css"]
  }; }
  static get properties() { return {
    "activeItem": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active-item",
      "reflect": false
    },
    "disabledItem": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled-item",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false
    },
    "iconOnly": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-only",
      "reflect": false,
      "defaultValue": "false"
    },
    "styles": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "styles",
      "reflect": false
    },
    "indented": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "indented",
      "reflect": false,
      "defaultValue": "false"
    },
    "level": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "level",
      "reflect": false,
      "defaultValue": "0"
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MenuItem[]",
        "resolved": "MenuItem[]",
        "references": {
          "MenuItem": {
            "location": "import",
            "path": "../../../models/menu-item"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "menuItems": {}
  }; }
  static get events() { return [{
      "method": "clickMenuItem",
      "name": "clickMenuItem",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setActiveItem": {
      "complexType": {
        "signature": "(key: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Set the default active item"
          }]
      }
    },
    "setItems": {
      "complexType": {
        "signature": "(data: MenuItem[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "MenuItem": {
            "location": "import",
            "path": "../../../models/menu-item"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "items",
      "methodName": "watchItemsHandler"
    }]; }
}
