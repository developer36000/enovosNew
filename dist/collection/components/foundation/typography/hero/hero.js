import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
/**
 * @name Hero
 * @description Additional heading typographies with higher sizes.
 * @path foundation/typography
 * @documented true
 * @urlDesign design-foundation-typography.html
 * @prop --font-family_font-family-<N>: Sets the font family names for the element where 1 <= N <= 2
 * @prop --font-weight_[thin, extra-light, light, regular, medium, semi-bold, bold, extra-bold, black]: Weight variables that are available for use
 * @prop --super_super: Sets the element as superhero
 * @prop --styles_[black, white, #{$color-name}-#{'' + $variation}]: Color of the text
 * @prop --styles_[italic]: Font in italic style
 * @prop --styles_[left, center, right]: Alignment options of the text
 * @prop --styles_[capitalize, uppercase, lowercase]: Transform options of the text
 * @prop --text_*: The text to be displayed
 */
export class ENOVOSHero {
  constructor() {
    this.content = '';
    this.classNames = {
      EL: 'hero',
    };
  }
  /** INJECT_ANCHOR */
  componentWillUpdate() {
    this.updateContent();
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
    this.updateContent();
  }
  updateContent() {
    this.el.querySelector('div').innerHTML = this.content;
  }
  getStylesAttributes() {
    const classes = [];
    if (this.super !== undefined) {
      classes.push('superhero');
    }
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
    if (this.font === 'font-family-1') {
      classes.push('font-family-1');
    }
    if (this.font === 'font-family-2') {
      classes.push('font-family-2');
    }
    if (this.font === 'font-family-3') {
      classes.push('font-family-3');
    }
    if (this.font === 'font-family-mobile-1') {
      classes.push('font-family-mobile-1');
    }
    return this.styles + ' ' + classes.join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: this.classNames.EL + ' '
        + ' '
        + ComponentPropsHelper.setGlobalStyles(this.getStylesAttributes(), this.classNames.EL) }));
  }
  static get is() { return "eds-hero"; }
  static get originalStyleUrls() { return {
    "$": ["hero.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["hero.css"]
  }; }
  static get properties() { return {
    "fontWeight": {
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
      "attribute": "font-weight",
      "reflect": false
    },
    "font": {
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
      "attribute": "font",
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
      "reflect": false,
      "defaultValue": "''"
    },
    "super": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "super",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
