import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import './isSymbol-94e88fb4.js';
import './toString-e72a88e9.js';
import './isObject-7039fcda.js';
import './_MapCache-a3ede28d.js';
import './_baseIsEqual-c6b81f6e.js';
import { s as set } from './set-913bca4c.js';
import { g as get } from './_hasPath-4dd0f44a.js';
import './_arrayPush-7955b731.js';
import './_setToArray-60932de0.js';
import { h as has } from './has-1e48d487.js';
import { i as isEqual } from './isEqual-1c3df692.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

class AppQuickAction {
  constructor(obj) {
    if (obj instanceof AppQuickAction) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
  setProp(key, value) {
    set(this, key, value);
  }
}

const appQuickActionsCss = "[name=app-quick-actions]{display:block}[name=app-quick-actions]:not(:last-of-type){margin-bottom:16px}[name=app-quick-actions] .app-quick-actions__card__quick-action__content{display:flex;align-items:center;justify-content:space-between}[name=app-quick-actions] .app-quick-actions__card__quick-action__content__image{flex:0 1 56px}[name=app-quick-actions] .app-quick-actions__card__quick-action__content__text{flex:1 0 auto;text-align:left;padding-left:16px}";

const ENOVOSAppQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickQuickAction = createEvent(this, "clickQuickAction", 7);
    this.styles = 'primary';
    this.classNames = {
      EL: 'app-quick-actions',
      CARD: '__card',
      QUICK_ACTION: '__quick-action',
      CONTENT: '__content',
      IMAGE: '__image',
      TEXT: '__text',
    };
  }
  async setData(data) {
    this.data = data;
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData)) {
      this.initData();
    }
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.initData();
  }
  initData() {
    this.contractData = new AppQuickAction(this.data);
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
  }
  render() {
    if (this.contractData) {
      return (h("eds-card", { clickable: true, onClickCard: () => this.clickQuickAction.emit(this.contractData), class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}`, size: "sm" }, h("div", { slot: "card-content" }, h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}` }, h("eds-image", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}${this.classNames.IMAGE}`, size: "6x", src: this.contractData.getProp('icon') }), h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}${this.classNames.TEXT}` }, h("eds-paragraph", { type: "h6", styles: `${this.styles}-500`, "font-weight": "bold" }, this.contractData.getProp('title')), h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, this.contractData.getProp('subtitle'))), h("eds-icon", { size: "3x", styles: "secondary-500", icon: "chevron-right" })))));
    }
    else {
      return h("div", null);
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["watchItemsHandler"]
  }; }
};
ENOVOSAppQuickActions.style = appQuickActionsCss;

export { ENOVOSAppQuickActions as eds_app_quick_actions };
