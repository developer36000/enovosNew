import { Component, Element, Prop, Watch, h } from '@stencil/core';
import { findIndex } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { IsVisibleObservable } from '../../../utils/isVisibleObservable';
/**
 * @name Adaptive Text
 * @description Used to adapt a typography component like paragraph or heading to the width of its own container.
 * @path layout
 * @documented true
 */
export class ENOVOSAdaptiveText {
  constructor() {
    this.type = 'h1';
    this.adapted = false;
    this.classNames = {
      EL: 'adaptive-text',
      CONTENT: '__content',
      VISIBLE: '--visible',
    };
    this.availableTypo = ['hero', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-1', 'body-2', 'body-3', 'small'];
    this._observable = undefined; // observer;
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
    this.attachObservable();
  }
  componentDidUpdate() {
    if (this.adapted === false) {
      const typoEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTENT}`);
      typoEl.classList.remove(`${this.classNames.EL}${this.classNames.CONTENT}${this.classNames.VISIBLE}`);
      setTimeout(() => {
        this.fitContent();
      }, 1);
    }
  }
  watchContentHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.adapted = false;
    }
  }
  watchFontWeightHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.adapted = false;
    }
  }
  fitContent() {
    const boundingClientRect = this.el.getBoundingClientRect();
    const typoEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTENT}`);
    const boundingClientRectTypoEl = typoEl.getBoundingClientRect();
    if (boundingClientRectTypoEl.width > boundingClientRect.width) {
      const indexType = findIndex(this.availableTypo, o => o === this.type);
      if (indexType + 1 < this.availableTypo.length) {
        this.type = this.availableTypo[indexType + 1];
      }
      else {
        this.adapted = true;
      }
    }
    else {
      this.adapted = true;
    }
    if (this.adapted === true) {
      typoEl.classList.add(`${this.classNames.EL}${this.classNames.CONTENT}${this.classNames.VISIBLE}`);
    }
  }
  attachObservable() {
    this._observable = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        const boundingClientRect = this.el.getBoundingClientRect();
        const typoEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTENT}`);
        const boundingClientRectTypoEl = typoEl.getBoundingClientRect();
        if (boundingClientRectTypoEl.width > boundingClientRect.width) {
          this.fitContent();
        }
        else {
          this.adapted = true;
          typoEl.classList.add(`${this.classNames.EL}${this.classNames.CONTENT}${this.classNames.VISIBLE}`);
        }
        this._observable.disconnectObserver();
      }
    }, {
      threshold: .1,
    });
  }
  render() {
    return ((() => {
      switch (this.type) {
        case 'hero':
          return h("eds-hero", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, content: this.content, fontWeight: this.fontWeight, font: this.font, super: this.super, styles: this.styles });
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return h("eds-heading", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, content: this.content, fontWeight: this.fontWeight, type: this.type, styles: this.styles });
        case 'body-1':
        case 'body-2':
        case 'body-3':
          return h("eds-paragraph", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, clampLines: this.clampLines, fontWeight: this.fontWeight, fontStyle: this.fontStyle, type: this.type, styles: this.styles, content: this.content });
        case 'small':
          return h("eds-small", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, content: this.content, fontWeight: this.fontWeight, fontStyle: this.fontStyle, styles: this.styles });
      }
    })());
  }
  static get is() { return "eds-adaptive-text"; }
  static get originalStyleUrls() { return {
    "$": ["adaptive-text.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["adaptive-text.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": true,
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
      "reflect": false,
      "defaultValue": "'h1'"
    },
    "content": {
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
      "attribute": "content",
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
      "optional": true,
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "styles",
      "reflect": false
    },
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
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "content",
      "methodName": "watchContentHandler"
    }, {
      "propName": "fontWeight",
      "methodName": "watchFontWeightHandler"
    }]; }
}
