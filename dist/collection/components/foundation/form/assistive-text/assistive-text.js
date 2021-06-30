import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { StylePropsHelper } from '../../../../utils/StylePropsHelper';
/**
 * @name Assistive Text
 * @description Assistive Text to be display beside the input field
 * @path foundation/form
 * @documented false
 */
export class ENOVOSFieldHelper {
  constructor() {
    this.classNames = {
      EL: 'assistive-text',
      ICON: '__icon',
      ICON_LEADING: '--leading',
    };
  }
  /** INJECT_ANCHOR */
  /**
   * @description Set the contextual classes (success, error, warning...)
   * @return {string}
   */
  getContextualClass() {
    if (['success', 'info', 'warning', 'error'].includes(this.type)) {
      return `${this.classNames.EL}--${this.type}`;
    }
  }
  hasIcon() {
    return (this.icon) ? true : false;
  }
  /** REMOVABLE START */
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
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.getContextualClass(),
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') },
      this.hasIcon()
        ? h("eds-icon", { class: [
            this.classNames.EL + this.classNames.ICON,
            this.classNames.EL + this.classNames.ICON + this.classNames.ICON_LEADING,
          ].join(' '), icon: this.icon })
        : '',
      this.message));
  }
  static get is() { return "eds-assistive-text"; }
  static get originalStyleUrls() { return {
    "$": ["assistive-text.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["assistive-text.css"]
  }; }
  static get properties() { return {
    "message": {
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
      "attribute": "message",
      "reflect": false
    },
    "code": {
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
      "attribute": "code",
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
    "type": {
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
      "attribute": "type",
      "reflect": false
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
