import { Component, Element, Event, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Quick Action
 * @description
 * @path patterns
 * @documented true
 */
export class ENOVOSQuickAction {
  constructor() {
    this.styles = 'primary';
    this.showTrailingIcon = false;
    this.classNames = {
      EL: 'quick-action',
    };
    this.onClickItem = () => {
      this.clickItem.emit({
        id: this.id,
        icon: this.icon,
        maintTitle: this.mainTitle,
        subtitle: this.subtitle,
      });
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.id = this.el.getAttribute('id');
    this.hasAfterTitles = !!this.el.querySelector('[slot="after-titles"]');
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
    return (h("div", { class: `${this.classNames.EL}` },
      h("eds-card", { clickable: true, onClickCard: this.onClickItem, class: `${this.classNames.EL}__card`, size: "sm" },
        h("div", { slot: "card-content" },
          h("div", { class: `${this.classNames.EL}__content` },
            this.icon &&
              h("eds-image", { class: `${this.classNames.EL}__leading-icon`, size: "6x", src: this.icon }),
            h("div", { class: `${this.classNames.EL}__text` },
              this.mainTitle &&
                h("eds-paragraph", { type: "h6", styles: `${this.styles}-500`, "font-weight": "bold" }, this.mainTitle),
              this.subtitle &&
                h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, this.subtitle)),
            this.hasAfterTitles &&
              h("span", { class: `${this.classNames.EL}__after-titles` },
                h("slot", { name: "after-titles" })),
            this.showTrailingIcon &&
              h("span", { class: `${this.classNames.EL}__trailing-icon` },
                h("eds-icon", { size: "3x", styles: "secondary-500", icon: "chevron-right" })))))));
  }
  static get is() { return "eds-quick-action"; }
  static get originalStyleUrls() { return {
    "$": ["quick-action.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["quick-action.css"]
  }; }
  static get properties() { return {
    "icon": {
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
      "attribute": "icon",
      "reflect": false
    },
    "styles": {
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
      "attribute": "styles",
      "reflect": false,
      "defaultValue": "'primary'"
    },
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
    "showTrailingIcon": {
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
      "attribute": "show-trailing-icon",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "clickItem",
      "name": "clickItem",
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
}
