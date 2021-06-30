'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
require('./_baseGetTag-1e305d19.js');
require('./isSymbol-04330316.js');
require('./toString-a99a8519.js');
require('./toNumber-e6ce1248.js');
require('./isObject-110b878e.js');
require('./toInteger-ed801fc9.js');
require('./identity-f5a941be.js');
require('./_MapCache-df8c2fa4.js');
require('./_baseIsEqual-c7788197.js');
require('./_baseFindIndex-4f56dd76.js');
require('./_hasPath-fb5594fa.js');
require('./_arrayPush-d8c0eb40.js');
require('./_setToArray-21e6bd5a.js');
require('./_baseIteratee-1cf7cbd5.js');
require('./_baseProperty-8fb55bc0.js');
const findIndex = require('./findIndex-407a7fc6.js');
const themes = require('./themes-bd258a0a.js');
const isVisibleObservable = require('./isVisibleObservable-3f219690.js');

const adaptiveTextCss = "[name=adaptive-text]{position:relative;display:flex;width:auto;overflow:hidden;white-space:nowrap}[name=adaptive-text] .adaptive-text__content{opacity:0;transition:opacity 0 ease-in}[name=adaptive-text] .adaptive-text__content--visible{opacity:1;transition:opacity 200ms ease-in}";

const ENOVOSAdaptiveText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
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
      const indexType = findIndex.findIndex(this.availableTypo, o => o === this.type);
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
    this._observable = new isVisibleObservable.IsVisibleObservable(this.el, value => {
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
          return index.h("eds-hero", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, content: this.content, fontWeight: this.fontWeight, font: this.font, super: this.super, styles: this.styles });
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return index.h("eds-heading", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, content: this.content, fontWeight: this.fontWeight, type: this.type, styles: this.styles });
        case 'body-1':
        case 'body-2':
        case 'body-3':
          return index.h("eds-paragraph", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, clampLines: this.clampLines, fontWeight: this.fontWeight, fontStyle: this.fontStyle, type: this.type, styles: this.styles, content: this.content });
        case 'small':
          return index.h("eds-small", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, content: this.content, fontWeight: this.fontWeight, fontStyle: this.fontStyle, styles: this.styles });
      }
    })());
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "content": ["watchContentHandler"],
    "fontWeight": ["watchFontWeightHandler"]
  }; }
};
ENOVOSAdaptiveText.style = adaptiveTextCss;

exports.eds_adaptive_text = ENOVOSAdaptiveText;
