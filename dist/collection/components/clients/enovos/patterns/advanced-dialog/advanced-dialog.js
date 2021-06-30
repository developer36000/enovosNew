import { Component, Element, Event, Method, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Advanced dialog
 * @description
 * @path patterns
 * @documented true
 */
export class ENOVOSAdvancedDialog {
  constructor() {
    this.headerWithShadow = false;
    this.bodyScrollDisabled = false;
    this.verticalAlignment = 'center';
    this.footerWithShadow = false;
    this.classNames = {
      EL: 'advanced-dialog',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.headerWithShadow) {
        className += ` ${this.classNames.EL}--header-with-shadow`;
      }
      if (this.footerWithShadow) {
        className += ` ${this.classNames.EL}--footer-with-shadow`;
      }
      if (this.bodyScrollDisabled) {
        className += ` ${this.classNames.EL}--body-scroll-disabled`;
      }
      return className;
    };
    this.getHeaderClassName = () => {
      let className = `${this.classNames.EL}__header`;
      if (this.headerIconUrl) {
        className += ` ${this.classNames.EL}__header--with-icon`;
      }
      return className;
    };
  }
  async displayDialog(value) {
    const dialogEl = this.el.querySelector(`.${this.classNames.EL}`);
    if (dialogEl) {
      if (value) {
        dialogEl.open();
      }
      else {
        dialogEl.close();
        this.close.emit();
      }
    }
  }
  componentWillLoad() {
    this.hasHeaderContent = !!this.el.querySelector('[slot="header-content"]');
    this.hasFooterLeft = !!this.el.querySelector('[slot="footer-left"]');
    this.hasFooterRight = !!this.el.querySelector('[slot="footer-right"]');
    this.hasFooter = this.hasFooterLeft || this.hasFooterRight;
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
  }
  render() {
    return [
      h("eds-dialog", { disableAnimations: true, verticalAlignment: this.verticalAlignment, class: this.getComponentClassName(), disableScroll: true, ignoreBackdropClick: false, onClickBackdropHandler: () => this.displayDialog(false) },
        (this.headerTitle || this.headerSubtitle || this.hasHeaderContent) &&
          h("div", { slot: "dialog-header" },
            h("div", { class: this.getHeaderClassName() },
              this.headerTitle &&
                h("div", { class: `${this.classNames.EL}__header-title` },
                  this.headerIconUrl &&
                    h("eds-image", { class: `${this.classNames.EL}__header-icon`, notFitted: true, size: "6x", src: this.headerIconUrl }),
                  h("eds-heading", { content: this.headerTitle, "font-weight": "bold", type: "h2", styles: "secondary" })),
              this.headerSubtitle &&
                h("div", { class: `${this.classNames.EL}__header-subtitle` },
                  h("eds-paragraph", { content: this.headerSubtitle, type: "body-1", styles: "secondary" })),
              this.hasHeaderContent &&
                h("div", { class: `${this.classNames.EL}__header-content` },
                  h("slot", { name: "header-content" })),
              h("eds-button", { class: `${this.classNames.EL}__close-btn`, onClickButton: () => this.displayDialog(false), styles: "secondary", "text-only": true },
                h("eds-icon", { slot: "icon", icon: "times" })))),
        h("div", { slot: "dialog-body" },
          h("slot", null)),
        this.hasFooter &&
          h("div", { slot: "dialog-footer" },
            h("div", { class: `${this.classNames.EL}__footer` },
              this.hasFooterLeft &&
                h("div", { class: `${this.classNames.EL}__footer-left` },
                  h("slot", { name: "footer-left" })),
              this.hasFooterRight &&
                h("div", { class: `${this.classNames.EL}__footer-right` },
                  h("slot", { name: "footer-right" }))))),
    ];
  }
  static get is() { return "eds-advanced-dialog"; }
  static get originalStyleUrls() { return {
    "$": ["advanced-dialog.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["advanced-dialog.css"]
  }; }
  static get properties() { return {
    "headerTitle": {
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
      "attribute": "header-title",
      "reflect": false
    },
    "headerIconUrl": {
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
      "attribute": "header-icon-url",
      "reflect": false
    },
    "headerSubtitle": {
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
      "attribute": "header-subtitle",
      "reflect": false
    },
    "headerWithShadow": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "header-with-shadow",
      "reflect": false,
      "defaultValue": "false"
    },
    "bodyScrollDisabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "body-scroll-disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "verticalAlignment": {
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
      "attribute": "vertical-alignment",
      "reflect": false,
      "defaultValue": "'center'"
    },
    "footerWithShadow": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "footer-with-shadow",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "close",
      "name": "close",
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
    "displayDialog": {
      "complexType": {
        "signature": "(value: any) => Promise<void>",
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
}
