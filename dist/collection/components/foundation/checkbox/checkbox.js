import { Component, Element, Event, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Checkbox
 * @description A checkbox allows to choose between two opposite states or values, always to be confirmed by a click/tap.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-checkbox.html
 */
export class ENOVOSCheckbox {
  constructor() {
    this.selected = false;
    this.disabled = false;
    this.indeterminate = false;
    this.classNames = {
      EL: 'checkbox',
      SHAPE: '__shape',
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
  clickHandler(e) {
    e.preventDefault();
    if (!this.disabled) {
      this.inputEl.checked = !this.inputEl.checked;
      this.selected = this.inputEl.checked;
    }
    if (this.indeterminate) {
      this.indeterminate = false;
      this.el.removeAttribute('indeterminate');
    }
    this.clickCheckbox.emit({
      inputName: this.inputName,
      value: this.value,
      selected: this.selected,
      indeterminate: this.indeterminate,
    });
    e.stopPropagation();
  }
  /**
   * @description Get tooltip size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  getStyles() {
    let classes = (this.styles) ? this.styles : '';
    if (this.disabled) {
      classes += ' disabled';
    }
    if (this.indeterminate) {
      classes += ' indeterminate';
    }
    return classes;
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.getSize(),
        StylePropsHelper.getStyles(this.getStyles(), this.classNames.EL),
      ].join(' ') },
      h("input", { type: "checkbox", name: this.inputName, value: this.value }),
      h("div", { class: `${this.classNames.EL}${this.classNames.SHAPE}` },
        h("div", { class: `${this.classNames.EL}${this.classNames.SHAPE}__inner` })),
      this.label
        ? h("label", null, this.label)
        : ''));
  }
  static get is() { return "eds-checkbox"; }
  static get originalStyleUrls() { return {
    "$": ["checkbox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["checkbox.css"]
  }; }
  static get properties() { return {
    "selected": {
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
      "attribute": "selected",
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
    "indeterminate": {
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
      "attribute": "indeterminate",
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
    }
  }; }
  static get events() { return [{
      "method": "clickCheckbox",
      "name": "clickCheckbox",
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
