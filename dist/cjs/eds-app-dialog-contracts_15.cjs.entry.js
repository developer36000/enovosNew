'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
require('./_baseGetTag-1e305d19.js');
require('./isSymbol-04330316.js');
require('./toString-a99a8519.js');
require('./isObject-110b878e.js');
require('./_MapCache-df8c2fa4.js');
require('./_baseIsEqual-c7788197.js');
const set = require('./set-82454825.js');
const _hasPath = require('./_hasPath-fb5594fa.js');
require('./_arrayPush-d8c0eb40.js');
require('./_setToArray-21e6bd5a.js');
const has = require('./has-c1d0fffa.js');
const isEqual = require('./isEqual-54b6e24e.js');
const themes = require('./themes-bd258a0a.js');
const ComponentPropsHelper = require('./ComponentPropsHelper-fe2f4a61.js');

class AppDialogContractsItem {
  constructor(obj) {
    if (obj instanceof AppDialogContractsItem) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return _hasPath.get(this, key);
  }
  hasProp(key) {
    return has.has(this, key);
  }
  setProp(key, value) {
    set.set(this, key, value);
  }
}

const appDialogContractsCss = "[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts .dialog__dialog__content__header{box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.05);min-height:136px}@media (max-width: 1151px){[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts .dialog__dialog__content__header{min-height:200px}}[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts .dialog__dialog__content__body{margin-bottom:16px;padding-bottom:0 !important;overflow-y:auto}@media (max-width: 639px){[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts__header>div:first-child{height:32px;display:flex;align-items:center}}[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts__header .grid-layout{margin-left:-16px;margin-right:-16px}[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts__close-btn{position:absolute;right:16px;top:16px}[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts__body__card:not(:last-child){margin-bottom:8px}[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts__body__card__content{display:flex;align-items:center;justify-content:flex-start;overflow-y:auto}[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts__body__card__content>div+div{margin-left:16px}@media (max-width: 1151px){[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts__header{flex-wrap:wrap;padding-left:0}[name=app-dialog-contracts] .app-dialog-contracts__dialog__contracts__header__field{flex:none;order:2;margin-top:8px}}";

const ENOVOSAppDialogContracts = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickRow = index.createEvent(this, "clickRow", 7);
    this.close = index.createEvent(this, "close", 7);
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
    if (!isEqual.isEqual(newData, oldData) && newData.length > 0) {
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
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
    return (index.h("eds-dialog", { verticalAlignment: "top", class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}`, disableScroll: true, ignoreBackdropClick: false, onClickBackdropHandler: () => this.displayDialog(false) }, index.h("div", { slot: "dialog-header" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}${this.classNames.HEADER}` }, index.h("div", { "margin-top-1": true, "margin-bottom-2": true, "margin-right-4": true }, index.h("eds-heading", { content: ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.title) || 'Select a contract', "font-weight": "bold", type: "h2", styles: "secondary" })), index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-12": true, "xs-12": true, "sm-12": true, "md-12": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}${this.classNames.HEADER}${this.classNames.FIELD}`, placeholder: ((_b = this.locale) === null || _b === void 0 ? void 0 : _b.search) || 'Search', "data-value": this.searchKeywords, "icon-leading": "search", type: "text", onKeyUp: this.onSearchKeyUp })), index.h("eds-grid-layout-item", { "xxs-12": true, "xs-12": true, "sm-12": true, "md-12": true, "lg-6": true, "xlg-6": true }, index.h("eds-dropdown", { id: "customers-filter", "autocomplete-on-focus": true, onClickDropdownItem: this.onClickDropdownItem, styles: this.styles, data: this.getCustomers() }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}${this.classNames.HEADER}${this.classNames.FIELD}`, "data-value": this.selectedCustomerName, placeholder: ((_c = this.locale) === null || _c === void 0 ? void 0 : _c.allCustomers) || 'All customers', debounce: 300, "icon-trailing": "chevron-down", "label-inside": ((_d = this.locale) === null || _d === void 0 ? void 0 : _d.filterByCustomers) || 'Filter by customers', "label-styles": this.styles, type: "text", "read-only": true }))))), index.h("eds-button", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTRACTS}${this.classNames.CLOSE_BTN}`, onClickButton: () => this.displayDialog(false), styles: "secondary", "text-only": true }, index.h("eds-icon", { slot: "icon", icon: "times" })))), index.h("div", { slot: "dialog-body" }, this.contractItems
      .filter(item => !this.searchKeywords || item.searchableText.toLowerCase().includes(this.searchKeywords.toLowerCase()))
      .filter(item => !this.selectedCustomerId || item.customerId === this.selectedCustomerId)
      .map(item => (index.h("eds-contract-item", { status: item.getProp('status'), type: item.getProp('type'), "customer-id": item.getProp('customerId'), "customer-name": item.getProp('customerName'), "contract-id": item.getProp('contractId'), "contract-address": item.getProp('contractAddress'), onClickItem: e => { this.onClickRow(e.detail); }, onClickItemCheckbox: e => { this.onClickRow(e.detail); }, styles: this.styles }))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"]
  }; }
};
ENOVOSAppDialogContracts.style = appDialogContractsCss;

const appHeaderCss = ".app-header{display:flex;align-items:center;position:relative;flex-wrap:wrap;padding:24px 0}@media (min-width: 1152px){.app-header{padding:0;height:80px;flex-wrap:nowrap}}.app-header--back-btn-only{padding:8px 0}.app-header__logo{flex:1}.app-header--back-btn-only .app-header__logo{display:none}@media (min-width: 1152px){.app-header__logo{flex:none;order:1;margin-right:48px}.app-header--back-btn-only .app-header__logo{display:block;flex:1}}.app-header__logo svg,.app-header__logo img{display:block;height:48px}@media (min-width: 1152px){.app-header__logo svg,.app-header__logo img{height:56px}}.app-header__main{width:100%;margin-top:24px}@media (min-width: 1152px){.app-header__main{flex:1;order:2;width:auto;margin-top:0}}.app-header__main [slot=main-section]{display:flex;align-items:center}.app-header__main [slot=main-section] [name=text-field]{width:100%;flex:1}@media (min-width: 1152px){.app-header__main [slot=main-section] [name=text-field]{width:400px;flex:none}}@media (min-width: 1440px){.app-header__main [slot=main-section] [name=text-field]{width:500px}}.app-header--back-btn-only .app-header__main{display:none}.app-header__user-menu{display:none}.app-header__user-menu .heading{white-space:nowrap}.app-header__user-menu .dropdown__selector__slot>*{display:flex;align-items:center;cursor:pointer}.app-header__user-menu .dropdown__selector__slot>*>*{margin-left:8px}@media (min-width: 1152px){.app-header__user-menu{display:block;order:3}}.app-header--back-btn-only .app-header__user-menu{display:none}@media (min-width: 1152px){.app-header__user-menu-mobile{display:none}}.app-header--back-btn-only .app-header__user-menu-mobile{display:none}.app-header__back-btn{display:none}.app-header--back-btn-only .app-header__back-btn{display:block}@media (min-width: 1152px){.app-header__back-btn{order:2}}.app-header__language-selector{display:none}@media (min-width: 1152px){.app-header__language-selector{display:block}}.app-header__language-selector .heading{white-space:nowrap}.app-header__language-selector .dropdown__selector__slot>*{display:flex;align-items:center;cursor:pointer}.app-header__language-selector .dropdown__selector__slot>*>*{margin-left:8px}@media (min-width: 1152px){.app-header__language-selector{order:4;margin-left:32px}}";

const ENOVOSAppHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.showBackBtn = false;
    this.classNames = {
      EL: 'app-header',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.showBackBtn) {
        className += ` ${this.classNames.EL}--back-btn-only`;
      }
      return className;
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
    return (index.h("div", { class: this.getComponentClassName() }, index.h("div", { class: `${this.classNames.EL}__logo` }, index.h("slot", { name: "logo" })), index.h("div", { class: `${this.classNames.EL}__language-selector` }, index.h("slot", { name: "language-selector" })), index.h("div", { class: `${this.classNames.EL}__user-menu-mobile` }, index.h("slot", { name: "user-menu-mobile" })), index.h("div", { class: `${this.classNames.EL}__back-btn` }, index.h("slot", { name: "back-btn" })), index.h("div", { class: `${this.classNames.EL}__main` }, index.h("slot", { name: "main-section" })), index.h("div", { class: `${this.classNames.EL}__user-menu` }, index.h("slot", { name: "user-menu" }))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSAppHeader.style = appHeaderCss;

const gridStyleTwoCss = "[name=grid-style-two]{display:flex;flex-direction:column;width:100%;height:100%;min-height:100vh;overflow:hidden}[name=grid-style-two] .grid-style-two__mq:before{position:fixed;z-index:10000000;display:flex;justify-content:center;align-items:center;right:0;bottom:0;width:2rem;height:2rem;content:\"XLG\";background-color:red}@media (max-width: 1439px){[name=grid-style-two] .grid-style-two__mq:before{content:\"LG\";background-color:orange}}@media (max-width: 1151px){[name=grid-style-two] .grid-style-two__mq:before{content:\"MD\";background-color:purple}}@media (max-width: 863px){[name=grid-style-two] .grid-style-two__mq:before{content:\"SM\";background-color:blue}}@media (max-width: 639px){[name=grid-style-two] .grid-style-two__mq:before{content:\"XS\";background-color:green}}[name=grid-style-two] .grid-style-two__header,[name=grid-style-two] .grid-style-two__navigation,[name=grid-style-two] .grid-style-two__body,[name=grid-style-two] .grid-style-two__body__footer,[name=grid-style-two] .grid-style-two__footer{width:100%}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary{background-color:#F76700 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary{background-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary{background-color:#004885 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary{background-color:#96C11F !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary{background-color:#EF7B0B !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary{background-color:#CAA08D !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary{background-color:#6C887A !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey{background-color:#757575 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-900{background-color:#F76700 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-800{background-color:#F76700 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-700{background-color:#D52B1E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-600{background-color:#C75300 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-500{background-color:#F76700 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-400{background-color:#FFA14C !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-300{background-color:#FFB673 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-200{background-color:#FFDDBF !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-100{background-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--primary-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--primary-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--primary-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--primary-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--primary-50{background-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-900{background-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-800{background-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-700{background-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-600{background-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-500{background-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-400{background-color:#8E8E8E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-300{background-color:#A7A7A7 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-200{background-color:#D7D7D7 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-100{background-color:#EEEEEE !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--secondary-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--secondary-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--secondary-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--secondary-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--secondary-50{background-color:#EEEEEE !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-900{background-color:#004885 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-800{background-color:#004885 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-700{background-color:#004885 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-600{background-color:#004885 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-500{background-color:#004885 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-400{background-color:#5C8AB1 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-300{background-color:#85A8C5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-200{background-color:#C2D3E2 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-100{background-color:#EBF1F6 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--tertiary-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--tertiary-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--tertiary-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--tertiary-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--tertiary-50{background-color:#EBF1F6 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-900{background-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-800{background-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-700{background-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-600{background-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-500{background-color:#96C11F !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-400{background-color:#BCD870 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-300{background-color:#CDE294 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-200{background-color:#E6F0C9 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-100{background-color:#F7FAED !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quaternary-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quaternary-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quaternary-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quaternary-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quaternary-50{background-color:#F7FAED !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-900{background-color:#C75300 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-800{background-color:#C75300 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-700{background-color:#C75300 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-600{background-color:#C75300 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-500{background-color:#EF7B0B !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-400{background-color:#FFA14C !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-300{background-color:#FFB673 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-200{background-color:#FFDDBF !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-100{background-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--quinary-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--quinary-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--quinary-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--quinary-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--quinary-50{background-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-900{background-color:#602A10 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-800{background-color:#95431D !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-700{background-color:#B66E4D !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-600{background-color:#B78670 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-500{background-color:#CAA08D !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-400{background-color:#DEAE98 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-300{background-color:#EEC3AF !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-200{background-color:#FAD5C5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-100{background-color:#FFE9DF !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--senary-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--senary-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--senary-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--senary-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--senary-50{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-900{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-800{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-700{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-600{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-500{background-color:#6C887A !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-400{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-300{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-200{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-100{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--septenary-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--septenary-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--septenary-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--septenary-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--septenary-50{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-900{background-color:#1D1D1D !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-800{background-color:#333333 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-700{background-color:#4D4D4D !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-600{background-color:#666666 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-500{background-color:#757575 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-400{background-color:#999999 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-300{background-color:#B3B3B3 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-200{background-color:#CCCCCC !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-100{background-color:#E6E6E6 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--grey-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--grey-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--grey-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--grey-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--grey-50{background-color:#F8F8F8 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--contextual-success,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--contextual-success,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--contextual-success,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--contextual-success,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--contextual-success{background-color:#00856A !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--contextual-success-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--contextual-success-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--contextual-success-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--contextual-success-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--contextual-success-light{background-color:#E5F2F0 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--contextual-info,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--contextual-info,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--contextual-info,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--contextual-info,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--contextual-info{background-color:#2899A8 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--contextual-info-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--contextual-info-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--contextual-info-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--contextual-info-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--contextual-info-light{background-color:#DBF6FF !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--contextual-warning,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--contextual-warning,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--contextual-warning,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--contextual-warning,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--contextual-warning{background-color:#F76700 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--contextual-warning-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--contextual-warning-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--contextual-warning-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--contextual-warning-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--contextual-warning-light{background-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--contextual-error,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--contextual-error,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--contextual-error,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--contextual-error,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--contextual-error{background-color:#EB0000 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--contextual-error-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--contextual-error-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--contextual-error-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--contextual-error-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--contextual-error-light{background-color:#FDE5E5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--pfm-blue,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--pfm-blue,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--pfm-blue,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--pfm-blue,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--pfm-blue{background-color:#55A1D3 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--pfm-green,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--pfm-green,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--pfm-green,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--pfm-green,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--pfm-green{background-color:#8DDE54 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--pfm-yellow,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--pfm-yellow,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--pfm-yellow,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--pfm-yellow,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--pfm-yellow{background-color:#FFC600 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--pfm-orange,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--pfm-orange,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--pfm-orange,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--pfm-orange,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--pfm-orange{background-color:#FC912E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--pfm-red,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--pfm-red,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--pfm-red,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--pfm-red,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--pfm-red{background-color:#DF5036 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--external-bank-ing,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--external-bank-ing,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--external-bank-ing,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--external-bank-ing,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--external-bank-ing{background-color:#F58220 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--external-bank-bil,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--external-bank-bil,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--external-bank-bil,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--external-bank-bil,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--external-bank-bil{background-color:#71308B !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--external-bank-bcee,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--external-bank-bcee,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--external-bank-bcee,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--external-bank-bcee,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--external-bank-bcee{background-color:#144093 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--external-bank-post,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--external-bank-post,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--external-bank-post,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--external-bank-post,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--external-bank-post{background-color:#FABC0B !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--external-bank-raiffeisen,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--external-bank-raiffeisen,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--external-bank-raiffeisen,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--external-bank-raiffeisen,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--external-bank-raiffeisen{background-color:#112242 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--external-bank-bnp-paribas,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--external-bank-bnp-paribas,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--external-bank-bnp-paribas,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--external-bank-bnp-paribas,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--external-bank-bnp-paribas{background-color:#00915A !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--white-15,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--white-15,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--white-15,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--white-15,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--white-15{background-color:rgba(255, 255, 255, 0.15) !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--white-25,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--white-25,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--white-25,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--white-25,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--white-25{background-color:rgba(255, 255, 255, 0.25) !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--white-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--white-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--white-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--white-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--white-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-pfm-blue,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-pfm-blue,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-pfm-blue,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-pfm-blue,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-pfm-blue{background-color:#55A1D3 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-pfm-green,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-pfm-green,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-pfm-green,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-pfm-green,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-pfm-green{background-color:#8DDE54 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-pfm-yellow,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-pfm-yellow,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-pfm-yellow,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-pfm-yellow,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-pfm-yellow{background-color:#FFC600 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-pfm-orange,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-pfm-orange,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-pfm-orange,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-pfm-orange,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-pfm-orange{background-color:#FC912E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-pfm-red,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-pfm-red,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-pfm-red,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-pfm-red,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-pfm-red{background-color:#DF5036 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light{background-color:#4FB482 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-dark,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-dark,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-dark,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-dark,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-dark{background-color:#133B2C !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light{background-color:#1B8DC0 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-dark,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-dark,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-dark,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-dark,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-dark{background-color:#0A324B !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light{background-color:#F0BE21 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark{background-color:#B77918 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-light{background-color:#F3B969 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark{background-color:#EF7D00 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-pink-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-pink-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-pink-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-pink-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-pink-light{background-color:#C03152 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-pink-dark,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-pink-dark,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-pink-dark,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-pink-dark,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-pink-dark{background-color:#4F0F15 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-red-light,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-red-light,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-red-light,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-red-light,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-red-light{background-color:#F7B7AF !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-red-dark,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-red-dark,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-red-dark,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-red-dark,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-red-dark{background-color:#E62D32 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-900{background-color:#4D2800 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-800{background-color:#804200 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-700{background-color:#B35C00 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-600{background-color:#CC6A00 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-500{background-color:#EF7D00 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-400{background-color:#FC8823 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-300{background-color:#FC9E4C !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-200{background-color:#FFB675 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-100{background-color:#FFD1A8 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-orange-dark-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-orange-dark-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-orange-dark-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-orange-dark-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-orange-dark-50{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-900{background-color:#0C4159 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-800{background-color:#105373 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-700{background-color:#14668C !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-600{background-color:#1779A6 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-500{background-color:#1B8DC0 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-400{background-color:#1D9AD1 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-300{background-color:#2AAEEB !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-200{background-color:#56BFF0 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-100{background-color:#7FCFF5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-blue-light-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-blue-light-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-blue-light-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-blue-light-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-blue-light-50{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-900{background-color:#224D37 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-800{background-color:#2D6649 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-700{background-color:#39805C !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-600{background-color:#43996E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-500{background-color:#4FB482 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-400{background-color:#55C28C !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-300{background-color:#60D199 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-200{background-color:#69DBA2 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-100{background-color:#85E6B5 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-green-light-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-green-light-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-green-light-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-green-light-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-green-light-50{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-900{background-color:#6B550F !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-800{background-color:#8F7214 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-700{background-color:#AD8B19 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-600{background-color:#D1A71D !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-500{background-color:#F0BE21 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-400{background-color:#FCCA23 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-300{background-color:#FCD742 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-200{background-color:#FCDD60 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-100{background-color:#FCE483 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-light-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-light-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-light-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-light-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-light-50{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-900,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-900,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-900,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-900,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-900{background-color:#52360B !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-800,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-800,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-800,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-800,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-800{background-color:#6B470E !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-700,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-700,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-700,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-700,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-700{background-color:#855811 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-600,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-600,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-600,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-600,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-600{background-color:#9E6915 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-500,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-500,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-500,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-500,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-500{background-color:#B77918 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-400,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-400,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-400,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-400,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-400{background-color:#D18A1B !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-300,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-300,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-300,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-300,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-300{background-color:#EB9B1F !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-200,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-200,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-200,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-200,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-200{background-color:#FAAA2D !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-100,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-100,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-100,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-100,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-100{background-color:#FABA55 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--brand-expressive-yellow-dark-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--brand-expressive-yellow-dark-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--brand-expressive-yellow-dark-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--brand-expressive-yellow-dark-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--brand-expressive-yellow-dark-50{background-color:transparent !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--white-opacity-50,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--white-opacity-50,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--white-opacity-50,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--white-opacity-50,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--white-opacity-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--white,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--white,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--white,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--white,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--white{background-color:#FFFFFF !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--black,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--black,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--black,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--black,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--black{background-color:#000000 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--transparent,[name=grid-style-two] .grid-style-two__navigation.grid-style-two--bg--transparent,[name=grid-style-two] .grid-style-two__body.grid-style-two--bg--transparent,[name=grid-style-two] .grid-style-two__body__footer.grid-style-two--bg--transparent,[name=grid-style-two] .grid-style-two__footer.grid-style-two--bg--transparent{background-color:transparent !important}[name=grid-style-two] .grid-style-two__body{background-position:top center;background-repeat:no-repeat}[name=grid-style-two] .grid-style-two__body--centered{display:flex;align-items:center}[name=grid-style-two] .grid-style-two__navigation{position:relative}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary{border-color:#96C11F !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary{border-color:#EF7B0B !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary{border-color:#CAA08D !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary{border-color:#6C887A !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey{border-color:#757575 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-900{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-800{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-700{border-color:#D52B1E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-600{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-500{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-400{border-color:#FFA14C !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-300{border-color:#FFB673 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-200{border-color:#FFDDBF !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-100{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--primary-50{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-900{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-800{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-700{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-600{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-500{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-400{border-color:#8E8E8E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-300{border-color:#A7A7A7 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-200{border-color:#D7D7D7 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-100{border-color:#EEEEEE !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--secondary-50{border-color:#EEEEEE !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-900{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-800{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-700{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-600{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-500{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-400{border-color:#5C8AB1 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-300{border-color:#85A8C5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-200{border-color:#C2D3E2 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-100{border-color:#EBF1F6 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--tertiary-50{border-color:#EBF1F6 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-900{border-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-800{border-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-700{border-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-600{border-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-500{border-color:#96C11F !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-400{border-color:#BCD870 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-300{border-color:#CDE294 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-200{border-color:#E6F0C9 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-100{border-color:#F7FAED !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quaternary-50{border-color:#F7FAED !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-900{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-800{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-700{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-600{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-500{border-color:#EF7B0B !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-400{border-color:#FFA14C !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-300{border-color:#FFB673 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-200{border-color:#FFDDBF !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-100{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--quinary-50{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-900{border-color:#602A10 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-800{border-color:#95431D !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-700{border-color:#B66E4D !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-600{border-color:#B78670 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-500{border-color:#CAA08D !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-400{border-color:#DEAE98 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-300{border-color:#EEC3AF !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-200{border-color:#FAD5C5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-100{border-color:#FFE9DF !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--senary-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-900{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-800{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-700{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-600{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-500{border-color:#6C887A !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-400{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-300{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-200{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-100{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--septenary-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-900{border-color:#1D1D1D !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-800{border-color:#333333 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-700{border-color:#4D4D4D !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-600{border-color:#666666 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-500{border-color:#757575 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-400{border-color:#999999 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-300{border-color:#B3B3B3 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-200{border-color:#CCCCCC !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-100{border-color:#E6E6E6 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--grey-50{border-color:#F8F8F8 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--contextual-success{border-color:#00856A !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--success{border-color:#00856A !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--contextual-success-light{border-color:#E5F2F0 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--success-light{border-color:#E5F2F0 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--contextual-info{border-color:#2899A8 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--info{border-color:#2899A8 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--contextual-info-light{border-color:#DBF6FF !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--info-light{border-color:#DBF6FF !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--contextual-warning{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--warning{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--contextual-warning-light{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--warning-light{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--contextual-error{border-color:#EB0000 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--error{border-color:#EB0000 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--contextual-error-light{border-color:#FDE5E5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--error-light{border-color:#FDE5E5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--pfm-blue{border-color:#55A1D3 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--pfm-green{border-color:#8DDE54 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--pfm-yellow{border-color:#FFC600 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--pfm-orange{border-color:#FC912E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--pfm-red{border-color:#DF5036 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--external-bank-ing{border-color:#F58220 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--external-bank-bil{border-color:#71308B !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--external-bank-bcee{border-color:#144093 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--external-bank-post{border-color:#FABC0B !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--external-bank-raiffeisen{border-color:#112242 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--external-bank-bnp-paribas{border-color:#00915A !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--white-15{border-color:rgba(255, 255, 255, 0.15) !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--white-25{border-color:rgba(255, 255, 255, 0.25) !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--white-50{border-color:rgba(255, 255, 255, 0.5) !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-pfm-blue{border-color:#55A1D3 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-pfm-green{border-color:#8DDE54 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-pfm-yellow{border-color:#FFC600 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-pfm-orange{border-color:#FC912E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-pfm-red{border-color:#DF5036 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light{border-color:#4FB482 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-dark{border-color:#133B2C !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light{border-color:#1B8DC0 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-dark{border-color:#0A324B !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light{border-color:#F0BE21 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark{border-color:#B77918 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-light{border-color:#F3B969 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark{border-color:#EF7D00 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-pink-light{border-color:#C03152 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-pink-dark{border-color:#4F0F15 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-red-light{border-color:#F7B7AF !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-red-dark{border-color:#E62D32 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-900{border-color:#4D2800 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-800{border-color:#804200 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-700{border-color:#B35C00 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-600{border-color:#CC6A00 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-500{border-color:#EF7D00 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-400{border-color:#FC8823 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-300{border-color:#FC9E4C !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-200{border-color:#FFB675 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-100{border-color:#FFD1A8 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-orange-dark-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-900{border-color:#0C4159 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-800{border-color:#105373 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-700{border-color:#14668C !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-600{border-color:#1779A6 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-500{border-color:#1B8DC0 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-400{border-color:#1D9AD1 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-300{border-color:#2AAEEB !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-200{border-color:#56BFF0 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-100{border-color:#7FCFF5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-blue-light-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-900{border-color:#224D37 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-800{border-color:#2D6649 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-700{border-color:#39805C !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-600{border-color:#43996E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-500{border-color:#4FB482 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-400{border-color:#55C28C !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-300{border-color:#60D199 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-200{border-color:#69DBA2 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-100{border-color:#85E6B5 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-green-light-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-900{border-color:#6B550F !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-800{border-color:#8F7214 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-700{border-color:#AD8B19 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-600{border-color:#D1A71D !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-500{border-color:#F0BE21 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-400{border-color:#FCCA23 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-300{border-color:#FCD742 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-200{border-color:#FCDD60 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-100{border-color:#FCE483 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-light-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-900{border-color:#52360B !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-800{border-color:#6B470E !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-700{border-color:#855811 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-600{border-color:#9E6915 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-500{border-color:#B77918 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-400{border-color:#D18A1B !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-300{border-color:#EB9B1F !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-200{border-color:#FAAA2D !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-100{border-color:#FABA55 !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--brand-expressive-yellow-dark-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--white-opacity-50{border-color:rgba(255, 255, 255, 0.5) !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--white{border-color:#FFFFFF !important}[name=grid-style-two] .grid-style-two__navigation.grid-style-two--border--black{border-color:#000000 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary{border-color:#96C11F !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary{border-color:#EF7B0B !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary{border-color:#CAA08D !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary{border-color:#6C887A !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey{border-color:#757575 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-900{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-800{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-700{border-color:#D52B1E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-600{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-500{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-400{border-color:#FFA14C !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-300{border-color:#FFB673 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-200{border-color:#FFDDBF !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-100{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--primary-50{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-900{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-800{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-700{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-600{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-500{border-color:#5E5E5E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-400{border-color:#8E8E8E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-300{border-color:#A7A7A7 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-200{border-color:#D7D7D7 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-100{border-color:#EEEEEE !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--secondary-50{border-color:#EEEEEE !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-900{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-800{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-700{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-600{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-500{border-color:#004885 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-400{border-color:#5C8AB1 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-300{border-color:#85A8C5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-200{border-color:#C2D3E2 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-100{border-color:#EBF1F6 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--tertiary-50{border-color:#EBF1F6 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-900{border-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-800{border-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-700{border-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-600{border-color:#5A8D00 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-500{border-color:#96C11F !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-400{border-color:#BCD870 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-300{border-color:#CDE294 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-200{border-color:#E6F0C9 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-100{border-color:#F7FAED !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quaternary-50{border-color:#F7FAED !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-900{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-800{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-700{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-600{border-color:#C75300 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-500{border-color:#EF7B0B !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-400{border-color:#FFA14C !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-300{border-color:#FFB673 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-200{border-color:#FFDDBF !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-100{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--quinary-50{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-900{border-color:#602A10 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-800{border-color:#95431D !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-700{border-color:#B66E4D !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-600{border-color:#B78670 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-500{border-color:#CAA08D !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-400{border-color:#DEAE98 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-300{border-color:#EEC3AF !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-200{border-color:#FAD5C5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-100{border-color:#FFE9DF !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--senary-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-900{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-800{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-700{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-600{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-500{border-color:#6C887A !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-400{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-300{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-200{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-100{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--septenary-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-900{border-color:#1D1D1D !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-800{border-color:#333333 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-700{border-color:#4D4D4D !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-600{border-color:#666666 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-500{border-color:#757575 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-400{border-color:#999999 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-300{border-color:#B3B3B3 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-200{border-color:#CCCCCC !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-100{border-color:#E6E6E6 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--grey-50{border-color:#F8F8F8 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--contextual-success{border-color:#00856A !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--success{border-color:#00856A !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--contextual-success-light{border-color:#E5F2F0 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--success-light{border-color:#E5F2F0 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--contextual-info{border-color:#2899A8 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--info{border-color:#2899A8 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--contextual-info-light{border-color:#DBF6FF !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--info-light{border-color:#DBF6FF !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--contextual-warning{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--warning{border-color:#F76700 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--contextual-warning-light{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--warning-light{border-color:#FFF1E5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--contextual-error{border-color:#EB0000 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--error{border-color:#EB0000 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--contextual-error-light{border-color:#FDE5E5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--error-light{border-color:#FDE5E5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--pfm-blue{border-color:#55A1D3 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--pfm-green{border-color:#8DDE54 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--pfm-yellow{border-color:#FFC600 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--pfm-orange{border-color:#FC912E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--pfm-red{border-color:#DF5036 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--external-bank-ing{border-color:#F58220 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--external-bank-bil{border-color:#71308B !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--external-bank-bcee{border-color:#144093 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--external-bank-post{border-color:#FABC0B !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--external-bank-raiffeisen{border-color:#112242 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--external-bank-bnp-paribas{border-color:#00915A !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--white-15{border-color:rgba(255, 255, 255, 0.15) !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--white-25{border-color:rgba(255, 255, 255, 0.25) !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--white-50{border-color:rgba(255, 255, 255, 0.5) !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-pfm-blue{border-color:#55A1D3 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-pfm-green{border-color:#8DDE54 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-pfm-yellow{border-color:#FFC600 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-pfm-orange{border-color:#FC912E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-pfm-red{border-color:#DF5036 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light{border-color:#4FB482 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-dark{border-color:#133B2C !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light{border-color:#1B8DC0 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-dark{border-color:#0A324B !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light{border-color:#F0BE21 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark{border-color:#B77918 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-light{border-color:#F3B969 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark{border-color:#EF7D00 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-pink-light{border-color:#C03152 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-pink-dark{border-color:#4F0F15 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-red-light{border-color:#F7B7AF !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-red-dark{border-color:#E62D32 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-900{border-color:#4D2800 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-800{border-color:#804200 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-700{border-color:#B35C00 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-600{border-color:#CC6A00 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-500{border-color:#EF7D00 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-400{border-color:#FC8823 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-300{border-color:#FC9E4C !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-200{border-color:#FFB675 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-100{border-color:#FFD1A8 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-orange-dark-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-900{border-color:#0C4159 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-800{border-color:#105373 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-700{border-color:#14668C !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-600{border-color:#1779A6 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-500{border-color:#1B8DC0 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-400{border-color:#1D9AD1 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-300{border-color:#2AAEEB !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-200{border-color:#56BFF0 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-100{border-color:#7FCFF5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-blue-light-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-900{border-color:#224D37 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-800{border-color:#2D6649 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-700{border-color:#39805C !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-600{border-color:#43996E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-500{border-color:#4FB482 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-400{border-color:#55C28C !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-300{border-color:#60D199 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-200{border-color:#69DBA2 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-100{border-color:#85E6B5 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-green-light-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-900{border-color:#6B550F !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-800{border-color:#8F7214 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-700{border-color:#AD8B19 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-600{border-color:#D1A71D !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-500{border-color:#F0BE21 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-400{border-color:#FCCA23 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-300{border-color:#FCD742 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-200{border-color:#FCDD60 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-100{border-color:#FCE483 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-light-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-900{border-color:#52360B !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-800{border-color:#6B470E !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-700{border-color:#855811 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-600{border-color:#9E6915 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-500{border-color:#B77918 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-400{border-color:#D18A1B !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-300{border-color:#EB9B1F !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-200{border-color:#FAAA2D !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-100{border-color:#FABA55 !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--brand-expressive-yellow-dark-50{border-color:transparent !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--white-opacity-50{border-color:rgba(255, 255, 255, 0.5) !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--white{border-color:#FFFFFF !important}[name=grid-style-two] .grid-style-two__footer.grid-style-two--border--black{border-color:#000000 !important}[name=grid-style-two] .grid-style-two__slot{height:100%}[name=grid-style-two] .grid-style-two__header{z-index:3000;flex:0 0 auto;background-color:#5E5E5E}[name=grid-style-two] .grid-style-two__header.grid-style-two--hidden+.grid-style-two__navigation.grid-style-two--hidden+.grid-style-two__body{margin-top:0 !important}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--gradient-primary-dark-bottom{background-image:linear-gradient(#F76700, #D52B1E)}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--gradient-tertiary-dark-bottom{background-image:linear-gradient(#004885, #004885)}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--gradient-quaternary-dark-bottom{background-image:linear-gradient(#96C11F, #5A8D00)}[name=grid-style-two] .grid-style-two__header.grid-style-two--bg--gradient-quinary-dark-bottom{background-image:linear-gradient(#EF7B0B, #C75300)}[name=grid-style-two] .grid-style-two__navigation{z-index:2900;display:block;flex:0 0 auto;padding-top:48px;border-bottom:1px solid #D7D7D7;background-color:#FFFFFF;transition:top 300ms cubic-bezier(0.31, 0.53, 0.51, 0.71)}@media (max-width: 863px){[name=grid-style-two] .grid-style-two__navigation{padding-top:24px}}[name=grid-style-two] .grid-style-two__navigation [name=page-header]{margin-bottom:0}[name=grid-style-two] .grid-style-two__navigation .navigation__item{display:block !important}[name=grid-style-two] .grid-style-two__body{flex:1 1 auto;padding-top:32px;padding-bottom:48px}@media (max-width: 863px){[name=grid-style-two] .grid-style-two__body{padding-top:24px;padding-bottom:40px}}[name=grid-style-two] .grid-style-two__body__footer{flex:1 1 auto;padding:48px 0}[name=grid-style-two] .grid-style-two__footer{z-index:3000;flex:0 0 auto;min-height:56px}@media (max-width: 1151px){[name=grid-style-two] .grid-style-two__footer{padding-bottom:32px}}[name=grid-style-two] .grid-style-two__footer>[name=grid-layout]{height:100%}[name=grid-style-two] .grid-style-two--hidden{display:none}";

const ENOVOSGridStyleTwo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.debug = false;
    this.header = true;
    this.navigation = true;
    this.main = true;
    this.bodyAlignCenter = false;
    this.mainFooter = true;
    this.footer = true;
    this.backgroundHeader = 'gradient-primary-dark-bottom';
    this.borderColorFooter = 'quaternary-600';
    this.classNames = {
      EL: 'grid-style-two',
      HEADER: '__header',
      NAVIGATION: '__navigation',
      BODY: '__body',
      FOOTER: '__footer',
      CONTAINER: '__container',
      SLOT: '__slot',
      HIDDEN: '--hidden',
      CENTERED: '--centered',
    };
    this.getBodyStyle = () => {
      let style = {};
      if (this.backgroundImageBody) {
        style = Object.assign(Object.assign({}, style), { 'background-image': `url("${this.backgroundImageBody}")` });
      }
      if (this.backgroundBody) {
        style = Object.assign(Object.assign({}, style), { 'background-color': `${this.backgroundBody}` });
      }
      return style;
    };
    this.getFooterStyle = () => {
      let style = {};
      if (this.backgroundBody) {
        style = Object.assign(Object.assign({}, style), { 'background-color': `${this.backgroundBody}` });
      }
      return style;
    };
  }
  componentWillLoad() {
    this.hasNavigationArea = !!this.el.querySelector('[slot="navigation-area"]');
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
  componentDidRender() {
    this.el.querySelectorAll('[slot="header-area"], [slot="navigation-area"], [slot="main-area"], [slot="footer-area"]').forEach((el) => {
      el.classList.add(`${this.classNames.EL}${this.classNames.SLOT}`);
    });
  }
  render() {
    return [
      index.h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.HEADER}`,
          (!this.header) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          ComponentPropsHelper.ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundHeader}`, `${this.classNames.EL}`),
        ].join(' ') }, index.h("div", { class: `${this.classNames.EL}${this.classNames.HEADER}${this.classNames.CONTAINER}` }, index.h("slot", { name: "header-area" }))),
      this.hasNavigationArea && (index.h("eds-elevation", { level: "4" }, index.h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.NAVIGATION}`,
          (!this.navigation) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          ComponentPropsHelper.ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundNavigation}`, `${this.classNames.EL}`),
          (this.backgroundNavigation && this.backgroundNavigation !== 'white') ? ComponentPropsHelper.ComponentPropsHelper.setGlobalStyles(`border--${this.backgroundNavigation}`, `${this.classNames.EL}`) : '',
        ].join(' ') }, index.h("span", null, index.h("slot", { name: "navigation-area" }))))),
      index.h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.BODY}`,
          (!this.main) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          (this.bodyAlignCenter) ? `${this.classNames.EL}${this.classNames.BODY}${this.classNames.CENTERED}` : '',
        ].join(' '), style: this.getBodyStyle() }, index.h("span", null, index.h("slot", { name: "main-area" }))),
      index.h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.FOOTER}`,
          (!this.footer) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          ComponentPropsHelper.ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundFooter}`, `${this.classNames.EL}`),
          ComponentPropsHelper.ComponentPropsHelper.setGlobalStyles(`border--${this.borderColorFooter}`, `${this.classNames.EL}`),
        ].join(' '), style: this.getFooterStyle() }, index.h("span", null, index.h("slot", { name: "footer-area" }))),
      this.debug ? index.h("span", { class: `${this.classNames.EL}__mq` }) : undefined,
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSGridStyleTwo.style = gridStyleTwoCss;

const section404Css = "[name=view-app-enovos-section-404] .view-app-enovos-section-404__wrapper{min-height:600px;display:flex;align-items:center;justify-content:center}";

const ENOVOSViewAppEnovosSection404 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'view-app-enovos-section-404',
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return [
      index.h("eds-panel", null, index.h("div", { slot: "body-content" }, index.h("div", { class: `${this.classNames.EL}__wrapper` }, index.h("eds-no-results", { "main-title": "Sorry, page not found", subtitle: "It seems that we can't find the page you are looking for", "image-url": "https://storage.googleapis.com/lu-ds-enovos/img/404.svg" }, index.h("div", { slot: "actions" }, index.h("eds-button", { content: "Go to overview" })))))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSection404.style = section404Css;

const sectionConsumptionCss = ".view-app-enovos-section-consumption__chart__buttons{display:flex;align-items:center;justify-content:flex-end}.view-app-enovos-section-consumption__chart__buttons>*:not(:first-child){margin-left:8px}.view-app-enovos-section-consumption__chart-description-list{display:flex;margin-bottom:8px}.view-app-enovos-section-consumption__chart-description-list>span+span{margin-left:16px}.view-app-enovos-section-consumption__comparison_profile__datalist [name=datalist-item] .datalist-item{padding-left:32px !important;padding-right:32px !important}.view-app-enovos-section-consumption__comparison_profile__datalist [name=datalist-item] .datalist-item:not(.datalist-item--heading){background-color:transparent !important;border-bottom:solid 1px #EEEEEE}.view-app-enovos-section-consumption__comparison_profile__datalist [name=datalist-item] .datalist-item__column__body__text .heading--primary-500{color:#5E5E5E !important;font-weight:700 !important}";

const ENOVOSViewAppEnovosSectionConsumption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
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
          index.h("div", { class: `${this.classNames.EL}__chart-description-list` }, index.h("span", null, index.h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption"), index.h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" }))),
          index.h("eds-line-chart", { renderDelay: 0, id: "chart-all", height: 250, minWidth: 540 }),
        ];
      case 'activeReactive':
        return [
          index.h("div", { class: `${this.classNames.EL}__chart-description-list` }, index.h("span", null, index.h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption"), index.h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" })), index.h("span", null, index.h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption active"), index.h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" })), index.h("span", null, index.h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption reactive"), index.h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" }))),
          index.h("eds-line-chart", { id: "chart-active-reactive", renderDelay: 0, height: 250, minWidth: 540 }),
        ];
      case 'dayNight':
        return [
          index.h("div", { class: `${this.classNames.EL}__chart-description-list` }, index.h("span", null, index.h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption"), index.h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" })), index.h("span", null, index.h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption by day"), index.h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" })), index.h("span", null, index.h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, "Total consumption by night"), index.h("eds-heading", { type: "h6", content: "11 658 kWh", styles: "secondary" }))),
          index.h("eds-line-chart", { id: "chart-day-night", renderDelay: 0, height: 250, minWidth: 540 }),
        ];
      default:
        return undefined;
    }
  }
  render() {
    return [
      index.h("eds-panel", { "margin-bottom-4": true, headerTitle: "Consumption in detail", headerWithShadow: true, headerPaddingBottom: "0" }, index.h("div", { slot: "header-navigation" }, index.h("eds-navigation", { id: "charts-navigation", position: "top", shrink: true, "text-only": true, activeItem: this.activeChart, items: [
          { id: 'all', text: 'All' },
          { id: 'activeReactive', text: 'Active/Reactive' },
          { id: 'dayNight', text: 'Day/Night' },
        ], styles: this.brand })), index.h("div", { slot: "header-actions" }, index.h("eds-button", { content: "Monthly", "icon-position": "right", outlined: true, size: "sm", onClickButton: () => this.showConsumptionGraphDisplaySettingsDialog(), styles: this.brand || 'primary' }, index.h("eds-icon", { slot: "icon", icon: "chevron-down" })), index.h("eds-button", { content: "Last year", "icon-position": "right", outlined: true, size: "sm", onClickButton: () => this.showConsumptionGraphDisplaySettingsDialog(), styles: this.brand || 'primary' }, index.h("eds-icon", { slot: "icon", icon: "calendar-alt" })), index.h("eds-button", { content: "Download .csv", "icon-position": "right", outlined: true, size: "sm", onClickButton: () => this.showConsumptionDownloadDialog(true), styles: "secondary" }, index.h("eds-icon", { slot: "icon", icon: "download" }))), index.h("div", { slot: "body-content" }, this.renderChart())),
      index.h("eds-panel", { "margin-bottom-4": true, headerPaddingBottom: "0", headerNoMinHeight: true, headerTitle: "Periodic consumption" }, index.h("div", { slot: "body-content" }, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "margin-top-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-4": true, "xlg-4": true }, index.h("eds-app-periodic-consumption", { styles: this.brand, "first-item-title": "Period", "first-item-value": "12.01.2018 - 12.11.2018", "second-item-title": "Total consumption", "second-item-value": "648 kWh", "chart-max-value": "1000", "chart-min-value": "0", "chart-value": "648" })), index.h("eds-grid-layout-item", { "margin-top-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-4": true, "xlg-4": true }, index.h("eds-app-periodic-consumption", { styles: this.brand, "first-item-title": "Period", "first-item-value": "12.11.2028 - 12.11.2019", "second-item-title": "Total consumption", "second-item-value": "700 kWh", "second-item-caption-icon": "arrow-up", "second-item-caption-styles": "error", "second-item-caption-text": "52 kWh", "chart-max-value": 1000, "chart-min-value": 0, "chart-value": 700 })), index.h("eds-grid-layout-item", { "margin-top-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-4": true, "xlg-4": true }, index.h("eds-app-periodic-consumption", { styles: this.brand, "first-item-title": "Period", "first-item-value": "12.11.2019 - 12.11.2020", "second-item-title": "Total consumption", "second-item-value": "Pending", "chart-max-value": 1000, "chart-min-value": 0, "chart-value": 0 }))))),
      index.h("eds-panel", { headerPaddingBottom: "0", bodyPaddingLeft: "0", bodyPaddingRight: "0", headerNoMinHeight: true, headerTitle: "Comparison profile" }, index.h("div", { slot: "header-actions" }, index.h("eds-button", { content: "Filter", size: "sm", onClickButton: () => { alert('onClickButton'); }, styles: "secondary", outlined: true, iconPosition: "right" }, index.h("eds-icon", { slot: "icon", icon: "sliders-h" })), index.h("eds-button", { content: "Collapse all", size: "sm", styles: "secondary", onClickButton: () => this.collapseComparisonProfile(), outlined: true, iconPosition: "right" }, index.h("eds-icon", { slot: "icon", icon: "minus" }))), index.h("div", { slot: "body-content" }, index.h("eds-datalist", { alternate: true, id: "comparison-profile-january", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }), index.h("eds-datalist", { alternate: true, id: "comparison-profile-february", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }), index.h("eds-datalist", { alternate: true, id: "comparison-profile-march", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }), index.h("eds-datalist", { alternate: true, id: "comparison-profile-april", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }), index.h("eds-datalist", { alternate: true, id: "comparison-profile-may", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }), index.h("eds-datalist", { alternate: true, id: "comparison-profile-june", class: `${this.classNames.EL}${this.classNames.COMPARISON_PROFILE}${this.classNames.DATALIST}` }))),
      index.h("eds-app-dialog-consumption-download", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONSUMPTION_DOWNLOAD}` }),
      index.h("eds-advanced-dialog", { id: "consumption-graph-display-settings", headerTitle: "Consumption graph display settings", headerSubtitle: "Pick data timeline and frequency to display on consumption graph", bodyScrollDisabled: true }, index.h("eds-grid-layout", { alignCenter: true }, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-date-picker", { onClickDatePicker: () => { alert('onClickDatePicker'); }, styles: this.brand || 'primary' }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": "From 17.07.2019 to 17.07.2020", placeholder: "From 17.07.2019 to 17.07.2020", "icon-trailing": "calendar-alt", "label-inside": "Data timeline", "label-styles": this.brand || 'primary', type: "text", "read-only": true })))), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { "data-value": "Every quarter hour", placeholder: "Data frequency", "label-inside": "Data frequency", "icon-trailing": "chevron-down", "label-styles": this.brand || 'primary', type: "text" }))), index.h("div", { slot: "footer-right" }, index.h("eds-button", { styles: this.brand || 'primary', content: "Confirm changes" }))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionConsumption.style = sectionConsumptionCss;

