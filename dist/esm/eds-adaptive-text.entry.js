import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import './isSymbol-94e88fb4.js';
import './toString-e72a88e9.js';
import './toNumber-30473e8a.js';
import './isObject-7039fcda.js';
import './toInteger-521653cd.js';
import './identity-5b806255.js';
import './_MapCache-a3ede28d.js';
import './_baseIsEqual-c6b81f6e.js';
import './_baseFindIndex-e57941fd.js';
import './_hasPath-4dd0f44a.js';
import './_arrayPush-7955b731.js';
import './_setToArray-60932de0.js';
import './_baseIteratee-93849f60.js';
import './_baseProperty-e57e2f20.js';
import { f as findIndex } from './findIndex-98e7efdf.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { I as IsVisibleObservable } from './isVisibleObservable-5e7e7c3e.js';

const adaptiveTextCss = "[name=adaptive-text]{position:relative;display:flex;width:auto;overflow:hidden;white-space:nowrap}[name=adaptive-text] .adaptive-text__content{opacity:0;transition:opacity 0 ease-in}[name=adaptive-text] .adaptive-text__content--visible{opacity:1;transition:opacity 200ms ease-in}";

const ENOVOSAdaptiveText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    onChange('theme', () => {
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "content": ["watchContentHandler"],
    "fontWeight": ["watchFontWeightHandler"]
  }; }
};
ENOVOSAdaptiveText.style = adaptiveTextCss;

export { ENOVOSAdaptiveText as eds_adaptive_text };
