import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { L as LayoutPropsHelper } from './LayoutPropsHelper-9f96c6ed.js';

const gridMobileCss = ".grid-mobile{width:100%;height:100%;background-color:transparent;background-size:cover}.grid-mobile video{position:fixed;left:0;top:0;z-index:0;width:100vw;height:100vh;background-color:#D52B1E;-o-object-fit:cover;object-fit:cover}.grid-mobile .header-wrapper,.grid-mobile .main-wrapper,.grid-mobile .footer-wrapper{width:100%;text-align:center}.grid-mobile .main-wrapper{transform:translateY(50%)}.grid-mobile__area--hidden{display:none !important}.grid-mobile__area--full{align-items:flex-start !important}.grid-mobile__area--full .main-wrapper{height:100%;transform:none !important}.grid-mobile__area--full .main-wrapper .grid-mobile__area--main{height:100%}";

const ENOVOSGridMobile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classNames = {
      EL: 'grid-mobile',
      MAIN: '--main',
      AREA: '__area',
      HIDDEN: '--hidden',
      FULL: '--full',
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
    [this.classNames.EL, LayoutPropsHelper.getStyles(this.styles, '')].forEach(className => {
      if (className) {
        this.el.classList.add(className);
      }
    });
  }
  componentDidRender() {
    const areaContainer = this.el.querySelector(`.${this.classNames.EL}${this.classNames.AREA}`);
    const areaHeader = this.el.querySelector('[area=header]');
    const hasSlotHeader = this.el.querySelector(`[slot="header-area"]`);
    const hasSlotMain = this.el.querySelector(`[slot="main-area"]`);
    const areaMain = this.el.querySelector('[area=main]');
    const areaFooter = this.el.querySelector('[area=footer]');
    const hasSlotFooter = this.el.querySelector(`[slot="footer-area"]`);
    if (hasSlotMain) {
      hasSlotMain.classList.add(`${this.classNames.EL}${this.classNames.AREA}${this.classNames.MAIN}`);
    }
    if (areaHeader) {
      if (!hasSlotHeader) {
        areaHeader.classList.add(`${this.classNames.EL}${this.classNames.AREA}${this.classNames.HIDDEN}`);
      }
      else {
        areaHeader.classList.remove(`${this.classNames.EL}${this.classNames.AREA}${this.classNames.HIDDEN}`);
      }
    }
    if (areaFooter) {
      if (!hasSlotFooter) {
        areaFooter.classList.add(`${this.classNames.EL}${this.classNames.AREA}${this.classNames.HIDDEN}`);
      }
      else {
        areaFooter.classList.remove(`${this.classNames.EL}${this.classNames.AREA}${this.classNames.HIDDEN}`);
      }
    }
    if (areaMain) {
      if (!hasSlotHeader && !hasSlotFooter) {
        areaMain.classList.add(`${this.classNames.EL}${this.classNames.AREA}${this.classNames.FULL}`);
      }
      else {
        areaMain.classList.remove(`${this.classNames.EL}${this.classNames.AREA}${this.classNames.FULL}`);
      }
    }
    if (areaContainer) {
      if (!hasSlotHeader && !hasSlotFooter) {
        areaContainer.hasHeader = false;
        areaContainer.hasFooter = false;
      }
      else {
        areaContainer.hasHeader = true;
        areaContainer.hasFooter = true;
      }
    }
  }
  hasBackgroundVideo() {
    return (this.bgVideo !== '' && this.bgVideo !== undefined) ? true : false;
  }
  render() {
    return (h("eds-container", null, h("div", { class: [this.classNames.EL].join(' ') }, this.hasBackgroundVideo()
      ? h("video", { autoPlay: true, loop: true, muted: true, playsinline: true }, h("source", { src: this.bgVideo, type: "video/mp4" }))
      : '', h("eds-grid-area", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true, class: `${this.classNames.EL}${this.classNames.AREA}` }, h("eds-grid-area-item", { area: "header" }, h("div", { class: "header-wrapper" }, h("slot", { name: "header-area" }))), h("eds-grid-area-item", { area: "main" }, h("div", { class: "main-wrapper" }, h("slot", { name: "main-area" }))), h("eds-grid-area-item", { area: "footer" }, h("div", { class: "footer-wrapper" }, h("slot", { name: "footer-area" })))))));
  }
  get el() { return getElement(this); }
};
ENOVOSGridMobile.style = gridMobileCss;

export { ENOVOSGridMobile as eds_template_grid_mobile };
