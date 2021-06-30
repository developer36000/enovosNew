'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');
const LayoutPropsHelper = require('./LayoutPropsHelper-7b6ecab0.js');

const gridMobileCss = ".grid-mobile{width:100%;height:100%;background-color:transparent;background-size:cover}.grid-mobile video{position:fixed;left:0;top:0;z-index:0;width:100vw;height:100vh;background-color:#D52B1E;-o-object-fit:cover;object-fit:cover}.grid-mobile .header-wrapper,.grid-mobile .main-wrapper,.grid-mobile .footer-wrapper{width:100%;text-align:center}.grid-mobile .main-wrapper{transform:translateY(50%)}.grid-mobile__area--hidden{display:none !important}.grid-mobile__area--full{align-items:flex-start !important}.grid-mobile__area--full .main-wrapper{height:100%;transform:none !important}.grid-mobile__area--full .main-wrapper .grid-mobile__area--main{height:100%}";

const ENOVOSGridMobile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    [this.classNames.EL, LayoutPropsHelper.LayoutPropsHelper.getStyles(this.styles, '')].forEach(className => {
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
    return (index.h("eds-container", null, index.h("div", { class: [this.classNames.EL].join(' ') }, this.hasBackgroundVideo()
      ? index.h("video", { autoPlay: true, loop: true, muted: true, playsinline: true }, index.h("source", { src: this.bgVideo, type: "video/mp4" }))
      : '', index.h("eds-grid-area", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true, class: `${this.classNames.EL}${this.classNames.AREA}` }, index.h("eds-grid-area-item", { area: "header" }, index.h("div", { class: "header-wrapper" }, index.h("slot", { name: "header-area" }))), index.h("eds-grid-area-item", { area: "main" }, index.h("div", { class: "main-wrapper" }, index.h("slot", { name: "main-area" }))), index.h("eds-grid-area-item", { area: "footer" }, index.h("div", { class: "footer-wrapper" }, index.h("slot", { name: "footer-area" })))))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSGridMobile.style = gridMobileCss;

exports.eds_template_grid_mobile = ENOVOSGridMobile;
