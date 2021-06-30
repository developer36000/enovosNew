import { Component, Element, Event, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { StylePropsHelper } from '../../../../utils/StylePropsHelper';
/**
 * @name Select
 * @description Select element
 * @path foundation/form
 * @documented false
 */
export class ENOVOSSelect {
  constructor() {
    this.required = false;
    this.disabled = false;
    this.options = [];
    this.classNames = {
      EL: 'select',
    };
  }
  /** INJECT_ANCHOR */
  // Attributes disabled and/or readonly
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
    if (this.disabled) {
      this.el.querySelector('select').setAttribute('disabled', 'disabled');
    }
    this.handleEvent();
  }
  handleEvent() {
    const selectElement = this.el.querySelector('select');
    [
      {
        name: 'change',
        event: ev => { this.changeInput.emit(ev); },
      },
    ].forEach(event => {
      selectElement.removeEventListener(event.name, event.event);
      selectElement.addEventListener(event.name, event.event);
    });
  }
  /** REMOVABLE START */
  render() {
    return (h("select", { name: this.dataName, required: this.required, class: [
        this.classNames.EL,
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') }, this.options.map(value => {
      return (h("option", { value: value, selected: value === this.dataValue ? true : false }, value));
    })));
  }
  static get is() { return "eds-select"; }
  static get originalStyleUrls() { return {
    "$": ["select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["select.css"]
  }; }
  static get properties() { return {
    "dataValue": {
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
      "attribute": "data-value",
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
    "dataName": {
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
      "attribute": "data-name",
      "reflect": false
    },
    "required": {
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
      "attribute": "required",
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
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
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
  static get events() { return [{
      "method": "changeInput",
      "name": "changeInput",
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
