import { Component, Element, Prop, State, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
import { LayoutPropsHelper } from '../../../../utils/LayoutPropsHelper';
/**
 * @name Heading
 * @description HTML headings provide valuable information by highlighting important topics and the structure of the document.
 * @path foundation/typography
 * @documented true
 * @urlDesign design-foundation-typography.html
 * @prop --font-weight_[thin, extra-light, light, regular, medium, semi-bold, bold, extra-bold, black]: Weight variables that are available for use
 * @prop --styles_[black, white, #{$color-name}-#{'' + $variation}]: Color of the text
 * @prop --styles_[italic]: Font in italic style
 * @prop --styles_[left, center, right]: Alignment options of the text
 * @prop --styles_[capitalize, uppercase, lowercase]: Transform options of the text
 * @prop --text_*: The text to be displayed
 * @prop --type_h<N>: The name of the header tag where 1 <= N <= 6
 */
export class ENOVOSHeading {
  constructor() {
    this.content = '';
    this.size = 'h1';
    this.classNames = {
      EL: 'heading',
    };
  }
  /** INJECT_ANCHOR */
  componentWillRender() {
    const propType = this.type;
    if (propType === 'h1') {
      this.size = 'h1';
    }
    if (propType === 'h2') {
      this.size = 'h2';
    }
    if (propType === 'h3') {
      this.size = 'h3';
    }
    if (propType === 'h4') {
      this.size = 'h4';
    }
    if (propType === 'h5') {
      this.size = 'h5';
    }
    if (propType === 'h6') {
      this.size = 'h6';
    }
  }
  componentDidRender() {
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
    // Remove useless render span
    const span = this.el.querySelector('span');
    if (span) {
      this.el.removeChild(span);
    }
  }
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
  updateContent() {
    this.el.innerHTML = `<${this.size} class="${this.classNames.EL}
                                       ${ComponentPropsHelper.setGlobalStyles(this.getStylesAttributes(), this.classNames.EL)}
                                       ${LayoutPropsHelper.getStyles(this.styles, '')}">
      ${this.content}
    </${this.size}>`;
  }
  /** REMOVABLE START */
  render() {
    return (h("span", null));
  }
  static get is() { return "eds-heading"; }
  static get originalStyleUrls() { return {
    "$": ["heading.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["heading.css"]
  }; }
  static get properties() { return {
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
    }
  }; }
  static get states() { return {
    "size": {}
  }; }
  static get elementRef() { return "el"; }
}
