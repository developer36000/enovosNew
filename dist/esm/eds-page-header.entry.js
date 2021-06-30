import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const pageHeaderCss = "[name=page-header]{display:block;margin:0 0 32px 0}.page-header{display:flex;align-items:center;width:100%}.page-header--centered{justify-content:center}.page-header__title{display:block}.page-header__before-title{margin-right:16px;display:inline-block;vertical-align:middle}.page-header__title-text{display:block;font-size:24px;font-weight:700;line-height:32px;font-family:\"Montserrat\", sans-serif;color:#5E5E5E}@media (min-width: 864px){.page-header__title-text{display:inline;margin-right:16px;vertical-align:middle;font-size:40px;font-weight:700;line-height:60px}}.page-header__after-title{margin-top:8px}@media (min-width: 864px){.page-header__after-title{margin-top:0;display:inline-block;vertical-align:middle}}.page-header__actions{flex:1;margin-top:8px}@media (min-width: 864px){.page-header__actions{margin-top:0}}.page-header__actions>[slot=actions]{display:flex;align-items:center}@media (min-width: 864px){.page-header__actions>[slot=actions]{justify-content:flex-end}}.page-header__actions>[slot=actions] [name=button]+[name=button]{margin-left:32px}";

const ENOVOSPageHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (h("div", { class: this.getComponentClassName() }, this.pageTitle &&
      h("div", { class: `${this.classNames.EL}__title` }, this.hasBeforeTitle &&
        h("div", { class: `${this.classNames.EL}__before-title` }, h("slot", { name: "before-title" })), h("div", { class: `${this.classNames.EL}__title-text` }, this.pageTitle), this.hasAfterTitle &&
        h("div", { class: `${this.classNames.EL}__after-title` }, h("slot", { name: "after-title" }))), this.hasActions &&
      h("div", { class: `${this.classNames.EL}__actions` }, h("slot", { name: "actions" }))));
  }
  get el() { return getElement(this); }
};
ENOVOSPageHeader.style = pageHeaderCss;

export { ENOVOSPageHeader as eds_page_header };
