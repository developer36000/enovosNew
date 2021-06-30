import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - Landing page
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionLandingPage {
  constructor() {
    this.classNames = {
      EL: 'view-app-enovos-landing-page',
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
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
    return [
      h("eds-page-header", { pageTitle: "Customer Portal", centered: true }),
      h("eds-container", { size: "sm" },
        h("eds-panel", { "header-title": "Login to you account now!", "header-subtitle": "Get easy access to", "header-padding-bottom": "0", "header-no-min-height": true, "body-padding-top": "1" },
          h("div", { slot: "body-content" },
            h("ul", { class: `${this.classNames.EL}__list` },
              h("li", null,
                h("eds-paragraph", { type: "body-1", content: "Your invoices" })),
              h("li", null,
                h("eds-paragraph", { type: "body-1", content: "Your contracts" })),
              h("li", null,
                h("eds-paragraph", { type: "body-1", content: "You consumption data" }))),
            h("eds-grid-layout", null,
              h("eds-grid-layout-item", { "margin-top-1": true, "align-content": "right", "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true },
                h("span", null,
                  h("eds-button", { onClickButton: () => { alert("click"); }, styles: this.brand || 'primary', content: "Log in" }))))),
          h("div", { slot: "footer-content" },
            h("eds-grid-layout", null,
              h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("eds-paragraph", { type: "body-1", "font-weight": "bold", content: "Don't have an account ?" })),
              h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true, "align-content": "right" },
                h("eds-button", { onClickButton: () => { alert('click'); }, styles: "secondary", content: "Register", size: "sm", outlined: true, "icon-position": "right" },
                  h("eds-icon", { slot: "icon", icon: "chevron-right" })))))),
        h("eds-panel", { "margin-top-4": true, "header-title": "Become a customer", "header-subtitle": "100% natural Electricity or Gas for your home", "body-padding-top": "0" },
          h("div", { slot: "body-content" },
            h("eds-grid-layout", null,
              h("eds-grid-layout-item", { "margin-top-3": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("eds-expandable-card", { isRadio: true, inputName: "energy-type", onClickCheckbox: () => { alert('click'); }, icon: "https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-producer.svg", mainTitle: "Electricity", styles: this.brand || 'primary' })),
              h("eds-grid-layout-item", { "margin-top-3": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("eds-expandable-card", { isRadio: true, inputName: "energy-type", onClickCheckbox: () => { alert('click'); }, icon: "https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-gas.svg", mainTitle: "Gas", styles: this.brand || 'primary' })),
              h("eds-grid-layout-item", { "margin-top-3": true, "align-content": "right", "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true },
                h("span", null,
                  h("eds-button", { onClickButton: () => { alert("click"); }, styles: this.brand || 'primary', content: "Show the offer" }))))))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-landing-page"; }
  static get originalStyleUrls() { return {
    "$": ["section-landing-page.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-landing-page.css"]
  }; }
  static get properties() { return {
    "brand": {
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
      "attribute": "brand",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
