import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import './isSymbol-94e88fb4.js';
import './toString-e72a88e9.js';
import './isObject-7039fcda.js';
import './_MapCache-a3ede28d.js';
import './_baseIsEqual-c6b81f6e.js';
import './_hasPath-4dd0f44a.js';
import './_arrayPush-7955b731.js';
import './_setToArray-60932de0.js';
import './has-1e48d487.js';
import { i as isEqual } from './isEqual-1c3df692.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { L as ListItem } from './list-item-ad10858f.js';

const listCss = "[name=list]{display:block}[name=list] .list{padding:0;list-style:none}[name=list] .list li{display:flex;align-items:flex-start;margin:0;font-family:\"Montserrat\", sans-serif}[name=list] .list li:empty{padding:0;line-height:normal}[name=list] .list li:empty:before{opacity:0}[name=list] .list li:before{display:inline-block;flex-shrink:0;content:\"\"}[name=list] .list li:last-child{padding-bottom:0 !important}[name=list] .list__icon{display:flex;-ms-grid-row-align:center;align-self:center;flex-shrink:0}[name=list] .list--align-right li{flex-direction:row-reverse}[name=list] .list--with-icon li:before{display:none}[name=list] .list--superhero li{font-size:72px;font-weight:400;line-height:96px}[name=list] .list--hero li{font-size:60px;font-weight:400;line-height:88px}[name=list] .list--h1 li{font-size:40px;font-weight:700;line-height:60px}[name=list] .list--body-1 li{font-size:14px;font-weight:400;line-height:32px}[name=list] .list--h2 li{font-size:24px;font-weight:700;line-height:32px}[name=list] .list--body-2 li{font-size:12px;font-weight:400;line-height:16px}[name=list] .list--h3 li{font-size:34px;font-weight:400;line-height:48px}[name=list] .list--body-3 li{font-size:10px;font-weight:400;line-height:16px}[name=list] .list--h4 li{font-size:28px;font-weight:400;line-height:40px}[name=list] .list--h5 li{font-size:20px;font-weight:400;line-height:32px}[name=list] .list--h6 li{font-size:16px;font-weight:400;line-height:32px}[name=list] .list--small li{font-size:8px;font-weight:400;line-height:16px}[name=list] .list li{color:#5E5E5E}[name=list] .list li:before{background-color:#5E5E5E}[name=list] .list__icon{color:#5E5E5E}[name=list] .list{margin:0}[name=list] .list li{padding:0 0 8px 4px}[name=list] .list li:before{width:4px;height:4px;margin-right:8px;border-radius:4px}[name=list] .list li .list__icon{margin-right:8px}[name=list] .list--superhero li:before{margin-top:46px}[name=list] .list--hero li:before{margin-top:42px}[name=list] .list--h1 li:before{margin-top:28px}[name=list] .list--body-1 li:before{margin-top:14px}[name=list] .list--h2 li:before{margin-top:14px}[name=list] .list--body-2 li:before{margin-top:6px}[name=list] .list--h3 li:before{margin-top:22px}[name=list] .list--body-3 li:before{margin-top:6px}[name=list] .list--h4 li:before{margin-top:18px}[name=list] .list--h5 li:before{margin-top:14px}[name=list] .list--h6 li:before{margin-top:14px}[name=list] .list--small li:before{margin-top:6px}[name=list] .list--align-right li{padding:0 4px 8px 0}[name=list] .list--align-right li:before,[name=list] .list--align-right li .list__icon{margin-right:inherit;margin-left:8px}[name=list] .list--with-icon.list--superhero li:before{margin-top:104px}[name=list] .list--with-icon.list--hero li:before{margin-top:96px}[name=list] .list--with-icon.list--h1 li{line-height:68px}[name=list] .list--with-icon.list--body-1 li{line-height:40px}[name=list] .list--with-icon.list--h2 li{line-height:40px}[name=list] .list--with-icon.list--body-2 li{line-height:24px}[name=list] .list--with-icon.list--h3 li{line-height:56px}[name=list] .list--with-icon.list--body-3 li{line-height:24px}[name=list] .list--with-icon.list--h4 li{line-height:48px}[name=list] .list--with-icon.list--h5 li{line-height:40px}[name=list] .list--with-icon.list--h6 li{line-height:40px}[name=list] .list--with-icon.list--small li:before{line-height:24px}";

const ENOVOSList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.typographyCategory = 'body-1';
    this.items = [];
    this.listItems = [];
    this.classNames = {
      EL: 'list',
      ICON: '__icon',
    };
  }
  /** INJECT_ANCHOR */
  componentWillLoad() {
    this.initData();
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
  /**
   * @description Add datalist to the component
   * Replace the div container by a documentFragment in case there's a
   * new call to setDatalist for an update for example
   * @param {Object} data The data to be display
   */
  async setListItems(data) {
    this.items = data;
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && Array.isArray(newData) && newData.length > 0) {
      this.initData();
    }
  }
  initData() {
    this.listItems = [];
    this.items.map(item => {
      const listItem = new ListItem(item);
      this.listItems.push(listItem);
    });
  }
  /**
   * @description Control if a icon parameter should be display
   * @return {boolean}
   */
  hasIcon() {
    return (this.icon && this.icon !== undefined) ? true : false;
  }
  /**
   * @description Get alignment class
   * @return {string}
   */
  getAlignmentClass() {
    if (this.align && this.align === 'right') {
      return `${this.classNames.EL}--align-right`;
    }
    return '';
  }
  /**
   * @description Get icon class
   * @return {string}
   */
  getIconClass() {
    if (this.hasIcon()) {
      return `${this.classNames.EL}--with-icon`;
    }
    return '';
  }
  /**
   * @description Get size class
   * @return {string}
   */
  getTypographyCategoryClass() {
    if (this.typographyCategory && ['superhero', 'hero', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-1', 'body-2', 'body-3', 'small'].includes(this.typographyCategory)) {
      return `${this.classNames.EL}--${this.typographyCategory}`;
    }
    return '';
  }
  /** REMOVABLE START */
  render() {
    return (h("ul", { class: [
        this.classNames.EL,
        this.getAlignmentClass(),
        this.getIconClass(),
        this.getTypographyCategoryClass(),
      ].join(' ') }, this.listItems.map(listItem => h("li", { class: [
        listItem.getProp('styles'),
      ].join(' ') }, this.hasIcon()
      ? h("eds-icon", { class: `${this.classNames.EL}${this.classNames.ICON}`, icon: this.icon, size: "4", styles: this.iconStyles })
      : '', listItem.getProp('content'), listItem.getProp('styles')))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"]
  }; }
};
ENOVOSList.style = listCss;

export { ENOVOSList as eds_list };
