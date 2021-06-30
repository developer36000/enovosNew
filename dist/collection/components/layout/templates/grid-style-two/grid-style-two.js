import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
/**
 * @name Grid Style Two
 * @description Grid Template Header & Navigation - Body - Footer.
 * @path layout/templates
 * @documented false
 * @prop --slots_header-area: The header line fixed on top of the application. Can be used to set a title, logo... When the user's scrolling down the application, the header line is hidden.
 * @prop --slots_navigation-area: The navigation line sticky on top of the application, beside the header area. When the user's scrolling the application, the navigation line is sticky on top.
 * @prop --slots_main-area: The main container of the application
 * @prop --slots_footer-area: The footer of the application, always at the bottom of the application.
 */
export class ENOVOSGridStyleTwo {
  constructor() {
    this.debug = false;
    this.header = true;
    this.navigation = true;
    this.main = true;
    this.bodyAlignCenter = false;
    this.mainFooter = true;
    this.footer = true;
    this.backgroundHeader = 'gradient-primary-dark-bottom';
    this.borderColorFooter = 'quaternary-600';
    this.classNames = {
      EL: 'grid-style-two',
      HEADER: '__header',
      NAVIGATION: '__navigation',
      BODY: '__body',
      FOOTER: '__footer',
      CONTAINER: '__container',
      SLOT: '__slot',
      HIDDEN: '--hidden',
      CENTERED: '--centered',
    };
    this.getBodyStyle = () => {
      let style = {};
      if (this.backgroundImageBody) {
        style = Object.assign(Object.assign({}, style), { 'background-image': `url("${this.backgroundImageBody}")` });
      }
      if (this.backgroundBody) {
        style = Object.assign(Object.assign({}, style), { 'background-color': `${this.backgroundBody}` });
      }
      return style;
    };
    this.getFooterStyle = () => {
      let style = {};
      if (this.backgroundBody) {
        style = Object.assign(Object.assign({}, style), { 'background-color': `${this.backgroundBody}` });
      }
      return style;
    };
  }
  componentWillLoad() {
    this.hasNavigationArea = !!this.el.querySelector('[slot="navigation-area"]');
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
  componentDidRender() {
    this.el.querySelectorAll('[slot="header-area"], [slot="navigation-area"], [slot="main-area"], [slot="footer-area"]').forEach((el) => {
      el.classList.add(`${this.classNames.EL}${this.classNames.SLOT}`);
    });
  }
  render() {
    return [
      h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.HEADER}`,
          (!this.header) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundHeader}`, `${this.classNames.EL}`),
        ].join(' ') },
        h("div", { class: `${this.classNames.EL}${this.classNames.HEADER}${this.classNames.CONTAINER}` },
          h("slot", { name: "header-area" }))),
      this.hasNavigationArea && (h("eds-elevation", { level: "4" },
        h("eds-container", { class: [
            `${this.classNames.EL}${this.classNames.NAVIGATION}`,
            (!this.navigation) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
            ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundNavigation}`, `${this.classNames.EL}`),
            (this.backgroundNavigation && this.backgroundNavigation !== 'white') ? ComponentPropsHelper.setGlobalStyles(`border--${this.backgroundNavigation}`, `${this.classNames.EL}`) : '',
          ].join(' ') },
          h("span", null,
            h("slot", { name: "navigation-area" }))))),
      h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.BODY}`,
          (!this.main) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          (this.bodyAlignCenter) ? `${this.classNames.EL}${this.classNames.BODY}${this.classNames.CENTERED}` : '',
        ].join(' '), style: this.getBodyStyle() },
        h("span", null,
          h("slot", { name: "main-area" }))),
      h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.FOOTER}`,
          (!this.footer) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundFooter}`, `${this.classNames.EL}`),
          ComponentPropsHelper.setGlobalStyles(`border--${this.borderColorFooter}`, `${this.classNames.EL}`),
        ].join(' '), style: this.getFooterStyle() },
        h("span", null,
          h("slot", { name: "footer-area" }))),
      this.debug ? h("span", { class: `${this.classNames.EL}__mq` }) : undefined,
    ];
  }
  static get is() { return "eds-grid-style-two"; }
  static get originalStyleUrls() { return {
    "$": ["grid-style-two.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["grid-style-two.css"]
  }; }
  static get properties() { return {
    "debug": {
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
      "attribute": "debug",
      "reflect": false,
      "defaultValue": "false"
    },
    "header": {
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
      "attribute": "header",
      "reflect": false,
      "defaultValue": "true"
    },
    "navigation": {
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
      "attribute": "navigation",
      "reflect": false,
      "defaultValue": "true"
    },
    "main": {
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
      "attribute": "main",
      "reflect": false,
      "defaultValue": "true"
    },
    "bodyAlignCenter": {
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
      "attribute": "body-align-center",
      "reflect": false,
      "defaultValue": "false"
    },
    "mainFooter": {
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
      "attribute": "main-footer",
      "reflect": false,
      "defaultValue": "true"
    },
    "footer": {
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
      "attribute": "footer",
      "reflect": false,
      "defaultValue": "true"
    },
    "backgroundHeader": {
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
      "attribute": "background-header",
      "reflect": false,
      "defaultValue": "'gradient-primary-dark-bottom'"
    },
    "backgroundNavigation": {
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
      "attribute": "background-navigation",
      "reflect": false
    },
    "backgroundBody": {
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
      "attribute": "background-body",
      "reflect": false
    },
    "backgroundImageBody": {
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
      "attribute": "background-image-body",
      "reflect": false
    },
    "backgroundMainFooter": {
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
      "attribute": "background-main-footer",
      "reflect": false
    },
    "backgroundFooter": {
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
      "attribute": "background-footer",
      "reflect": false
    },
    "borderColorFooter": {
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
      "attribute": "border-color-footer",
      "reflect": false,
      "defaultValue": "'quaternary-600'"
    }
  }; }
  static get elementRef() { return "el"; }
}
