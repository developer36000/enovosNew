import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const mobileDataTableCss = ".mobile-data-table__filters-dropdown{display:flex;margin-bottom:16px;cursor:pointer}.mobile-data-table__filters-dropdown .icon{margin-left:8px}.mobile-data-table__group{display:flex;align-items:flex-start;flex-wrap:wrap;padding:0;border-top:solid 1px #EEEEEE}.mobile-data-table__group:first-child{border-top:none}.mobile-data-table__item{padding:8px 8px 8px 0;width:100%}@media (min-width: 321px){.mobile-data-table--columns-count-xs-1 .mobile-data-table__item{width:100%}.mobile-data-table--columns-count-xs-2 .mobile-data-table__item{width:50%}.mobile-data-table--columns-count-xs-3 .mobile-data-table__item{width:33.3333333333%}.mobile-data-table--columns-count-xs-4 .mobile-data-table__item{width:25%}.mobile-data-table--columns-count-xs-5 .mobile-data-table__item{width:20%}.mobile-data-table--columns-count-xs-6 .mobile-data-table__item{width:16.6666666667%}.mobile-data-table--columns-count-xs-7 .mobile-data-table__item{width:14.2857142857%}.mobile-data-table--columns-count-xs-8 .mobile-data-table__item{width:12.5%}.mobile-data-table--columns-count-xs-9 .mobile-data-table__item{width:11.1111111111%}.mobile-data-table--columns-count-xs-10 .mobile-data-table__item{width:10%}.mobile-data-table--columns-count-xs-11 .mobile-data-table__item{width:9.0909090909%}.mobile-data-table--columns-count-xs-12 .mobile-data-table__item{width:8.3333333333%}}@media (min-width: 640px){.mobile-data-table--columns-count-sm-1 .mobile-data-table__item{width:100%}.mobile-data-table--columns-count-sm-2 .mobile-data-table__item{width:50%}.mobile-data-table--columns-count-sm-3 .mobile-data-table__item{width:33.3333333333%}.mobile-data-table--columns-count-sm-4 .mobile-data-table__item{width:25%}.mobile-data-table--columns-count-sm-5 .mobile-data-table__item{width:20%}.mobile-data-table--columns-count-sm-6 .mobile-data-table__item{width:16.6666666667%}.mobile-data-table--columns-count-sm-7 .mobile-data-table__item{width:14.2857142857%}.mobile-data-table--columns-count-sm-8 .mobile-data-table__item{width:12.5%}.mobile-data-table--columns-count-sm-9 .mobile-data-table__item{width:11.1111111111%}.mobile-data-table--columns-count-sm-10 .mobile-data-table__item{width:10%}.mobile-data-table--columns-count-sm-11 .mobile-data-table__item{width:9.0909090909%}.mobile-data-table--columns-count-sm-12 .mobile-data-table__item{width:8.3333333333%}}@media (min-width: 864px){.mobile-data-table--columns-count-md-1 .mobile-data-table__item{width:100%}.mobile-data-table--columns-count-md-2 .mobile-data-table__item{width:50%}.mobile-data-table--columns-count-md-3 .mobile-data-table__item{width:33.3333333333%}.mobile-data-table--columns-count-md-4 .mobile-data-table__item{width:25%}.mobile-data-table--columns-count-md-5 .mobile-data-table__item{width:20%}.mobile-data-table--columns-count-md-6 .mobile-data-table__item{width:16.6666666667%}.mobile-data-table--columns-count-md-7 .mobile-data-table__item{width:14.2857142857%}.mobile-data-table--columns-count-md-8 .mobile-data-table__item{width:12.5%}.mobile-data-table--columns-count-md-9 .mobile-data-table__item{width:11.1111111111%}.mobile-data-table--columns-count-md-10 .mobile-data-table__item{width:10%}.mobile-data-table--columns-count-md-11 .mobile-data-table__item{width:9.0909090909%}.mobile-data-table--columns-count-md-12 .mobile-data-table__item{width:8.3333333333%}}@media (min-width: 1152px){.mobile-data-table--columns-count-lg-1 .mobile-data-table__item{width:100%}.mobile-data-table--columns-count-lg-2 .mobile-data-table__item{width:50%}.mobile-data-table--columns-count-lg-3 .mobile-data-table__item{width:33.3333333333%}.mobile-data-table--columns-count-lg-4 .mobile-data-table__item{width:25%}.mobile-data-table--columns-count-lg-5 .mobile-data-table__item{width:20%}.mobile-data-table--columns-count-lg-6 .mobile-data-table__item{width:16.6666666667%}.mobile-data-table--columns-count-lg-7 .mobile-data-table__item{width:14.2857142857%}.mobile-data-table--columns-count-lg-8 .mobile-data-table__item{width:12.5%}.mobile-data-table--columns-count-lg-9 .mobile-data-table__item{width:11.1111111111%}.mobile-data-table--columns-count-lg-10 .mobile-data-table__item{width:10%}.mobile-data-table--columns-count-lg-11 .mobile-data-table__item{width:9.0909090909%}.mobile-data-table--columns-count-lg-12 .mobile-data-table__item{width:8.3333333333%}}@media (min-width: 1440px){.mobile-data-table--columns-count-xlg-1 .mobile-data-table__item{width:100%}.mobile-data-table--columns-count-xlg-2 .mobile-data-table__item{width:50%}.mobile-data-table--columns-count-xlg-3 .mobile-data-table__item{width:33.3333333333%}.mobile-data-table--columns-count-xlg-4 .mobile-data-table__item{width:25%}.mobile-data-table--columns-count-xlg-5 .mobile-data-table__item{width:20%}.mobile-data-table--columns-count-xlg-6 .mobile-data-table__item{width:16.6666666667%}.mobile-data-table--columns-count-xlg-7 .mobile-data-table__item{width:14.2857142857%}.mobile-data-table--columns-count-xlg-8 .mobile-data-table__item{width:12.5%}.mobile-data-table--columns-count-xlg-9 .mobile-data-table__item{width:11.1111111111%}.mobile-data-table--columns-count-xlg-10 .mobile-data-table__item{width:10%}.mobile-data-table--columns-count-xlg-11 .mobile-data-table__item{width:9.0909090909%}.mobile-data-table--columns-count-xlg-12 .mobile-data-table__item{width:8.3333333333%}}.mobile-data-table__item .heading{word-wrap:break-word}.mobile-data-table__item--button{padding:0}";

const ENOVOSMobileDataTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.columnsCountXs = 2;
    this.columnsCountSm = 3;
    this.columnsCountMd = 4;
    this.columnsCountLg = 4;
    this.columnsCountXlg = 4;
    this.classNames = {
      EL: 'mobile-data-table',
    };
    this.getItemClassName = value => {
      let itemClassName = `${this.classNames.EL}__item`;
      if (value.props) {
        itemClassName += ` ${this.classNames.EL}__item--${value.props.type}`;
      }
      return itemClassName;
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      className += ` ${className} ${this.classNames.EL}--columns-count-xs-${this.columnsCountXs}`;
      className += ` ${className} ${this.classNames.EL}--columns-count-sm-${this.columnsCountSm}`;
      className += ` ${className} ${this.classNames.EL}--columns-count-md-${this.columnsCountMd}`;
      className += ` ${className} ${this.classNames.EL}--columns-count-lg-${this.columnsCountLg}`;
      className += ` ${className} ${this.classNames.EL}--columns-count-xlg-${this.columnsCountXlg}`;
      return className;
    };
    this.renderValue = value => {
      if (value.props) {
        switch (value.props.type) {
          case 'button':
            return (h("eds-button", { "margin-bottom-1": true, styles: value.props.styles || 'secondary', "text-only": !!value.props.textOnly, onClickButton: value.props.onClickButton }, h("eds-icon", { icon: value.props.icon, slot: "icon" })));
          case 'html':
            return value;
          default:
            return h("eds-paragraph", { type: "body-1", content: value.data });
        }
      }
      return h("eds-paragraph", { type: "body-1", content: value.data });
    };
  }
  componentWillRender() {
    this.groups = this.data && this.data.length > 0 ? this.data.map(dataItem => {
      const groupItems = dataItem.values.map((value, index) => {
        return {
          title: this.columns[index],
          value,
        };
      });
      return groupItems;
    }) : [];
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
    return (h("div", { class: this.getComponentClassName() }, this.groups.map(group => h("div", { class: `${this.classNames.EL}__group` }, group.map(item => h("span", { class: this.getItemClassName(item.value) }, item.title &&
      h("eds-paragraph", { "font-weight": "bold", type: "body-2", content: item.title }), this.renderValue(item.value)))))));
  }
  get el() { return getElement(this); }
};
ENOVOSMobileDataTable.style = mobileDataTableCss;

export { ENOVOSMobileDataTable as eds_mobile_data_table };
