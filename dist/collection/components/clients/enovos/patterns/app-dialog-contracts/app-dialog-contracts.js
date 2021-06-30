import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { isEqual } from 'lodash-es';
import { AppDialogContractsItem } from '../../../../../models/patterns/app-dialog-contracts-item';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Dialog Contracts
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSAppDialogContracts {
  constructor() {
    this.items = [];
    this.contractItems = [];
    this.classNames = {
      EL: 'app-dialog-contracts',
      DIALOG: '__dialog',
      CONTRACTS: '__contracts',
      HEADER: '__header',
      CLOSE_BTN: '__close-btn',
      BODY: '__body',
      FIELD: '__field',
      CARD: '__card',
      TYPE: '__type',
      STATUS: '__status',
      CONTENT: '__content',
    };
    this.onClickRow = props => {
      this.clickRow.emit(props);
    };
    this.onSearchKeyUp = e => {
      this.searchKeywords = e.target.value;
    };
    this.getCustomers = () => {
      var _a;
      let customerIds = [];
      let customers = [];
      this.contractItems.forEach((item) => {
        if (customerIds.indexOf(item.customerId) < 0) {
          customers = [...customers, {
              id: item.customerId,
              label: item.customerName,
            }];
          customerIds = [...customerIds, item.customerId];
        }
      });
      return [{ label: ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.allCustomers) || 'All customers' }, ...customers];
    };
    this.onClickDropdownItem = (e) => {
      var _a, _b;
      this.selectedCustomerId = ((_a = e.detail) === null || _a === void 0 ? void 0 : _a.id) || undefined;
      this.selectedCustomerName = ((_b = e.detail) === null || _b === void 0 ? void 0 : _b.label) || undefined;
    };
  }
  async displayDialog(value) {
    const dialogEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}`);
    if (dialogEl) {
      if (value) {
        dialogEl.open();
      }
      else {
        dialogEl.close();
        this.close.emit();
      }
    }
  }
  async setItems(items) {
    this.items = items;
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && newData.length > 0) {
      this.initData();
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
    this.el.setAttribute('name', this.classNames.EL);
  }
  initData() {
    this.contractItems = this.items.map(item => new AppDialogContractsItem(item));
  }
  render() {
    var _a, _b, _c, _d;
    return (h("eds-dialog", { verticalAlignment: "top", class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}`, disableScroll: true, ignoreBackdropClick: false, onClickBackdropHandler: () => this.displayDialog(false) },
      h("div", { slot: "dialog-header" },
        h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}${this.classNames.HEADER}` },
          h("div", { "margin-top-1": true, "margin-bottom-2": true, "margin-right-4": true },
            h("eds-heading", { content: ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.title) || 'Select a contract', "font-weight": "bold", type: "h2", styles: "secondary" })),
          h("eds-grid-layout", null,
            h("eds-grid-layout-item", { "xxs-12": true, "xs-12": true, "sm-12": true, "md-12": true, "lg-6": true, "xlg-6": true },
              h("eds-text-field", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}${this.classNames.HEADER}${this.classNames.FIELD}`, placeholder: ((_b = this.locale) === null || _b === void 0 ? void 0 : _b.search) || 'Search', "data-value": this.searchKeywords, "icon-leading": "search", type: "text", onKeyUp: this.onSearchKeyUp })),
            h("eds-grid-layout-item", { "xxs-12": true, "xs-12": true, "sm-12": true, "md-12": true, "lg-6": true, "xlg-6": true },
              h("eds-dropdown", { id: "customers-filter", "autocomplete-on-focus": true, onClickDropdownItem: this.onClickDropdownItem, styles: this.styles, data: this.getCustomers() },
                h("div", { slot: "selector" },
                  h("eds-text-field", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}${this.classNames.HEADER}${this.classNames.FIELD}`, "data-value": this.selectedCustomerName, placeholder: ((_c = this.locale) === null || _c === void 0 ? void 0 : _c.allCustomers) || 'All customers', debounce: 300, "icon-trailing": "chevron-down", "label-inside": ((_d = this.locale) === null || _d === void 0 ? void 0 : _d.filterByCustomers) || 'Filter by customers', "label-styles": this.styles, type: "text", "read-only": true }))))),
          h("eds-button", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}${this.classNames.CLOSE_BTN}`, onClickButton: () => this.displayDialog(false), styles: "secondary", "text-only": true },
            h("eds-icon", { slot: "icon", icon: "times" })))),
      h("div", { slot: "dialog-body" }, this.contractItems
        .filter(item => !this.searchKeywords || item.searchableText.toLowerCase().includes(this.searchKeywords.toLowerCase()))
        .filter(item => !this.selectedCustomerId || item.customerId === this.selectedCustomerId)
        .map(item => (h("eds-contract-item", { status: item.getProp('status'), type: item.getProp('type'), "customer-id": item.getProp('customerId'), "customer-name": item.getProp('customerName'), "contract-id": item.getProp('contractId'), "contract-address": item.getProp('contractAddress'), onClickItem: e => { this.onClickRow(e.detail); }, onClickItemCheckbox: e => { this.onClickRow(e.detail); }, styles: this.styles }))))));
  }
  static get is() { return "eds-app-dialog-contracts"; }
  static get originalStyleUrls() { return {
    "$": ["app-dialog-contracts.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["app-dialog-contracts.css"]
  }; }
  static get properties() { return {
    "styles": {
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
      "attribute": "styles",
      "reflect": false
    },
    "locale": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\n    title?: string;\n    search?: string;\n    filterByCustomers?: string;\n    allCustomers?: string;\n  }",
        "resolved": "{ title?: string; search?: string; filterByCustomers?: string; allCustomers?: string; }",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "AppDialogContractsItem[]",
        "resolved": "AppDialogContractsItem[]",
        "references": {
          "AppDialogContractsItem": {
            "location": "import",
            "path": "../../../../../models/patterns/app-dialog-contracts-item"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "contractItems": {},
    "searchKeywords": {},
    "selectedCustomerId": {},
    "selectedCustomerName": {}
  }; }
  static get events() { return [{
      "method": "clickRow",
      "name": "clickRow",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "close",
      "name": "close",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "displayDialog": {
      "complexType": {
        "signature": "(value: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setItems": {
      "complexType": {
        "signature": "(items: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "items",
      "methodName": "watchItemsHandler"
    }]; }
}
