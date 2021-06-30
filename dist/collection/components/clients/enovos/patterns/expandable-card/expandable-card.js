import { Component, Element, Event, Prop, State, Watch, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Expandable card
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSExpandableCard {
  constructor() {
    this.isRadio = false;
    this.isDisabled = false;
    this.isDefaultChecked = false;
    this.styles = 'primary';
    this.hideContentIfUnchecked = false;
    this.hideCheckbox = false;
    this.isChecked = false;
    this.classNames = {
      EL: 'expandable-card',
    };
    this.renderCheckbox = () => {
      if (this.isRadio) {
        return (h("eds-radio-button", { disabled: this.isDisabled, selected: !!this.isChecked, styles: this.styles, onClickRadioButton: e => {
            this.isChecked = e.detail.checked;
            this.clickCheckbox.emit(this.inputValue || undefined);
          }, size: "md", inputName: this.inputName || undefined, icon: "check-circle" }));
      }
      return (h("eds-checkbox", { disabled: this.isDisabled, selected: !!this.isChecked, styles: this.styles, onClickCheckbox: e => {
          this.isChecked = e.detail.selected;
          this.clickCheckbox.emit(this.inputValue || undefined);
        }, size: "md", inputName: this.inputName || undefined }));
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.isDisabled) {
        className += ` ${this.classNames.EL}--disabled`;
      }
      if (this.hideContentIfUnchecked && !this.isChecked) {
        className += ` ${this.classNames.EL}--content-hidden`;
      }
      return className;
    };
  }
  watchIsDefaultCheckedHandler(newValue, oldValue) {
    if (newValue !== oldValue && newValue !== this.isChecked) {
      this.isChecked = newValue;
    }
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.isChecked = this.isDefaultChecked;
  }
  componentWillRender() {
    const expandableContent = this.el.querySelector('[slot="expandable-content"]');
    this.hasExpandableContent = !!expandableContent && !!expandableContent.innerHTML.trim();
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
    return (h("div", { class: this.getComponentClassName() },
      h("eds-card", { class: `${this.classNames.EL}__card`, size: "sm", styles: this.isChecked ? this.styles || 'primary' : undefined },
        h("div", { slot: "card-content" },
          h("div", { class: `${this.classNames.EL}__main-content` },
            !this.hideCheckbox &&
              h("div", { class: `${this.classNames.EL}__checkbox` }, this.renderCheckbox()),
            this.icon &&
              h("eds-image", { class: `${this.classNames.EL}__leading-icon`, size: "6x", src: this.icon }),
            h("div", { class: `${this.classNames.EL}__text` },
              this.mainTitle &&
                h("eds-paragraph", { type: "h6", styles: `secondary-500`, "font-weight": "bold" }, this.mainTitle),
              this.subtitle &&
                h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, this.subtitle))),
          this.hasExpandableContent &&
            h("div", { class: `${this.classNames.EL}__expandable-content` },
              h("slot", { name: "expandable-content" }))))));
  }
  static get is() { return "eds-expandable-card"; }
  static get originalStyleUrls() { return {
    "$": ["expandable-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["expandable-card.css"]
  }; }
  static get properties() { return {
    "isRadio": {
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
      "attribute": "is-radio",
      "reflect": false,
      "defaultValue": "false"
    },
    "isDisabled": {
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
      "attribute": "is-disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "isDefaultChecked": {
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
      "attribute": "is-default-checked",
      "reflect": false,
      "defaultValue": "false"
    },
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
    "inputName": {
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
      "attribute": "input-name",
      "reflect": false
    },
    "inputValue": {
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
      "attribute": "input-value",
      "reflect": false
    },
    "hideContentIfUnchecked": {
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
      "attribute": "hide-content-if-unchecked",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideCheckbox": {
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
      "attribute": "hide-checkbox",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "isChecked": {}
  }; }
  static get events() { return [{
      "method": "clickCheckbox",
      "name": "clickCheckbox",
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
  static get watchers() { return [{
      "propName": "isDefaultChecked",
      "methodName": "watchIsDefaultCheckedHandler"
    }]; }
}
