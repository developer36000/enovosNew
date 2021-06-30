import { Component, Element, Event, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { debounce, isEqual } from 'lodash-es';
import { NavigationItem } from '../../../models/patterns/navigation-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
import { IsVisibleObservable } from '../../../utils/isVisibleObservable';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Navigation
 * @description Display navigation links labels and/or icons based on an exposed API. Click on items returns a custom event that developers can catch and manage.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-navigation-bottom.html
 * @prop --styles_[#{$color-name}]: Color of the items (Default is primary. Available colors are white, brand-expressive-orange-dark-on-light (with light background), brand-expressive-orange-dark-on-dark (with dark background))
 */
export class ENOVOSNavigation {
  constructor() {
    this.shrink = false; // Means the navigation size 100% of the container is false
    this.position = 'bottom';
    this.items = [];
    this.menuItems = [];
    this.classNames = {
      EL: 'navigation',
      ITEM: '__item',
      ICON__CONTAINER: '__icon-container',
      ICON: '__icon',
      BADGE: '__badge',
      TEXT__CONTAINER: '__text-container',
      TEXT: '__text',
      MEDIA: '__media',
      LEADING: '--leading',
      TRAILING: '--trailing',
      LOADING: '--loading',
    };
    this._clickNavItemHandler = [];
    this._observable = undefined; // observer;
    this.updateItems = false;
    this.launchResizeDebounce = debounce(() => {
      this.setBorderItemsAttribute();
      this.setActiveStatus();
      this.el.querySelector(`.${this.classNames.EL}`)
        .classList.remove(`${this.classNames.EL}${this.classNames.LOADING}`);
    }, 500);
  }
  componentWillLoad() {
    this.initData();
    this.attachObservable();
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
    if (!this.shrink) {
      this.el.setAttribute('is-streched', '');
    }
    this.attachEvents();
  }
  handleResize() {
    if (this.el.querySelector(`.${this.classNames.EL}`)) {
      this.el.querySelector(`.${this.classNames.EL}`)
        .classList.add(`${this.classNames.EL}${this.classNames.LOADING}`);
      this.launchResizeDebounce();
    }
  }
  async setItems(data) {
    this.items = data;
  }
  async setActiveItem(id) {
    this.activeItem = id;
    this.setBorderItemsAttribute();
    this.setActiveStatus();
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && newData.length > 0) {
      this.initData();
    }
  }
  /**
   * @description Update event on menu items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidRender() {
    if (this.updateItems === true) {
      this.setBorderItemsAttribute();
      this.attachEvents();
      this.updateItems = false;
    }
    this.setActiveStatus();
  }
  initData() {
    const menuItems = [];
    this.items.map(item => menuItems.push(new NavigationItem(item)));
    this.menuItems = menuItems;
    this.updateItems = true;
  }
  attachEvents() {
    this.menuItems.map((menuItem, index) => {
      if (menuItem.hasProp('id')) {
        const item = this.el.querySelector(`#navigation_${menuItem.getProp('id')}`);
        if (item) {
          if (this._clickNavItemHandler[index] && typeof this._clickNavItemHandler[index] === 'object') {
            this._clickNavItemHandler[index].removeEvent();
          }
          this._clickNavItemHandler[index] = new TapEvent(item, e => {
            this.clickNavItemHandler(e, menuItem);
          });
        }
      }
    });
  }
  attachObservable() {
    this._observable = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        this.setBorderItemsAttribute();
        this._observable.disconnectObserver();
      }
    }, {
      threshold: 1,
    });
  }
  /**
   * @description Define the event on menu items
   */
  clickNavItemHandler(e, item) {
    e.preventDefault();
    if (item.getProp('disabled') !== true) {
      this.clickNavItem.emit(item);
    }
    return false;
  }
  /**
   * @description Set the icon only class to the component
   * @return {string}
   */
  isIconOnlyClass() {
    return (this.iconOnly) ? `${this.classNames.EL}--without-text` : '';
  }
  /**
   * @description Set the icon only class to the component
   * @return {string}
   */
  isTextOnlyClass() {
    return (this.textOnly) ? `${this.classNames.EL}--without-icon` : '';
  }
  /**
   * @description Set the streched only class to the component
   * @return {string}
   */
  isShrinkClass() {
    return (!this.shrink) ? `${this.classNames.EL}--streched` : '';
  }
  /**
   * @description Set the streched only class to the component
   * @return {string}
   */
  isNoBorderClass() {
    return (this.noBorder) ? `${this.classNames.EL}--no-border` : '';
  }
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isDisabledItemClass(item) {
    return (item.getProp('disabled') === true) ? `${this.classNames.EL}${this.classNames.ITEM}--disabled` : '';
  }
  /**
   * @description Set the position class
   * @return {string}
   */
  positionClass() {
    return (['top', 'bottom'].includes(this.position)) ? `${this.classNames.EL}--${this.position}` : '';
  }
  /**
   * @description Get component size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  setActiveStatus() {
    const activeClass = `${this.classNames.EL}${this.classNames.ITEM}--active`;
    // Remove active class on all items
    this.el.querySelectorAll(`.${activeClass}`)
      .forEach(el => el.classList.remove(`${activeClass}`));
    const underline = this.el.querySelector(`.${this.classNames.EL}__underline`);
    const activeItem = this.el.querySelector(`#navigation_${this.activeItem}`);
    if (activeItem) {
      activeItem.classList.add(`${activeClass}`);
      underline.style.width = `${activeItem.dataset.width}px`;
      underline.style.left = `${activeItem.dataset.left}px`;
    }
  }
  /**
   * @return true if item in param is currently active
   */
  isActiveItem(item) {
    return item.getProp('id') === this.activeItem;
  }
  /**
   * @description Init width of element to avoid gap when changing the font fontWeight
   * and set data attribute to correctly set the border position and size
   */
  setBorderItemsAttribute() {
    let originLeft = 0;
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}`)
      .forEach((el) => {
      el.removeAttribute('style');
    });
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}`)
      .forEach((el) => {
      const style = getComputedStyle(el);
      const marginLeft = parseInt(style.marginLeft, 10);
      const marginRight = parseInt(style.marginRight, 10);
      const boundingClientRect = el.getBoundingClientRect();
      const widthEl = Math.ceil(boundingClientRect.width);
      el.dataset.width = widthEl.toString();
      el.dataset.left = (marginLeft + originLeft).toString();
      el.style.width = `${widthEl}px`;
      originLeft += widthEl + marginLeft + marginRight;
    });
  }
  // Get size
  getFontSize() {
    if (this.fontSize !== undefined) {
      const regex = /(px|x)?(\d*\.?\d+)(px|x)?/gi;
      const regexMatch = regex.exec(this.fontSize);
      if (regexMatch && regexMatch.length === 4) {
        const ratio = (regexMatch[1] !== undefined) ? regexMatch[1] : regexMatch[3];
        let size = parseInt(regexMatch[2], 10);
        if (ratio !== undefined && ratio.toLowerCase() === 'px') {
          // @ts-ignore
          size = Math.round(size / 8);
        }
        if (size > 0) {
          return `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT}--${size}`;
        }
      }
    }
    return '';
  }
  // Get size
  getFontWeight() {
    if (this.fontWeight !== undefined) {
      return `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT}--${this.fontWeight}`;
    }
    return '';
  }
  /**
   * @return true if media has state defined
   */
  hasMediaState(media, state) {
    return (media.states && media.states.hasOwnProperty(state));
  }
  /**
   * @return states and styles classes for each states as string array
   */
  getMediaStates(item, media) {
    const states = {
      classes: [],
      styles: [],
    };
    const mediaClass = `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.MEDIA}`;
    if (this.hasMediaState(media, 'active') && this.isActiveItem(item)) {
      states.classes.push(`${mediaClass}--active`);
      states.classes.push(...this.getMediaStateStyles(media, 'active').classes);
      states.styles.push(...this.getMediaStateStyles(media, 'active').styles);
    }
    if (this.hasMediaState(media, 'default') && !this.isActiveItem(item)) {
      states.classes.push(`${mediaClass}--default`);
      states.classes.push(...this.getMediaStateStyles(media, 'default').classes);
      states.styles.push(...this.getMediaStateStyles(media, 'default').styles);
    }
    return states;
  }
  /**
   * @return styles classes for one state as string array
   */
  getMediaStateStyles(media, state) {
    const styles = { classes: [], styles: [] };
    const mediaClass = `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.MEDIA}`;
    if (media.states[state].styles) {
      styles.styles.push(media.states[state].styles);
    }
    if (media.states[state].toggle) {
      styles.classes.push(`${mediaClass}--toggle`);
    }
    return styles;
  }
  /**
   * @return main styles classes as string array
   */
  getMediaStyles(media) {
    const styles = [];
    if (media === null || media === void 0 ? void 0 : media.styles) {
      styles.push(media.styles);
    }
    return styles;
  }
  /**
   * @return trailing or leading configured icon as preact string
   */
  getPositionnedMedia(item, position) {
    if (item.hasProp('medias')) {
      const media = item.medias.find(el => el.position === position);
      if (media) {
        return (h("div", { class: [
            `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.MEDIA}`,
            `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.MEDIA}${this.classNames[position.toUpperCase()]}`,
            ...this.getMediaStates(item, media).classes,
          ].join(' ') },
          h("eds-icon", { icon: media.value, styles: [
              ...this.getMediaStyles(media),
              ...this.getMediaStates(item, media).styles,
            ].join(' ') })));
      }
    }
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.positionClass(),
        this.isIconOnlyClass(),
        this.isTextOnlyClass(),
        this.isShrinkClass(),
        this.isNoBorderClass(),
        this.getSize(),
        ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
      ].join(' ') },
      this.menuItems.map(item => {
        if (item.hasProp('id')) {
          return (h("a", { id: `navigation_${item.getProp('id')}`, class: [
              `${this.classNames.EL}${this.classNames.ITEM}`,
              this.isDisabledItemClass(item),
            ].join(' ') },
            item.hasProp('icon') && !this.textOnly
              ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` },
                h("eds-icon", { class: [
                    `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
                  ].join(' '), icon: item.getProp('icon') }),
                item.hasProp('badge')
                  ? h("eds-badge", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.BADGE}`, size: "xxs", styles: item.getProp('badgeStyles') })
                  : '')
              : '',
            h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT__CONTAINER}` },
              this.getPositionnedMedia(item, 'leading'),
              h("div", { class: [
                  `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT}`,
                  this.getFontSize(),
                  this.getFontWeight(),
                ].join(' ') }, item.getProp('text')),
              this.getPositionnedMedia(item, 'trailing'))));
        }
      }),
      h("div", { class: `${this.classNames.EL}__underline` })));
  }
  static get is() { return "eds-navigation"; }
  static get originalStyleUrls() { return {
    "$": ["navigation.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["navigation.css"]
  }; }
  static get properties() { return {
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
      "reflect": false
    },
    "textOnly": {
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
      "attribute": "text-only",
      "reflect": false
    },
    "noBorder": {
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
      "attribute": "no-border",
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
      "reflect": false,
      "defaultValue": "false"
    },
    "activeItem": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active-item",
      "reflect": false
    },
    "position": {
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
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'bottom'"
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
    "styles": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "styles",
      "reflect": false
    },
    "fontWeight": {
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
      "attribute": "font-weight",
      "reflect": false
    },
    "fontSize": {
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
      "attribute": "font-size",
      "reflect": false
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "NavigationItem[]",
        "resolved": "NavigationItem[]",
        "references": {
          "NavigationItem": {
            "location": "import",
            "path": "../../../models/patterns/navigation-item"
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
      "method": "clickNavItem",
      "name": "clickNavItem",
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
        "signature": "(data: NavigationItem[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "NavigationItem": {
            "location": "import",
            "path": "../../../models/patterns/navigation-item"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setActiveItem": {
      "complexType": {
        "signature": "(id: string) => Promise<void>",
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
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "items",
      "methodName": "watchItemsHandler"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
