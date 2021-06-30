import { Component, Element, Prop, State, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section consumption
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionConsumption {
  constructor() {
    this.step = 'consumption';
    this.activeChart = 'all';
    this.logoOnly = false;
    this.classNames = {
      EL: 'view-app-enovos-section-consumption',
      CHART: '__chart',
      COMPARISON_PROFILE: '__comparison_profile',
      DATALIST: '__datalist',
      HEADER: '__header',
      BUTTONS: '__buttons',
      DIALOG: '__dialog',
      CONSUMPTION_DOWNLOAD: '--consumption-download',
    };
    this.dataListMonths = ['january', 'february', 'march', 'april', 'may', 'june'];
    this.dataListYears = ['2018', '2019', '2020'];
    this.dataListRows = ['Total MWh', 'Day MWh', 'Night MWh', 'Max MWh'];
    this.collapsedDatalist = false;
    this.showConsumptionGraphDisplaySettingsDialog = () => {
      const dialog = this.el.querySelector('#consumption-graph-display-settings');
      dialog.displayDialog(true);
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
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
    const consumptionNavigation = this.el.querySelector('#charts-navigation');
    consumptionNavigation.addEventListener('clickNavItem', (e) => {
      this.activeChart = e.detail.id;
    }, false);
  }
  componentDidRender() {
    this.setChartData();
    this.dataListMonths.map((month, indexMonth) => {
      const datalistEl = this.el.querySelector(`#comparison-profile-${month}`);
      if (datalistEl) {
        const items = [
          {
            'template': 'table',
            'alias': 'table',
            'type': 'heading',
            'collapsed': {
              'open': false,
              'icons': {
                'leading': {
                  'default': {
                    'icon': 'chevron-down',
                  },
                  'active': {
                    'icon': 'chevron-up',
                  },
                },
              },
            },
            'accordion': true,
            'data': [
              {
                'text': {
                  'content': month.charAt(0).toUpperCase() + month.slice(1),
                  'fontWeight': 'semi-bold',
                  'type': 'h6',
                  'styles': 'primary-500',
                },
              },
            ],
            'children': [],
          },
        ];
        this.dataListYears.map(year => {
          items[0].data.push({
            'text': {
              'content': year,
              'fontWeight': 'bold',
              'type': 'h5',
              'styles': 'secondary-500',
            },
          });
        });
        this.dataListRows.map(row => {
          const rowItem = {
            'template': 'table',
            'alias': 'table',
            'data': [
              {
                'text': {
                  'content': row,
                  'fontWeight': 'bold',
                  'type': 'body-2',
                  'styles': 'secondary-500',
                },
                'states': [],
              },
            ],
          };
          this.dataListYears.map(year => {
            const isSuccessError = Math.round(Math.random());
            rowItem.data.push({
              'text': {
                'content': (year === '2020' && indexMonth > 0) ? '-' : (Math.random() * (0.999 - 0.0200)).toFixed(3),
                'type': 'h6',
                'fontWeight': 'regular',
                'styles': 'secondary-500',
              },
              'states': (year === '2020' && indexMonth > 0)
                ? []
                : [
                  {
                    'text': {
                      'content': `${(Math.random() * (0.999 - 0.0200)).toFixed(3)} MWh`,
                      'type': 'body-2',
                      'fontWeight': 'regular',
                      'styles': 'secondary-500',
                    },
                    'icon': {
                      'icon': (isSuccessError) ? 'arrow-up' : 'arrow-down',
                      'styles': (isSuccessError) ? 'success' : 'error',
                    },
                  },
                ],
            });
          });
          items[0].children.push(rowItem);
        });
        datalistEl.setDatalistItems(items);
      }
    });
  }
  setChartData() {
    let chart;
    switch (this.activeChart) {
      case 'all':
        chart = document.querySelector('#chart-all');
        if (chart) {
          chart.datasets = [{
              legend: 'Smart meter consumption',
              style: this.brand,
              items: [
                { value: 800, text: '800 kWh' },
                { value: 1200, text: '1200 kWh' },
                { value: 1300, text: '1300 kWh' },
                { value: 500, text: '500 kWh' },
                { value: 800, text: '800 kWh' },
                { value: 699, text: '699 kWh' },
                { value: 568, text: '568 kWh' },
                { value: 1352, text: '1352 kWh' },
                { value: 850, text: '850 kWh' },
                { value: 1333, text: '1333 kWh' },
                { value: 999, text: '999 kWh' },
                { value: 1235, text: '1235 kWh' },
              ],
            }];
          chart.showYAverageLine = true;
          chart.yAverageLegend = 'Forecast periodical consumption';
          chart.xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          chart.yMinValue = 0;
          chart.yMaxValue = 1500;
        }
      case 'activeReactive':
        chart = document.querySelector('#chart-active-reactive');
        if (chart) {
          chart.datasets = [
            {
              legend: 'Smart meter active consumption',
              style: this.brand,
              items: [
                { value: 800, text: '800 kWh' },
                { value: 1200, text: '1200 kWh' },
                { value: 1300, text: '1300 kWh' },
                { value: 500, text: '500 kWh' },
                { value: 800, text: '800 kWh' },
                { value: 699, text: '699 kWh' },
                { value: 568, text: '568 kWh' },
                { value: 1352, text: '1352 kWh' },
                { value: 850, text: '850 kWh' },
                { value: 1333, text: '1333 kWh' },
                { value: 999, text: '999 kWh' },
                { value: 1235, text: '1235 kWh' },
              ],
            },
            {
              legend: 'Smart meter reactive consumption',
              style: 'style-4',
              items: [
                { value: 200, text: '200 kWh' },
                { value: 600, text: '600 kWh' },
                { value: 1000, text: '1000 kWh' },
                { value: 100, text: '100 kWh' },
                { value: 400, text: '400 kWh' },
                { value: 199, text: '199 kWh' },
                { value: 468, text: '468 kWh' },
                { value: 352, text: '352 kWh' },
                { value: 650, text: '650 kWh' },
                { value: 433, text: '733 kWh' },
                { value: 699, text: '699 kWh' },
                { value: 835, text: '835 kWh' },
              ],
            },
          ];
          chart.showYAverageLine = false;
          chart.xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          chart.yMinValue = 0;
          chart.yMaxValue = 1500;
        }
      case 'dayNight':
        chart = document.querySelector('#chart-day-night');
        if (chart) {
          chart.datasets = [
            {
              legend: 'Smart meter consumption by day',
              style: 'style-2',
              items: [
                { value: 800, text: '800 kWh' },
                { value: 1200, text: '1200 kWh' },
                { value: 1300, text: '1300 kWh' },
                { value: 500, text: '500 kWh' },
                { value: 800, text: '800 kWh' },
                { value: 699, text: '699 kWh' },
                { value: 568, text: '568 kWh' },
                { value: 1352, text: '1352 kWh' },
                { value: 850, text: '850 kWh' },
                { value: 1333, text: '1333 kWh' },
                { value: 999, text: '999 kWh' },
                { value: 1235, text: '1235 kWh' },
              ],
            },
            {
              legend: 'Smart meter consumption by night',
              style: 'style-3',
              items: [
                { value: 200, text: '200 kWh' },
                { value: 600, text: '600 kWh' },
                { value: 1000, text: '1000 kWh' },
                { value: 100, text: '100 kWh' },
                { value: 400, text: '400 kWh' },
                { value: 199, text: '199 kWh' },
                { value: 468, text: '468 kWh' },
                { value: 352, text: '352 kWh' },
                { value: 650, text: '650 kWh' },
                { value: 433, text: '733 kWh' },
                { value: 699, text: '699 kWh' },
                { value: 835, text: '835 kWh' },
              ],
            },
          ];
          chart.showYAverageLine = false;
          chart.xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          chart.yMinValue = 0;
          chart.yMaxValue = 1500;
        }
    }
  }
  collapseComparisonProfile() {
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}`)
      .forEach((el) => el.collapse(this.collapsedDatalist));
    this.collapsedDatalist = !this.collapsedDatalist;
  }
  showConsumptionDownloadDialog(value) {
    const dialogEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONSUMPTION_DOWNLOAD}`);
    if (dialogEl) {
      dialogEl.displayDialog(value);
    }
  }
  renderChart() {
    switch (this.activeChart) {
      case 'all':
        return [
          h("div", { class: `${this.classNames.EL}__chart-description-list` },
            h("span", null,
              h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption"),
              h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" }))),
          h("eds-line-chart", { renderDelay: 0, id: "chart-all", height: 250, minWidth: 540 }),
        ];
      case 'activeReactive':
        return [
          h("div", { class: `${this.classNames.EL}__chart-description-list` },
            h("span", null,
              h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption"),
              h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" })),
            h("span", null,
              h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption active"),
              h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" })),
            h("span", null,
              h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption reactive"),
              h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" }))),
          h("eds-line-chart", { id: "chart-active-reactive", renderDelay: 0, height: 250, minWidth: 540 }),
        ];
      case 'dayNight':
        return [
          h("div", { class: `${this.classNames.EL}__chart-description-list` },
            h("span", null,
              h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption"),
              h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" })),
            h("span", null,
              h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption by day"),
              h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" })),
            h("span", null,
              h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption by night"),
              h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" }))),
          h("eds-line-chart", { id: "chart-day-night", renderDelay: 0, height: 250, minWidth: 540 }),
        ];
      default:
        return undefined;
    }
  }
  render() {
    return [
      h("eds-panel", { "margin-bottom-4": true, headerTitle: "Consumption in detail", headerWithShadow: true, headerPaddingBottom: "0" },
        h("div", { slot: "header-navigation" },
          h("eds-navigation", { id: "charts-navigation", position: "top", shrink: true, "text-only": true, activeItem: this.activeChart, items: [
              { id: 'all', text: 'All' },
              { id: 'activeReactive', text: 'Active/Reactive' },
              { id: 'dayNight', text: 'Day/Night' },
            ], styles: this.brand })),
        h("div", { slot: "header-actions" },
          h("eds-button", { content: "Monthly", "icon-position": "right", outlined: true, size: "sm", onClickButton: () => this.showConsumptionGraphDisplaySettingsDialog(), styles: this.brand || 'primary' },
            h("eds-icon", { slot: "icon", icon: "chevron-down" })),
          h("eds-button", { content: "Last year", "icon-position": "right", outlined: true, size: "sm", onClickButton: () => this.showConsumptionGraphDisplaySettingsDialog(), styles: this.brand || 'primary' },
            h("eds-icon", { slot: "icon", icon: "calendar-alt" })),
          h("eds-button", { content: "Download .csv", "icon-position": "right", outlined: true, size: "sm", onClickButton: () => this.showConsumptionDownloadDialog(true), styles: "secondary" },
            h("eds-icon", { slot: "icon", icon: "download" }))),
        h("div", { slot: "body-content" }, this.renderChart())),
      h("eds-panel", { "margin-bottom-4": true, headerPaddingBottom: "0", headerNoMinHeight: true, headerTitle: "Periodic consumption" },
        h("div", { slot: "body-content" },
          h("eds-grid-layout", null,
            h("eds-grid-layout-item", { "margin-top-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-4": true, "xlg-4": true },
              h("eds-app-periodic-consumption", { styles: this.brand, "first-item-title": "Period", "first-item-value": "12.01.2018 - 12.11.2018", "second-item-title": "Total consumption", "second-item-value": "648 kWh", "chart-max-value": "1000", "chart-min-value": "0", "chart-value": "648" })),
            h("eds-grid-layout-item", { "margin-top-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-4": true, "xlg-4": true },
              h("eds-app-periodic-consumption", { styles: this.brand, "first-item-title": "Period", "first-item-value": "12.11.2028 - 12.11.2019", "second-item-title": "Total consumption", "second-item-value": "700 kWh", "second-item-caption-icon": "arrow-up", "second-item-caption-styles": "error", "second-item-caption-text": "52 kWh", "chart-max-value": 1000, "chart-min-value": 0, "chart-value": 700 })),
            h("eds-grid-layout-item", { "margin-top-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-4": true, "xlg-4": true },
              h("eds-app-periodic-consumption", { styles: this.brand, "first-item-title": "Period", "first-item-value": "12.11.2019 - 12.11.2020", "second-item-title": "Total consumption", "second-item-value": "Pending", "chart-max-value": 1000, "chart-min-value": 0, "chart-value": 0 }))))),
      h("eds-panel", { headerPaddingBottom: "0", bodyPaddingLeft: "0", bodyPaddingRight: "0", headerNoMinHeight: true, headerTitle: "Comparison profile" },
        h("div", { slot: "header-actions" },
          h("eds-button", { content: "Filter", size: "sm", onClickButton: () => { alert('onClickButton'); }, styles: "secondary", outlined: true, iconPosition: "right" },
            h("eds-icon", { slot: "icon", icon: "sliders-h" })),
          h("eds-button", { content: "Collapse all", size: "sm", styles: "secondary", onClickButton: () => this.collapseComparisonProfile(), outlined: true, iconPosition: "right" },
            h("eds-icon", { slot: "icon", icon: "minus" }))),
        h("div", { slot: "body-content" },
          h("eds-datalist", { alternate: true, id: "comparison-profile-january", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }),
          h("eds-datalist", { alternate: true, id: "comparison-profile-february", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }),
          h("eds-datalist", { alternate: true, id: "comparison-profile-march", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }),
          h("eds-datalist", { alternate: true, id: "comparison-profile-april", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }),
          h("eds-datalist", { alternate: true, id: "comparison-profile-may", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }),
          h("eds-datalist", { alternate: true, id: "comparison-profile-june", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }))),
      h("eds-app-dialog-consumption-download", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONSUMPTION_DOWNLOAD}` }),
      h("eds-advanced-dialog", { id: "consumption-graph-display-settings", headerTitle: "Consumption graph display settings", headerSubtitle: "Pick data timeline and frequency to display on consumption graph", bodyScrollDisabled: true },
        h("eds-grid-layout", { alignCenter: true },
          h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true },
            h("eds-date-picker", { onClickDatePicker: () => { alert('onClickDatePicker'); }, styles: this.brand || 'primary' },
              h("div", { slot: "selector" },
                h("eds-text-field", { "data-value": "From 17.07.2019 to 17.07.2020", placeholder: "From 17.07.2019 to 17.07.2020", "icon-trailing": "calendar-alt", "label-inside": "Data timeline", "label-styles": this.brand || 'primary', type: "text", "read-only": true })))),
          h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true },
            h("eds-text-field", { "data-value": "Every quarter hour", placeholder: "Data frequency", "label-inside": "Data frequency", "icon-trailing": "chevron-down", "label-styles": this.brand || 'primary', type: "text" }))),
        h("div", { slot: "footer-right" },
          h("eds-button", { styles: this.brand || 'primary', content: "Confirm changes" }))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-consumption"; }
  static get originalStyleUrls() { return {
    "$": ["section-consumption.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-consumption.css"]
  }; }
  static get properties() { return {
    "brand": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "brand",
      "reflect": false
    }
  }; }
  static get states() { return {
    "step": {},
    "activeChart": {},
    "logoOnly": {}
  }; }
  static get elementRef() { return "el"; }
}
