import { Component, Element, Method, Prop, State, Watch, h } from '@stencil/core';
import { isEqual } from 'lodash-es';
import { ListItem } from '../../../models/list-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name List
 * @description List element. Declined in 2 sizes (normal and large).
 * @path foundation
 * @documented true
 */
export class ENOVOSList {
  constructor() {
    this.typographyCategory = 'body-1';
    this.items = [];
    this.listItems = [];
    this.classNames = {
      EL: 'list',
      ICON: '__icon',
    };
  }
  /** INJECT_ANCHOR */
  componentWillLoad() {
    this.initData();
  }
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
   * @description Add datalist to the component
   * Replace the div container by a documentFragment in case there's a
   * new call to setDatalist for an update for example
   * @param {Object} data The data to be display
   */
  async setListItems(data) {
    this.items = data;
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && Array.isArray(newData) && newData.length > 0) {
      this.initData();
    }
  }
  initData() {
    this.listItems = [];
    this.items.map(item => {
      const listItem = new ListItem(item);
      this.listItems.push(listItem);
    });
  }
  /**
   * @description Control if a icon parameter should be display
   * @return {boolean}
   */
  hasIcon() {
    return (this.icon && this.icon !== undefined) ? true : false;
  }
  /**
   * @description Get alignment class
   * @return {string}
   */
  getAlignmentClass() {
    if (this.align && this.align === 'right') {
      return `${this.classNames.EL}--align-right`;
    }
    return '';
  }
  /**
   * @description Get icon class
   * @return {string}
   */
  getIconClass() {
    if (this.hasIcon()) {
      return `${this.classNames.EL}--with-icon`;
    }
    return '';
  }
  /**
   * @description Get size class
   * @return {string}
   */
  getTypographyCategoryClass() {
    if (this.typographyCategory && ['superhero', 'hero', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-1', 'body-2', 'body-3', 'small'].includes(this.typographyCategory)) {
      return `${this.classNames.EL}--${this.typographyCategory}`;
    }
    return '';
  }
  /** REMOVABLE START */
  render() {
    return (h("ul", { class: [
        this.classNames.EL,
        this.getAlignmentClass(),
        this.getIconClass(),
        this.getTypographyCategoryClass(),
      ].join(' ') }, this.listItems.map(listItem => h("li", { class: [
        listItem.getProp('styles'),
      ].join(' ') },
      this.hasIcon()
        ? h("eds-icon", { class: `${this.classNames.EL}${this.classNames.ICON}`, icon: this.icon, size: "4", styles: this.iconStyles })
        : '',
      listItem.getProp('content'),
      listItem.getProp('styles')))));
  }
  static get is() { return "eds-list"; }
  static get originalStyleUrls() { return {
    "$": ["list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["list.css"]
  }; }
  static get properties() { return {
    "align": {
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
      "attribute": "align",
      "reflect": false
    },
    "icon": {
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
      "attribute": "icon",
      "reflect": false
    },
    "iconStyles": {
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
      "attribute": "icon-styles",
      "reflect": false
    },
    "typographyCategory": {
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
      "attribute": "typography-category",
      "reflect": false,
      "defaultValue": "'body-1'"
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ListItem[]",
        "resolved": "ListItem[]",
        "references": {
          "ListItem": {
            "location": "import",
            "path": "../../../models/list-item"
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
    "listItems": {}
  }; }
  static get methods() { return {
    "setListItems": {
      "complexType": {
        "signature": "(data: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "data The data to be display",
                "name": "param"
              }],
            "text": "The data to be display"
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
            "text": "Add datalist to the component\nReplace the div container by a documentFragment in case there's a\nnew call to setDatalist for an update for example"
          }, {
            "name": "param",
            "text": "data The data to be display"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "items",
      "methodName": "watchItemsHandler"
    }]; }
}
