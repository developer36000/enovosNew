'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');

const pageHeaderCss = "[name=page-header]{display:block;margin:0 0 32px 0}.page-header{display:flex;align-items:center;width:100%}.page-header--centered{justify-content:center}.page-header__title{display:block}.page-header__before-title{margin-right:16px;display:inline-block;vertical-align:middle}.page-header__title-text{display:block;font-size:24px;font-weight:700;line-height:32px;font-family:\"Montserrat\", sans-serif;color:#5E5E5E}@media (min-width: 864px){.page-header__title-text{display:inline;margin-right:16px;vertical-align:middle;font-size:40px;font-weight:700;line-height:60px}}.page-header__after-title{margin-top:8px}@media (min-width: 864px){.page-header__after-title{margin-top:0;display:inline-block;vertical-align:middle}}.page-header__actions{flex:1;margin-top:8px}@media (min-width: 864px){.page-header__actions{margin-top:0}}.page-header__actions>[slot=actions]{display:flex;align-items:center}@media (min-width: 864px){.page-header__actions>[slot=actions]{justify-content:flex-end}}.page-header__actions>[slot=actions] [name=button]+[name=button]{margin-left:32px}";

const ENOVOSPageHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.centered = false;
    this.classNames = {
      EL: 'page-header',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.centered) {
        className += ` ${this.classNames.EL}--centered`;
      }
      return className;
    };
  }
  componentWillLoad() {
    this.hasBeforeTitle = !!this.el.querySelector('[slot="before-title"]');
    this.hasAfterTitle = !!this.el.querySelector('[slot="after-title"]');
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
    return (index.h("div", { class: this.getComponentClassName() }, this.pageTitle &&
      index.h("div", { class: `${this.classNames.EL}__title` }, this.hasBeforeTitle &&
        index.h("div", { class: `${this.classNames.EL}__before-title` }, index.h("slot", { name: "before-title" })), index.h("div", { class: `${this.classNames.EL}__title-text` }, this.pageTitle), this.hasAfterTitle &&
        index.h("div", { class: `${this.classNames.EL}__after-title` }, index.h("slot", { name: "after-title" }))), this.hasActions &&
      index.h("div", { class: `${this.classNames.EL}__actions` }, index.h("slot", { name: "actions" }))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSPageHeader.style = pageHeaderCss;

exports.eds_page_header = ENOVOSPageHeader;
