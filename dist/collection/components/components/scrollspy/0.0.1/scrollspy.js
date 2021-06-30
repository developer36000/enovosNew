import { Component, Element, Prop, State, Watch, h } from '@stencil/core';
import { compact, debounce, filter, findLast, get, has, isEqual, maxBy } from 'lodash-es';
import { ScrollspyItem } from '../../../../models/components/scrollspy-item';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { IsVisibleObservable } from '../../../../utils/isVisibleObservable';
/**
 * @name Scrollspy
 * @description Scrollspy
 * @path components
 * @documented false
 */
export class ENOVOSScrollspy {
  constructor() {
    this.items = [];
    this.scrollspyItems = [];
    this.classNames = {
      EL: 'scrollspy',
      ITEM: '__item',
      ACTIVE: '--active',
      WATCHER: '--watcher',
    };
    this._observable = []; // observer;
    this.tmpcurrentItem = [];
    this.scrollContainer = debounce(() => {
      this.tmpcurrentItem = [];
      this.watchObservable();
      setTimeout(() => {
        this.tmpcurrentItem = compact(this.tmpcurrentItem);
        const fullVisibleItem = filter(this.tmpcurrentItem, o => {
          return get(o, 'intersectionRatio') === 1;
        });
        const currentItem = (fullVisibleItem.length > 1) ? findLast(this.tmpcurrentItem, o => o.intersectionRatio === 1) : maxBy(this.tmpcurrentItem, o => o.intersectionRatio);
        this.currentItem = (window.scrollY === 0) ? 0 : has(currentItem, 'index') ? get(currentItem, 'index') : this.currentItem;
      }, 250);
    }, 1);
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData)) {
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
    if (this.target) {
      const targetEl = document.querySelector(this.target);
      if (targetEl) {
        targetEl.style.scrollBehavior = 'smooth';
        targetEl.addEventListener('scroll', () => {
          this.scrollContainer();
        });
      }
    }
    else {
      window.addEventListener('scroll', () => {
        this.scrollContainer();
      });
    }
  }
  componentWillLoad() {
    this.initData();
  }
  componentWillRender() {
    this.el.setAttribute('current-item', this.currentItem.toString());
  }
  initData() {
    const scrollspyItems = [];
    this.items.map(item => scrollspyItems.push(new ScrollspyItem(item)));
    this.scrollspyItems = scrollspyItems;
    this.currentItem = 0;
  }
  clickHandler(item, index) {
    const containerEl = (this.target) ? document.querySelector(this.target) : document.querySelector('body');
    if (containerEl) {
      const targetEl = containerEl.querySelector(item.target);
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      if (isSmoothScrollSupported && targetEl) {
        if (this.target) {
          containerEl.scrollTo(0, (index === 0) ? 0 : targetEl.offsetTop);
        }
        else {
          window.scrollTo(0, (index === 0) ? 0 : targetEl.offsetTop);
        }
      }
    }
    return false;
  }
  watchObservable() {
    this.scrollspyItems.map((item, index) => {
      const target = document.querySelector(item.target);
      if (target) {
        target.classList.add(`${this.classNames.EL}${this.classNames.WATCHER}`);
        this._observable[index] = new IsVisibleObservable(target, (value, entry) => {
          if (value === true) {
            this.tmpcurrentItem[index] = { index, intersectionRatio: get(entry, 'intersectionRatio') };
          }
          this._observable[index].disconnectObserver();
        }, {
          threshold: .5,
        });
      }
    });
  }
  render() {
    if (this.scrollspyItems.length > 0) {
      return (h("nav", { class: [
          this.classNames.EL,
        ].join(' ') }, this.scrollspyItems.map((item, index) => {
        if (item.hasProp('id')) {
          return h("a", { id: `menu_${item.getProp('id')}`, onClick: () => this.clickHandler(item, index), class: [
              `${this.classNames.EL}${this.classNames.ITEM}`,
              (this.currentItem === index) ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ACTIVE}` : '',
            ].join(' ') },
            h("span", { innerHTML: item.getProp('text') }));
        }
      })));
    }
    else {
      return (h("nav", null));
    }
  }
  static get is() { return "eds-scrollspy"; }
  static get originalStyleUrls() { return {
    "$": ["scrollspy.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["scrollspy.css"]
  }; }
  static get properties() { return {
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ScrollspyItem[]",
        "resolved": "ScrollspyItem[]",
        "references": {
          "ScrollspyItem": {
            "location": "import",
            "path": "../../../../models/components/scrollspy-item"
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
    },
    "target": {
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
      "attribute": "target",
      "reflect": false
    }
  }; }
  static get states() { return {
    "scrollspyItems": {},
    "currentItem": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "items",
      "methodName": "watchItemsHandler"
    }]; }
}
