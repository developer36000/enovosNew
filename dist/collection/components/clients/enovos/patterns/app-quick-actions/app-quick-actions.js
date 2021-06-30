import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { isEqual } from 'lodash-es';
import { AppQuickAction } from '../../../../../models/patterns/app-quick-action';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name App Quick Actions
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSAppQuickActions {
  constructor() {
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
    themeOnChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    if (this.contractData) {
      return (h("eds-card", { clickable: true, onClickCard: () => this.clickQuickAction.emit(this.contractData), class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}`, size: "sm" },
        h("div", { slot: "card-content" },
          h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}` },
            h("eds-image", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}${this.classNames.IMAGE}`, size: "6x", src: this.contractData.getProp('icon') }),
            h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.QUICK_ACTION}${this.classNames.CONTENT}${this.classNames.TEXT}` },
              h("eds-paragraph", { type: "h6", styles: `${this.styles}-500`, "font-weight": "bold" }, this.contractData.getProp('title')),
              h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, this.contractData.getProp('subtitle'))),
            h("eds-icon", { size: "3x", styles: "secondary-500", icon: "chevron-right" })))));
    }
    else {
      return h("div", null);
    }
  }
  static get is() { return "eds-app-quick-actions"; }
  static get originalStyleUrls() { return {
    "$": ["app-quick-actions.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["app-quick-actions.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "AppQuickAction",
        "resolved": "AppQuickAction",
        "references": {
          "AppQuickAction": {
            "location": "import",
            "path": "../../../../../models/patterns/app-quick-action"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "styles": {
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
      "attribute": "styles",
      "reflect": false,
      "defaultValue": "'primary'"
    }
  }; }
  static get states() { return {
    "contractData": {}
  }; }
  static get events() { return [{
      "method": "clickQuickAction",
      "name": "clickQuickAction",
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
    "setData": {
      "complexType": {
        "signature": "(data: any) => Promise<void>",
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
      "propName": "data",
      "methodName": "watchItemsHandler"
    }]; }
}
