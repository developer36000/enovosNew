import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name No results
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSNoResults {
  constructor() {
    this.classNames = {
      EL: 'no-results',
    };
  }
  componentWillLoad() {
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
    return (h("div", { class: `${this.classNames.EL}` },
      this.imageUrl &&
        h("div", { class: `${this.classNames.EL}__image` },
          h("img", { src: this.imageUrl, alt: "" })),
      this.mainTitle &&
        h("eds-heading", { "margin-bottom-1": true, type: "h6", "font-weight": "bold", content: this.mainTitle, styles: "secondary" }),
      this.subtitle &&
        h("eds-paragraph", { "margin-bottom-1": true, type: "body-2" }, this.subtitle),
      this.hasActions &&
        h("div", { class: `${this.classNames.EL}__actions` },
          h("slot", { name: "actions" }))));
  }
  static get is() { return "eds-no-results"; }
  static get originalStyleUrls() { return {
    "$": ["no-results.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["no-results.css"]
  }; }
  static get properties() { return {
    "mainTitle": {
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
      "attribute": "main-title",
      "reflect": false
    },
    "subtitle": {
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
      "attribute": "subtitle",
      "reflect": false
    },
    "imageUrl": {
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
      "attribute": "image-url",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
