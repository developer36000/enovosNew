import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
/**
 * @name Positioned Icon
 * @description A positioned icon renders an icon on a precisely defined position in relation to a target element.
 * @path layout
 * @documented true
 */
export class ENOVOSPositionedIcon {
  constructor() {
    this.position = 'top right';
    this.alignment = 'centered';
    this.availableVerticalPosition = ['top', 'middle', 'bottom'];
    this.availableHorizontalPosition = ['left', 'center', 'right'];
    this.availableAlignment = ['outside', 'centered', 'inside'];
    this.classNames = {
      EL: 'positioned-icon',
      ICON: '__icon',
      ON: '--on-',
      MARGIN: '--margin',
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
  componentDidRender() {
    this.availableVerticalPosition.concat(this.availableHorizontalPosition.concat(this.availableAlignment)).map(itemClass => {
      this.el.querySelector(`.${this.classNames.EL}`).classList.remove(`${this.classNames.EL}${this.classNames.ON}${itemClass}`);
    });
    const availableVerticalPositionClasses = [];
    const availableHorizontalPositionClasses = [];
    const availablePositionClasses = this.position.split(' ');
    availablePositionClasses.map(availablePositionClass => {
      if (this.availableVerticalPosition.includes(availablePositionClass)) {
        availableVerticalPositionClasses.push(availablePositionClass);
      }
      if (this.availableHorizontalPosition.includes(availablePositionClass)) {
        availableHorizontalPositionClasses.push(availablePositionClass);
      }
    });
    // Set default top right if wrong/missing values are set
    if (availableVerticalPositionClasses.length === 0) {
      availableVerticalPositionClasses.push(this.availableVerticalPosition[0]);
    }
    if (availableHorizontalPositionClasses.length === 0) {
      availableHorizontalPositionClasses.push(this.availableHorizontalPosition[2]);
    }
    // Set final position
    availableVerticalPositionClasses.concat(availableHorizontalPositionClasses).map(availablePositionClass => {
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}${this.classNames.ON}${availablePositionClass}`);
    });
    const availableAlignmentClasses = this.alignment.split(' ');
    availableAlignmentClasses.map(availableAlignmentClass => {
      if (this.availableAlignment.includes(availableAlignmentClass)) {
        this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}${this.classNames.ON}${availableAlignmentClass}`);
      }
    });
    // Set additional margin
    if (this.additionalMargin || this.additionalMargin !== undefined) {
      let additionalMargin = this.additionalMargin;
      // By default it's possible to set only the additionalMargin empty. Init default value for empty additionalMargin
      if (this.additionalMargin.trim() === '') {
        additionalMargin = (this.alignment === 'outside') ? '16x' : '1x';
      }
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(ComponentPropsHelper.getSize(additionalMargin, `${this.classNames.EL}${this.classNames.MARGIN}`));
    }
    if (this.corner) {
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}--corner`);
    }
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.backgroundColor ? `${this.classNames.EL}--has-background-color` : '',
      ].join(' ') },
      h("eds-icon", { class: [
          `${this.classNames.EL}${this.classNames.ICON}`,
          this.backgroundColor ? ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundColor}`, `${this.classNames.EL}`) : '',
        ].join(' '), size: this.size, styles: this.styles, icon: this.icon }),
      h("slot", null)));
  }
  static get is() { return "eds-positioned-icon"; }
  static get originalStyleUrls() { return {
    "$": ["positioned-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["positioned-icon.css"]
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
      "reflect": false
    },
    "size": {
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
      "attribute": "size",
      "reflect": false
    },
    "rounded": {
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
      "attribute": "rounded",
      "reflect": false
    },
    "position": {
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
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'top right'"
    },
    "alignment": {
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
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "'centered'"
    },
    "additionalMargin": {
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
      "attribute": "additional-margin",
      "reflect": false
    },
    "corner": {
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
      "attribute": "corner",
      "reflect": false
    },
    "backgroundColor": {
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
      "attribute": "background-color",
      "reflect": false
    },
    "bgColor": {
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
      "attribute": "bg-color",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
