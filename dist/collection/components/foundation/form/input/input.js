import { Component, Element, Event, Prop, h } from '@stencil/core';
import { debounce, isEmpty } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { StylePropsHelper } from '../../../../utils/StylePropsHelper';
/**
 * @name Input
 * @description Input and textarea elements
 * @path foundation/form
 * @documented false
 */
export class ENOVOSInput {
  constructor() {
    this.dataName = '';
    this.debounce = 0;
    this.step = '1';
    this.ellipsis = false;
    this.classNames = {
      EL: 'input-textarea',
      HAS_ELLIPSIS: '--has-ellipsis',
    };
    /**
     * @description Debounce onIpunt event, waiting user is typing
     */
    this.typing = debounce(ev => {
      this.inputInput.emit(ev);
    }, this.debounce);
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
    if (this.el.querySelector('input')) {
      if (this.disabled) {
        this.el.querySelector('input').setAttribute('disabled', 'disabled');
      }
      if (this.readOnly) {
        this.el.querySelector('input').setAttribute('readonly', 'readonly');
      }
    }
    if (this.el.querySelector('textarea')) {
      if (this.disabled) {
        this.el.querySelector('textarea').setAttribute('disabled', 'disabled');
      }
      if (this.readOnly) {
        this.el.querySelector('textarea').setAttribute('readonly', 'readonly');
      }
    }
    this.handleEvent();
  }
  componentDidUpdate() {
    if (this.el.querySelector('input')) {
      if (this.disabled) {
        this.el.querySelector('input').setAttribute('disabled', 'disabled');
      }
      else if (this.el.querySelector('input').hasAttribute('disabled')) {
        this.el.querySelector('input').removeAttribute('disabled');
      }
      if (this.readOnly) {
        this.el.querySelector('input').setAttribute('readonly', 'readonly');
      }
      else if (this.el.querySelector('input').hasAttribute('readonly')) {
        this.el.querySelector('input').removeAttribute('readonly');
      }
    }
    if (this.el.querySelector('textarea')) {
      if (this.disabled) {
        this.el.querySelector('textarea').setAttribute('disabled', 'disabled');
      }
      else if (this.el.querySelector('textarea').hasAttribute('disabled')) {
        this.el.querySelector('textarea').removeAttribute('disabled');
      }
      if (this.readOnly) {
        this.el.querySelector('textarea').setAttribute('readonly', 'readonly');
      }
      else if (this.el.querySelector('textarea').hasAttribute('readonly')) {
        this.el.querySelector('textarea').removeAttribute('readonly');
      }
    }
  }
  componentWillRender() {
    if (this.el.querySelector('textarea')) {
      this.el.querySelector('textarea').value = this.dataValue;
    }
  }
  handleEvent() {
    const inputElement = this.el.querySelector('input');
    const textareaElement = this.el.querySelector('textarea');
    [
      {
        name: 'focus',
        event: ev => { this.focusInput.emit(ev); },
      },
      {
        name: 'blur',
        event: ev => { this.blurInput.emit(ev); },
      },
      {
        name: 'input',
        event: ev => { this.typing(ev); },
      },
      {
        name: 'change',
        event: ev => { this.changeInput.emit(ev); },
      },
    ].forEach(event => {
      if (inputElement) {
        inputElement.removeEventListener(event.name, event.event);
        inputElement.addEventListener(event.name, event.event);
      }
      else if (textareaElement) {
        textareaElement.removeEventListener(event.name, event.event);
        textareaElement.addEventListener(event.name, event.event);
      }
    });
  }
  onChangeFiles(files) {
    this.changeFileInput.emit(files);
  }
  /**
   * @description Display the link on white in case of transparent version of field
   * otherwise in tertiary color
   * @return {string}
   */
  isActive() {
    return (!isEmpty(this.dataValue)) ? `${this.classNames.EL}--filled` : '';
  }
  /**
   * @description Get size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    if (this.type === 'textarea') {
      return (h("textarea", { class: [
          this.classNames.EL,
          this.getSize(),
          'textarea',
          this.isActive(),
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' '), name: this.dataName, placeholder: this.placeholder }, this.dataValue));
    }
    else if (this.type === 'file') {
      return (h("input", { class: [
          this.classNames.EL,
          this.getSize(),
          this.isActive(),
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' '), name: "files[]", onChange: (event) => this.onChangeFiles(event.target.files), type: this.type, value: this.dataValue, step: this.step, placeholder: this.placeholder, autocomplete: "off" }));
    }
    else {
      return (h("input", { class: [
          this.classNames.EL,
          this.ellipsis === true ? `${this.classNames.EL}${this.classNames.HAS_ELLIPSIS}` : '',
          this.getSize(),
          this.isActive(),
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' '), name: this.dataName, type: this.type, value: this.dataValue, step: this.step, placeholder: this.placeholder, autocomplete: "off" }));
    }
  }
  static get is() { return "eds-input"; }
  static get originalStyleUrls() { return {
    "$": ["input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
    "type": {
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
      "attribute": "type",
      "reflect": false
    },
    "placeholder": {
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
      "attribute": "placeholder",
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
      "reflect": false,
      "defaultValue": "''"
    },
    "dataValue": {
      "type": "string",
      "mutable": true,
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
      "attribute": "data-value",
      "reflect": true
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
    "debounce": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "debounce",
      "reflect": false,
      "defaultValue": "0"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false
    },
    "readOnly": {
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
      "attribute": "read-only",
      "reflect": false
    },
    "step": {
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
      "attribute": "step",
      "reflect": false,
      "defaultValue": "'1'"
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
    "ellipsis": {
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
      "attribute": "ellipsis",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "focusInput",
      "name": "focusInput",
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
    }, {
      "method": "blurInput",
      "name": "blurInput",
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
    }, {
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
    }, {
      "method": "inputInput",
      "name": "inputInput",
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
    }, {
      "method": "changeFileInput",
      "name": "changeFileInput",
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
