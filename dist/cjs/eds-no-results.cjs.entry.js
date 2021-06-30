'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');

const noResultsCss = ".no-results{text-align:center}.no-results__image{margin-bottom:24px}.no-results__image img{max-width:100%}.no-results__actions{margin-top:24px}";

const ENOVOSNoResults = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'no-results',
    };
  }
  componentWillLoad() {
    this.hasActions = !!this.el.querySelector('[slot="actions"]');
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
  }
  render() {
    return (index.h("div", { class: `${this.classNames.EL}` }, this.imageUrl &&
      index.h("div", { class: `${this.classNames.EL}__image` }, index.h("img", { src: this.imageUrl, alt: "" })), this.mainTitle &&
      index.h("eds-heading", { "margin-bottom-1": true, type: "h6", "font-weight": "bold", content: this.mainTitle, styles: "secondary" }), this.subtitle &&
      index.h("eds-paragraph", { "margin-bottom-1": true, type: "body-2" }, this.subtitle), this.hasActions &&
      index.h("div", { class: `${this.classNames.EL}__actions` }, index.h("slot", { name: "actions" }))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSNoResults.style = noResultsCss;

exports.eds_no_results = ENOVOSNoResults;
