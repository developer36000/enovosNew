import { Component, Element, Event, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Contract item
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSContractItem {
  constructor() {
    this.isCheckable = false;
    this.isChecked = false;
    this.classNames = {
      EL: 'contract-item',
    };
    this.onClickItem = props => {
      this.clickItem.emit(props);
    };
    this.onClickItemCheckbox = props => {
      this.clickItemCheckbox.emit(props);
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.isChecked) {
        className += ` ${this.classNames.EL}--is-checked`;
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
      h("eds-card", { size: "sm", clickable: true, class: `${this.classNames.EL}__card`, styles: this.isChecked ? this.styles || 'primary' : undefined, onClickCard: () => {
          this.onClickItem({ contractId: this.contractId, customerId: this.customerId });
        } },
        h("div", { slot: "card-content" },
          h("div", { class: `${this.classNames.EL}__content` },
            this.isCheckable &&
              h("div", { class: `${this.classNames.EL}__checkbox` },
                h("eds-checkbox", { selected: !!this.isChecked, styles: this.styles, onClickCheckbox: () => {
                    this.onClickItemCheckbox({ contractId: this.contractId, customerId: this.customerId });
                  }, size: "md", inputName: `${this.contractId}.${this.customerId}` })),
            h("div", { class: `${this.classNames.EL}__before-text` },
              h("div", { class: `${this.classNames.EL}__type` },
                h("eds-contract-type-icon", { type: this.type })),
              h("div", { class: `${this.classNames.EL}__status` },
                h("eds-status-icon", { status: this.status }))),
            h("div", { class: `${this.classNames.EL}__text` },
              h("span", { class: `${this.classNames.EL}__customer` },
                this.customerId,
                " - ",
                this.customerName),
              h("span", { class: `${this.classNames.EL}__contract` },
                this.contractId,
                " - ",
                this.contractAddress)))))));
  }
  static get is() { return "eds-contract-item"; }
  static get originalStyleUrls() { return {
    "$": ["contract-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["contract-item.css"]
  }; }
  static get properties() { return {
    "isCheckable": {
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
      "attribute": "is-checkable",
      "reflect": false,
      "defaultValue": "false"
    },
    "isChecked": {
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
      "attribute": "is-checked",
      "reflect": false,
      "defaultValue": "false"
    },
    "status": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'open' | 'closed'",
        "resolved": "\"closed\" | \"open\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "status",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'electricity' | 'producer' | 'gas'",
        "resolved": "\"electricity\" | \"gas\" | \"producer\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "customerId": {
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
      "attribute": "customer-id",
      "reflect": false
    },
    "customerName": {
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
      "attribute": "customer-name",
      "reflect": false
    },
    "contractId": {
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
      "attribute": "contract-id",
      "reflect": false
    },
    "contractAddress": {
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
      "attribute": "contract-address",
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
      "reflect": false
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
    }, {
      "method": "clickItemCheckbox",
      "name": "clickItemCheckbox",
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
