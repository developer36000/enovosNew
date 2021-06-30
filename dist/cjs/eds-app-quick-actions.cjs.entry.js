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
    return _hasPath.get(this, key);
  }
  hasProp(key) {
    return has.has(this, key);
  }
  setProp(key, value) {
    set.set(this, key, value);
  }
}

const appQuickActionsCss = "[name=app-quick-actions]{display:block}[name=app-quick-actions]:not(:last-of-type){margin-bottom:16px}[name=app-quick-actions] .app-quick-actions__card__quick-action__content{display:flex;align-items:center;justify-content:space-between}[name=app-quick-actions] .app-quick-actions__card__quick-action__content__image{flex:0 1 56px}[name=app-quick-actions] .app-quick-actions__card__quick-action__content__text{flex:1 0 auto;text-align:left;padding-left:16px}";

const ENOVOSAppQuickActions = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickQuickAction = index.createEvent(this, "clickQuickAction", 7);
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
    if (!isEqual.isEqual(newData, oldData)) {
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    if (this.contractData) {
      return (index.h("eds-card", { clickable: true, onClickCard: () => this.clickQuickAction.emit(this.contractData), class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}`, size: "sm" }, index.h("div", { slot: "card-content" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}` }, index.h("eds-image", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}${this.classNames.IMAGE}`, size: "6x", src: this.contractData.getProp('icon') }), index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}${this.classNames.TEXT}` }, index.h("eds-paragraph", { type: "h6", styles: `${this.styles}-500`, "font-weight": "bold" }, this.contractData.getProp('title')), index.h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, this.contractData.getProp('subtitle'))), index.h("eds-icon", { size: "3x", styles: "secondary-500", icon: "chevron-right" })))));
    }
    else {
      return index.h("div", null);
    }
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["watchItemsHandler"]
  }; }
};
ENOVOSAppQuickActions.style = appQuickActionsCss;

exports.eds_app_quick_actions = ENOVOSAppQuickActions;
