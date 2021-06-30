import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Status icon
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSStatusIcon {
  constructor() {
    this.classNames = {
      EL: 'status-icon',
    };
    this.renderIcon = status => {
      switch (status) {
        case 'open':
          return (h("eds-icon", { icon: "check" }));
        case 'closed':
          return (h("eds-icon", { icon: "times" }));
        default:
          return undefined;
      }
    };
    this.getComponentClassName = () => {
      let className = `${this.classNames.EL} ${this.classNames.EL}--${this.status}`;
      if (this.text) {
        className += ` ${this.classNames.EL}--with-text`;
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
      h("span", { class: `${this.classNames.EL}__icon` }, this.renderIcon(this.status)),
      this.text &&
        h("eds-heading", { class: `${this.classNames.EL}__text`, type: "h6", content: this.text })));
  }
  static get is() { return "eds-status-icon"; }
  static get originalStyleUrls() { return {
    "$": ["status-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["status-icon.css"]
  }; }
  static get properties() { return {
    "status": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'open' | 'closed'",
        "resolved": "\"closed\" | \"open\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "status",
      "reflect": false
    },
    "text": {
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
      "attribute": "text",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
