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
const v4 = require('./v4-378e0891.js');

class AppDataBlock {
  constructor(obj) {
    if (obj instanceof AppDataBlock) {
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

const appDataBlockCss = "[name=app-data-block]{display:flex;align-items:center;justify-content:space-between}[name=app-data-block]:not(:last-of-type){margin-bottom:16px}[name=app-data-block] .app-data-block__field__value{display:flex;align-items:center;justify-content:flex-start;margin-top:4px}[name=app-data-block] .app-data-block__field__value__tooltip{margin-left:8px}[name=app-data-block] .app-data-block__button{flex-shrink:1}";

const ENOVOSAppDataBlock = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickDataBlock = index.createEvent(this, "clickDataBlock", 7);
    this.classNames = {
      EL: 'app-data-block',
      FIELD: '__field',
      VALUE: '__value',
      TOOLTIP: '__tooltip',
      BUTTON: '__button',
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
    this.uuid = v4.v4_1();
    this.initData();
  }
  initData() {
    this.blockData = this.data ? new AppDataBlock(this.data) : undefined;
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
    if (this.blockData) {
      return [
        index.h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}` }, index.h("eds-paragraph", { type: "body-2", styles: "secondary-500", fontWeight: "bold", content: this.blockData.getProp('label') }), index.h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.VALUE}` }, index.h("eds-heading", { type: "h6", styles: "secondary-500", content: this.blockData.getProp('value') }), this.blockData.hasProp('tooltip') ?
          index.h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.VALUE}${this.classNames.TOOLTIP}` }, index.h("eds-icon", { id: `tooltip_${this.uuid}`, styles: "secondary-500", icon: "question-circle", size: "2" }), index.h("eds-tooltip", { selector: `tooltip_${this.uuid}`, text: this.blockData.getProp('tooltip') }))
          : '')),
        this.blockData.hasProp('button') ?
          index.h("eds-button", { class: `${this.classNames.EL}${this.classNames.BUTTON}`, onClickButton: () => this.clickDataBlock.emit(this.blockData), content: this.blockData.getProp('button.content'), styles: "secondary", iconPosition: "left", size: "md", textOnly: true }, index.h("eds-icon", { slot: "icon", icon: this.blockData.getProp('button.icon') }))
          : '',
      ];
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
ENOVOSAppDataBlock.style = appDataBlockCss;

exports.eds_app_data_block = ENOVOSAppDataBlock;
