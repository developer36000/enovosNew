import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { isEqual } from 'lodash-es';
import { TabsItem } from '../../../models/foundation/tabs';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Tabs
 * @description Tabs allow to quickly navigate between different sections.
 * @path foundation
 * @documented true
 * @prop --Tabs_items: Refer to tabs items attribute, consult the corresponding component documentation. Object TabsItem
 * @prop --Tabs-Item_id: Id of the tab item
 * @prop --Tabs-Item_title: Text title of the tab item
 * @prop --Tabs-Item_icon: Icon configuration of the tab item. Object TabsItemIcon
 * @prop --Tabs-Item_badge: Badge configuration of the tab item. Object TabsItemBadge
 * @prop --Tabs-Item_positioned_icon: Icon position of the tab item. Object TabsItemPositionedIcon
 * @prop --Tabs-Item-Badge_text:  Refer to badge text attribute, consult the corresponding component documentation
 * @prop --Tabs-Item-Badge_styles:  Refer to badge styles attribute, consult the corresponding component documentation. Default is 'success'
 * @prop --Tabs-Item-Badge_size:  Refer to badge size attribute, consult the corresponding component documentation
 * @prop --Tabs-Item-Icon_icon:  Refer to icon attribute, consult the corresponding component documentation
 * @prop --Tabs-Item-Icon_styles:  Refer to icon styles attribute, consult the corresponding component documentation.
 * @prop --Tabs-Item-Icon_size:  Refer to icon size attribute, consult the corresponding component documentation
 */
