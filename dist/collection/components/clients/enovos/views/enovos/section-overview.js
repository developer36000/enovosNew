import { Component, Element, Prop, State, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section overview
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionOverview {
  constructor() {
    this.step = 'overview';
    this.logoOnly = false;
    this.classNames = {
      EL: 'view-app-enovos-section-overview',
      CARD: '__card',
      QUICK_ACTION: '__quick-action',
      CONTENT: '__content',
      IMAGE: '__image',
      TEXT: '__text',
    };
    this.latestInvoicesData = [
      {
        values: [
          { data: '234,00' },
          { data: '3515266101' },
          { data: 'Down payment' },
          { data: '15.05.2020' },
          { data: '05.2020' },
          { data: '', props: {
              type: 'button',
              icon: 'download',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '234,00' },
          { data: '3515266101' },
          { data: 'Down payment' },
          { data: '15.05.2020' },
          { data: '05.2020' },
          { data: '', props: {
              type: 'button',
              icon: 'download',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
    ];
    this.addChartData = () => {
      const chart = this.el.querySelector('#chart');
      chart.datasets = [Object.assign(Object.assign({}, chart.datasets[0]), { items: [...chart.datasets[0].items, { value: 100, text: '100 kWh', secondaryText: 'new data' }] })];
      chart.xValues = [...chart.xValues, 'New'];
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.quickActions = [
      {
        'id': 'action1',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/new-contracts${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'Connect new contracts',
        'subtitle': 'Manage another Customer ID',
      },
      {
        'id': 'action2',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/SEPA${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'Activate automatic SEPA transfers',
        'subtitle': 'Don\'t worry about open amount anymore',
      },
      {
        'id': 'action3',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/house-electricty${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'Switch to e-mail invoice',
        'subtitle': 'Paperless delivery to your inbox',
      },
    ];
  }
  componentDidRender() {
    const chart = this.el.querySelector('#chart');
    if (chart) {
      chart.datasets = [{
          style: this.brand,
          items: [
            { value: 200, text: '200 kWh', secondaryText: 'December 2019' },
            { value: 800, text: '800 kWh', secondaryText: 'January 2020' },
            { value: 1200, text: '1200 kWh', secondaryText: 'February 2020' },
            { value: 1300, text: '1300 kWh', secondaryText: 'March 2020' },
            { value: 0, text: '500 kWh', secondaryText: 'April 2020' },
            { value: 800, text: '800 kWh', secondaryText: 'May 2020' },
            { value: 699, text: '699 kWh', secondaryText: 'June 2020' },
            { value: 568, text: '568 kWh', secondaryText: 'July 2020' },
            { value: 0, text: '1352 kWh', secondaryText: 'August 2020' },
            { value: 850, text: '850 kWh', secondaryText: 'September 2020' },
            { value: 1333, text: '1333 kWh', secondaryText: 'October 2020' },
            { value: 999, text: '999 kWh', secondaryText: 'November 2020' },
            { value: 0, text: '1235 kWh', secondaryText: 'December 2020' },
            { value: 800, text: '800 kWh', secondaryText: 'January 2021' },
            { value: 1200, text: '1200 kWh', secondaryText: 'February 2021' },
            { value: 1300, text: '1300 kWh', secondaryText: 'March 2021' },
            { value: 0, text: '500 kWh', secondaryText: 'April 2021' },
            { value: 800, text: '800 kWh', secondaryText: 'May 2021' },
            { value: 699, text: '699 kWh', secondaryText: 'June 2021' },
            { value: 568, text: '568 kWh', secondaryText: 'July 2021' },
            { value: 0, text: '1352 kWh', secondaryText: 'August 2021' },
            { value: 850, text: '850 kWh', secondaryText: 'September 2021' },
            { value: 1333, text: '1333 kWh', secondaryText: 'October 2021' },
            { value: 999, text: '999 kWh', secondaryText: 'November 2021' },
            { value: 0, text: '1235 kWh', secondaryText: 'December 2021' },
            { value: 800, text: '800 kWh', secondaryText: 'January 2022' },
            { value: 1200, text: '1200 kWh', secondaryText: 'February 2022' },
            { value: 1300, text: '1300 kWh', secondaryText: 'March 2022' },
            { value: 0, text: '500 kWh', secondaryText: 'April 2022' },
            { value: 800, text: '800 kWh', secondaryText: 'May 2022' },
            { value: 699, text: '699 kWh', secondaryText: 'June 2022' },
            { value: 568, text: '568 kWh', secondaryText: 'July 2022' },
            { value: 0, text: '1352 kWh', secondaryText: 'August 2022' },
            { value: 850, text: '850 kWh', secondaryText: 'September 2022' },
            { value: 1333, text: '1333 kWh', secondaryText: 'October 2022' },
            { value: 999, text: '999 kWh', secondaryText: 'November 2022' },
            { value: 0, text: '1235 kWh', secondaryText: 'December 2022' },
          ],
        }];
      chart.yMinValue = 0;
      chart.yMaxValue = 1400;
      chart.xValues = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
    const table = this.el.querySelector('#latest-invoices-data-table');
    const mobileTable = this.el.querySelector('#latest-invoices-mobile-data-table');
    if (table) {
      table.columns = [
        'Amount',
        'Invoice ID',
        'Invoice type',
        'Due date',
        'Billing period',
        '',
      ];
      table.columnRenderers = [
        (value) => `${value} €`,
        undefined,
        undefined,
        undefined,
        undefined
      ];
      table.data = this.latestInvoicesData;
      table.sort = [true, true, true, true, true, false];
    }
    if (mobileTable) {
      mobileTable.columns = [
        'Amount',
        'Invoice ID',
        'Invoice type',
        'Due date',
        'Billing period',
        '',
      ];
      mobileTable.data = this.latestInvoicesData;
    }
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
  }
  render() {
    return [
      h("eds-panel", { headerTitle: "Consumption" },
        h("div", { slot: "header-actions" },
          h("eds-button", { content: "More details", "icon-position": "right", outlined: true, size: "sm", styles: "secondary", onClickButton: () => {
              this.addChartData();
            } },
            h("eds-icon", { slot: "icon", icon: "chevron-right" }))),
        h("div", { slot: "body-content" },
          h("eds-line-chart", { id: "chart", height: 250, "min-width": 800 }))),
      h("eds-grid-layout", null,
        h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-8": true, "xlg-8": true, "margin-top-4": true },
          h("eds-panel", { fullHeight: true, headerTitle: "Latest invoices", headerNoMinHeight: true, headerPaddingBottom: "0" },
            h("div", { slot: "header-actions" },
              h("eds-button", { content: "See all", "icon-position": "right", outlined: true, size: "sm", styles: "secondary" },
                h("eds-icon", { slot: "icon", icon: "chevron-right" }))),
            h("div", { slot: "body-content" },
              h("eds-data-table", { "hidden-xxs": true, "hidden-xs": true, "hidden-sm": true, id: "latest-invoices-data-table" }),
              h("eds-mobile-data-table", { "hidden-md": true, "hidden-lg": true, "hidden-xlg": true, id: "latest-invoices-mobile-data-table" })))),
        h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-4": true, "xlg-4": true, "margin-top-4": true, alignContent: "right" },
          h("eds-panel", { fullHeight: true, headerTitle: "Quick actions", headerNoMinHeight: true, headerPaddingBottom: "0" },
            h("div", { slot: "body-content" }, this.quickActions.map(item => h("eds-quick-action", { id: item.id, onClickItem: (e) => alert(`onClickItem: ${e.detail}`), styles: this.brand, icon: item.icon, "main-title": item.title, subtitle: item.subtitle, "show-trailing-icon": true })))))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-overview"; }
  static get originalStyleUrls() { return {
    "$": ["section-overview.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-overview.css"]
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
    "logoOnly": {}
  }; }
  static get elementRef() { return "el"; }
}
