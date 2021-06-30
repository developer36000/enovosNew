import { Component, Element, Event, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Switch
 * @description A switch allows to choose between two opposite states.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-switch.html
 * @prop --size_[md/sm]: Size of the switch. Default is md.
 * @prop --styles_[#{$color-name}]: Color of the switch (Ex. default, contextual-success)
 */
export class ENOVOSSwitch {
  constructor() {
    this.elevationLevel = '1';
    this.checked = false;
    this.disabled = false;
    this.classNames = {
      EL: 'switch',
      TRACK: '__track',
      THUMB: '__thumb',
    };
    this._clickHandler = undefined;
  }
  /** INJECT_ANCHOR */
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
    this.el.setAttribute('name', this.classNames.EL);
    this.inputEl = this.el.querySelector('input');
    this.inputEl.checked = this.checked;
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    this._clickHandler = new TapEvent(this.el, e => {
      this.clickHandler(e);
    });
  }
  componentDidUpdate() {
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    else if (this.inputEl.hasAttribute('disabled')) {
      this.inputEl.removeAttribute('disabled');
    }
  }
  clickHandler(e) {
    e.preventDefault();
    if (!this.disabled) {
      this.inputEl.checked = !this.inputEl.checked;
      this.checked = this.inputEl.checked;
    }
    this.clickSwitch.emit(this.checked);
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    return [
      this.label
        ? h("eds-paragraph", { type: "body-1", styles: this.checked === true ? 'secondary-500' : 'tertiary-500', fontWeight: this.checked === true ? 'bold' : 'regular', content: this.label })
        : '',
      h("div", { class: [
          this.classNames.EL,
          (this.disabled) ? `${this.classNames.EL}--disabled` : '',
          this.getSize(),
          ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
        ].join(' ') },
        h("input", { type: "checkbox", name: this.inputName, value: this.value }),
        h("label", { class: `${this.classNames.EL}${this.classNames.TRACK}` },
          h("eds-elevation", { styles: (this.disabled) ? 'light' : 'dark', level: this.elevationLevel },
            h("span", { class: `${this.classNames.EL}${this.classNames.TRACK}${this.classNames.THUMB}` })))),
    ];
  }
  static get is() { return "eds-switch"; }
  static get originalStyleUrls() { return {
    "$": ["switch.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["switch.css"]
  }; }
  static get properties() { return {
    "elevationLevel": {
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
      "attribute": "elevation-level",
      "reflect": false,
      "defaultValue": "'1'"
    },
    "checked": {
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
      "attribute": "checked",
      "reflect": false,
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
    }
  }; }
  static get events() { return [{
      "method": "clickSwitch",
      "name": "clickSwitch",
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
  static get elementRef() { return "el"; }
}
