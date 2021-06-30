import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name App header
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSAppHeader {
  constructor() {
    this.showBackBtn = false;
    this.classNames = {
      EL: 'app-header',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.showBackBtn) {
        className += ` ${this.classNames.EL}--back-btn-only`;
      }
      return className;
    };
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
    return (h("div", { class: this.getComponentClassName() },
      h("div", { class: `${this.classNames.EL}__logo` },
        h("slot", { name: "logo" })),
      h("div", { class: `${this.classNames.EL}__language-selector` },
        h("slot", { name: "language-selector" })),
      h("div", { class: `${this.classNames.EL}__user-menu-mobile` },
        h("slot", { name: "user-menu-mobile" })),
      h("div", { class: `${this.classNames.EL}__back-btn` },
        h("slot", { name: "back-btn" })),
      h("div", { class: `${this.classNames.EL}__main` },
        h("slot", { name: "main-section" })),
      h("div", { class: `${this.classNames.EL}__user-menu` },
        h("slot", { name: "user-menu" }))));
  }
  static get is() { return "eds-app-header"; }
  static get originalStyleUrls() { return {
    "$": ["app-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["app-header.css"]
  }; }
  static get properties() { return {
    "showBackBtn": {
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
      "attribute": "show-back-btn",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
