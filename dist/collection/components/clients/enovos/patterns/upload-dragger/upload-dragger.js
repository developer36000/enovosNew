import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Upload dragger
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSUploadDragger {
  constructor() {
    this.styles = 'primary';
    this.classNames = {
      EL: 'upload-dragger',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.styles) {
        className += ` ${this.classNames.EL}--${this.styles}`;
      }
      return className;
    };
    this.getStyleAttributeValue = () => {
      return {
        width: this.width || '100%',
        height: this.height || 'auto',
      };
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
    return (h("div", { class: this.getComponentClassName(), style: this.getStyleAttributeValue() },
      h("div", { class: `${this.classNames.EL}__icon` },
        h("eds-icon", { icon: "plus", styles: this.styles })),
      h("div", { class: `${this.classNames.EL}__content` },
        h("slot", { name: "text" }))));
  }
  static get is() { return "eds-upload-dragger"; }
  static get originalStyleUrls() { return {
    "$": ["upload-dragger.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["upload-dragger.css"]
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "styles",
      "reflect": false,
      "defaultValue": "'primary'"
    },
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
    }
  }; }
  static get elementRef() { return "el"; }
}
