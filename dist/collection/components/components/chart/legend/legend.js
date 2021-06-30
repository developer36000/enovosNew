import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
/**
 * @name Chart Legend
 * @description Used to display a legend above charts
 * @path components/chart
 * @documented false
 */
export class ENOVOSChartLegend {
  constructor() {
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
    themeOnChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (h("div", { class: this.classNames.EL }, this.items.map((item) => h("span", { class: `${this.classNames.EL}__item` },
      item.icon && h("span", { class: `${this.classNames.EL}__icon` }, item.icon),
      item.text && h("span", { class: `${this.classNames.EL}__text` }, item.text)))));
  }
  static get is() { return "eds-chart-legend"; }
  static get originalStyleUrls() { return {
    "$": ["legend.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["legend.css"]
  }; }
  static get properties() { return {
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ILegendItem[]",
        "resolved": "ILegendItem[]",
        "references": {
          "ILegendItem": {
            "location": "import",
            "path": "../../../../models/chart-legend"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
