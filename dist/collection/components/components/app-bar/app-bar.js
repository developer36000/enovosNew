import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name App Bar
 * @description App Bar is a container for items like title, navigation icons and/or action items. Content can be easily managed using the specific section slots.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-app-bar-top.html
 */
export class ENOVOSAppBar {
  constructor() {
    this.position = 'top';
    this.fluid = false;
    this.classNames = {
      EL: 'app-bar',
      MAIN: '__main',
      LEADING: '__leading',
      TRAILING: '__trailing',
      SLOT: '__slot',
      FLUID: '--fluid',
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
  componentWillLoad() {
    this.hasLeadingSection = !!this.el.querySelector(`[slot="leading-section"]`);
    this.hasMainSection = !!this.el.querySelector(`[slot="main-section"]`);
    this.hasTrailingSection = !!this.el.querySelector(`[slot="trailing-section"]`);
    if (this.hasLeadingSection) {
      const leadingSlot = this.el.querySelector(`[slot="leading-section"]`);
      leadingSlot.classList.add(`${this.classNames.EL}${this.classNames.LEADING}${this.classNames.SLOT}`);
    }
    if (this.hasMainSection) {
      const mainSlot = this.el.querySelector(`[slot="main-section"]`);
      mainSlot.classList.add(`${this.classNames.EL}${this.classNames.MAIN}${this.classNames.SLOT}`);
    }
    if (this.hasTrailingSection) {
      const trailingSlot = this.el.querySelector(`[slot="trailing-section"]`);
      trailingSlot.classList.add(`${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.SLOT}`);
    }
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.fluid ? `${this.classNames.EL}${this.classNames.FLUID}` : '',
      ].join(' ') },
      h("div", { class: `${this.classNames.EL}${this.classNames.LEADING}` },
        h("slot", { name: "leading-section" })),
      h("div", { class: `${this.classNames.EL}${this.classNames.MAIN}` },
        h("slot", { name: "main-section" })),
      h("div", { class: `${this.classNames.EL}${this.classNames.TRAILING}` },
        h("slot", { name: "trailing-section" }))));
  }
  static get is() { return "eds-app-bar"; }
  static get originalStyleUrls() { return {
    "$": ["app-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["app-bar.css"]
  }; }
  static get properties() { return {
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
      "defaultValue": "'top'"
    },
    "fluid": {
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
      "attribute": "fluid",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
