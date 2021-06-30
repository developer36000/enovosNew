import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Page header
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSPageHeader {
  constructor() {
    this.centered = false;
    this.classNames = {
      EL: 'page-header',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.centered) {
        className += ` ${this.classNames.EL}--centered`;
      }
      return className;
    };
  }
  componentWillLoad() {
    this.hasBeforeTitle = !!this.el.querySelector('[slot="before-title"]');
    this.hasAfterTitle = !!this.el.querySelector('[slot="after-title"]');
    this.hasActions = !!this.el.querySelector('[slot="actions"]');
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
      this.pageTitle &&
        h("div", { class: `${this.classNames.EL}__title` },
          this.hasBeforeTitle &&
            h("div", { class: `${this.classNames.EL}__before-title` },
              h("slot", { name: "before-title" })),
          h("div", { class: `${this.classNames.EL}__title-text` }, this.pageTitle),
          this.hasAfterTitle &&
            h("div", { class: `${this.classNames.EL}__after-title` },
              h("slot", { name: "after-title" }))),
      this.hasActions &&
        h("div", { class: `${this.classNames.EL}__actions` },
          h("slot", { name: "actions" }))));
  }
  static get is() { return "eds-page-header"; }
  static get originalStyleUrls() { return {
    "$": ["page-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["page-header.css"]
  }; }
  static get properties() { return {
    "pageTitle": {
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
      "attribute": "page-title",
      "reflect": false
    },
    "centered": {
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
      "attribute": "centered",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