const sectionContractDetailsCss = "[name=view-app-enovos-section-contract-details] .view-app-enovos-section-contract-details__card{overflow:hidden}[name=view-app-enovos-section-contract-details] .view-app-enovos-section-contract-details__card__content{padding:8px}[name=view-app-enovos-section-contract-details] .view-app-enovos-section-contract-details__card__content__field{margin-bottom:16px}[name=view-app-enovos-section-contract-details] .view-app-enovos-section-contract-details__card__content__field:first-of-type{margin-top:32px}[name=view-app-enovos-section-contract-details] .view-app-enovos-section-contract-details__card__content__field>*:first-child{margin-bottom:4px}[name=view-app-enovos-section-contract-details] .view-app-enovos-section-contract-details__card__content__button{text-align:right}[name=view-app-enovos-section-contract-details] .view-app-enovos-section-contract-details__card__map{width:calc(100% + 26px);height:calc(100% + 26px);margin:-13px}";

const ENOVOSViewAppEnovosSectionContractDetails = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'view-app-enovos-section-contract-details',
      CARD: '__card',
      CONTENT: '__content',
      FIELD: '__field',
      BUTTON: '__button',
      MAP: '__map',
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
  }
  closeContract() {
    const url = new URL(window.location.href.replace('#/', ''));
    window.location.href = `${url.origin}/#/${url.pathname}?step=contract-list`;
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
  }
  render() {
    return [
      index.h("eds-elevation", { level: "5" }, index.h("eds-card", { "no-border": true, class: `${this.classNames.EL}${this.classNames.CARD}` }, index.h("div", { slot: "card-content" }, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}` }, index.h("eds-heading", { content: "Contract details", "font-weight": "bold", type: "h2", styles: "secondary" }), index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` }, index.h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "Contract ID" }), index.h("eds-heading", { type: "h6", content: "0003317731", styles: "secondary" })), index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` }, index.h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "Starting date" }), index.h("eds-heading", { type: "h6", content: "04.11.2019", styles: "secondary" })), index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` }, index.h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "Meter number" }), index.h("eds-heading", { type: "h6", content: "SAG1030700119520", styles: "secondary" })), index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` }, index.h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "POD number" }), index.h("eds-heading", { type: "h6", content: "LU 0000 0802 5422 4820 0002 0012 ELE0 0000", styles: "secondary" })), index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` }, index.h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "Consumption address" }), index.h("eds-heading", { type: "h6", content: "4 place de Strasbourg, 2562, Luxembourg, LU", styles: "secondary" })), index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.BUTTON}` }, index.h("eds-button", { content: "Close contract", outlined: true, styles: "secondary", onClickButton: () => this.closeContract() })))), index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("iframe", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.MAP}`, src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.8334337749297!2d6.126005015910103!3d49.60089045609219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548d0a13723b9%3A0xe919d3096f187f4!2s4%20Place%20de%20Strasbourg%2C%202562%20Luxembourg!5e0!3m2!1sfr!2sfr!4v1606203908630!5m2!1sfr!2sfr", frameborder: "0", "aria-hidden": "false", tabindex: "0" })))))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionContractDetails.style = sectionContractDetailsCss;

