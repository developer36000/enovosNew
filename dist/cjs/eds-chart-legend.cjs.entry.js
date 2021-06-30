'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');

const legendCss = ".chart-legend{margin-top:16px}@media (min-width: 640px){.chart-legend{display:flex;align-items:center;justify-content:center}}.chart-legend__item{display:flex;align-items:center;justify-content:center}.chart-legend__item+.chart-legend__item{margin-top:8px}@media (min-width: 640px){.chart-legend__item+.chart-legend__item{margin-top:0;margin-left:16px}}.chart-legend__text{color:#5E5E5E;font-family:\"Montserrat\", sans-serif;font-size:12px;font-weight:400}.chart-legend__icon+.chart-legend__text{margin-left:8px}";

const ENOVOSChartLegend = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'chart-legend',
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
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (index.h("div", { class: this.classNames.EL }, this.items.map((item) => index.h("span", { class: `${this.classNames.EL}__item` }, item.icon && index.h("span", { class: `${this.classNames.EL}__icon` }, item.icon), item.text && index.h("span", { class: `${this.classNames.EL}__text` }, item.text)))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSChartLegend.style = legendCss;

exports.eds_chart_legend = ENOVOSChartLegend;
