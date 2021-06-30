import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
/**
 * @name Info Text
 * @description Info Text to be display on top right of the field
 * @path foundation/form
 * @documented false
 */
export class ENOVOSInfoText {
  constructor() {
    this.classNames = {
      EL: 'info',
      TOOLTIP: '__tooltip',
      ICON: '__icon',
    };
  }
  componentWillLoad() {
    this.uuid = `${this.classNames.EL}${this.classNames.TOOLTIP}--${uuidv4()}`;
  }
  /**
   * @description Init the host element and attach event
   */
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
        this.classNames.EL,
        ComponentPropsHelper.setGlobalStyles(this.infoStyles, this.classNames.EL),
      ].join(' ') },
      this.infoText !== undefined ? h("span", null, this.infoText) : '',
      this.infoTooltipIcon !== undefined ?
        h("eds-icon", { id: this.uuid, class: [
            `${this.classNames.EL}${this.classNames.ICON}`,
          ].join(' '), icon: this.infoTooltipIcon, size: this.infoTooltipSize, styles: this.infoTooltipStyles })
        : '',
      this.infoTooltipText !== undefined ?
        h("eds-tooltip", { class: [
            `${this.classNames.EL}${this.classNames.TOOLTIP}`,
          ].join(' '), selector: this.uuid, text: this.infoTooltipText, pointer: this.infoTooltipPointer ? true : false, timeoutValue: this.infoTooltipTimeoutValue, notimeout: this.infoTooltipNotimeout }) : ''));
  }
  static get is() { return "eds-info"; }
  static get originalStyleUrls() { return {
    "$": ["info.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["info.css"]
  }; }
  static get properties() { return {
    "infoText": {
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
      "attribute": "info-text",
      "reflect": false
    },
    "infoStyles": {
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
      "attribute": "info-styles",
      "reflect": false
    },
    "infoTooltipText": {
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
      "attribute": "info-tooltip-text",
      "reflect": false
    },
    "infoTooltipIcon": {
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
      "attribute": "info-tooltip-icon",
      "reflect": false
    },
    "infoTooltipSize": {
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
      "attribute": "info-tooltip-size",
      "reflect": false
    },
    "infoTooltipStyles": {
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
      "attribute": "info-tooltip-styles",
      "reflect": false
    },
    "infoTooltipPointer": {
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
      "attribute": "info-tooltip-pointer",
      "reflect": false
    },
    "infoTooltipTimeoutValue": {
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
      "attribute": "info-tooltip-timeout-value",
      "reflect": false
    },
    "infoTooltipNotimeout": {
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
      "attribute": "info-tooltip-notimeout",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
