import { Component, Element, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section contract details
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionContractDetails {
  constructor() {
    this.classNames = {
      EL: 'view-app-enovos-section-contract-details',
      CARD: '__card',
      CONTENT: '__content',
      FIELD: '__field',
      BUTTON: '__button',
      MAP: '__map',
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
  }
  closeContract() {
    const url = new URL(window.location.href.replace('#/', ''));
    window.location.href = `${url.origin}/#/${url.pathname}?step=contract-list`;
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
      h("eds-elevation", { level: "5" },
        h("eds-card", { "no-border": true, class: `${this.classNames.EL}${this.classNames.CARD}` },
          h("div", { slot: "card-content" },
            h("eds-grid-layout", null,
              h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}` },
                  h("eds-heading", { content: "Contract details", "font-weight": "bold", type: "h2", styles: "secondary" }),
                  h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` },
                    h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "Contract ID" }),
                    h("eds-heading", { type: "h6", content: "0003317731", styles: "secondary" })),
                  h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` },
                    h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "Starting date" }),
                    h("eds-heading", { type: "h6", content: "04.11.2019", styles: "secondary" })),
                  h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` },
                    h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "Meter number" }),
                    h("eds-heading", { type: "h6", content: "SAG1030700119520", styles: "secondary" })),
                  h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` },
                    h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "POD number" }),
                    h("eds-heading", { type: "h6", content: "LU 0000 0802 5422 4820 0002 0012 ELE0 0000", styles: "secondary" })),
                  h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.FIELD}` },
                    h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: "Consumption address" }),
                    h("eds-heading", { type: "h6", content: "4 place de Strasbourg, 2562, Luxembourg, LU", styles: "secondary" })),
                  h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTENT}${this.classNames.BUTTON}` },
                    h("eds-button", { content: "Close contract", outlined: true, styles: "secondary", onClickButton: () => this.closeContract() })))),
              h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("iframe", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.MAP}`, src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.8334337749297!2d6.126005015910103!3d49.60089045609219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548d0a13723b9%3A0xe919d3096f187f4!2s4%20Place%20de%20Strasbourg%2C%202562%20Luxembourg!5e0!3m2!1sfr!2sfr!4v1606203908630!5m2!1sfr!2sfr", frameborder: "0", "aria-hidden": "false", tabindex: "0" })))))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-contract-details"; }
  static get originalStyleUrls() { return {
    "$": ["section-contract-details.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-contract-details.css"]
  }; }
  static get elementRef() { return "el"; }
}