const sectionContractListCss = "[name=view-app-enovos-section-contract-list] .view-app-enovos-section-contract-list__search-field{width:208px}[name=view-app-enovos-section-contract-list] .view-app-enovos-section-contract-list__filter{width:120px}";

const ENOVOSViewAppEnovosSectionContractList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    var _a;
    return [
      index.h("eds-page-header", { pageTitle: "All contracts" }, index.h("div", { slot: "actions" }, index.h("eds-button", { content: "Download consumption", styles: "secondary", outlined: true, "icon-position": "right", size: "md", onClick: this.showConsumptionDownloadDialog }, index.h("eds-icon", { slot: "icon", icon: "download" })), index.h("eds-button", { content: "Connect new", styles: "secondary", outlined: true, "icon-position": "right", size: "md" }, index.h("eds-icon", { slot: "icon", icon: "plus" })))),
      index.h("eds-panel", { headerTitle: "Contracts in detail", headerPaddingTop: "2", headerPaddingBottom: "2", headerWithShadow: true }, index.h("div", { slot: "header-actions" }, index.h("div", { class: `${this.classNames.EL}__search-field` }, index.h("eds-text-field", { placeholder: 'Search', "icon-leading": "search", type: "text" })), index.h("div", { class: `${this.classNames.EL}__filter` }, index.h("eds-dropdown", { id: "status-filter", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => alert('onClickDropdownItem'), data: [
          { label: 'item 1' },
          { label: 'item 2' },
        ] }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": 'Active', "icon-trailing": "chevron-down", "label-inside": 'Status', "label-styles": this.brand, type: "text", "read-only": true })))), index.h("div", { class: `${this.classNames.EL}__filter` }, index.h("eds-dropdown", { id: "type-filter", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => alert('onClickDropdownItem'), data: [
          { label: 'item 1' },
          { label: 'item 2' },
        ] }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": 'All', "icon-trailing": "chevron-down", "label-inside": 'Type', "label-styles": this.brand, type: "text", "read-only": true }))))), index.h("div", { slot: "body-content" }, index.h("eds-data-table", { id: "contracts-list", onClickRowCellButton: e => this.manageClickRowButton(e) }))),
      index.h("eds-advanced-dialog", { id: "consumption-download-dialog", headerTitle: "Consumption download", headerWithShadow: true, footerWithShadow: true }, index.h("div", { slot: "header-content" }, index.h("eds-grid-layout", { alignCenter: true }, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-date-picker", { onClickDatePicker: () => { alert('onClickDatePicker'); } }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": 'From 17.07.2019 to 17.07.2020', placeholder: 'From 17.07.2019 to 17.07.2020', "icon-trailing": "calendar-alt", "label-inside": 'Data timeline', "label-styles": this.brand, type: "text", "read-only": true })))), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { "data-value": "Every quarter hour", placeholder: "Data frequency", "label-inside": "Data frequency", "label-styles": this.brand, "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand, type: "text" })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { placeholder: 'Search', "icon-leading": "search", type: "text" })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-dropdown", { id: "customers-filter", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => { alert('onClickDropdownItem'); }, data: [
          {
            label: 'Item 1',
          },
          {
            label: 'Item 2',
          },
        ] }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": 'All customers', placeholder: 'All customers', debounce: 300, "icon-trailing": "chevron-down", "label-inside": 'Filter by customers', "label-styles": this.brand, type: "text", "read-only": true })))))), index.h("div", { slot: "footer-left" }, index.h("eds-button", { styles: "secondary", content: "Reset all", "text-only": true })), index.h("div", { slot: "footer-right" }, index.h("eds-button", { styles: this.brand, content: "Download 2 .csv" })), ((_a = this.consumptionDownloadItems) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.consumptionDownloadItems.map(item => index.h("eds-contract-item", { "is-checkable": true, "is-checked": true, status: item.status, type: item.type, "customer-id": item.customerId, "customer-name": item.customerName, "contract-id": item.contractId, "contract-address": item.contractAddress, onClickItem: () => { alert('onClickItem'); }, onClickItemCheckbox: () => { alert('onClickItemCheckbox'); }, styles: this.brand }))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionContractList.style = sectionContractListCss;

const sectionContractListEmptyCss = "[name=view-app-enovos-section-contract-list-empty] .view-app-enovos-section-contract-list-empty__search-field{width:208px}[name=view-app-enovos-section-contract-list-empty] .view-app-enovos-section-contract-list-empty__filter{width:120px}[name=view-app-enovos-section-contract-list-empty] .view-app-enovos-section-contract-list-empty__no-results{display:flex;justify-content:center;align-items:center;min-height:600px}";

const ENOVOSViewAppEnovosSectionContractListEmpty = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'view-app-enovos-section-contract-list-empty',
    };
    this.contractsData = [];
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return [
      index.h("eds-page-header", { pageTitle: "All contracts" }, index.h("div", { slot: "actions" }, index.h("eds-button", { content: "Download consumption", styles: "secondary", outlined: true, "icon-position": "right", size: "md" }, index.h("eds-icon", { slot: "icon", icon: "download" })), index.h("eds-button", { content: "Connect new", styles: "secondary", outlined: true, "icon-position": "right", size: "md" }, index.h("eds-icon", { slot: "icon", icon: "plus" })))),
      index.h("eds-panel", { headerTitle: "Contracts in detail", headerPaddingTop: "2", headerPaddingBottom: "2", headerWithShadow: true }, index.h("div", { slot: "header-actions" }, index.h("div", { class: `${this.classNames.EL}__search-field` }, index.h("eds-text-field", { placeholder: 'Search', "icon-leading": "search", type: "text" })), index.h("div", { class: `${this.classNames.EL}__filter` }, index.h("eds-dropdown", { id: "status-filter", "autocomplete-on-focus": true, onClickDropdownItem: () => alert('onClickDropdownItem'), data: [
          { label: 'item 1' },
          { label: 'item 2' },
        ] }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": 'Active', "icon-trailing": "chevron-down", "label-inside": 'Status', type: "text", "read-only": true })))), index.h("div", { class: `${this.classNames.EL}__filter` }, index.h("eds-dropdown", { id: "type-filter", "autocomplete-on-focus": true, onClickDropdownItem: () => alert('onClickDropdownItem'), data: [
          { label: 'item 1' },
          { label: 'item 2' },
        ] }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": 'All', "icon-trailing": "chevron-down", "label-inside": 'Type', type: "text", "read-only": true }))))), index.h("div", { slot: "body-content" }, index.h("div", { class: `${this.classNames.EL}__no-results` }, index.h("eds-no-results", { "main-title": "Sorry, no results found", subtitle: "Unfortunately no contract is matching your selected criteria", "image-url": "https://storage.googleapis.com/lu-ds-enovos/img/no-results.svg" }, index.h("div", { slot: "actions" }, index.h("eds-button", { content: "Start over", styles: "primary" })))))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionContractListEmpty.style = sectionContractListEmptyCss;

const sectionIAmMovingSingleContractCss = "[name=view-app-enovos-section-i-am-moving-single-contract] .view-app-enovos-section-i-am-moving-single-contract__icon-text{display:inline-flex;vertical-align:middle;align-items:center}[name=view-app-enovos-section-i-am-moving-single-contract] .view-app-enovos-section-i-am-moving-single-contract__icon-text .icon{display:block}[name=view-app-enovos-section-i-am-moving-single-contract] .view-app-enovos-section-i-am-moving-single-contract__icon-text>*{display:block}[name=view-app-enovos-section-i-am-moving-single-contract] .view-app-enovos-section-i-am-moving-single-contract__icon-text>*+*{margin-left:8px}[name=view-app-enovos-section-i-am-moving-single-contract] .view-app-enovos-section-i-am-moving-single-contract__sepa-btn{display:inline-block;margin-left:8px}";

const ENOVOSViewAppEnovosSectionIAmMovingSingleContract = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.activeStepId = 'address';
    this.selectedProductId = 'fix-naturstroum';
    this.classNames = {
      EL: 'view-app-enovos-section-i-am-moving-single-contract',
    };
    this.showProductsComparisonDialog = () => {
      const dialog = this.el.querySelector('#products-comparison');
      dialog.displayDialog(true);
    };
    this.renderCurrentStep = () => {
      switch (this.activeStepId) {
        case 'address':
          return this.renderAddressStep();
        case 'dates-and-energy':
          return this.renderDatesAndEnergyStep();
        case 'confirmation':
          return this.renderConfirmationStep();
        default:
          return undefined;
      }
    };
    this.renderAddressStep = () => (index.h("eds-panel", { "header-title": "New address", "header-padding-bottom": "0", "header-no-min-height": true }, index.h("div", { slot: "body-content" }, index.h("eds-fields-group", null, index.h("eds-checkbox", { styles: this.brand || 'primary', inputName: "closeContract", value: "1", label: "I am moving out of Luxembourg and I want to close my contract", size: "md" })), index.h("eds-fields-group", { "main-title": "Address details" }, index.h("eds-grid-layout", { "margin-bottom-1": true }, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { "label-inside": "Street*", "label-styles": this.brand || 'primary', type: "text" })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-3": true, "lg-3": true, "xlg-3": true }, index.h("eds-text-field", { "label-inside": "Number*", "label-styles": this.brand || 'primary', type: "text" })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-3": true, "lg-3": true, "xlg-3": true }, index.h("eds-text-field", { "label-inside": "Floor", "label-styles": this.brand || 'primary', type: "text" })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-2": true, "md-3": true, "lg-3": true, "xlg-3": true }, index.h("eds-text-field", { "label-inside": "Zip code*", "label-styles": this.brand || 'primary', type: "text" })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-6": true, "md-9": true, "lg-9": true, "xlg-9": true }, index.h("eds-text-field", { "label-inside": "City*", "label-styles": this.brand || 'primary', type: "text" })))), index.h("eds-fields-group", { "main-title": "Invoice address" }, index.h("eds-checkbox", { styles: this.brand || 'primary', inputName: "sameInvoiceAddress", value: "1", label: "Invoice address remains the same", size: "md" })))));
    this.renderDatesAndEnergyStep = () => [
      index.h("eds-panel", { "header-title": "End of supply in current address", "header-subtitle": "Please choose energy sources available at your current address", "header-padding-bottom": "0", "header-no-min-height": true }, index.h("div", { slot: "body-content" }, index.h("eds-expandable-card", { isDefaultChecked: true, hideCheckbox: true, onClickCheckbox: () => { alert('onClickCheckbox'); }, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-electricity.svg`, mainTitle: "Electricity", styles: this.brand }, index.h("div", { slot: "expandable-content" }, index.h("eds-fields-group", null, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true }, index.h("eds-date-picker", { onClickDatePicker: () => { alert('onClickDatePicker'); }, styles: this.brand || 'primary' }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": '', "label-inside": "End of supply date*", "label-styles": this.brand || 'primary', "icon-trailing": "calendar-alt", type: "text", "read-only": true })))), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true }, index.h("eds-text-field", { type: "text", "label-inside": "Meter number*", "label-styles": this.brand || 'primary' }))))), index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { type: "text", "label-inside": "Index statement 1", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { type: "text", "label-inside": "Index statement 2", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })))), index.h("eds-fields-group", { "main-title": "Meter photos", "tooltip-content": "tooltip" }, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-2": true, "xs-2": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true }, index.h("eds-uploaded-image", { imageSrc: "https://storage.googleapis.com/lu-ds-enovos/img/example-meter.png", fileName: "example-meter.png", fileSize: "254 kb", height: "112px", onClickView: () => { alert('onClickView'); }, onClickRemove: () => { alert('onClickRemove'); } })), index.h("eds-grid-layout-item", { "xxs-2": true, "xs-2": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true }, index.h("eds-upload-dragger", { styles: this.brand || 'primary', height: "112px" }, index.h("div", { slot: "text" }, "Drag files to upload ", index.h("br", null), "or ", index.h("strong", null, "choose file")))))))), index.h("eds-expandable-card", { isDefaultChecked: false, onClickCheckbox: () => { alert('onClickCheckbox'); }, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-gas.svg`, mainTitle: "Gas", styles: this.brand }))),
      index.h("eds-panel", { "header-title": "Beginning of supply in new address", "header-subtitle": "Please choose energy sources available at you new address", "header-padding-bottom": "0", "header-no-min-height": true }, index.h("div", { slot: "body-content" }, index.h("eds-fields-group", null, index.h("eds-grid-layout", { alignCenter: true }, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-dropdown", { id: "customers-filter", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => { alert('onClickDropdownItem'); }, data: [
          {
            label: 'Item 1',
          },
          {
            label: 'Item 2',
          },
        ] }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": 'Naturstroum', placeholder: 'Recommended product', debounce: 300, "icon-trailing": "chevron-down", "label-inside": 'Recommended product', "label-styles": this.brand, type: "text", "read-only": true })))), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-button", { onClickButton: () => { this.showProductsComparisonDialog(); }, styles: "primary", "text-only": true, content: "Compare products", size: "md" }))), index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true }, index.h("eds-date-picker", { onClickDatePicker: () => { alert('onClickDatePicker'); }, styles: this.brand || 'primary' }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": '', "icon-trailing": "calendar-alt", "label-inside": "Beginning of supply date*", "label-styles": this.brand || 'primary', type: "text", "read-only": true })))), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true }, index.h("eds-text-field", { type: "text", "label-inside": "Meter number*", "label-styles": this.brand || 'primary' }))))), index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { type: "text", "label-inside": "Index statement 1", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-text-field", { type: "text", "label-inside": "Index statement 2", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })))), index.h("eds-fields-group", { "main-title": "Meter photos", "tooltip-content": "tooltip" }, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-2": true, "xs-2": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true }, index.h("eds-upload-dragger", { styles: this.brand || 'primary', height: "112px" }, index.h("div", { slot: "text" }, "Drag files to upload ", index.h("br", null), "or ", index.h("strong", null, "choose file")))))))),
      index.h("eds-panel", { "header-title": "Connect discount", "header-subtitle": "Save 30 euros in first year by activating paperless invoice and SEPA domiciliation", "header-padding-bottom": "0", "header-no-min-height": true }, index.h("div", { slot: "body-content" }, index.h("eds-expandable-card", { isDisabled: true, isRadio: true, onClickCheckbox: () => { alert('onClickCheckbox'); }, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/discount-${this.brand || 'primary'}.svg`, mainTitle: "Activate Connect Discount", styles: this.brand }, index.h("div", { slot: "expandable-content" }, index.h("eds-paragraph", { type: "body-1", "font-weight": "bold" }, "To use Discount connect, SEPA domiciliation should be activated first"), index.h("div", { "margin-top-1": true }, index.h("span", { class: `${this.classNames.EL}__icon-text` }, index.h("span", null, index.h("eds-icon", { icon: "times", styles: "secondary" })), index.h("span", null, index.h("eds-paragraph", { styles: "secondary", type: "body-1" }, "SEPA domiciliation"))), index.h("span", { class: `${this.classNames.EL}__sepa-btn` }, index.h("eds-button", { styles: this.brand || 'primary', size: "sm", content: "Activate SEPA", "icon-position": "right" }, index.h("eds-icon", { slot: "icon", icon: "chevron-right" })))), index.h("div", { "margin-top-1": true }, index.h("span", { class: `${this.classNames.EL}__icon-text` }, index.h("span", null, index.h("eds-icon", { icon: "check", styles: this.brand || 'primary' })), index.h("span", null, index.h("eds-paragraph", { styles: this.brand || 'primary', type: "body-1" }, "Paperless invoice")))))))),
    ];
    this.renderDescriptionListItem = (title, value) => {
      return [
        index.h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, title),
        typeof (value) === 'string' ? index.h("eds-heading", { type: "h6", content: value, styles: "secondary" }) : value,
      ];
    };
    this.renderConfirmationStep = () => [
      index.h("eds-panel", { "header-title": "Confirmation", "header-subtitle": "Please check if everything is correct", "header-padding-bottom": "0", "header-no-min-height": true }, index.h("div", { slot: "body-content" }, index.h("eds-fields-group", { "main-title": "Contact data" }, index.h("eds-grid-layout", null, [
        {
          title: 'Customer ID',
          value: '00000000000',
        },
        {
          title: 'Name',
          value: 'Mr Gilles Hermes',
        },
        {
          title: 'Birth date',
          value: '05.06.2020',
        },
        {
          title: 'E-mail',
          value: 'gilles.hermes@enovos.lu',
        },
        {
          title: 'Phone number',
          value: '000 000 000',
        },
      ].map(item => index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, this.renderDescriptionListItem(item.title, item.value))))), index.h("eds-fields-group", { "main-title": "Current address" }, index.h("div", null, this.renderDescriptionListItem('Address', '31 Domaine du Schlassgoard, 4327, Esch-sur-Alzette, LU'))), index.h("eds-fields-group", { "main-title": "New address" }, index.h("div", null, this.renderDescriptionListItem('Address', '2 Place de Strasbourg, 4th floor, 1631, Luxembourg Ville, LU'))), index.h("eds-fields-group", { "main-title": "Contact data" }, index.h("eds-grid-layout", null, [
        {
          title: 'Energy type',
          value: 'Electricity',
        },
        {
          title: 'End of supply date',
          value: '30.06.2020',
        },
        {
          title: 'Meter number',
          value: '000000000',
        },
        {
          title: 'Index statement 1',
          value: '123456789',
        },
        {
          title: 'Index statement 2',
          value: '-',
        },
      ].map(item => index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, this.renderDescriptionListItem(item.title, item.value)))), index.h("div", { "margin-top-1": true, "margin-bottom-1": true }, this.renderDescriptionListItem('Meter photos', index.h("div", { "margin-top-1": true }, index.h("eds-uploaded-image", { imageSrc: "https://storage.googleapis.com/lu-ds-enovos/img/example-meter.png", fileName: "example-meter.png", fileSize: "254 kb", variation: "list-item" }), index.h("eds-uploaded-image", { imageSrc: "https://storage.googleapis.com/lu-ds-enovos/img/example-meter.png", fileName: "example-meter.png", fileSize: "254 kb", variation: "list-item" }))))), index.h("eds-fields-group", { "main-title": "Beginning of supply in new address" }, index.h("eds-grid-layout", null, [
        {
          title: 'Energy type',
          value: 'Electricity',
        },
        {
          title: 'Beginning of supply date',
          value: '30.06.2020',
        },
        {
          title: 'Meter number',
          value: '000000000',
        },
        {
          title: 'Index statement 1',
          value: '123456789',
        },
        {
          title: 'Index statement 2',
          value: '-',
        },
      ].map(item => index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, this.renderDescriptionListItem(item.title, item.value))))), index.h("eds-fields-group", { "main-title": "Selected electricity offer for new address" }, index.h("eds-grid-layout", null, [
        {
          title: 'Product name',
          value: 'FIX naturstroum',
        },
        {
          title: 'Fixed price duration',
          value: '3 years',
        },
        {
          title: 'Connect discount',
          value: '- € 30.00/year',
        },
      ].map(item => index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, this.renderDescriptionListItem(item.title, item.value))))))),
      index.h("div", { "margin-top-3": true, "margin-left-3": true }, index.h("eds-checkbox", { styles: this.brand || 'primary', inputName: "closeContract", value: "1", label: "I have read and accept the privacy as well as the general conditions of use", size: "md" })),
    ];
    this.renderPreviousAction = () => {
      switch (this.activeStepId) {
        case 'address':
          return undefined;
        case 'dates-and-energy':
          return (index.h("eds-button", { content: "Previous step", styles: "secondary", outlined: true, onClickButton: () => { this.activeStepId = 'address'; } }, index.h("eds-icon", { icon: "chevron-left", slot: "icon" })));
        case 'confirmation':
          return (index.h("eds-button", { content: "Previous step", styles: "secondary", outlined: true, onClickButton: () => { this.activeStepId = 'dates-and-energy'; } }, index.h("eds-icon", { icon: "chevron-left", slot: "icon" })));
        default:
          return undefined;
      }
    };
    this.renderNextAction = () => {
      switch (this.activeStepId) {
        case 'address':
          return (index.h("eds-button", { content: "Next step", styles: this.brand || 'primary', onClickButton: () => { this.activeStepId = 'dates-and-energy'; } }));
        case 'dates-and-energy':
          return (index.h("eds-button", { content: "Next step", styles: this.brand || 'primary', onClickButton: () => { this.activeStepId = 'confirmation'; } }));
        case 'confirmation':
          return (index.h("eds-button", { content: "Send moving request", styles: this.brand || 'primary', onClickButton: () => { alert('Submit form'); } }));
        default:
          return undefined;
      }
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return [
      index.h("eds-page-header", { pageTitle: "I am moving", centered: true }),
      index.h("eds-container", { size: "sm" }, index.h("eds-steps", { id: "steps", styles: this.brand || 'primary', activeItemId: this.activeStepId, items: [
          {
            id: 'address',
            title: 'Address',
            isValid: this.activeStepId === 'dates-and-energy' || this.activeStepId === 'confirmation',
          },
          {
            id: 'dates-and-energy',
            title: 'Dates and energy',
            isValid: this.activeStepId === 'confirmation',
          },
          {
            id: 'confirmation',
            title: 'Confirmation',
          },
        ] }), this.renderCurrentStep(), index.h("eds-grid-layout", { "margin-top-4": true }, index.h("eds-grid-layout-item", { "xxs-2": true, "xs-2": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, this.renderPreviousAction()), index.h("eds-grid-layout-item", { alignContent: "right", "xxs-2": true, "xs-2": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, this.renderNextAction()))),
      index.h("eds-advanced-dialog", { id: "products-comparison", headerTitle: "Electricity product selection", headerIconUrl: "https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-electricity.svg", headerSubtitle: "Select a product and calculate the price" }, index.h("eds-grid-layout", { "margin-bottom-2": true }, index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, index.h("eds-dropdown", { id: "number-of-people", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => { alert('onClickDropdownItem'); }, data: [
          {
            label: 'Item 1',
          },
          {
            label: 'Item 2',
          },
        ] }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "data-value": '4', placeholder: 'Number of people', debounce: 300, "icon-trailing": "chevron-down", "label-inside": 'Number of people', "label-styles": this.brand, type: "text", "read-only": true })))), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-3": true, "md-4": true, "lg-4": true, "xlg-4": true }, index.h("eds-text-field", { type: "text", "label-inside": "Annual consumption", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })), index.h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-3": true, "md-4": true, "lg-4": true, "xlg-4": true }, index.h("eds-button", { styles: this.brand || 'primary', content: "Calculate", expand: true, outlined: true }))), index.h("eds-pricing-table", { styles: this.brand || 'primary', selectedItem: this.selectedProductId, recommendedItem: "naturstroum", inputName: "electricityProductSelection", onClickItem: e => { this.selectedProductId = e.detail; }, items: [
          {
            id: 'fix-naturstroum',
            title: 'FIX naturstroum',
            subtitle: 'Fixed price',
            description: [
              '100% green',
              'Produced in Europe',
              'From hydro sources',
            ],
            monthlyPrice: 64.88,
            yearlyPrice: 778.51,
          },
          {
            id: 'naturstroum',
            title: 'Naturstroum',
            subtitle: 'Flexible price',
            description: [
              '100% green',
              'Produced in Europe',
              'From hydro sources',
              'Certified by an independant institute',
            ],
            monthlyPrice: 69.09,
            yearlyPrice: 829.05,
          },
          {
            id: 'nova-naturstroum',
            title: 'Nova naturstroum',
            subtitle: 'Flexible price',
            description: [
              '100% green',
              'Invest in Luxembourg\'s renewable energy',
              '50% from regional production plants',
              'From solar, wind, hydro and biomass energy',
              'Certified by an independant institute',
            ],
            monthlyPrice: 70.35,
            yearlyPrice: 844.17,
          },
        ] }), index.h("eds-heading", { "margin-top-4": true, styles: "secondary", type: "h6", content: "*Price calculated with the connect discount for a household of 4 people consuming on average 4000 kWh/year." }), index.h("eds-paragraph", { "margin-top-2": true, type: "body-2", styles: "secondary" }, "Non-contractual tarifs valid for residential customers in the low voltage network (40A) on the basis of the values entered in the simulator. This price includes the price of energy, grid usage charges, monthly premium, fixed monthly charge for grid access, compensation fund, consumption tax and 8% VAT."), index.h("div", { slot: "footer-right" }, index.h("eds-button", { styles: "secondary", content: "Cancel", "text-only": true }), index.h("eds-button", { styles: this.brand || 'primary', content: "Apply change" }))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionIAmMovingSingleContract.style = sectionIAmMovingSingleContractCss;

const sectionInvoicesCss = "[name=view-app-enovos-section-invoices] .view-app-enovos-section-invoices__chart__buttons{display:flex;align-items:center;justify-content:flex-end}[name=view-app-enovos-section-invoices] .view-app-enovos-section-invoices__chart__buttons>*:not(:first-child){margin-left:8px}[name=view-app-enovos-section-invoices] .view-app-enovos-section-invoices__icon-text{display:inline-flex;vertical-align:middle;align-items:center}[name=view-app-enovos-section-invoices] .view-app-enovos-section-invoices__icon-text .icon{display:block}[name=view-app-enovos-section-invoices] .view-app-enovos-section-invoices__icon-text>*{display:block}[name=view-app-enovos-section-invoices] .view-app-enovos-section-invoices__icon-text>*+*{margin-left:8px}[name=view-app-enovos-section-invoices] .view-app-enovos-section-invoices__sepa-btn{display:inline-block;margin-left:8px}";

const ENOVOSViewAppEnovosSectionInvoices = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return [
      index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-8": true, "lg-8": true, "xlg-8": true }, index.h("eds-panel", { "header-title": "List of invoices", "header-padding-bottom": "0", "header-no-min-height": true }, index.h("div", { slot: "header-actions" }, index.h("eds-button", { content: "All available", "icon-position": "right", outlined: true, size: "sm", styles: "secondary" }, index.h("eds-icon", { slot: "icon", icon: "calendar-alt" }))), index.h("div", { slot: "body-content" }, index.h("eds-data-table", { id: "invoices-data-table", onClickRowCellButton: () => { alert('onClickRowCellButton'); } })))), index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true, stretchColumn: true, alignContent: "right" }, index.h("eds-panel", { "header-title": "Payment settings", "header-padding-bottom": "0", "header-no-min-height": true }, index.h("div", { slot: "body-content" }, this.quickActions.map(item => index.h("eds-quick-action", { id: item.id, onClickItem: (e) => this.manageQuickActionClick(e.detail.id), styles: this.brand, icon: item.icon, "main-title": item.title }, index.h("div", { slot: "after-titles" }, index.h("eds-badge", { text: "Activated", styles: "success" })))))))),
      index.h("eds-advanced-dialog", { id: "consumption-calculation-dialog", headerTitle: "Consumption calculation method for 000800148000 - Naturstorum Home Mono" }, index.h("eds-expandable-card", { isDefaultChecked: this.consumptionCalculationMethod === 'fixed', onClickCheckbox: () => { this.consumptionCalculationMethod = this.consumptionCalculationMethod === 'fixed' ? '' : 'fixed'; }, isRadio: true, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/consumption-fixed${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`, mainTitle: "Fixed payment", subtitle: "Periodic estimation of consumption", styles: this.brand }), index.h("eds-expandable-card", { isDefaultChecked: this.consumptionCalculationMethod === 'payAsYouGo', onClickCheckbox: () => { this.consumptionCalculationMethod = this.consumptionCalculationMethod === 'payAsYouGo' ? '' : 'payAsYouGo'; }, isRadio: true, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/consumption-smart${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`, mainTitle: "Pay as you go", subtitle: "Pay for what you actually use", styles: this.brand }, index.h("div", { slot: "expandable-content" }, index.h("eds-paragraph", { type: "body-1", "font-weight": "bold" }, "To use this method, SEPA domiciliation should be activated first"), index.h("div", { "margin-top-1": true }, index.h("span", { class: `${this.classNames.EL}__icon-text` }, index.h("span", null, index.h("eds-icon", { icon: "times", styles: "secondary" })), index.h("span", null, index.h("eds-paragraph", { styles: "secondary", type: "body-1" }, "SEPA domiciliation"))), index.h("span", { class: `${this.classNames.EL}__sepa-btn` }, index.h("eds-button", { styles: this.brand || 'primary', size: "sm", content: "Activate SEPA", "icon-position": "right" }, index.h("eds-icon", { slot: "icon", icon: "chevron-right" })))), index.h("div", { "margin-top-1": true }, index.h("span", { class: `${this.classNames.EL}__icon-text` }, index.h("span", null, index.h("eds-icon", { icon: "check", styles: this.brand || 'primary' })), index.h("span", null, index.h("eds-paragraph", { styles: this.brand || 'primary', type: "body-1" }, "Paperless invoice"))))))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionInvoices.style = sectionInvoicesCss;

const sectionLandingPageCss = "[name=view-app-enovos-landing-page] .view-app-enovos-landing-page__list>li{display:flex;align-items:center}[name=view-app-enovos-landing-page] .view-app-enovos-landing-page__list>li:before{display:block;content:\"\";width:8px;height:8px;margin-right:8px;background-color:#F76700;border-radius:8px}";

const ENOVOSViewAppEnovosSectionLandingPage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'view-app-enovos-landing-page',
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return [
      index.h("eds-page-header", { pageTitle: "Customer Portal", centered: true }),
      index.h("eds-container", { size: "sm" }, index.h("eds-panel", { "header-title": "Login to you account now!", "header-subtitle": "Get easy access to", "header-padding-bottom": "0", "header-no-min-height": true, "body-padding-top": "1" }, index.h("div", { slot: "body-content" }, index.h("ul", { class: `${this.classNames.EL}__list` }, index.h("li", null, index.h("eds-paragraph", { type: "body-1", content: "Your invoices" })), index.h("li", null, index.h("eds-paragraph", { type: "body-1", content: "Your contracts" })), index.h("li", null, index.h("eds-paragraph", { type: "body-1", content: "You consumption data" }))), index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "margin-top-1": true, "align-content": "right", "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true }, index.h("span", null, index.h("eds-button", { onClickButton: () => { alert("click"); }, styles: this.brand || 'primary', content: "Log in" }))))), index.h("div", { slot: "footer-content" }, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-paragraph", { type: "body-1", "font-weight": "bold", content: "Don't have an account ?" })), index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true, "align-content": "right" }, index.h("eds-button", { onClickButton: () => { alert('click'); }, styles: "secondary", content: "Register", size: "sm", outlined: true, "icon-position": "right" }, index.h("eds-icon", { slot: "icon", icon: "chevron-right" })))))), index.h("eds-panel", { "margin-top-4": true, "header-title": "Become a customer", "header-subtitle": "100% natural Electricity or Gas for your home", "body-padding-top": "0" }, index.h("div", { slot: "body-content" }, index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "margin-top-3": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-expandable-card", { isRadio: true, inputName: "energy-type", onClickCheckbox: () => { alert('click'); }, icon: "https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-producer.svg", mainTitle: "Electricity", styles: this.brand || 'primary' })), index.h("eds-grid-layout-item", { "margin-top-3": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-expandable-card", { isRadio: true, inputName: "energy-type", onClickCheckbox: () => { alert('click'); }, icon: "https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-gas.svg", mainTitle: "Gas", styles: this.brand || 'primary' })), index.h("eds-grid-layout-item", { "margin-top-3": true, "align-content": "right", "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true }, index.h("span", null, index.h("eds-button", { onClickButton: () => { alert("click"); }, styles: this.brand || 'primary', content: "Show the offer" }))))))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionLandingPage.style = sectionLandingPageCss;

const sectionMyAccountMultipleCss = "[name=view-app-enovos-section-my-account-multiple] .view-app-enovos-section-my-account-multiple__card__buttons{display:flex;align-items:center;justify-content:flex-end;width:100%;margin-top:24px}[name=view-app-enovos-section-my-account-multiple] .view-app-enovos-section-my-account-multiple__card--billing{display:flex;align-items:center;flex-direction:column;justify-content:center}[name=view-app-enovos-section-my-account-multiple] .view-app-enovos-section-my-account-multiple__dialog__header{display:flex;align-items:center;justify-content:space-between}[name=view-app-enovos-section-my-account-multiple] .view-app-enovos-section-my-account-multiple__dialog__footer{display:flex;align-items:center;justify-content:flex-end}";

const ENOVOSViewAppEnovosSectionMyAccountMultiple = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variation = '';
    this.classNames = {
      EL: 'view-app-enovos-section-my-account-multiple',
      CARD: '__card',
      DIALOG: '__dialog',
      HEADER: '__header',
      FOOTER: '__footer',
      BUTTONS: '__buttons',
      BILLING: '--billing',
      CHANGE_PASSWORD: '--change-password',
    };
    this.blockData = [
      {
        id: 'field1',
        label: 'Name',
        value: 'Enovos Luxembourg S.A.',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field2',
        label: 'Username',
        value: 'gilles.hermes@enovos.lu',
        tooltip: 'Lorem ipsum',
      },
      {
        id: 'change-password',
        label: 'Password',
        type: 'password',
        value: 'sdfsdfsdqfsdqfsdq',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Reset',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Language',
        value: 'English',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
    ];
    this.blockData2 = [
      {
        id: 'field1',
        label: 'Customer ID',
        value: '0000000000',
      },
      {
        id: 'field2',
        label: 'Name',
        value: 'Enovos Luxembourg S.A.',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Request change',
          icon: 'pen',
        },
      },
      {
        id: 'field3',
        label: 'Birthday',
        value: '01.01.2020',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Contact email',
        value: 'gilles.hermes@enovos.lu',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Phone number',
        value: '000 000 000',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Address',
        value: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
    ];
    this.connectedCustomerIdsData = [
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
    ];
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    if (this.variation === 'change-password') {
      this.openDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`);
    }
    const table = this.el.querySelector('#connected-customer-ids-data-table');
    const mobileTable = this.el.querySelector('#connected-customer-ids-mobile-data-table');
    if (table) {
      table.columns = [
        'Customer ID',
        'Name',
        'Address',
        '',
      ];
      table.data = this.connectedCustomerIdsData;
      table.columnSizes = [undefined, undefined, undefined, 'fitted'];
      table.sort = [true, true, true, false];
    }
    if (mobileTable) {
      mobileTable.columns = [
        'Customer ID',
        'Name',
        'Address',
        '',
      ];
      mobileTable.data = this.connectedCustomerIdsData;
    }
  }
  clickDataBlockHander(e) {
    switch (e.detail.id) {
      case 'change-password':
        this.openDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`);
        break;
    }
  }
  openDialog(elClass) {
    const dialogItem = this.el.querySelector(elClass);
    if (dialogItem) {
      dialogItem.open();
    }
  }
  closeDialog(elClass) {
    const dialogItem = this.el.querySelector(elClass);
    if (dialogItem) {
      dialogItem.close();
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    if (this.variation === 'detail') {
      return [
        index.h("eds-page-header", { "page-title": "Enovos Luxembourg S.A." }, index.h("div", { slot: "before-title" }, index.h("a", null, index.h("eds-icon", { styles: "secondary", slot: "icon", icon: "arrow-left", size: "6x" })))),
        index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-6": true, "xlg-6": true }, index.h("eds-elevation", { level: "5" }, index.h("eds-card", { "no-border": true }, index.h("div", { slot: "card-content" }, index.h("eds-card", { styles: this.brand || 'primary' }, index.h("div", { slot: "card-content" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.BILLING}` }, index.h("eds-heading", { type: "h6", fontWeight: "bold", "margin-bottom-2": true, content: "This address is used for your billing only", styles: "secondary" }), index.h("eds-paragraph", { type: "body-2", "margin-bottom-2": true, content: "Changing this address does not mean that we will move your contract.<br />If you want to change where contract will be used, please click the button below.", styles: "secondary-500" }), index.h("eds-button", { outlined: true, size: "md", content: "I'm moving" })))), index.h("div", null, index.h("eds-heading", { type: "h5", fontWeight: "bold", "margin-top-2": true, "margin-bottom-2": true, content: "Billing data", styles: "secondary" }), this.blockData2.map(data => index.h("eds-app-data-block", { onClickDataBlock: e => this.clickDataBlockHander(e), data: data })))))))),
        index.h("eds-dialog", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`, columns: 6 }, index.h("div", { slot: "dialog-header" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.HEADER}` }, index.h("eds-heading", { type: "h5", "font-weight": "bold", styles: "left secondary-500", content: "Please check your email" }), index.h("eds-button", { size: "sm", textOnly: true, styles: "secondary", onClickButton: () => this.closeDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`) }, index.h("eds-icon", { slot: "icon", icon: "times" })))), index.h("div", { slot: "dialog-body" }, index.h("eds-paragraph", { type: "body-1", styles: "left secondary-500" }, "You should receive link to reset your password on your email address gilles.hermes@enovos.lu. For further steps, follow email instructions.")), index.h("div", { slot: "dialog-footer" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}` }, index.h("eds-button", { content: "Done", onClickButton: () => this.closeDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`), styles: "primary" })))),
      ];
    }
    return [
      index.h("eds-panel", { headerTitle: "Connected Customer IDs", headerNoMinHeight: true, headerPaddingBottom: "0" }, index.h("div", { slot: "header-actions" }, index.h("div", null, index.h("eds-button", { content: "Connect new", "icon-position": "right", outlined: true, size: "md", styles: "secondary" }, index.h("eds-icon", { slot: "icon", icon: "plus" }))), index.h("div", null, index.h("eds-text-field", { placeholder: 'Search', "icon-leading": "search", size: "sm", type: "text" }))), index.h("div", { slot: "body-content" }, index.h("eds-data-table", { id: "connected-customer-ids-data-table" }), index.h("eds-mobile-data-table", { id: "connected-customer-ids-mobile-data-table" }))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionMyAccountMultiple.style = sectionMyAccountMultipleCss;

const sectionMyAccountSingleCss = "[name=view-app-enovos-section-my-account-single] .view-app-enovos-section-my-account-single__card__buttons{display:flex;align-items:center;justify-content:flex-end;width:100%;margin-top:24px}[name=view-app-enovos-section-my-account-single] .view-app-enovos-section-my-account-single__card--billing{display:flex;align-items:center;flex-direction:column;justify-content:center}[name=view-app-enovos-section-my-account-single] .view-app-enovos-section-my-account-single__dialog__header{display:flex;align-items:center;justify-content:space-between}[name=view-app-enovos-section-my-account-single] .view-app-enovos-section-my-account-single__dialog__footer{display:flex;align-items:center;justify-content:flex-end}";

const ENOVOSViewAppEnovosSectionMyAccountSingle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variation = '';
    this.classNames = {
      EL: 'view-app-enovos-section-my-account-single',
      CARD: '__card',
      DIALOG: '__dialog',
      HEADER: '__header',
      FOOTER: '__footer',
      BUTTONS: '__buttons',
      BILLING: '--billing',
      CHANGE_PASSWORD: '--change-password',
    };
    this.blockData = [
      {
        id: 'field1',
        label: 'Name',
        value: 'Enovos Luxembourg S.A.',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field2',
        label: 'Username',
        value: 'gilles.hermes@enovos.lu',
        tooltip: 'Lorem ipsum',
      },
      {
        id: 'change-password',
        label: 'Password',
        type: 'password',
        value: 'sdfsdfsdqfsdqfsdq',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Reset',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Language',
        value: 'English',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
    ];
    this.blockData2 = [
      {
        id: 'field1',
        label: 'Customer ID',
        value: '0000000000',
      },
      {
        id: 'field2',
        label: 'Name',
        value: 'Enovos Luxembourg S.A.',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Request change',
          icon: 'pen',
        },
      },
      {
        id: 'field3',
        label: 'Birthday',
        value: '01.01.2020',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Contact email',
        value: 'gilles.hermes@enovos.lu',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Phone number',
        value: '000 000 000',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Address',
        value: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
    ];
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    if (this.variation === 'change-password') {
      this.openDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`);
    }
  }
  clickDataBlockHander(e) {
    switch (e.detail.id) {
      case 'change-password':
        this.openDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`);
        break;
    }
  }
  openDialog(elClass) {
    const dialogItem = this.el.querySelector(elClass);
    if (dialogItem) {
      dialogItem.open();
    }
  }
  closeDialog(elClass) {
    const dialogItem = this.el.querySelector(elClass);
    if (dialogItem) {
      dialogItem.close();
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return [
      index.h("eds-page-header", { "page-title": "My account" }, index.h("div", { slot: "actions" }, index.h("eds-button", { outlined: true, size: "md", iconPosition: "right", content: "Connect new Customer ID" }, index.h("eds-icon", { slot: "icon", icon: "plus" })))),
      index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-elevation", { level: "5" }, index.h("eds-card", { "no-border": true }, index.h("div", { slot: "card-content" }, index.h("div", null, index.h("eds-heading", { type: "h5", fontWeight: "bold", "margin-bottom-2": true, content: "Account information", styles: "secondary" }), this.blockData.map(data => index.h("eds-app-data-block", { onClickDataBlock: e => this.clickDataBlockHander(e), data: data })), index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.BUTTONS}` }, index.h("eds-button", { outlined: true, size: "md", content: "Disable this account" }))))))), index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, index.h("eds-elevation", { level: "5" }, index.h("eds-card", { "no-border": true }, index.h("div", { slot: "card-content" }, index.h("eds-card", { styles: this.brand || 'primary' }, index.h("div", { slot: "card-content" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.BILLING}` }, index.h("eds-heading", { type: "h6", fontWeight: "bold", "margin-bottom-2": true, content: "This address is used for your billing only", styles: "secondary" }), index.h("eds-paragraph", { type: "body-2", "margin-bottom-2": true, content: "Changing this address does not mean that we will move your contract.<br />If you want to change where contract will be used, please click the button below.", styles: "secondary-500" }), index.h("eds-button", { outlined: true, size: "md", content: "I'm moving" })))), index.h("div", null, index.h("eds-heading", { type: "h5", fontWeight: "bold", "margin-top-2": true, "margin-bottom-2": true, content: "Billing data", styles: "secondary" }), this.blockData2.map(data => index.h("eds-app-data-block", { onClickDataBlock: e => this.clickDataBlockHander(e), data: data })))))))),
      index.h("eds-dialog", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`, columns: 6 }, index.h("div", { slot: "dialog-header" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.HEADER}` }, index.h("eds-heading", { type: "h5", "font-weight": "bold", styles: "left secondary-500", content: "Please check your email" }), index.h("eds-button", { size: "sm", textOnly: true, styles: "secondary", onClickButton: () => this.closeDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`) }, index.h("eds-icon", { slot: "icon", icon: "times" })))), index.h("div", { slot: "dialog-body" }, index.h("eds-paragraph", { type: "body-1", styles: "left secondary-500" }, "You should receive link to reset your password on your email address gilles.hermes@enovos.lu. For further steps, follow email instructions.")), index.h("div", { slot: "dialog-footer" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}` }, index.h("eds-button", { content: "Done", onClickButton: () => this.closeDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`), styles: "primary" })))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionMyAccountSingle.style = sectionMyAccountSingleCss;

