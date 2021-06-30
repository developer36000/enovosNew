import { Component, Element, Event, Listen, Prop, h } from '@stencil/core';
import { throttle } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
/**
 * @name Grid Style One
 * @description Grid Template Header & Navigation - Body - Footer.
 * @path layout/templates
 * @documented false
 * @prop --slots_header-area: The header line fixed on top of the application. Can be used to set a title, logo... When the user's scrolling down the application, the header line is hidden.
 * @prop --slots_navigation-area: The navigation line sticky on top of the application, beside the header area. When the user's scrolling the application, the navigation line is sticky on top.
 * @prop --slots_main-area: The main container of the application
 * @prop --slots_footer-area: The footer of the application, always at the bottom of the application.
 */
export class ENOVOSGridStyleOne {
  constructor() {
    this.header = true;
    this.navigation = true;
    this.main = true;
    this.bodyAlignCenter = false;
    this.mainFooter = true;
    this.footer = true;
    this.borderColorFooter = 'quaternary-600';
    this.classNames = {
      EL: 'grid-style-one',
      HEADER: '__header',
      NAVIGATION: '__navigation',
      BODY: '__body',
      FOOTER: '__footer',
      CONTAINER: '__container',
      SLOT: '__slot',
      STICKY: '--sticky',
      HIDDEN: '--hidden',
      CENTERED: '--centered',
    };
    this.lastScrollPosition = 0;
    this.isShownHeader = false;
    this.scrollable = true;
    this.saveScrollPosition = throttle(() => {
      this.lastScrollPosition = window.scrollY;
      this.setLayoutScolling();
    }, 500);
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
    this.el.querySelectorAll('[slot]').forEach((el) => {
      el.classList.add(`${this.classNames.EL}${this.classNames.SLOT}`);
    });
  }
  handleScroll() {
    if (this.scrollable === true) {
      if (this.clientRectHeader === undefined) {
        const headerEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.HEADER}`);
        if (headerEl) {
          this.clientRectHeader = headerEl.getBoundingClientRect();
        }
      }
      const direction = window.scrollY > this.lastScrollPosition ? 'down' : 'up';
      if (direction === 'down') {
        if (window.scrollY > 0) {
          this.showHeader(false);
        }
      }
      else {
        if (window.scrollY <= 0) {
          this.showHeader(true);
        }
      }
    }
    this.saveScrollPosition();
  }
  handleResize() {
    this.setLayoutScolling();
  }
  setLayoutScolling() {
    const headerEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.HEADER}`);
    const navigationEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.NAVIGATION}`);
    const bodyEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.BODY}`);
    const bodyFooterEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.BODY}${this.classNames.FOOTER}`);
    const footerEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.FOOTER}`);
    if (headerEl && navigationEl && bodyEl && bodyFooterEl && footerEl) {
      const clientRectHeader = headerEl.getBoundingClientRect();
      const clientRectNavigation = navigationEl.getBoundingClientRect();
      const clientRectBody = bodyEl.getBoundingClientRect();
      const clientRectBodyFooter = bodyFooterEl.getBoundingClientRect();
      const clientRectFooter = footerEl.getBoundingClientRect();
      const heightElements = clientRectHeader.height + clientRectNavigation.height + clientRectBody.height + clientRectBodyFooter.height + clientRectFooter.height;
      const outWindowHeight = window.innerHeight;
      if (heightElements <= (outWindowHeight + clientRectHeader.height)) {
        this.scrollable = false;
        this.showHeader(true);
      }
      else {
        this.scrollable = true;
      }
    }
  }
  showHeader(state) {
    this.scrollDown.emit(!state);
    if (!state) {
      this.el.classList.add(`${this.classNames.EL}${this.classNames.STICKY}`);
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}${this.classNames.STICKY}`);
    }
  }
  render() {
    return [
      h("eds-container", { fluid: true, class: [
          `${this.classNames.EL}${this.classNames.HEADER}`,
          (!this.header) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
        ].join(' ') },
        h("div", { class: [
            `${this.classNames.EL}${this.classNames.HEADER}${this.classNames.CONTAINER}`,
            ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundHeader}`, `${this.classNames.EL}`),
          ].join(' ') },
          h("slot", { name: "header-area" }))),
      h("eds-container", { fluid: true, class: [
          `${this.classNames.EL}${this.classNames.NAVIGATION}`,
          (!this.navigation) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundNavigation}`, `${this.classNames.EL}`),
          (this.backgroundNavigation && this.backgroundNavigation !== 'white') ? ComponentPropsHelper.setGlobalStyles(`border--${this.backgroundNavigation}`, `${this.classNames.EL}`) : '',
        ].join(' ') },
        h("span", null,
          h("slot", { name: "navigation-area" }))),
      h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.BODY}`,
          (!this.main) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          (this.bodyAlignCenter) ? `${this.classNames.EL}${this.classNames.BODY}${this.classNames.CENTERED}` : '',
          ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundBody}`, `${this.classNames.EL}`),
        ].join(' '), style: (this.backgroundImageBody) ? { 'background-image': `url("${this.backgroundImageBody}")` } : {} },
        h("span", null,
          h("slot", { name: "main-area" }))),
      h("eds-container", { class: [
          `${this.classNames.EL}${this.classNames.BODY}${this.classNames.FOOTER}`,
          (!this.mainFooter) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundMainFooter}`, `${this.classNames.EL}`),
        ].join(' ') },
        h("span", null,
          h("slot", { name: "main-area-footer" }))),
      h("eds-container", { fluid: true, class: [
          `${this.classNames.EL}${this.classNames.FOOTER}`,
          (!this.footer) ? `${this.classNames.EL}${this.classNames.HIDDEN}` : '',
          ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundFooter}`, `${this.classNames.EL}`),
          ComponentPropsHelper.setGlobalStyles(`border--${this.borderColorFooter}`, `${this.classNames.EL}`),
        ].join(' ') },
        h("span", null,
          h("slot", { name: "footer-area" }))),
    ];
  }
  static get is() { return "eds-grid-style-one"; }
  static get originalStyleUrls() { return {
    "$": ["grid-style-one.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["grid-style-one.css"]
  }; }
  static get properties() { return {
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
      "reflect": false
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
  static get events() { return [{
      "method": "scrollDown",
      "name": "scrollDown",
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
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "scroll",
      "method": "handleScroll",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
