import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const contractItemCss = "[name=contract-item]{display:block}[name=contract-item]+[name=contract-item]{margin-top:8px}.contract-item__content{display:flex;align-items:center;justify-content:flex-start;overflow-y:auto}@media (min-width: 640px){.contract-item__before-text{display:flex}}.contract-item__before-text>div+div{margin-top:8px}@media (min-width: 640px){.contract-item__before-text>div+div{margin-left:16px;margin-top:0}}.contract-item__before-text+.contract-item__text{margin-left:16px}.contract-item__customer,.contract-item__contract{color:#5E5E5E;font-size:14px;font-weight:400;line-height:24px;font-family:\"Montserrat\", sans-serif}.contract-item__customer{font-weight:700}.contract-item__contract{margin-left:8px}.contract-item__checkbox{overflow:hidden}";

const ENOVOSContractItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickItem = createEvent(this, "clickItem", 7);
    this.clickItemCheckbox = createEvent(this, "clickItemCheckbox", 7);
    this.isCheckable = false;
    this.isChecked = false;
    this.classNames = {
      EL: 'contract-item',
    };
    this.onClickItem = props => {
      this.clickItem.emit(props);
    };
    this.onClickItemCheckbox = props => {
      this.clickItemCheckbox.emit(props);
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.isChecked) {
        className += ` ${this.classNames.EL}--is-checked`;
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
    return (h("div", { class: this.getComponentClassName() }, h("eds-card", { size: "sm", clickable: true, class: `${this.classNames.EL}__card`, styles: this.isChecked ? this.styles || 'primary' : undefined, onClickCard: () => {
        this.onClickItem({ contractId: this.contractId, customerId: this.customerId });
      } }, h("div", { slot: "card-content" }, h("div", { class: `${this.classNames.EL}__content` }, this.isCheckable &&
      h("div", { class: `${this.classNames.EL}__checkbox` }, h("eds-checkbox", { selected: !!this.isChecked, styles: this.styles, onClickCheckbox: () => {
          this.onClickItemCheckbox({ contractId: this.contractId, customerId: this.customerId });
        }, size: "md", inputName: `${this.contractId}.${this.customerId}` })), h("div", { class: `${this.classNames.EL}__before-text` }, h("div", { class: `${this.classNames.EL}__type` }, h("eds-contract-type-icon", { type: this.type })), h("div", { class: `${this.classNames.EL}__status` }, h("eds-status-icon", { status: this.status }))), h("div", { class: `${this.classNames.EL}__text` }, h("span", { class: `${this.classNames.EL}__customer` }, this.customerId, " - ", this.customerName), h("span", { class: `${this.classNames.EL}__contract` }, this.contractId, " - ", this.contractAddress)))))));
  }
  get el() { return getElement(this); }
};
ENOVOSContractItem.style = contractItemCss;

const contractTypeIconCss = "[name=contract-type-icon]{display:block;width:24px;height:24px;overflow:hidden}.contract-type-icon{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.contract-type-icon svg{display:block;font-size:1px;max-width:100%;max-height:100%}";

const ENOVOSContractTypeIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classNames = {
      EL: 'contract-type-icon',
    };
    this.renderIcon = type => {
      switch (type) {
        case 'gas':
          return (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "32", viewBox: "0 0 24 32" }, h("g", { fill: "#3A94D0", transform: "translate(-13 -8)" }, h("path", { d: "M35 26.274c0 3.137-.918 5.907-2.654 8.014l-1.175 1.426.526-1.77c.25-.842.371-1.617.371-2.376 0-2.065-1.291-5.914-7.439-12.529l-.004-.004-.022.026c-6.134 6.611-7.421 10.451-7.421 12.508 0 .758.121 1.534.371 2.375l.526 1.77-1.175-1.425c-1.736-2.108-2.654-4.878-2.654-8.015 0-5.803 7.742-13.724 10.114-16.012l.261-.252.26.25C27.258 12.546 35 20.449 35 26.274M25.991 37.73l-.368.05a7.121 7.121 0 01-.998.088c-.392 0-.754-.052-1.105-.1l-.239-.034c-2.955-.577-4.849-2.995-4.849-6.166 0-1.372.768-4.537 5.913-10.324l.28-.316.28.316c5.145 5.788 5.913 8.953 5.913 10.325 0 3.164-1.894 5.582-4.827 6.162M13 26.273c0 7.563 4.78 12.844 11.625 12.844S36.25 33.837 36.25 26.274c0-4.672-4.554-11.822-11.625-18.274C17.554 14.45 13 21.6 13 26.274" }))));
        case 'producer':
          return (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "32", viewBox: "0 0 20 32" }, h("g", { fill: "#79C842", transform: "translate(-15 -8)" }, h("path", { d: "M22.444 37.322l3.152-13.328h-9.33l1.97-14.744h8.714l-3.281 10h9.239L22.444 37.322zm11.655-18.758a1.11 1.11 0 00-.973-.564h-7.73l2.823-8.605a1.116 1.116 0 00-.205-.957A1.118 1.118 0 0027.126 8h-9a1.13 1.13 0 00-1.116.974l-2 15a1.125 1.125 0 001.116 1.276h7.893l-2.991 12.618a1.12 1.12 0 00.21.954c.466.587 1.483.51 1.857-.135l11-19c.205-.35.207-.77.004-1.123z" }))));
        case 'electricity':
          return (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "32", viewBox: "0 0 20 32" }, h("g", { fill: "#F76700", transform: "translate(-15 -8)" }, h("path", { d: "M22.444 37.322l3.152-13.328h-9.33l1.97-14.744h8.714l-3.281 10h9.239L22.444 37.322zm11.655-18.758a1.11 1.11 0 00-.973-.564h-7.73l2.823-8.605a1.116 1.116 0 00-.205-.957A1.118 1.118 0 0027.126 8h-9a1.13 1.13 0 00-1.116.974l-2 15a1.125 1.125 0 001.116 1.276h7.893l-2.991 12.618a1.12 1.12 0 00.21.954c.466.587 1.483.51 1.857-.135l11-19c.205-.35.207-.77.004-1.123z" }))));
        default:
          return undefined;
      }
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
    return (h("div", { class: `${this.classNames.EL}` }, this.renderIcon(this.type)));
  }
  get el() { return getElement(this); }
};
ENOVOSContractTypeIcon.style = contractTypeIconCss;

const statusIconCss = "[name=status-icon]{display:inline-block}.status-icon{border-radius:4px;width:100%;height:100%;display:flex;justify-content:center;align-items:center;font-size:16px;min-height:24px;min-width:24px}.status-icon--with-text{padding:0 12px 0 8px;min-height:32px;font-size:20px}.status-icon--closed{background-color:#FDE5E5;color:#EB0000}.status-icon--open{background-color:#E5F2F0;color:#00856A}.status-icon__icon{display:block}.status-icon__icon .icon{display:block}.status-icon__text{display:block;margin-left:8px;white-space:nowrap;color:inherit}";

const ENOVOSStatusIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classNames = {
      EL: 'status-icon',
    };
    this.renderIcon = status => {
      switch (status) {
        case 'open':
          return (h("eds-icon", { icon: "check" }));
        case 'closed':
          return (h("eds-icon", { icon: "times" }));
        default:
          return undefined;
      }
    };
    this.getComponentClassName = () => {
      let className = `${this.classNames.EL} ${this.classNames.EL}--${this.status}`;
      if (this.text) {
        className += ` ${this.classNames.EL}--with-text`;
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
    return (h("div", { class: this.getComponentClassName() }, h("span", { class: `${this.classNames.EL}__icon` }, this.renderIcon(this.status)), this.text &&
      h("eds-heading", { class: `${this.classNames.EL}__text`, type: "h6", content: this.text })));
  }
  get el() { return getElement(this); }
};
ENOVOSStatusIcon.style = statusIconCss;

export { ENOVOSContractItem as eds_contract_item, ENOVOSContractTypeIcon as eds_contract_type_icon, ENOVOSStatusIcon as eds_status_icon };
