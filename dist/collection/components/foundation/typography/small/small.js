import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
/**
 * @name Small
 * @description Small element
 * @path foundation/typography
 * @documented true
 * @urlDesign design-foundation-typography.html
 */
export class ENOVOSSmall {
  constructor() {
    this.content = '';
    this.classNames = {
      EL: 'small',
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
    this.el.querySelector(`.${this.classNames.EL}`).innerHTML = this.content;
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
    if (this.fontStyle === 'italic') {
      classes.push('style-italic');
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
    return (h("small", { class: this.classNames.EL + ' '
        + ComponentPropsHelper.setGlobalStyles(this.getStylesAttributes(), this.classNames.EL) }));
  }
  static get is() { return "eds-small"; }
  static get originalStyleUrls() { return {
    "$": ["small.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["small.css"]
  }; }
  static get properties() { return {
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
    "fontStyle": {
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
      "attribute": "font-style",
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
  static get elementRef() { return "el"; }
}
