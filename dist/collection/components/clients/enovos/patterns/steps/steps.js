import { Component, Element, Event, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Steps
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSSteps {
  constructor() {
    this.styles = 'primary';
    this.itemsClickable = false;
    this.classNames = {
      EL: 'steps',
      ITEM: '__item',
      ICON: '__icon',
      ICON_TEXT: '__icon-text',
      TITLE: '__title',
      ACTIVE: '--active',
      IS_VALID: '--is-valid',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.styles) {
        className += ` ${className} ${className}--${this.styles}`;
      }
      if (this.itemsClickable) {
        className += ` ${className} ${className}--items-clickable`;
      }
      return className;
    };
    this.getItemClassName = (item) => {
      let className = this.classNames.EL + this.classNames.ITEM;
      if (this.activeItemId === item.id) {
        className += ` ${className} ${className}${this.classNames.ACTIVE}`;
      }
      if (item.isValid) {
        className += ` ${className} ${className}${this.classNames.IS_VALID}`;
      }
      return className;
    };
    this.onClickItem = (id) => {
      if (this.itemsClickable) {
        this.clickStep.emit(id);
      }
    };
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
    return (h("ol", { class: this.getComponentClassName() }, this.items && this.items.length > 0 && this.items.map((item, index) => h("li", { class: this.getItemClassName(item), key: item.id, onClick: () => this.onClickItem(item.id) },
      h("span", { class: this.classNames.EL + this.classNames.ICON }, item.isValid
        ?
          h("span", { class: this.classNames.EL + this.classNames.ICON_TEXT },
            h("eds-icon", { icon: "check", styles: "white" }))
        : h("span", { class: this.classNames.EL + this.classNames.ICON_TEXT }, index + 1)),
      h("span", { class: this.classNames.EL + this.classNames.TITLE },
        h("eds-paragraph", { type: "body-1", "font-weight": "bold", styles: "secondary-500" }, item.title))))));
  }
  static get is() { return "eds-steps"; }
  static get originalStyleUrls() { return {
    "$": ["steps.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["steps.css"]
  }; }
  static get properties() { return {
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IStep[]",
        "resolved": "IStep[]",
        "references": {
          "IStep": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "activeItemId": {
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
      "attribute": "active-item-id",
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
    "itemsClickable": {
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
      "attribute": "items-clickable",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "clickStep",
      "name": "clickStep",
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
