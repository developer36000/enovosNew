import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { LayoutPropsHelper } from '../../../utils/LayoutPropsHelper';
/**
 * @name Divider
 * @description Divider (<hr>) element
 * @path foundation/divider
 * @documented false
 */
export class ENOVOSLink {
  constructor() {
    this.classNames = {
      EL: 'divider',
      TEXT: '__text',
    };
  }
  /** INJECT_ANCHOR */
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
  /** REMOVABLE START */
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        LayoutPropsHelper.getStyles(this.styles, ''),
      ].join(' ') },
      h("span", { class: `${this.classNames.EL}${this.classNames.TEXT}` }, this.content)));
  }
  static get is() { return "eds-divider"; }
  static get originalStyleUrls() { return {
    "$": ["divider.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["divider.css"]
  }; }
  static get properties() { return {
    "content": {
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
      "attribute": "content",
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
