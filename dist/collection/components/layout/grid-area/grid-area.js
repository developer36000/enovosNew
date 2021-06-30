import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { LayoutPropsHelper } from '../../../utils/LayoutPropsHelper';
/**
 * @name Grid Area
 * @description Grid Area
 * @path layout/grid-area
 * @documented false
 */
export class ENOVOSGridArea {
  constructor() {
    this.hasHeader = true;
    this.hasFooter = true;
    this.classNames = {
      EL: 'grid-area',
      NO_HEADER: '--no-header',
      NO_FOOTER: '--no-footer',
    };
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
  componentDidRender() {
    [
      this.classNames.EL,
      LayoutPropsHelper.getStyles(this.styles, ''),
      (!this.hasHeader) ? `${this.classNames.EL}${this.classNames.NO_HEADER}` : '',
      (!this.hasFooter) ? `${this.classNames.EL}${this.classNames.NO_FOOTER}` : '',
    ].forEach(className => {
      if (className) {
        this.el.classList.add(className);
      }
    });
  }
  render() {
    return (h("slot", null));
  }
  static get is() { return "eds-grid-area"; }
  static get originalStyleUrls() { return {
    "$": ["grid-area.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["grid-area.css"]
  }; }
  static get properties() { return {
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
    "hasHeader": {
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
      "attribute": "has-header",
      "reflect": false,
      "defaultValue": "true"
    },
    "hasFooter": {
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
      "attribute": "has-footer",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get elementRef() { return "el"; }
}
