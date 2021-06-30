import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
/**
 * @name Icon
 * @description Icons represent tasks or types of content.
 * @path foundation/media
 * @urlDesign design-ressources-iconography.html
 * @prop --icon_*: The icon name is based on Icon collection names.
 * @prop --size_(n): The size of the icon can be defined by this parameter. It is a multiplier based on a specific ratio defined by the Design System. (Ex. 8x, x2, 18px)
 * @prop --styles_[black, white, #{$color-name}-#{'' + $variation}]: Color of the icon
 * @documented true
 */
export class ENOVOSIcon {
  constructor() {
    this.classNames = {
      EL: 'icon',
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
  // Get size
  getSize() {
    if (this.size !== undefined) {
      const regex = /(px|x)?(\d*\.?\d+)(px|x)?/gi;
      const regexMatch = regex.exec(this.size);
      if (regexMatch && regexMatch.length === 4) {
        const ratio = (regexMatch[1] !== undefined) ? regexMatch[1] : regexMatch[3];
        let size = parseInt(regexMatch[2], 10);
        if (ratio !== undefined && ratio.toLowerCase() === 'px') {
          // @ts-ignore
          size = Math.round(size / 8);
        }
        if (size > 0) {
          return `${this.classNames.EL}--${size}`;
        }
      }
    }
    return '';
  }
  /** REMOVABLE START */
  render() {
    return (h("i", { class: [
        this.classNames.EL,
        `${this.classNames.EL}-${this.icon}`,
        this.getSize(),
        ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
      ].join(' ') }));
  }
  static get is() { return "eds-icon"; }
  static get originalStyleUrls() { return {
    "$": ["icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get properties() { return {
    "icon": {
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
      "attribute": "icon",
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
      "optional": true,
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
