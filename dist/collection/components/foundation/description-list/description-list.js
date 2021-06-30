import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Description list
 * @description A description list displays related information formatted as a list.
 * @path foundation
 * @documented true
 */
export class ENOVOSDescriptionList {
  constructor() {
    this.data = [];
    this.classNames = {
      EL: 'description-list',
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
    return (h("div", { class: [
        `${this.classNames.EL}`,
        this.isHorizontal ? `${this.classNames.EL}--horizontal` : '',
        this.isInline ? `${this.classNames.EL}--inline` : '',
      ].join(' ') }, this.data.map((value, index) => h("dl", null, Object.keys(value).map(subValue => subValue === 'term'
      ? h("dt", null,
        h("eds-paragraph", { type: this.data[index][subValue].type || 'body-2', "font-weight": this.data[index][subValue].fontWeight || '', styles: this.data[index][subValue].styles || '', "font-style": this.data[index][subValue].fontStyle || '' }, this.data[index][subValue].data))
      : h("div", { class: `${this.classNames.EL}__dd-container` }, Array.from(Array.isArray(this.data[index][subValue].data) ? this.data[index][subValue].data : [this.data[index][subValue].data]).map(description => description['component'] === 'tooltip'
        ? h("dd", null,
          h("eds-icon", { id: "tooltip-normal", icon: description['icon'], size: description['size'], styles: description['styles'] }),
          h("eds-tooltip", { selector: "tooltip-normal", text: description['text'], pointer: description['pointer'] ? true : false, notimeout: description['notimeout'] ? true : false }))
        : description['component'] === 'badge'
          ? h("dd", null,
            h("eds-badge", { text: description['text'], styles: description['styles'], size: description['size'] }))
          : h("dd", null,
            h("eds-message", { "icon-leading": description['icon'], styles: description['styles'], "icon-styles": description['iconStyles'], "font-weight": description['fontWeight'], "font-size": description['fontSize'], inline: true }, description['text'])))))))));
  }
  static get is() { return "eds-description-list"; }
  static get originalStyleUrls() { return {
    "$": ["description-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["description-list.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "isHorizontal": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-horizontal",
      "reflect": false
    },
    "isInline": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-inline",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
