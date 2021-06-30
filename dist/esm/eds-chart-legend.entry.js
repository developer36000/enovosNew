import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const legendCss = ".chart-legend{margin-top:16px}@media (min-width: 640px){.chart-legend{display:flex;align-items:center;justify-content:center}}.chart-legend__item{display:flex;align-items:center;justify-content:center}.chart-legend__item+.chart-legend__item{margin-top:8px}@media (min-width: 640px){.chart-legend__item+.chart-legend__item{margin-top:0;margin-left:16px}}.chart-legend__text{color:#5E5E5E;font-family:\"Montserrat\", sans-serif;font-size:12px;font-weight:400}.chart-legend__icon+.chart-legend__text{margin-left:8px}";

const ENOVOSChartLegend = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: this.classNames.EL }, this.items.map((item) => h("span", { class: `${this.classNames.EL}__item` }, item.icon && h("span", { class: `${this.classNames.EL}__icon` }, item.icon), item.text && h("span", { class: `${this.classNames.EL}__text` }, item.text)))));
  }
  get el() { return getElement(this); }
};
ENOVOSChartLegend.style = legendCss;

export { ENOVOSChartLegend as eds_chart_legend };
