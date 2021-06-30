import { Component, Element, Event, Host, Method, Prop, State, h } from '@stencil/core';
import { MessageButton } from '../../../models/message';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
/**
 * @name Message
 * @description A Message highlights contextual information or gives feedback on actions.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-message.html
 */
export class ENOVOSMessage {
  constructor() {
    this.columnsFluid = false;
    this.fontSize = 'body-2';
    this.actionButtons = [];
    this.classNames = {
      EL: 'message',
      WRAPPER: '__wrapper',
      ICON: '__icon',
      TEXT: '__text',
      BUTTONS: '__buttons',
      ICON_LEADING: '--leading',
      ICON_CLEANING: '--cleaning',
    };
  }
  /** INJECT_ANCHOR */
  componentWillRender() {
    const classesToRemove = Array.from(this.el.classList).filter(className => {
      return String(className).match(/message--cols-((\d))?/) !== null;
    });
    classesToRemove.forEach(className => {
      this.el.classList.remove(className);
    });
    const columnSizes = this.getColumnsSize();
    if (columnSizes) {
      this.el.classList.add(columnSizes);
    }
  }
  /**
   * @description Add datalist to the component
   * @param {Object} data The data to be display
   */
  async setButtons(data) {
    const actionButtons = [];
    data.map(item => {
      const messageButton = new MessageButton(item);
      actionButtons.push(messageButton);
    });
    this.actionButtons = [...actionButtons];
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasIconLeading() {
    return (this.iconLeading && this.iconLeading !== 'undefined') ? true : false;
  }
  /**
   * @description Control if there are buttons for the message
   * @return {boolean}
   */
  hasButtons() {
    return this.actionButtons.length > 0;
  }
  /**
   * @description Get tooltip size
   */
  getColumnsSize() {
    const classNameCols = (this.columnsFluid) ? '--cols-fluid-' : '--cols-';
    return (this.columns !== undefined) ? `${this.classNames.EL}${classNameCols}${this.columns}` : '';
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
    return (h(Host, { name: this.classNames.EL },
      h("div", { class: [
          this.classNames.EL,
          this.textOnly ? `${this.classNames.EL}--text` : '',
          this.inline ? `${this.classNames.EL}--inline` : '',
          this.clickable ? `${this.classNames.EL}--clickable` : '',
          this.hasIconLeading() ? `${this.classNames.EL}--with-leading-icon` : '',
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
          this.getColumnsSize(),
        ].join(' ') },
        h("div", { class: `${this.classNames.EL}${this.classNames.WRAPPER}` },
          this.hasIconLeading()
            ? h("eds-icon", { class: [
                this.classNames.EL + this.classNames.ICON,
                this.classNames.EL + this.classNames.ICON + this.classNames.ICON_LEADING,
              ].join(' '), styles: this.iconStyles, icon: this.iconLeading })
            : '',
          h("div", { class: this.classNames.EL + this.classNames.TEXT }, h("eds-paragraph", { type: this.fontSize, fontWeight: this.fontWeight, styles: this.inline ? this.styles : '' },
            h("slot", null))),
          h("div", { class: [
              this.classNames.EL + this.classNames.ICON,
              this.classNames.EL + this.classNames.ICON + this.classNames.ICON_CLEANING,
            ].join(' ') },
            h("slot", { name: "message-close-btn" }))),
        this.hasButtons()
          ? h("div", { class: `${this.classNames.EL}${this.classNames.BUTTONS}` }, this.actionButtons.map((item) => {
            return h("eds-button", { "data-id": `${item.getProp('id')}`, content: item.getProp('content'), "text-only": true, size: "md", onClickButton: e => {
                e.stopPropagation();
                this.clickButtonItem.emit(item);
              }, "icon-position": "right" }, item.hasProp('iconTrailing')
              ? h("eds-icon", { slot: "icon", icon: item.getProp('iconTrailing') })
              : '');
          }))
          : '')));
  }
  static get is() { return "eds-message"; }
  static get originalStyleUrls() { return {
    "$": ["message.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["message.css"]
  }; }
  static get properties() { return {
    "iconLeading": {
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
      "attribute": "icon-leading",
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
    "textOnly": {
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
      "attribute": "text-only",
      "reflect": false
    },
    "columns": {
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
      "attribute": "columns",
      "reflect": false
    },
    "columnsFluid": {
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
      "attribute": "columns-fluid",
      "reflect": false,
      "defaultValue": "false"
    },
    "inline": {
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
      "attribute": "inline",
      "reflect": false
    },
    "clickable": {
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
      "attribute": "clickable",
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-styles",
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
      "optional": false,
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
      "reflect": false,
      "defaultValue": "'body-2'"
    }
  }; }
  static get states() { return {
    "actionButtons": {}
  }; }
  static get events() { return [{
      "method": "clickButtonItem",
      "name": "clickButtonItem",
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
    "setButtons": {
      "complexType": {
        "signature": "(data: MessageButton[]) => Promise<void>",
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
          },
          "MessageButton": {
            "location": "import",
            "path": "../../../models/message"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Add datalist to the component"
          }, {
            "name": "param",
            "text": "data The data to be display"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
