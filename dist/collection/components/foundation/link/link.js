import { Component, Element, Event, Prop, State, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
import { LayoutPropsHelper } from '../../../utils/LayoutPropsHelper';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Link
 * @description A link is a reference to information that can be accessed by clicking or tapping.
 * @path foundation
 * @documented true
 */
export class ENOVOSLink {
  constructor() {
    this.target = '_self';
    this.hasIcon = false;
    this.hasButton = false;
    this.classNames = {
      EL: 'link',
      CONTENT: '__content',
      UNDERLINE: '--underline',
    };
    this._clickHandler = undefined;
  }
  /** INJECT_ANCHOR */
  // Get icon placement
  getIconPlacement() {
    if (this.hasButton) {
      if (this.iconPosition === 'right') {
        return `${this.classNames.EL}--with-button ${this.classNames.EL}--with-button--right`;
      }
      return `${this.classNames.EL}--with-button ${this.classNames.EL}--with-button--left`;
    }
    else {
      if (this.hasIcon && this.content) {
        if (this.iconPosition === 'right') {
          return `${this.classNames.EL}--with-icon ${this.classNames.EL}--with-icon--right`;
        }
        return `${this.classNames.EL}--with-icon ${this.classNames.EL}--with-icon--left`;
      }
      if (this.hasIcon && !this.content) {
        return `${this.classNames.EL}--with-icon ${this.classNames.EL}--icon-only`;
      }
    }
    return '';
  }
  getEmailClass() {
    if (this.mailto) {
      return `${this.classNames.EL}--email`;
    }
    return '';
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  componentWillLoad() {
    this.hasIcon = this.el.querySelector('[slot=icon]') !== null ? true : false;
    this.hasButton = this.el.querySelector('[slot=button]') !== null ? true : false;
    // Fix IE Slot
    if (this.hasIcon && !this.hasButton) {
      const slotIconElement = this.el.querySelector('[slot=icon]');
      slotIconElement.classList.add('slot-icon');
    }
    if (this.hasButton) {
      const slotIconElement = this.el.querySelector('[slot=button]');
      slotIconElement.classList.add('slot-button');
    }
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
    this.el.setAttribute('name', this.classNames.EL);
    const link = this.el.querySelector('a');
    if (this.url) {
      link.setAttribute('href', this.url);
    }
    else if (this.mailto) {
      link.setAttribute('href', 'mailto:' + this.mailto);
    }
    else {
      link.setAttribute('href', '#');
      this._clickHandler = new TapEvent(this.el, e => {
        this.clickHandler(e);
      });
    }
  }
  clickHandler(e) {
    e.preventDefault();
    this.clickLink.emit(e);
  }
  // get the font-weight
  getStylesAttributes() {
    const classes = [];
    if (this.fontWeight === 'thin') {
      classes.push('weight-100');
    }
    if (this.fontWeight === 'extra-light') {
      classes.push('weight-200');
    }
    if (this.fontWeight === 'light') {
      classes.push('weight-300');
    }
    if (this.fontWeight === 'regular') {
      classes.push('weight-400');
    }
    if (this.fontWeight === 'medium') {
      classes.push('weight-500');
    }
    if (this.fontWeight === 'semi-bold') {
      classes.push('weight-600');
    }
    if (this.fontWeight === 'bold') {
      classes.push('weight-700');
    }
    if (this.fontWeight === 'extra-bold') {
      classes.push('weight-800');
    }
    if (this.fontWeight === 'black') {
      classes.push('weight-900');
    }
    return this.styles + ' ' + classes.join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("a", { class: [
        this.classNames.EL,
        this.getIconPlacement(),
        this.getEmailClass(),
        this.getSize(),
        ComponentPropsHelper.setGlobalStyles(this.getStylesAttributes(), this.classNames.EL),
        (this.underline) ? `${this.classNames.EL}${this.classNames.UNDERLINE}` : '',
        LayoutPropsHelper.getStyles(this.styles, ''),
      ].join(' '), onMouseOver: ev => {
        if (this.hasButton) {
          ev.preventDefault();
          this.el.querySelector(`[name="button"]`).setAttribute('is-hover', 'is-hover');
        }
      }, onMouseLeave: ev => {
        if (this.hasButton) {
          ev.preventDefault();
          this.el.querySelector(`[name="button"]`).removeAttribute('is-hover');
        }
      }, target: this.target },
      h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, tabIndex: -1 },
        h("slot", { name: "icon" }),
        h("slot", { name: "button" }),
        h("div", { class: "text", innerHTML: (this.content ? this.content : (this.url ? this.url : this.mailto)) }))));
  }
  static get is() { return "eds-link"; }
  static get originalStyleUrls() { return {
    "$": ["link.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["link.css"]
  }; }
  static get properties() { return {
    "url": {
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
      "attribute": "url",
      "reflect": false
    },
    "fontWeight": {
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
      "attribute": "font-weight",
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
    "mailto": {
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
      "attribute": "mailto",
      "reflect": false
    },
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
    "iconPosition": {
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
      "attribute": "icon-position",
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
    },
    "underline": {
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
      "attribute": "underline",
      "reflect": false
    },
    "target": {
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
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    }
  }; }
  static get states() { return {
    "hasIcon": {},
    "hasButton": {}
  }; }
  static get events() { return [{
      "method": "clickLink",
      "name": "clickLink",
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