const sectionOverviewCss = "";

const ENOVOSViewAppEnovosSectionOverview = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return [
      index.h("eds-panel", { headerTitle: "Consumption" }, index.h("div", { slot: "header-actions" }, index.h("eds-button", { content: "More details", "icon-position": "right", outlined: true, size: "sm", styles: "secondary", onClickButton: () => {
          this.addChartData();
        } }, index.h("eds-icon", { slot: "icon", icon: "chevron-right" }))), index.h("div", { slot: "body-content" }, index.h("eds-line-chart", { id: "chart", height: 250, "min-width": 800 }))),
      index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-8": true, "xlg-8": true, "margin-top-4": true }, index.h("eds-panel", { fullHeight: true, headerTitle: "Latest invoices", headerNoMinHeight: true, headerPaddingBottom: "0" }, index.h("div", { slot: "header-actions" }, index.h("eds-button", { content: "See all", "icon-position": "right", outlined: true, size: "sm", styles: "secondary" }, index.h("eds-icon", { slot: "icon", icon: "chevron-right" }))), index.h("div", { slot: "body-content" }, index.h("eds-data-table", { "hidden-xxs": true, "hidden-xs": true, "hidden-sm": true, id: "latest-invoices-data-table" }), index.h("eds-mobile-data-table", { "hidden-md": true, "hidden-lg": true, "hidden-xlg": true, id: "latest-invoices-mobile-data-table" })))), index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-4": true, "xlg-4": true, "margin-top-4": true, alignContent: "right" }, index.h("eds-panel", { fullHeight: true, headerTitle: "Quick actions", headerNoMinHeight: true, headerPaddingBottom: "0" }, index.h("div", { slot: "body-content" }, this.quickActions.map(item => index.h("eds-quick-action", { id: item.id, onClickItem: (e) => alert(`onClickItem: ${e.detail}`), styles: this.brand, icon: item.icon, "main-title": item.title, subtitle: item.subtitle, "show-trailing-icon": true })))))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionOverview.style = sectionOverviewCss;