export class ENOVOSTabs {
  constructor() {
    this.border = false;
    this.items = [];
    this.tabItems = [];
    this.classNames = {
      EL: 'tabs',
      ITEM: '__item',
      ICON__CONTAINER: '__icon-container',
      ICON: '__icon',
      BADGE: '__badge',
    };
    this.eventInit = false; // Event initialization
    this._clickItemHandler = [];
  }
  /** INJECT_ANCHOR */
  async setItems(data) {
    this.items = data;
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && newData.length > 0) {
      this.initData();
    }
  }
  initData() {
    this.tabItems = [];
    this.items.map(item => this.tabItems.push(new TabsItem(item)));
    this.eventInit = false;
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.initData();
  }
  /**
   * @description Update event on menu items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidRender() {
    if (!this.eventInit) {
      this.tabItems.map((tabItem, index) => {
        if (tabItem.hasProp('id')) {
          const item = this.el.querySelector(`#tab_${tabItem.getProp('id')}`);
          if (item) {
            if (this._clickItemHandler[index] && typeof this._clickItemHandler[index] === 'object') {
              this._clickItemHandler[index].removeEvent();
            }
            this._clickItemHandler[index] = new TapEvent(item, e => {
              this.clickMenuItemHandler(e, tabItem);
            });
          }
        }
      });
      this.eventInit = true;
    }
  }
  /**
   * @description Define the event on items
   */
  clickMenuItemHandler(e, item) {
    e.preventDefault();
    if (item.getProp('disabled') !== true) {
      this.clickTabsItem.emit(item);
    }
    return false;
  }
  /**
   * @description Set the active item class depending the activeItem property
   * @return {string}
   */
  getActiveItemClasses(item) {
    let activeClass = '';
    if (this.activeItem === item.getProp('id')) {
      activeClass = `${this.classNames.EL}${this.classNames.ITEM}--active`;
    }
    return [
      ComponentPropsHelper.setGlobalStyles(this.styles, `${this.classNames.EL}${this.classNames.ITEM}`),
      activeClass,
    ].join(' ');
  }
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isDisabledItemClass(item) {
    return (item.getProp('disabled') === true) ? `${this.classNames.EL}${this.classNames.ITEM}--disabled` : '';
  }
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isShrink() {
    return (this.shrink) ? `${this.classNames.EL}--shrink` : '';
  }
  /**
   * @description Set the separated class to create space between each item
   * @return {string}
   */
  isSeparated() {
    return (this.separated) ? `${this.classNames.EL}--separated` : '';
  }
  hasBorder() {
    return (this.border) ? `${this.classNames.EL}--border` : '';
  }
  /** REMOVABLE START */
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
  }
  render() {
    if (this.tabItems.length > 0) {
      return (h("ul", { class: [
          this.classNames.EL,
          this.isShrink(),
          this.hasBorder(),
          this.isSeparated(),
          StylePropsHelper.getStyles(this.backgroundStyles, `${this.classNames.EL}--bg`),
        ].join(' ') }, this.tabItems.map(item => h("li", { tabindex: "-1", id: `tab_${item.getProp('id')}`, class: [
          `${this.classNames.EL}${this.classNames.ITEM}`,
          this.getActiveItemClasses(item),
          this.isDisabledItemClass(item),
        ].join(' ') }, item.hasProp('badge')
        ? h("eds-positioned-badge", { size: item.badge.size, styles: item.badge.styles, text: item.badge.text, position: item.badge.position, alignment: item.badge.alignment ? item.badge.alignment : 'inside' },
          h("div", { class: "tabs__item__content" },
            item.hasProp('title') && !item.hasProp('icon') ? item.getProp('title') : '',
            item.hasProp('icon') && !item.hasProp('title')
              ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` },
                h("eds-icon", { class: [
                    `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
                  ].join(' '), styles: item.getProp('icon.styles'), size: item.hasProp('icon.size') ? item.getProp('icon.size') : '5x', icon: item.getProp('icon.icon') }))
              : ''))
        : item.hasProp('positionedIcon')
          ? h("eds-positioned-icon", { size: item.positionedIcon.size, styles: item.positionedIcon.styles, icon: item.positionedIcon.icon, backgroundColor: item.positionedIcon.backgroundColor, position: item.positionedIcon.position, alignment: item.positionedIcon.alignment ? item.positionedIcon.alignment : 'inside' },
            h("div", { class: "tabs__item__content" },
              item.hasProp('title') && !item.hasProp('icon') ? item.getProp('title') : '',
              item.hasProp('icon') && !item.hasProp('title')
                ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` },
                  h("eds-icon", { class: [
                      `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
                    ].join(' '), styles: item.getProp('icon.styles'), size: item.hasProp('icon.size') ? item.getProp('icon.size') : '5x', icon: item.getProp('icon.icon') }))
                : ''))
          : h("div", { class: "tabs__item__content" },
            item.hasProp('title') && !item.hasProp('icon') ? item.getProp('title') : '',
            item.hasProp('icon') && !item.hasProp('title')
              ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` },
                h("eds-icon", { class: [
                    `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
                  ].join(' '), styles: item.getProp('icon.styles'), size: item.hasProp('icon.size') ? item.getProp('icon.size') : '5x', icon: item.getProp('icon.icon') }))
              : '')))));
    }
    else {
      return (h("span", null));
    }
  }
  static get is() { return "eds-tabs"; }
  static get originalStyleUrls() { return {
    "$": ["tabs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tabs.css"]
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
    "backgroundStyles": {
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
      "attribute": "background-styles",
      "reflect": false
    },
    "shrink": {
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
      "attribute": "shrink",
      "reflect": false
    },
    "separated": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "separated",
      "reflect": false
    },
    "border": {
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
      "attribute": "border",
      "reflect": false,
      "defaultValue": "false"
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TabsItem[]",
        "resolved": "TabsItem[]",
        "references": {
          "TabsItem": {
            "location": "import",
            "path": "../../../models/foundation/tabs"
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
    "tabItems": {}
  }; }
  static get events() { return [{
      "method": "clickTabsItem",
      "name": "clickTabsItem",
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
    "setItems": {
      "complexType": {
        "signature": "(data: TabsItem[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "TabsItem": {
            "location": "import",
            "path": "../../../models/foundation/tabs"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "INJECT_ANCHOR",
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
