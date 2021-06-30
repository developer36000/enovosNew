import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { LayoutPropsHelper } from '../../../../utils/LayoutPropsHelper';
import { StylePropsHelper } from '../../../../utils/StylePropsHelper';
/**
 * @name Label
 * @description Label
 * @path foundation/form
 * @documented false
 */
export class ENOVOSLabel {
  constructor() {
    this.classNames = {
      EL: 'label',
    };
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
  }
  getRequired() {
    if (this.required) {
      return `${this.classNames.EL}--required`;
    }
  }
  getSize() {
    if (['xs', 'sm', 'md', 'lg', 'xlg'].includes(this.size)) {
      return `${this.classNames.EL}--${this.size}`;
    }
  }
  /** REMOVABLE START */
  render() {
    return (h("label", { class: [
        this.classNames.EL,
        this.disabled ? `${this.classNames.EL}--disabled` : '',
        this.getSize(),
        this.getRequired(),
        LayoutPropsHelper.getStyles(this.styles, ''),
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') },
      h("slot", null)));
  }
  static get is() { return "eds-label"; }
  static get originalStyleUrls() { return {
    "$": ["label.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["label.css"]
  }; }
  static get properties() { return {
    "required": {
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
      "attribute": "required",
      "reflect": false
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
    "size": {
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
    }
  }; }
  static get elementRef() { return "el"; }
}
