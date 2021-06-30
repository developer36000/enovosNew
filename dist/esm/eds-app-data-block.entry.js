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
import { v as v4_1 } from './v4-4d460ace.js';

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
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
  setProp(key, value) {
    set(this, key, value);
  }
}

const appDataBlockCss = "[name=app-data-block]{display:flex;align-items:center;justify-content:space-between}[name=app-data-block]:not(:last-of-type){margin-bottom:16px}[name=app-data-block] .app-data-block__field__value{display:flex;align-items:center;justify-content:flex-start;margin-top:4px}[name=app-data-block] .app-data-block__field__value__tooltip{margin-left:8px}[name=app-data-block] .app-data-block__button{flex-shrink:1}";

const ENOVOSAppDataBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickDataBlock = createEvent(this, "clickDataBlock", 7);
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
    if (!isEqual(newData, oldData)) {
      this.initData();
    }
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.uuid = v4_1();
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    if (this.blockData) {
      return [
        h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}` }, h("eds-paragraph", { type: "body-2", styles: "secondary-500", fontWeight: "bold", content: this.blockData.getProp('label') }), h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.VALUE}` }, h("eds-heading", { type: "h6", styles: "secondary-500", content: this.blockData.getProp('value') }), this.blockData.hasProp('tooltip') ?
          h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.VALUE}${this.classNames.TOOLTIP}` }, h("eds-icon", { id: `tooltip_${this.uuid}`, styles: "secondary-500", icon: "question-circle", size: "2" }), h("eds-tooltip", { selector: `tooltip_${this.uuid}`, text: this.blockData.getProp('tooltip') }))
          : '')),
        this.blockData.hasProp('button') ?
          h("eds-button", { class: `${this.classNames.EL}${this.classNames.BUTTON}`, onClickButton: () => this.clickDataBlock.emit(this.blockData), content: this.blockData.getProp('button.content'), styles: "secondary", iconPosition: "left", size: "md", textOnly: true }, h("eds-icon", { slot: "icon", icon: this.blockData.getProp('button.icon') }))
          : '',
      ];
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
ENOVOSAppDataBlock.style = appDataBlockCss;

export { ENOVOSAppDataBlock as eds_app_data_block };
