import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { isEqual } from 'lodash-es';
import { AppDataBlock } from '../../../../../models/patterns/app-data-block';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name App Data Block
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSAppDataBlock {
  constructor() {
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
    this.uuid = uuidv4();
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
    themeOnChange('theme', () => {
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
        h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}` },
          h("eds-paragraph", { type: "body-2", styles: "secondary-500", fontWeight: "bold", content: this.blockData.getProp('label') }),
          h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.VALUE}` },
            h("eds-heading", { type: "h6", styles: "secondary-500", content: this.blockData.getProp('value') }),
            this.blockData.hasProp('tooltip') ?
              h("div", { class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.VALUE}${this.classNames.TOOLTIP}` },
                h("eds-icon", { id: `tooltip_${this.uuid}`, styles: "secondary-500", icon: "question-circle", size: "2" }),
                h("eds-tooltip", { selector: `tooltip_${this.uuid}`, text: this.blockData.getProp('tooltip') }))
              : '')),
        this.blockData.hasProp('button') ?
          h("eds-button", { class: `${this.classNames.EL}${this.classNames.BUTTON}`, onClickButton: () => this.clickDataBlock.emit(this.blockData), content: this.blockData.getProp('button.content'), styles: "secondary", iconPosition: "left", size: "md", textOnly: true },
            h("eds-icon", { slot: "icon", icon: this.blockData.getProp('button.icon') }))
          : '',
      ];
    }
    else {
      return h("div", null);
    }
  }
  static get is() { return "eds-app-data-block"; }
  static get originalStyleUrls() { return {
    "$": ["app-data-block.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["app-data-block.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "AppDataBlock",
        "resolved": "AppDataBlock",
        "references": {
          "AppDataBlock": {
            "location": "import",
            "path": "../../../../../models/patterns/app-data-block"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "blockData": {}
  }; }
  static get events() { return [{
      "method": "clickDataBlock",
      "name": "clickDataBlock",
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
