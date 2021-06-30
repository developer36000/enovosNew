import { Component, Element, Prop, h } from '@stencil/core';
import { uniqueId } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Fields group
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSFieldsGroup {
  constructor() {
    this.classNames = {
      EL: 'fields-group',
    };
    this.uniqueId = uniqueId('fields-group-');
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
    return (h("fieldset", { class: this.classNames.EL },
      (this.mainTitle || this.tooltipContent) &&
        h("div", { class: `${this.classNames.EL}__title` },
          h("div", { class: `${this.classNames.EL}__title-text` },
            h("eds-heading", { content: this.mainTitle, type: "h6", "font-weight": "bold", styles: "secondary" })),
          this.tooltipContent &&
            h("div", { class: `${this.classNames.EL}__tooltip` },
              h("eds-icon", { id: this.uniqueId, icon: "question-circle", styles: "secondary-300", size: "x3" }),
              h("eds-tooltip", { selector: this.uniqueId, text: this.tooltipContent }))),
      h("div", { class: `${this.classNames.EL}__content` },
        h("slot", null))));
  }
  static get is() { return "eds-fields-group"; }
  static get originalStyleUrls() { return {
    "$": ["fields-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["fields-group.css"]
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
    "tooltipContent": {
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
      "attribute": "tooltip-content",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