const sectionOverviewCss$1 = "";

const ENOVOSViewAppEnovosSectionOverviewWithSlider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.step = 'overview';
    this.logoOnly = false;
    this.isSliderBeginning = true;
    this.isSliderEnd = true;
    this.classNames = {
      EL: 'view-app-enovos-section-overview-with-slider',
      CARD: '__card',
      QUICK_ACTION: '__quick-action',
      CONTENT: '__content',
      IMAGE: '__image',
      TEXT: '__text',
    };
    this.latestInvoicesData = [
      {
        values: [
          { data: '234,00 €' },
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
          { data: '234,00 €' },
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
    this.addSlides = () => {
      const slider = this.el.querySelector('#bar-chart-slider');
      slider.appendSlide(['chart1', 'chart2', 'chart3', 'chart4', 'chart5'].map(id => `<div>
        <eds-app-periodic-consumption
          id="${id}"
          styles="${this.brand || 'primary'}"
          first-item-title='Period'
          first-item-value='12.11.2028 - 12.11.2019'
          second-item-title='Total consumption'
          second-item-value='700 kWh'
          second-item-caption-icon='arrow-up'
          second-item-caption-styles='error'
          second-item-caption-text='52 kWh'
          chart-max-value="100000"
          chart-min-value="0"
          chart-value="70000"
        />
      </div>`));
    };
    this.slideNext = () => {
      const slider = this.el.querySelector('#bar-chart-slider');
      slider.slideNext();
    };
    this.slidePrev = () => {
      const slider = this.el.querySelector('#bar-chart-slider');
      slider.slidePrev();
    };
    this.onSlideChange = e => {
      this.isSliderBeginning = e.detail.isBeginning;
      this.isSliderEnd = e.detail.isEnd;
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
    this.addSlides();
  }
  componentDidRender() {
    const table = this.el.querySelector('#latest-invoices-data-table');
    if (table) {
      table.columns = [
        'Amount',
        'Invoice ID',
        'Invoice type',
        'Due date',
        'Billing period',
        '',
      ];
      table.data = this.latestInvoicesData;
      table.sort = [true, true, true, true, true, false];
    }
  }
  render() {
    return [
      index.h("eds-panel", { headerTitle: "Consumption", "margin-bottom-4": true, "header-padding-bottom": "0", "header-no-min-height": true }, index.h("div", { slot: "header-actions" }, index.h("eds-button", { disabled: this.isSliderBeginning, outlined: true, size: "sm", styles: "secondary", onClickButton: this.slidePrev }, index.h("eds-icon", { slot: "icon", icon: "chevron-left" })), index.h("eds-button", { disabled: this.isSliderEnd, outlined: true, size: "sm", styles: "secondary", onClickButton: this.slideNext }, index.h("eds-icon", { slot: "icon", icon: "chevron-right" }))), index.h("div", { slot: "body-content" }, index.h("eds-slider", { id: "bar-chart-slider", onSlideChange: this.onSlideChange }))),
      index.h("eds-grid-layout", null, index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-8": true, "lg-8": true, "xlg-8": true }, index.h("eds-panel", { fullHeight: true, headerTitle: "Latest invoices", headerNoMinHeight: true, headerPaddingBottom: "0" }, index.h("div", { slot: "header-actions" }, index.h("eds-button", { content: "See all", "icon-position": "right", outlined: true, size: "sm", styles: "secondary" }, index.h("eds-icon", { slot: "icon", icon: "chevron-right" }))), index.h("div", { slot: "body-content" }, index.h("eds-data-table", { id: "latest-invoices-data-table" })))), index.h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true, alignContent: "right" }, index.h("eds-panel", { fullHeight: true, headerTitle: "Quick actions", headerNoMinHeight: true, headerPaddingBottom: "0" }, index.h("div", { slot: "body-content" }, this.quickActions.map(item => index.h("eds-quick-action", { id: item.id, onClickItem: (e) => alert(`onClickItem: ${e.detail}`), styles: this.brand, icon: item.icon, "main-title": item.title, subtitle: item.subtitle, "show-trailing-icon": true })))))),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSViewAppEnovosSectionOverviewWithSlider.style = sectionOverviewCss$1;

exports.eds_app_dialog_contracts = ENOVOSAppDialogContracts;
exports.eds_app_header = ENOVOSAppHeader;
exports.eds_grid_style_two = ENOVOSGridStyleTwo;
exports.eds_view_app_enovos_section_404 = ENOVOSViewAppEnovosSection404;
exports.eds_view_app_enovos_section_consumption = ENOVOSViewAppEnovosSectionConsumption;
exports.eds_view_app_enovos_section_contract_details = ENOVOSViewAppEnovosSectionContractDetails;
exports.eds_view_app_enovos_section_contract_list = ENOVOSViewAppEnovosSectionContractList;
exports.eds_view_app_enovos_section_contract_list_empty = ENOVOSViewAppEnovosSectionContractListEmpty;
exports.eds_view_app_enovos_section_i_am_moving_single_contract = ENOVOSViewAppEnovosSectionIAmMovingSingleContract;
exports.eds_view_app_enovos_section_invoices = ENOVOSViewAppEnovosSectionInvoices;
exports.eds_view_app_enovos_section_landing_page = ENOVOSViewAppEnovosSectionLandingPage;
exports.eds_view_app_enovos_section_my_account_multiple = ENOVOSViewAppEnovosSectionMyAccountMultiple;
exports.eds_view_app_enovos_section_my_account_single = ENOVOSViewAppEnovosSectionMyAccountSingle;
exports.eds_view_app_enovos_section_overview = ENOVOSViewAppEnovosSectionOverview;
exports.eds_view_app_enovos_section_overview_with_slider = ENOVOSViewAppEnovosSectionOverviewWithSlider;
