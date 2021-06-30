import { Component, Element, Prop, h } from '@stencil/core';
import { isEmpty, trim } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Avatar
 * @description The Avatar, primarly used for profile images, displays an optional image with rounded border and elevation. In case there's no image, it display a predefined icon. Elevation configuration and icon specification can be configured. Declined in 4 sizes (extra small, small, medium and large).
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-avatar.html
 */
export class ENOVOSAvatar {
  constructor() {
    this.elevationStyle = 'dark';
    this.elevationLevel = '2';
    this.icon = 'user-circle';
    this.iconStyle = 'quaternary-700';
    this.classNames = {
      EL: 'avatar',
      IMG: '__img',
      CONTAINER: '__container',
      ICON: '__icon',
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
  /**
   * @description Get component size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    return (h("eds-elevation", { styles: this.elevationStyle, level: this.elevationLevel, class: [
        this.classNames.EL,
        this.getSize(),
      ].join(' ') }, this.src && !isEmpty(trim(this.src))
      ? h("eds-image", { class: `${this.classNames.EL}${this.classNames.IMG}`, src: this.src })
      : h("div", { class: `${this.classNames.EL}${this.classNames.CONTAINER}` },
        h("eds-icon", { icon: this.icon, styles: this.iconStyle, class: `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.ICON}` }))));
  }
  static get is() { return "eds-avatar"; }
  static get originalStyleUrls() { return {
    "$": ["avatar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["avatar.css"]
  }; }
  static get properties() { return {
    "src": {
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
      "attribute": "src",
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
    "elevationStyle": {
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
      "attribute": "elevation-style",
      "reflect": false,
      "defaultValue": "'dark'"
    },
    "elevationLevel": {
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
      "attribute": "elevation-level",
      "reflect": false,
      "defaultValue": "'2'"
    },
    "icon": {
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
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "'user-circle'"
    },
    "iconStyle": {
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
      "attribute": "icon-style",
      "reflect": false,
      "defaultValue": "'quaternary-700'"
    }
  }; }
  static get elementRef() { return "el"; }
}
