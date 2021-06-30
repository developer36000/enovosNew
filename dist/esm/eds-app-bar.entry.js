import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const appBarCss = "[name=app-bar]{display:inline-flex;align-items:center;width:100%;height:100%}[name=app-bar] .app-bar{display:flex;align-items:center;justify-content:center;width:100%;background-color:transparent}[name=app-bar] .app-bar__main{-ms-grid-row-align:stretch;align-self:stretch;flex-grow:0;text-align:center}[name=app-bar] .app-bar__main__slot{display:flex;align-items:center;justify-content:center;height:100%}[name=app-bar] .app-bar__leading,[name=app-bar] .app-bar__trailing{-ms-grid-row-align:stretch;align-self:stretch;flex-basis:0;flex-grow:1;flex-shrink:0}[name=app-bar] .app-bar__leading__slot,[name=app-bar] .app-bar__trailing__slot{display:flex;align-items:center;justify-content:center;height:100%}[name=app-bar] .app-bar__leading__slot{justify-content:flex-start}[name=app-bar] .app-bar__trailing__slot{justify-content:flex-end}[name=app-bar] .app-bar--fluid{padding-right:0 !important;padding-left:0 !important}[name=app-bar] .app-bar{background-color:transparent}[name=app-bar] .app-bar .app-bar__leading{min-width:32px;margin-right:8px}[name=app-bar] .app-bar .app-bar__trailing{min-width:32px;margin-left:8px}@media (min-width : 1440px){[name=app-bar] .app-bar{height:80px;padding-left:16px;padding-right:16px}}@media (max-width : 1439px){[name=app-bar] .app-bar{height:80px;padding-left:16px;padding-right:16px}}@media (max-width : 1151px){[name=app-bar] .app-bar{height:80px;padding-left:16px;padding-right:16px}}@media (max-width : 863px){[name=app-bar] .app-bar{height:auto;padding-left:12px;padding-right:12px}}@media (max-width : 639px){[name=app-bar] .app-bar{padding-left:24px;padding-right:24px}}@media (max-width : 320px){[name=app-bar] .app-bar{padding-left:24px;padding-right:24px}}";

const ENOVOSAppBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = 'top';
    this.fluid = false;
    this.classNames = {
      EL: 'app-bar',
      MAIN: '__main',
      LEADING: '__leading',
      TRAILING: '__trailing',
      SLOT: '__slot',
      FLUID: '--fluid',
    };
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
  componentWillLoad() {
    this.hasLeadingSection = !!this.el.querySelector(`[slot="leading-section"]`);
    this.hasMainSection = !!this.el.querySelector(`[slot="main-section"]`);
    this.hasTrailingSection = !!this.el.querySelector(`[slot="trailing-section"]`);
    if (this.hasLeadingSection) {
      const leadingSlot = this.el.querySelector(`[slot="leading-section"]`);
      leadingSlot.classList.add(`${this.classNames.EL}${this.classNames.LEADING}${this.classNames.SLOT}`);
    }
    if (this.hasMainSection) {
      const mainSlot = this.el.querySelector(`[slot="main-section"]`);
      mainSlot.classList.add(`${this.classNames.EL}${this.classNames.MAIN}${this.classNames.SLOT}`);
    }
    if (this.hasTrailingSection) {
      const trailingSlot = this.el.querySelector(`[slot="trailing-section"]`);
      trailingSlot.classList.add(`${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.SLOT}`);
    }
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.fluid ? `${this.classNames.EL}${this.classNames.FLUID}` : '',
      ].join(' ') }, h("div", { class: `${this.classNames.EL}${this.classNames.LEADING}` }, h("slot", { name: "leading-section" })), h("div", { class: `${this.classNames.EL}${this.classNames.MAIN}` }, h("slot", { name: "main-section" })), h("div", { class: `${this.classNames.EL}${this.classNames.TRAILING}` }, h("slot", { name: "trailing-section" }))));
  }
  get el() { return getElement(this); }
};
ENOVOSAppBar.style = appBarCss;

export { ENOVOSAppBar as eds_app_bar };
