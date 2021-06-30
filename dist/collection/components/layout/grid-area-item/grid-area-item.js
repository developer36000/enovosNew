import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { LayoutPropsHelper } from '../../../utils/LayoutPropsHelper';
/**
 * @name Grid Area Item
 * @description Grid Area Item
 * @path layout/grid-area-item
 * @documented false
 */
export class ENOVOSGridAreaItem {
  constructor() {
    this.classNames = {
      EL: 'grid-area-item',
    };
  }
  /**
   * @description Set the area classes (header, main, footer...)
   * @return {string}
   */
  getAreaClass() {
    return `${this.classNames.EL}--${this.area}`;
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
    [this.classNames.EL, this.getAreaClass(), LayoutPropsHelper.getStyles(this.styles, '')].forEach(className => {
      if (className) {
        this.el.classList.add(className);
      }
    });
  }
  render() {
    return (h("slot", null));
  }
  static get is() { return "eds-grid-area-item"; }
  static get originalStyleUrls() { return {
    "$": ["grid-area-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["grid-area-item.css"]
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
    "area": {
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
      "attribute": "area",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
}
