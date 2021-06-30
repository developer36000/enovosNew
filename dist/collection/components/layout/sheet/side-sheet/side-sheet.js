import { Component, Element, Event, Method, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { TapEvent } from '../../../../utils/tapEvent';
/**
 * @name Side Sheet
 * @description A side sheet is a view containing additional content that slides in from a defined side and is elevated over the main content.
 * @path layout/sheet
 * @documented true
 */
export class ENOVOSSideSheet {
  constructor() {
    this.ignoreBackdropClick = false;
    this.backdrop = true;
    this.position = 'right';
    this.elevationStyle = 'dark';
    this.elevationLevel = '4';
    this.backdropEl = undefined;
    this.availablePosition = ['left', 'right', 'bottom right'];
    this.animationDuration = 250;
    this._clickBackdropHandler = undefined;
    this.classNames = {
      EL: 'side-sheet',
      WRAPPER: '__wrapper',
      CONTENT: '__content',
      ON: '--on-',
      BACKDROP: '__backdrop',
      FADE_IN: 'fade-in',
      OPEN: '--open',
    };
  }
  /** INJECT_ANCHOR */
  async open() {
    this.el.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
    this.createBackdrop();
  }
  async close() {
    this.el.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`);
    this.deleteBackdrop();
    this.closeSideSheetHandler.emit();
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
    this.el.classList.add(`${this.classNames.EL}`);
  }
  componentWillRender() {
    this.availablePosition.map(item => {
      const availablePositionClasses = item.split(' ');
      availablePositionClasses.map(availablePositionClasse => {
        this.el.classList.remove(`${this.classNames.EL}${this.classNames.ON}${availablePositionClasse}`);
      });
    });
    if (this.availablePosition.includes(this.position)) {
      const availablePositionClasses = this.position.split(' ');
      availablePositionClasses.map(availablePositionClasse => {
        this.el.classList.add(`${this.classNames.EL}${this.classNames.ON}${availablePositionClasse}`);
      });
    }
    const regexSize = /\d+(%|px\b)/g;
    if (this.size !== undefined && regexSize.exec(this.size) !== null) {
      this.el.style.width = this.size;
    }
  }
  /**
   * @description Create a backdrop element under the sheet
   */
  createBackdrop() {
    if (this.backdrop === true) {
      if (!this.backdropEl) {
        this.backdropEl = document.createElement('div');
        this.backdropEl.className = `${this.classNames.EL}${this.classNames.BACKDROP}`;
        document.body.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
        this.el.querySelector(`.${this.classNames.EL}`).appendChild(this.backdropEl);
        this.handleEvent();
      }
      setTimeout(() => {
        this.backdropEl.classList.add(`${this.classNames.FADE_IN}`);
      }, 1);
    }
  }
  /**
   * @description Delete the backdrop element under the dialog
   */
  deleteBackdrop() {
    if (this.backdrop === true) {
      this.backdropEl.classList.remove(`${this.classNames.FADE_IN}`);
      setTimeout(() => {
        if (this.backdropEl) {
          this.el.querySelector(`.${this.classNames.EL}`).removeChild(this.backdropEl);
          this.backdropEl = undefined;
          document.body.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`);
        }
      }, this.animationDuration);
    }
  }
  /**
   * @description Event closing the dialog by clicking on the backdrop
   */
  handleEvent() {
    const backdropItem = this.el.querySelector(`.${this.classNames.EL}${this.classNames.BACKDROP}`);
    if (this.ignoreBackdropClick === false && backdropItem) {
      if (this._clickBackdropHandler && typeof this._clickBackdropHandler === 'object') {
        this._clickBackdropHandler.removeEvent();
      }
      this._clickBackdropHandler = new TapEvent(backdropItem, () => {
        this.close();
      });
    }
  }
  /** REMOVABLE START */
  render() {
    return (h("eds-elevation", { styles: this.elevationStyle, level: this.elevationLevel, class: this.classNames.EL },
      h("div", { class: `${this.classNames.EL}${this.classNames.WRAPPER}` },
        h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}` },
          h("slot", null)))));
  }
  static get is() { return "eds-side-sheet"; }
  static get originalStyleUrls() { return {
    "$": ["side-sheet.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["side-sheet.css"]
  }; }
  static get properties() { return {
    "ignoreBackdropClick": {
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
      "attribute": "ignore-backdrop-click",
      "reflect": false,
      "defaultValue": "false"
    },
    "backdrop": {
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
      "attribute": "backdrop",
      "reflect": false,
      "defaultValue": "true"
    },
    "position": {
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
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'right'"
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
    "elevationStyle": {
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
      "attribute": "elevation-style",
      "reflect": false,
      "defaultValue": "'dark'"
    },
    "elevationLevel": {
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
      "attribute": "elevation-level",
      "reflect": false,
      "defaultValue": "'4'"
    }
  }; }
  static get events() { return [{
      "method": "closeSideSheetHandler",
      "name": "closeSideSheetHandler",
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
    "open": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "INJECT_ANCHOR",
        "tags": []
      }
    },
    "close": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
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
}
