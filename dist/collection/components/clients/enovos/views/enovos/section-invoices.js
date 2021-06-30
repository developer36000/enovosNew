import { Component, Element, Prop, State, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section invoices
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionInvoices {
  constructor() {
    this.consumptionCalculationMethod = 'payAsYouGo';
    this.classNames = {
      EL: 'view-app-enovos-section-invoices',
    };
    this.invoicesData = [];
    this.showConsumptionCalculationDialog = () => {
      const dialog = this.el.querySelector('#consumption-calculation-dialog');
      dialog.displayDialog(true);
    };
    this.manageQuickActionClick = (id) => {
      switch (id) {
        case 'consumption-calculation':
          this.showConsumptionCalculationDialog();
        default:
          return undefined;
      }
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.quickActions = [
      {
        'id': 'sepa-domiciliation',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/SEPA${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'SEPA domiciliation',
      },
      {
        'id': 'invoice-delivery-method',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/invoice-paperless${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'Invoice delivery method',
      },
      {
        'id': 'consumption-calculation',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/consumption-fixed${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'Consumption calculation',
      },
    ];
  }
  componentDidRender() {
    const table = this.el.querySelector('#invoices-data-table');
    if (table) {
      [...Array(30)].map(() => {
        this.invoicesData.push({
          id: `${(Math.random() * 9999999999).toFixed(0)}`,
          values: [
            { data: `${(Math.random() * 999.99).toFixed(2)} €` },
            { data: `${(Math.random() * 9999999999).toFixed(0)}` },
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
        });
      });
      table.columns = [
        'Amount',
        'Invoice ID',
        'Invoice type',
        'Due date',
        'Billing period',
        '',
      ];
      table.data = this.invoicesData;
      table.pagination = { total: this.invoicesData.length, step: 3, items: 10 };
      table.sort = [true, true, true, true, true, false];
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
      h("eds-grid-layout", null,
        h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-8": true, "lg-8": true, "xlg-8": true },
          h("eds-panel", { "header-title": "List of invoices", "header-padding-bottom": "0", "header-no-min-height": true },
            h("div", { slot: "header-actions" },
              h("eds-button", { content: "All available", "icon-position": "right", outlined: true, size: "sm", styles: "secondary" },
                h("eds-icon", { slot: "icon", icon: "calendar-alt" }))),
            h("div", { slot: "body-content" },
              h("eds-data-table", { id: "invoices-data-table", onClickRowCellButton: () => { alert('onClickRowCellButton'); } })))),
        h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true, stretchColumn: true, alignContent: "right" },
          h("eds-panel", { "header-title": "Payment settings", "header-padding-bottom": "0", "header-no-min-height": true },
            h("div", { slot: "body-content" }, this.quickActions.map(item => h("eds-quick-action", { id: item.id, onClickItem: (e) => this.manageQuickActionClick(e.detail.id), styles: this.brand, icon: item.icon, "main-title": item.title },
              h("div", { slot: "after-titles" },
                h("eds-badge", { text: "Activated", styles: "success" })))))))),
      h("eds-advanced-dialog", { id: "consumption-calculation-dialog", headerTitle: "Consumption calculation method for 000800148000 - Naturstorum Home Mono" },
        h("eds-expandable-card", { isDefaultChecked: this.consumptionCalculationMethod === 'fixed', onClickCheckbox: () => { this.consumptionCalculationMethod = this.consumptionCalculationMethod === 'fixed' ? '' : 'fixed'; }, isRadio: true, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/consumption-fixed${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`, mainTitle: "Fixed payment", subtitle: "Periodic estimation of consumption", styles: this.brand }),
        h("eds-expandable-card", { isDefaultChecked: this.consumptionCalculationMethod === 'payAsYouGo', onClickCheckbox: () => { this.consumptionCalculationMethod = this.consumptionCalculationMethod === 'payAsYouGo' ? '' : 'payAsYouGo'; }, isRadio: true, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/consumption-smart${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`, mainTitle: "Pay as you go", subtitle: "Pay for what you actually use", styles: this.brand },
          h("div", { slot: "expandable-content" },
            h("eds-paragraph", { type: "body-1", "font-weight": "bold" }, "To use this method, SEPA domiciliation should be activated first"),
            h("div", { "margin-top-1": true },
              h("span", { class: `${this.classNames.EL}__icon-text` },
                h("span", null,
                  h("eds-icon", { icon: "times", styles: "secondary" })),
                h("span", null,
                  h("eds-paragraph", { styles: "secondary", type: "body-1" }, "SEPA domiciliation"))),
              h("span", { class: `${this.classNames.EL}__sepa-btn` },
                h("eds-button", { styles: this.brand || 'primary', size: "sm", content: "Activate SEPA", "icon-position": "right" },
                  h("eds-icon", { slot: "icon", icon: "chevron-right" })))),
            h("div", { "margin-top-1": true },
              h("span", { class: `${this.classNames.EL}__icon-text` },
                h("span", null,
                  h("eds-icon", { icon: "check", styles: this.brand || 'primary' })),
                h("span", null,
                  h("eds-paragraph", { styles: this.brand || 'primary', type: "body-1" }, "Paperless invoice"))))))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-invoices"; }
  static get originalStyleUrls() { return {
    "$": ["section-invoices.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-invoices.css"]
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
    "consumptionCalculationMethod": {}
  }; }
  static get elementRef() { return "el"; }
}
