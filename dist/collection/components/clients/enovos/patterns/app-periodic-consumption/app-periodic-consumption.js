import { Component, Element, Method, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name App Periodic Consumption
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSAppPeriodicConsumption {
  constructor() {
    this.chartMinValue = 0;
    this.chartMaxValue = 1000;
    this.styles = 'primary';
    this.classNames = {
      EL: 'app-periodic-consumption',
      BODY: '__body',
      TEXT: '__text',
      CHART: '__chart',
      VALUE: '__value',
    };
    this.renderCaption = (itemTitle, itemValue, itemCaptionIcon, itemCaptionStyles, itemCaptionText) => (h("div", null,
      h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: itemTitle }),
      h("div", { class: `${this.classNames.EL}${this.classNames.BODY}${this.classNames.TEXT}${this.classNames.VALUE}` },
        h("eds-heading", { type: "h6", content: itemValue, styles: "secondary" }),
        itemCaptionIcon && itemCaptionStyles && itemCaptionText && [
          h("eds-icon", { icon: itemCaptionIcon, styles: itemCaptionStyles }),
          h("eds-paragraph", { type: "body-2", content: itemCaptionText }),
        ])));
  }
  /**
   * @description (Re-)calculate charts' width
   */
  async calculateChartsWidth() {
    const barCharts = this.el.querySelectorAll('[name="bar-chart"]');
    if (barCharts && barCharts.length > 0) {
      barCharts.forEach(barChart => {
        barChart.calculateWidth();
      });
    }
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
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
    return (h("eds-card", null,
      h("div", { slot: "card-content" },
        h("div", { class: `${this.classNames.EL}${this.classNames.BODY}` },
          h("div", { class: `${this.classNames.EL}${this.classNames.BODY}${this.classNames.TEXT}` },
            this.renderCaption(this.firstItemTitle, this.firstItemValue, this.firstItemCaptionIcon, this.firstItemCaptionStyles, this.firstItemCaptionText),
            this.renderCaption(this.secondItemTitle, this.secondItemValue, this.secondItemCaptionIcon, this.secondItemCaptionStyles, this.secondItemCaptionText)),
          h("div", { class: `${this.classNames.EL}${this.classNames.BODY}${this.classNames.CHART}` },
            h("eds-bar-chart", { height: 130, "min-width": 100, data: {
                style: this.styles,
                items: [
                  {
                    value: this.chartValue,
                    text: `${this.chartValue} kWh`,
                  },
                ],
              }, "y-min-value": this.chartMinValue, "y-max-value": this.chartMaxValue }))))));
  }
  static get is() { return "eds-app-periodic-consumption"; }
  static get originalStyleUrls() { return {
    "$": ["app-periodic-consumption.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["app-periodic-consumption.css"]
  }; }
  static get properties() { return {
    "firstItemTitle": {
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
      "attribute": "first-item-title",
      "reflect": false
    },
    "firstItemValue": {
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
      "attribute": "first-item-value",
      "reflect": false
    },
    "firstItemCaptionIcon": {
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
      "attribute": "first-item-caption-icon",
      "reflect": false
    },
    "firstItemCaptionStyles": {
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
      "attribute": "first-item-caption-styles",
      "reflect": false
    },
    "firstItemCaptionText": {
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
      "attribute": "first-item-caption-text",
      "reflect": false
    },
    "secondItemTitle": {
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
      "attribute": "second-item-title",
      "reflect": false
    },
    "secondItemValue": {
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
      "attribute": "second-item-value",
      "reflect": false
    },
    "secondItemCaptionIcon": {
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
      "attribute": "second-item-caption-icon",
      "reflect": false
    },
    "secondItemCaptionStyles": {
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
      "attribute": "second-item-caption-styles",
      "reflect": false
    },
    "secondItemCaptionText": {
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
      "attribute": "second-item-caption-text",
      "reflect": false
    },
    "chartMinValue": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "chart-min-value",
      "reflect": false,
      "defaultValue": "0"
    },
    "chartMaxValue": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "chart-max-value",
      "reflect": false,
      "defaultValue": "1000"
    },
    "chartValue": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "chart-value",
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
    }
  }; }
  static get methods() { return {
    "calculateChartsWidth": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "(Re-)calculate charts' width"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
