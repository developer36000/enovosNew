import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { C as ComponentPropsHelper } from './ComponentPropsHelper-9f5a3c88.js';

const progressBarCss = "[name=progress-bar] .progress-bar__bottom__right,[name=progress-bar] .progress-bar__bottom__left{align-items:center;-ms-grid-row-align:stretch;align-self:stretch;flex:1 0 50%}[name=progress-bar] .progress-bar__value,[name=progress-bar] .progress-bar__bar{display:inline-block;margin:auto;border:none}[name=progress-bar]{display:inline-block}[name=progress-bar] .progress-bar__bar{position:relative;width:100%}[name=progress-bar] .progress-bar__graduated{position:relative;display:flex;width:100%;border:none}[name=progress-bar] .progress-bar__value{position:absolute;left:0;top:0;width:0}[name=progress-bar] .progress-bar__value--animated{visibility:hidden;-webkit-animation:animated-width 0.5s forwards;animation:animated-width 0.5s forwards;transition:all 0.5s cubic-bezier(0.78, 0.22, 1, 1)}[name=progress-bar] .progress-bar__bottom{display:flex;justify-content:space-between;white-space:nowrap}[name=progress-bar] .progress-bar__bottom__left{padding-right:4px;text-align:left}[name=progress-bar] .progress-bar__bottom__right{padding-left:4px;text-align:right}[name=progress-bar] .progress-bar.progress-bar .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar .progress-bar__value{background-color:#F76700}[name=progress-bar] .progress-bar.progress-bar .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar .progress-bar__graduated__value--active{background-color:#F76700}[name=progress-bar] .progress-bar.progress-bar--success .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--success .progress-bar__value{background-color:#00856A}[name=progress-bar] .progress-bar.progress-bar--success .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--success .progress-bar__graduated__value--active{background-color:#00856A}[name=progress-bar] .progress-bar.progress-bar--info .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--info .progress-bar__value{background-color:#2899A8}[name=progress-bar] .progress-bar.progress-bar--info .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--info .progress-bar__graduated__value--active{background-color:#2899A8}[name=progress-bar] .progress-bar.progress-bar--warning .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--warning .progress-bar__value{background-color:#F76700}[name=progress-bar] .progress-bar.progress-bar--warning .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--warning .progress-bar__graduated__value--active{background-color:#F76700}[name=progress-bar] .progress-bar.progress-bar--error .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--error .progress-bar__value{background-color:#EB0000}[name=progress-bar] .progress-bar.progress-bar--error .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--error .progress-bar__graduated__value--active{background-color:#EB0000}[name=progress-bar] .progress-bar.progress-bar--tertiary .progress-bar__bar{background-color:\"\"}[name=progress-bar] .progress-bar.progress-bar--tertiary .progress-bar__value{background-color:\"\"}[name=progress-bar] .progress-bar.progress-bar--tertiary .progress-bar__graduated__value{background-color:\"\"}[name=progress-bar] .progress-bar.progress-bar--tertiary .progress-bar__graduated__value--active{background-color:\"\"}[name=progress-bar] .progress-bar.progress-bar--pfm-blue .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-blue .progress-bar__value{background-color:#55A1D3}[name=progress-bar] .progress-bar.progress-bar--pfm-blue .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-blue .progress-bar__graduated__value--active{background-color:#55A1D3}[name=progress-bar] .progress-bar.progress-bar--pfm-green .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-green .progress-bar__value{background-color:#8DDE54}[name=progress-bar] .progress-bar.progress-bar--pfm-green .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-green .progress-bar__graduated__value--active{background-color:#8DDE54}[name=progress-bar] .progress-bar.progress-bar--pfm-yellow .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-yellow .progress-bar__value{background-color:#FFC600}[name=progress-bar] .progress-bar.progress-bar--pfm-yellow .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-yellow .progress-bar__graduated__value--active{background-color:#FFC600}[name=progress-bar] .progress-bar.progress-bar--pfm-orange .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-orange .progress-bar__value{background-color:#FC912E}[name=progress-bar] .progress-bar.progress-bar--pfm-orange .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-orange .progress-bar__graduated__value--active{background-color:#FC912E}[name=progress-bar] .progress-bar.progress-bar--pfm-red .progress-bar__bar{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-red .progress-bar__value{background-color:#DF5036}[name=progress-bar] .progress-bar.progress-bar--pfm-red .progress-bar__graduated__value{background-color:#5A8D00}[name=progress-bar] .progress-bar.progress-bar--pfm-red .progress-bar__graduated__value--active{background-color:#DF5036}[name=progress-bar] .progress-bar.progress-bar .progress-bar__title{margin-bottom:8px}[name=progress-bar] .progress-bar.progress-bar .progress-bar__bar,[name=progress-bar] .progress-bar.progress-bar .progress-bar__value{height:4px;border-radius:2px}[name=progress-bar] .progress-bar.progress-bar .progress-bar__graduated__value{width:32px;height:8px;margin-right:1px;border-radius:0}[name=progress-bar] .progress-bar.progress-bar .progress-bar__graduated__value:first-child{border-radius:4px 0 0 4px}[name=progress-bar] .progress-bar.progress-bar .progress-bar__graduated__value:last-child{margin-right:0;border-radius:0 4px 4px 0}@-webkit-keyframes animated-width{0%{width:0}100%{visibility:visible}}@keyframes animated-width{0%{width:0}100%{visibility:visible}}";

const ENOVOSProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.light = false;
    this.animated = false;
    this.graduated = false;
    this.classNames = {
      EL: 'progress-bar',
      BAR: '__bar',
      TITLE: '__title',
      GRADUATE: '__graduated',
      VALUE: '__value',
      BOTTOM: '__bottom',
      LEFT: '__left',
      RIGHT: '__right',
      ANIMATED: '--animated',
      ACTIVE: '--active',
    };
    this.graduatedItems = [];
    this.ratio = 0;
  }
  /**
   * @description If the progress bar is in graduated mode,
   * generate an array of graduated definition
   */
  getGraduateItems() {
    this.graduatedItems = [];
    if (this.graduated) {
      for (let i = 1; i <= this.progressMax; i++) {
        this.graduatedItems.push({ isActive: (i <= this.progressValue) ? true : false });
      }
    }
    return this.graduatedItems;
  }
  /**
   * @description When the component is loaded
   * Set the progress bar width on the ratio progress value / progress max
   */
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
    if (!this.graduated) {
      this.el.setAttribute('name', this.classNames.EL);
      this.ratio = (100 * this.progressValue) / this.progressMax;
      const progressBar = this.el.querySelector(`.${this.classNames.EL}${this.classNames.VALUE}`);
      if (this.animated === true) {
        progressBar.classList.add(`${this.classNames.EL}${this.classNames.VALUE}${this.classNames.ANIMATED}`);
      }
      progressBar.style.width = Math.round(this.ratio) + '%';
    }
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
      ].join(' ') }, this.titleText
      ? h("eds-paragraph", { class: `${this.classNames.EL}${this.classNames.TITLE}`, type: "body-1", styles: (this.light) ? 'white' : 'secondary-500', "font-weight": "semi-bold", innerHTML: this.titleText })
      : '', this.graduated === true
      ? h("div", { class: `${this.classNames.EL}${this.classNames.GRADUATE}` }, this.getGraduateItems().map(graduatedItem => h("span", { class: [
          `${this.classNames.EL}${this.classNames.GRADUATE}${this.classNames.VALUE}`,
          (graduatedItem.isActive) ? `${this.classNames.EL}${this.classNames.GRADUATE}${this.classNames.VALUE}${this.classNames.ACTIVE}` : '',
        ].join(' ') })))
      : h("div", { class: `${this.classNames.EL}${this.classNames.BAR}` }, h("span", { class: `${this.classNames.EL}${this.classNames.VALUE}` })), this.leadingText || this.trailingText
      ? h("div", { class: `${this.classNames.EL}${this.classNames.BOTTOM}` }, this.leadingText
        ? h("eds-paragraph", { class: `${this.classNames.EL}${this.classNames.BOTTOM}${this.classNames.LEFT}`, type: "body-3", styles: (this.light) ? 'white' : 'tertiary-500', innerHTML: this.leadingText })
        : '', this.trailingText
        ? h("eds-paragraph", { class: `${this.classNames.EL}${this.classNames.BOTTOM}${this.classNames.RIGHT}`, type: "body-3", styles: (this.light) ? 'white' : 'tertiary-500', innerHTML: this.trailingText })
        : '')
      : ''));
  }
  get el() { return getElement(this); }
};
ENOVOSProgressBar.style = progressBarCss;

export { ENOVOSProgressBar as eds_progress_bar };
