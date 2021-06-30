import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { find, findIndex } from 'lodash-es';
import { ActionListItem } from '../../../models/action-list-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { IsVisibleObservable } from '../../../utils/isVisibleObservable';
/**
 * @name Action List
 * @description The Action List provides a pattern to display different types of component depending a configuration and manage events on them.
 * @path patterns
 * @documented true
 */
export class ENOVOSActionList {
  constructor() {
    this.fitted = false;
    this.segmented = false;
    this.actions = [];
    this.actionItems = [];
    this.classNames = {
      EL: 'action-list',
      CONTAINER: '__container',
      BADGE: '__badge',
      ITEM: '__item',
      SHAPE: '__shape',
      FITTED: '--fitted',
      SEGMENTED: '--segmented',
    };
    this.initEvents = false; // Event name
    this._clickItemHandler = [];
    this._observable = undefined; // observer;
  }
  /**
   * @description Init the dataitem
   */
  async setActionListItems(items) {
    this.actions = items;
  }
  async setActiveAction(id) {
    this.activeAction = id;
  }
  watchActionsHandler(newData, oldData) {
    if (newData !== oldData && newData.length > 0) {
      this.initActions();
    }
  }
  attachObservable() {
    this._observable = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        this.setShape();
        this._observable.disconnectObserver();
      }
    }, {
      threshold: 1,
    });
  }
  componentWillLoad() {
    this.initActions();
    if (this.segmented) {
      this.attachObservable();
    }
  }
  /**
   * @description Init component variables
   */
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
    if (this.segmented) {
      this.attachObservable();
    }
    this.setEvents();
  }
  /**
   * @description Update event on items once they have been set
   * initEvents avoid to attach multiple event to items
   */
  componentDidUpdate() {
    if (!this.initEvents) {
      this.setEvents();
    }
    if (this.segmented) {
      this.attachObservable();
    }
  }
  componentDidRender() {
    this.el.setAttribute('nb-items', this.actionItems.length.toString());
  }
  /**
   * @description Define the event on items
   */
  clickItemHandler(item) {
    this.clickActionItem.emit(item);
  }
  initActions() {
    const actionItems = [];
    this.actions.map(action => actionItems.push(new ActionListItem(action)));
    this.actionItems = actionItems;
    this.initEvents = false;
  }
  setEvents() {
    this.actionItems.forEach((item, index) => {
      const itemEl = this.el.querySelector(`[data-id='${item.getProp('id')}']`);
      if (itemEl) {
        switch (item.getProp('type')) {
          case 'button':
            itemEl.removeEventListener('clickButton', this._clickItemHandler[index]);
            itemEl.addEventListener('clickButton', this._clickItemHandler[index] = () => {
              this.clickItemHandler(item);
            });
            break;
        }
      }
    });
    this.initEvents = true;
  }
  /**
   * @description Set the active item class depending the activeAction property
   * @return {string}
   */
  getActionConfiguration(item, propKey) {
    return (this.activeAction === item.getProp('id'))
      ? item.getProp(`${propKey}.active`)
      : item.getProp(`${propKey}.default`);
  }
  setShape() {
    const itemActiveEl = this.el.querySelector(`[data-id='${this.activeAction}']`);
    const shapeEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.SHAPE}`);
    if (itemActiveEl && shapeEl) {
      const elBoundingClientRect = itemActiveEl.getBoundingClientRect();
      shapeEl.style.left = `${Math.round(itemActiveEl.offsetLeft)}px`;
      const indexItem = findIndex(this.actionItems, (item) => item.getProp('id') === this.activeAction);
      shapeEl.dataset.active = indexItem;
      // Avoid shape appears outside the container when the size is higher the current button
      if (indexItem !== this.actionItems.length - 1) {
        setTimeout(() => {
          shapeEl.style.width = `${Math.round(elBoundingClientRect.width)}px`;
        }, 100);
      }
      else {
        shapeEl.style.width = `${Math.round(elBoundingClientRect.width)}px`;
      }
    }
  }
  getCurrentActionConfiguration(propKey) {
    const activeItem = find(this.actionItems, (item) => item.getProp('id') === this.activeAction);
    return (activeItem)
      ? activeItem.getProp(`${propKey}.active`)
      : '';
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        (this.fitted) ? `${this.classNames.EL}${this.classNames.FITTED}` : '',
        (this.segmented) ? `${this.classNames.EL}${this.classNames.SEGMENTED}` : '',
        this.getSize(),
      ].join(' '), "data-nb": this.actionItems.length },
      this.actionItems.length > 0 && this.segmented
        ? h("div", { class: [
            `${this.classNames.EL}${this.classNames.SHAPE}`,
            `${this.classNames.EL}--bg--${this.getCurrentActionConfiguration('styles')}`,
          ].join(' ') })
        : '',
      this.actionItems.map(item => {
        switch (item.getProp('type')) {
          case 'button':
            return h("div", { "data-id": `${item.getProp('id')}`, "data-nb": this.actionItems.length, class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CONTAINER}` },
              h("eds-button", { class: `${this.classNames.EL}${this.classNames.ITEM}`, size: this.size, expand: this.fitted === false ? true : false, outlined: this.getActionConfiguration(item, 'outlined'), textOnly: this.getActionConfiguration(item, 'textOnly') || (this.segmented && this.activeAction !== item.getProp('id')), content: item.getProp('content'), styles: this.getActionConfiguration(item, 'styles'), disabled: item.getProp('disabled') === true ? true : false, "icon-position": item.hasProp('iconPosition') ? item.getProp('iconPosition') : false }, item.hasProp('icon')
                ? h("eds-icon", { slot: "icon", icon: item.getProp('icon') })
                : ''),
              item.hasProp('badge')
                ? h("eds-badge", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.BADGE}`, text: item.getProp('badge.text'), size: item.hasProp('badge.size') ? item.getProp('badge.size') : 'md', styles: item.hasProp('badge.styles') ? item.getProp('badge.styles') : 'success' })
                : '');
        }
      })));
  }
  static get is() { return "eds-action-list"; }
  static get originalStyleUrls() { return {
    "$": ["action-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["action-list.css"]
  }; }
  static get properties() { return {
    "activeAction": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active-action",
      "reflect": false
    },
    "fitted": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "fitted",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
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
      "attribute": "size",
      "reflect": false
    },
    "segmented": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "segmented",
      "reflect": true,
      "defaultValue": "false"
    },
    "actions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ActionListItem[]",
        "resolved": "ActionListItem[]",
        "references": {
          "ActionListItem": {
            "location": "import",
            "path": "../../../models/action-list-item"
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
    "actionItems": {}
  }; }
  static get events() { return [{
      "method": "clickActionItem",
      "name": "clickActionItem",
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
    "setActionListItems": {
      "complexType": {
        "signature": "(items: ActionListItem[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "ActionListItem": {
            "location": "import",
            "path": "../../../models/action-list-item"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Init the dataitem"
          }]
      }
    },
    "setActiveAction": {
      "complexType": {
        "signature": "(id: string) => Promise<void>",
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
      "propName": "actions",
      "methodName": "watchActionsHandler"
    }]; }
}
