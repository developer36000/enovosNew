import { Component, Element, Host, Prop, h } from '@stencil/core';
import $clamp from 'clamp-js-main/clamp';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
import { LayoutPropsHelper } from '../../../../utils/LayoutPropsHelper';
import { IsVisibleObservable } from '../../../../utils/isVisibleObservable';
/**
 * @name Paragraph
 * @description Paragraph elements
 * @path foundation/typography
 * @documented true
 * @urlDesign design-foundation-typography.html
 */
export class ENOVOSParagraph {
  constructor() {
    this.classNames = {
      EL: 'paragraph',
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
    if (this.clampLines > 0) {
      this.initComponentIntersectionObserver();
    }
  }
  componentWillUpdate() {
    if (this.clampLines > 0) {
      this.initComponentIntersectionObserver();
    }
  }
  initComponentIntersectionObserver() {
    this.observer = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        this.clampElement();
      }
    }, {
      threshold: this.clampVisibility,
    });
  }
  clampElement() {
    const paragraph = this.el.querySelector(`.${this.classNames.EL}`);
    $clamp.clamp(paragraph, {
      clamp: this.clampLines,
      useNativeClamp: false,
    });
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
  // get the class for small paragraphs
  getBody() {
    if (this.type === 'body-1') {
      return 'body-1';
    }
    if (this.type === 'body-2') {
      return 'body-2';
    }
    if (this.type === 'body-3') {
      return 'body-3';
    }
    return '';
  }
  /** REMOVABLE START */
  render() {
    return (h(Host, { name: this.classNames.EL, class: this.getBody() },
      h("p", { class: [
          this.classNames.EL,
          this.getBody(),
          ComponentPropsHelper.setGlobalStyles(this.getStylesAttributes(), this.classNames.EL),
          LayoutPropsHelper.getStyles(this.styles, ''),
        ].join(' '), innerHTML: (this.content) ? this.content : undefined },
        h("slot", null))));
  }
  static get is() { return "eds-paragraph"; }
  static get originalStyleUrls() { return {
    "$": ["paragraph.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["paragraph.css"]
  }; }
  static get properties() { return {
    "clampLines": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "clamp-lines",
      "reflect": true
    },
    "clampVisibility": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "clamp-visibility",
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
    "fontStyle": {
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
      "attribute": "font-style",
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
      "required": true,
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
      "optional": true,
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "content",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
