import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section contract list
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionContractList {
  constructor() {
    this.classNames = {
      EL: 'view-app-enovos-section-contract-list',
    };
    this.contractsData = [];
    this.getStatusIcon = (index) => {
      if (index % 2) {
        return '<eds-status-icon status="open" />';
      }
      return '<eds-status-icon status="closed" />';
    };
    this.getContractType = (index) => {
      switch (index % 3) {
        case 0:
          return '<eds-contract-type-icon type="electricity" />';
        case 1:
          return '<eds-contract-type-icon type="producer" />';
        case 2:
          return '<eds-contract-type-icon type="gas" />';
      }
    };
    this.showConsumptionDownloadDialog = () => {
      const dialog = this.el.querySelector(`#${'consumption-download-dialog'}`);
      dialog.displayDialog(true);
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    const table = this.el.querySelector('#contracts-list');
    if (table) {
      [...Array(300)].forEach((_item, index) => {
        this.contractsData.push({
          id: `${(Math.random() * 9999999999).toFixed(0)}`,
          values: [
            { data: this.getContractType(index) },
            { data: this.getStatusIcon(index) },
            { data: `${(Math.random() * 9999999999).toFixed(0)}` },
            { data: 'Customer name' },
            { data: `${(Math.random() * 9999999999).toFixed(0)}` },
            { data: '2 Place de Strasbourg, 2562, Luxembourg, LU' },
            { data: 'Lorem ipsum dolor sit amet' },
            { data: `${(Math.random() * 9999999999).toFixed(0)}` },
            { data: '', props: {
                type: 'button',
                icon: 'chevron-right',
                styles: 'secondary',
                textOnly: true,
              } },
          ],
        });
      });
      const columns = [
        { label: 'Type', sortable: true, size: '72px' },
        { label: 'Status', sortable: true, size: '80px' },
        { label: 'Customer ID', sortable: true, size: '140px' },
        { label: 'Customer name', sortable: true, size: '120px' },
        { label: 'Contract ID', sortable: true, size: '140px' },
        { label: 'Address', sortable: true /*, size: '15%'*/ },
        { label: 'Product name', sortable: true, size: '140px' },
        { label: 'Installation', sortable: true, size: '280px' },
        { label: '', sortable: false, size: '64px' },
      ];
      table.columns = columns.map(column => column.label);
      table.sort = columns.map(column => column.sortable);
      table.columnSizes = columns.map(column => column.size);
      table.setData(this.contractsData);
      table.setPagination({ total: this.contractsData.length, step: 1, items: 10 });
    }
  }
  manageClickRowButton(e) {
    const url = new URL(window.location.href.replace('#/', ''));
    window.location.href = `${url.origin}/#/${url.pathname}?step=contract-details&id-contract=${e.detail.id}`;
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
    var _a;
    return [
      h("eds-page-header", { pageTitle: "All contracts" },
        h("div", { slot: "actions" },
          h("eds-button", { content: "Download consumption", styles: "secondary", outlined: true, "icon-position": "right", size: "md", onClick: this.showConsumptionDownloadDialog },
            h("eds-icon", { slot: "icon", icon: "download" })),
          h("eds-button", { content: "Connect new", styles: "secondary", outlined: true, "icon-position": "right", size: "md" },
            h("eds-icon", { slot: "icon", icon: "plus" })))),
      h("eds-panel", { headerTitle: "Contracts in detail", headerPaddingTop: "2", headerPaddingBottom: "2", headerWithShadow: true },
        h("div", { slot: "header-actions" },
          h("div", { class: `${this.classNames.EL}__search-field` },
            h("eds-text-field", { placeholder: 'Search', "icon-leading": "search", type: "text" })),
          h("div", { class: `${this.classNames.EL}__filter` },
            h("eds-dropdown", { id: "status-filter", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => alert('onClickDropdownItem'), data: [
                { label: 'item 1' },
                { label: 'item 2' },
              ] },
              h("div", { slot: "selector" },
                h("eds-text-field", { "data-value": 'Active', "icon-trailing": "chevron-down", "label-inside": 'Status', "label-styles": this.brand, type: "text", "read-only": true })))),
          h("div", { class: `${this.classNames.EL}__filter` },
            h("eds-dropdown", { id: "type-filter", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => alert('onClickDropdownItem'), data: [
                { label: 'item 1' },
                { label: 'item 2' },
              ] },
              h("div", { slot: "selector" },
                h("eds-text-field", { "data-value": 'All', "icon-trailing": "chevron-down", "label-inside": 'Type', "label-styles": this.brand, type: "text", "read-only": true }))))),
        h("div", { slot: "body-content" },
          h("eds-data-table", { id: "contracts-list", onClickRowCellButton: e => this.manageClickRowButton(e) }))),
      h("eds-advanced-dialog", { id: "consumption-download-dialog", headerTitle: "Consumption download", headerWithShadow: true, footerWithShadow: true },
        h("div", { slot: "header-content" },
          h("eds-grid-layout", { alignCenter: true },
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true },
              h("eds-date-picker", { onClickDatePicker: () => { alert('onClickDatePicker'); } },
                h("div", { slot: "selector" },
                  h("eds-text-field", { "data-value": 'From 17.07.2019 to 17.07.2020', placeholder: 'From 17.07.2019 to 17.07.2020', "icon-trailing": "calendar-alt", "label-inside": 'Data timeline', "label-styles": this.brand, type: "text", "read-only": true })))),
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true },
              h("eds-text-field", { "data-value": "Every quarter hour", placeholder: "Data frequency", "label-inside": "Data frequency", "label-styles": this.brand, "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand, type: "text" })),
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true },
              h("eds-text-field", { placeholder: 'Search', "icon-leading": "search", type: "text" })),
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true },
              h("eds-dropdown", { id: "customers-filter", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => { alert('onClickDropdownItem'); }, data: [
                  {
                    label: 'Item 1',
                  },
                  {
                    label: 'Item 2',
                  },
                ] },
                h("div", { slot: "selector" },
                  h("eds-text-field", { "data-value": 'All customers', placeholder: 'All customers', debounce: 300, "icon-trailing": "chevron-down", "label-inside": 'Filter by customers', "label-styles": this.brand, type: "text", "read-only": true })))))),
        h("div", { slot: "footer-left" },
          h("eds-button", { styles: "secondary", content: "Reset all", "text-only": true })),
        h("div", { slot: "footer-right" },
          h("eds-button", { styles: this.brand, content: "Download 2 .csv" })),
        ((_a = this.consumptionDownloadItems) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.consumptionDownloadItems.map(item => h("eds-contract-item", { "is-checkable": true, "is-checked": true, status: item.status, type: item.type, "customer-id": item.customerId, "customer-name": item.customerName, "contract-id": item.contractId, "contract-address": item.contractAddress, onClickItem: () => { alert('onClickItem'); }, onClickItemCheckbox: () => { alert('onClickItemCheckbox'); }, styles: this.brand }))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-contract-list"; }
  static get originalStyleUrls() { return {
    "$": ["section-contract-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-contract-list.css"]
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
    },
    "consumptionDownloadItems": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
