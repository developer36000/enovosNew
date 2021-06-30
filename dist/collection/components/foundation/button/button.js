import { Component, Element, Event, Prop, h } from '@stencil/core';
import { compact, uniq } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { BtnPropsHelper } from '../../../utils/BtnPropsHelper';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Button
 * @description A button initiates an action, allowing interactions with the system, either by clicking or by tapping.
 * @path foundation
 * @urlDesign design-guide-components-component-button.html
 *
 * @prop --variations-attributes_outlined: Outlined button without any background
 * @prop --variations-attributes_text-only: Text only button without outline and background
 * @prop --variations-attributes_expand: Full width button used for mobile layout
 * @prop --variations-attributes_disabled: Button in inactive state
 * @prop --styles_[#{$color-name}]: Color of the button (Ex. primary, secondary, tertiary, quaternary, ...)
 * @prop --styles_no-radius-left: No border radius on left side
 * @prop --styles_no-radius-right: No border radius on right side
 * @prop --icon-position_left: Icon positioned to the left of the text
 * @prop --icon-position_right: Icon positioned to the right of the text
 */
export class ENOVOSButton {
  constructor() {
    this.type = 'button';
    this.classNames = {
      EL: 'btn',
      ICON: '__icon',
      GROUPED: '--grouped',
    };
    this._clickButtonHandler = undefined;
    this._keypressHandler = undefined;
  }
  /** INJECT_ANCHOR */
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
    // Necessary if we add to set an elevation an correctly apply the shadow according to border radius
    this.el.setAttribute('name', 'button');
    if (this.disabled) {
      return this.el.querySelector('button').setAttribute('disabled', 'disabled');
    }
    this.attachEvent();
  }
  componentDidUpdate() {
    if (this.disabled) {
      this.el.querySelector('button').setAttribute('disabled', 'disabled');
    }
    else if (this.el.querySelector('button').hasAttribute('disabled')) {
      this.el.querySelector('button').removeAttribute('disabled');
    }
    this.attachEvent();
  }
  componentDidRender() {
    this.setIconSize();
    const hasSlotIcon = !!this.el.querySelector(`[slot="icon"]`);
    // Fix IE Slot
    if (hasSlotIcon) {
      let iconClass = [`slot-icon`];
      const slotIconElement = this.el.querySelector('[slot="icon"]');
      const regx = new RegExp('\\b' + `${this.classNames.EL}${this.classNames.ICON}` + '.*?\\b', 'g');
      iconClass = iconClass.concat(ComponentPropsHelper.setGlobalStyles(this.iconStyles, `${this.classNames.EL}${this.classNames.ICON}`).split(' '));
      slotIconElement.className = slotIconElement.className.replace(regx, '');
      slotIconElement.classList.add(...compact(iconClass));
    }
    const hasSlotImage = !!this.el.querySelector(`[slot="image"]`);
    // Fix IE Slot
    if (hasSlotImage) {
      const slotImageElement = this.el.querySelector('[slot=image]');
      slotImageElement.classList.add('slot-image');
    }
    const hasSlotMotion = !!this.el.querySelector(`[slot="motion"]`);
    // Fix IE Slot
    if (hasSlotMotion) {
      const slotMotionElement = this.el.querySelector('[slot=motion]');
      slotMotionElement.classList.add('slot-motion');
    }
    if (this.expand) {
      this.el.classList.add('expand');
    }
  }
  attachEvent() {
    if (this._clickButtonHandler !== undefined && typeof this._clickButtonHandler === 'object') {
      this._clickButtonHandler.removeEvent();
    }
    this._clickButtonHandler = new TapEvent(this.el, e => {
      this.clickButtonHandler(e);
    });
  }
  clickButtonHandler(e) {
    e.preventDefault();
    if (!this.disabled) {
      this.clickButton.emit(e);
    }
    return false;
  }
  // get the font-family
  getFontFamily() {
    if (this.el.hasAttribute('font-family-1')) {
      return 'font-family-1';
    }
    if (this.el.hasAttribute('font-family-2')) {
      return 'font-family-2';
    }
    if (this.el.hasAttribute('font-family-3')) {
      return 'font-family-3';
    }
    if (this.el.hasAttribute('font-family-mobile-1')) {
      return 'font-family-mobile-1';
    }
    return '';
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  // Get icon placement
  getIconPlacement() {
    const iconClass = [];
    const hasSlotIcon = !!this.el.querySelector(`[slot="icon"]`);
    if (hasSlotIcon) {
      iconClass.push(`${this.classNames.EL}--with-icon`);
      if (this.content) {
        if (this.iconPosition && this.iconPosition.toLowerCase() === 'right') {
          iconClass.push(`${this.classNames.EL}--with-icon--right`);
        }
        else {
          iconClass.push(`${this.classNames.EL}--with-icon--left`);
        }
      }
      else {
        iconClass.push(`${this.classNames.EL}--icon-only`);
      }
    }
    return iconClass.join(' ');
  }
  // Set icon size
  setIconSize() {
    const hasSlotIcon = !!this.el.querySelector(`[slot="icon"]`);
    const slottedIcon = this.el.querySelector('[slot="icon"]');
    if (hasSlotIcon && !slottedIcon.hasAttribute('size')) {
      if (this.size) {
        switch (this.size) {
          case 'sm':
          case 'md':
            slottedIcon.setAttribute('size', '2');
            break;
          case 'lg':
          default:
            slottedIcon.setAttribute('size', '3');
            break;
        }
      }
    }
  }
  // Get icon placement
  getImageClass() {
    const hasSlotImage = !!this.el.querySelector(`[slot="image"]`);
    if (hasSlotImage) {
      return `${this.classNames.EL}--with-image`;
    }
    return '';
  }
  getMotionClass() {
    const hasSlotMotion = !!this.el.querySelector(`[slot="motion"]`);
    if (hasSlotMotion) {
      return `${this.classNames.EL}--with-motion`;
    }
    return '';
  }
  getVariantStyles() {
    const styles = (this.styles !== undefined) ? this.styles.split(' ') : [];
    if (this.outlined) {
      styles.push(`outlined`);
    }
    if (this.disabled) {
      styles.push(`disabled`);
    }
    if (this.textOnly) {
      styles.push(`text`);
    }
    if (this.expand) {
      styles.push(`expand`);
    }
    if (this.narrow) {
      styles.push(`narrow`);
    }
    if (this.rounded) {
      styles.push(`rounded`);
    }
    if (this.squared) {
      styles.push(`squared`);
    }
    return uniq(styles).join(' ');
  }
  /** REMOVABLE START */
  // Generate content
  getContent() {
    return (h("div", { class: "text" },
      " ",
      this.content,
      " "));
  }
  render() {
    return (h("button", { type: this.type, class: [
        this.classNames.EL,
        BtnPropsHelper.getStyles(this.getVariantStyles(), this.classNames.EL),
        this.getFontFamily(),
        this.getSize(),
        this.getIconPlacement(),
        this.getImageClass(),
        this.getMotionClass(),
        this.isHover ? `${this.classNames.EL}--hover` : '',
        this.grouped ? `${this.classNames.EL}${this.classNames.GROUPED}` : '',
      ].join(' ') },
      h("div", { class: this.classNames.EL + '__content', tabIndex: -1 },
        h("slot", { name: "icon" }),
        h("slot", { name: "image" }),
        h("slot", { name: "motion" }),
        this.getContent())));
  }
  static get is() { return "eds-button"; }
  static get originalStyleUrls() { return {
    "$": ["button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
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
      "reflect": true
    },
    "textOnly": {
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
      "attribute": "text-only",
      "reflect": true
    },
    "outlined": {
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
      "attribute": "outlined",
      "reflect": true
    },
    "expand": {
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
      "attribute": "expand",
      "reflect": true
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": true
    },
    "narrow": {
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
      "attribute": "narrow",
      "reflect": true
    },
    "grouped": {
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
      "attribute": "grouped",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "rounded",
      "reflect": false
    },
    "squared": {
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
      "attribute": "squared",
      "reflect": false
    },
    "content": {
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
      "attribute": "content",
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
    "iconPosition": {
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
      "attribute": "icon-position",
      "reflect": false
    },
    "iconStyles": {
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
      "attribute": "icon-styles",
      "reflect": false
    },
    "type": {
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
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'button'"
    },
    "isHover": {
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
      "attribute": "is-hover",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "clickButton",
      "name": "clickButton",
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
