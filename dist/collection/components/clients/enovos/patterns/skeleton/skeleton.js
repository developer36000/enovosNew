import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Skeleton
 * @description
 * @path patterns
 * @documented true
 */
export class ENOVOSSkeleton {
  constructor() {
    this.rounded = false;
    this.classNames = {
      EL: 'skeleton',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.rounded) {
        className += ` ${this.classNames.EL}--rounded`;
      }
      return className;
    };
    this.getStyleAttributeValue = () => {
      let style = {};
      if (this.width) {
        style = Object.assign(Object.assign({}, style), { width: this.width });
      }
      if (this.height) {
        style = Object.assign(Object.assign({}, style), { height: this.height });
      }
      return style;
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
  render() {
    return (h("span", { class: this.getComponentClassName(), style: this.getStyleAttributeValue() }));
  }
  static get is() { return "eds-skeleton"; }
  static get originalStyleUrls() { return {
    "$": ["skeleton.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["skeleton.css"]
  }; }
  static get properties() { return {
    "width": {
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
      "attribute": "width",
      "reflect": false
    },
    "height": {
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
      "attribute": "height",
      "reflect": false
    },
    "rounded": {
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
      "attribute": "rounded",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
