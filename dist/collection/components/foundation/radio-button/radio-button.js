import { Component, Element, Event, Method, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Radio button
 * @description A radio button allows to choose one item from a list of multiple available options.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-radio-button.html
 */
export class ENOVOSRadioButton {
  constructor() {
    this.selected = false;
    this.disabled = false;
    this.classNames = {
      EL: 'radio-button',
      SHAPE: '__shape',
      ICON: '__icon',
    };
    this._clickHandler = undefined;
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init the dataitem
   */
  async activeRadioButton() {
    this.selected = !this.selected;
  }
  /**
   * @description Init the host element and attach event
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
    this.inputEl = this.el.querySelector('input');
    this.el.setAttribute('name', this.classNames.EL);
    this.inputEl.checked = this.selected;
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    this._clickHandler = new TapEvent(this.el, e => {
      this.clickHandler(e);
    }, 0);
  }
  componentDidUpdate() {
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    else if (this.inputEl.hasAttribute('disabled')) {
      this.inputEl.removeAttribute('disabled');
    }
    this.inputEl.checked = this.selected;
  }
  componentWillRender() {
    this.setStyles();
  }
  clickHandler(e) {
    e.preventDefault();
    // Make sure that once the radio button is checked,
    // it can not be unchecked by clicking on it again
    if (this.inputEl.checked) {
      return;
    }
    if (!this.disabled) {
      this.inputEl.checked = !this.inputEl.checked;
      this.selected = this.inputEl.checked;
    }
    this.clickRadioButton.emit({
      name: this.inputName,
      value: this.value,
      checked: this.selected,
    });
    e.stopPropagation();
  }
  /**
   * @description Get size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  setStyles() {
    if (this.disabled) {
      this.styles += ' disabled';
    }
    return this.styles;
  }
  /** REMOVABLE START */
  // Get Icon class
  hasIconClass() {
    if (this.icon) {
      return `${this.classNames.EL}${this.classNames.SHAPE}--with-icon`;
    }
    return '';
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.getSize(),
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') },
      h("input", { type: "radio", name: this.inputName, value: this.value }),
      h("div", { class: [
          `${this.classNames.EL}${this.classNames.SHAPE}`,
          this.hasIconClass(),
        ].join(' ') }, this.icon
        ? h("eds-icon", { class: `${this.classNames.EL}${this.classNames.SHAPE}${this.classNames.ICON}`, icon: this.icon })
        : ''),
      this.label
        ? h("label", null, this.label)
        : ''));
  }
  static get is() { return "eds-radio-button"; }
  static get originalStyleUrls() { return {
    "$": ["radio-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["radio-button.css"]
  }; }
  static get properties() { return {
    "selected": {
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
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "inputName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "input-name",
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
    "label": {
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
      "attribute": "label",
      "reflect": false
    },
    "value": {
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
      "attribute": "value",
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
    }
  }; }
  static get events() { return [{
      "method": "clickRadioButton",
      "name": "clickRadioButton",
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
    "activeRadioButton": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
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
            "text": "Init the dataitem"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
