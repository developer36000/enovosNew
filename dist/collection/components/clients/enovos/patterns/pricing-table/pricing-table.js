import { Component, Element, Event, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Pricing table
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSPricingTable {
  constructor() {
    this.styles = 'primary';
    this.classNames = {
      EL: 'pricing-table',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.styles) {
        className += ` ${this.classNames.EL}--${this.styles}`;
      }
      return className;
    };
    this.getItemClassName = (item) => {
      let className = `${this.classNames.EL}__item`;
      if (this.recommendedItem && this.recommendedItem === item.id) {
        className += ` ${this.classNames.EL}__item--recommended`;
      }
      if (this.selectedItem && this.selectedItem === item.id) {
        className += ` ${this.classNames.EL}__item--selected`;
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
    return (h("div", { class: this.getComponentClassName() }, this.items && this.items.map((item) => {
      var _a, _b, _c;
      return h("div", { key: item.id, class: this.getItemClassName(item) },
        this.recommendedItem && this.recommendedItem === item.id &&
          h("div", { class: `${this.classNames.EL}__badge` },
            h("eds-heading", { type: "h6", "font-weight": "bold", styles: "white", content: ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.recommended) || 'Recommended' })),
        h("div", { class: `${this.classNames.EL}__header` },
          h("eds-heading", { styles: "secondary", type: "h5", content: item.title, "font-weight": "bold" }),
          h("eds-heading", { styles: "secondary", type: "h6", content: item.subtitle })),
        h("div", { class: `${this.classNames.EL}__description` }, item.description.map((descriptionItem) => h("eds-paragraph", { "margin-top-1": true, "margin-bottom-1": true, type: "body-1" }, descriptionItem))),
        h("div", { class: `${this.classNames.EL}__prices` },
          h("div", { class: `${this.classNames.EL}__price` },
            h("eds-heading", { type: "h4", styles: "secondary", content: `<span class="${this.classNames.EL}__currency">€ </span>${item.monthlyPrice}*`, "font-weight": "bold" }),
            h("div", { class: `${this.classNames.EL}__price-suffix` },
              h("eds-heading", { styles: "secondary", type: "h6", content: ((_b = this.locale) === null || _b === void 0 ? void 0 : _b.perMonth) || 'per month' }))),
          h("div", { class: `${this.classNames.EL}__price` },
            h("eds-heading", { type: "h5", styles: "secondary", content: `<span class="${this.classNames.EL}__currency">€ </span>${item.yearlyPrice}*`, "font-weight": "bold" }),
            h("div", { class: `${this.classNames.EL}__price-suffix` },
              h("eds-heading", { styles: "secondary", type: "h6", content: ((_c = this.locale) === null || _c === void 0 ? void 0 : _c.perYear) || 'per year' })))),
        h("div", { class: `${this.classNames.EL}__checkbox` },
          h("eds-radio-button", { selected: this.selectedItem && this.selectedItem === item.id, styles: this.styles, onClickRadioButton: () => {
              this.clickItem.emit(item.id);
            }, size: "md", inputName: `${this.inputName}`, icon: "check-circle" })));
    })));
  }
  static get is() { return "eds-pricing-table"; }
  static get originalStyleUrls() { return {
    "$": ["pricing-table.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["pricing-table.css"]
  }; }
  static get properties() { return {
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
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "PricingTableItem[]",
        "resolved": "PricingTableItem[]",
        "references": {
          "PricingTableItem": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "selectedItem": {
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
      "attribute": "selected-item",
      "reflect": false
    },
    "recommendedItem": {
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
      "attribute": "recommended-item",
      "reflect": false
    },
    "inputName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "input-name",
      "reflect": false
    },
    "locale": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\n    perMonth?: string;\n    perYear?: string;\n    recommended?: string;\n  }",
        "resolved": "{ perMonth?: string; perYear?: string; recommended?: string; }",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
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
