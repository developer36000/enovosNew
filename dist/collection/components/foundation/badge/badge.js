import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
/**
 * @name Badge
 * @description A badge displays additional information attached to an element.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-badge.html
 */
export class ENOVOSBadge {
  constructor() {
    this.classNames = {
      EL: 'badge',
      MEDIA: '__media',
      LEADING: '--leading',
      TEXT: '__text',
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
   * @description Get tooltip size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /**
   * @description Control if text is present in badge
   */
  noText() {
    return (!this.text) ? `${this.classNames.EL}--no-text` : '';
  }
  /**
   * @description Control if badge is fully rounded
   */
  isRounded() {
    return (this.rounded) ? `${this.classNames.EL}--rounded` : '';
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasMediaLeading() {
    return (this.mediaLeading) ? true : false;
  }
  setClasses() {
    return [
      this.classNames.EL,
      this.getSize(),
      this.noText(),
      this.isRounded(),
      this.hasMediaLeading() ? `${this.classNames.EL}--with-media` : '',
      ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
    ].join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: this.setClasses() },
      this.hasMediaLeading()
        ? h("eds-image", { notFitted: true, class: [
            this.classNames.EL + this.classNames.MEDIA,
            this.classNames.EL + this.classNames.MEDIA + this.classNames.LEADING,
          ].join(' '), src: this.mediaLeading })
        : '',
      this.text
        ? h("div", { tabIndex: -1, class: `${this.classNames.EL}${this.classNames.TEXT}` }, this.text)
        : ''));
  }
  static get is() { return "eds-badge"; }
  static get originalStyleUrls() { return {
    "$": ["badge.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["badge.css"]
  }; }
  static get properties() { return {
    "text": {
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
      "attribute": "text",
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
    "rounded": {
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
      "attribute": "rounded",
      "reflect": false
    },
    "mediaLeading": {
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
      "attribute": "media-leading",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
