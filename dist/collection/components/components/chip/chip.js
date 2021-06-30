import { Component, Element, Event, Prop, Watch, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Chip
 * @description The Chip component displays an element that looks similar to a button. It can be selected by the user when clicked on. The component structure supports a label and an optional leading/trailing element. The leading/trailing element can be setup to visualise as an avatar, a simple icon or a radio input.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-chip.html
 */
export class ENOVOSChip {
  constructor() {
    this.selected = false;
    this.unselectable = false;
    this.disabled = false;
    this.motionless = false;
    this.readOnly = false;
    this.trailingEvent = false; // event on trailing element
    this.availableType = ['radio', 'avatar', 'icon', 'badge'];
    this.classNames = {
      EL: 'chip',
      ICON: '__icon',
      BADGE: '__badge',
      AVATAR: '__avatar',
      RADIO: '__radio',
      ELEMENT: '__element',
      LEADING: '--leading',
      TRAILING: '--trailing',
      UNSELECTABLE: '--unselectable',
      DISABLED: '--disabled',
      MOTIONLESS: '--motionless',
      HAS_AVATAR: '--has-avatar',
      HAS_ICON: '--has-icon',
      HAS_BADGE: '--has-badge',
      READ_ONLY: '--read-only',
    };
    this._clickHandler = undefined;
    this._clickTrailingHandler = undefined;
  }
  watchDataHandler(newValue, oldValue) {
    if (oldValue !== newValue) {
      this.inputEl = this.el.querySelector('input');
      if (this.inputEl) {
        this.inputEl.checked = this.selected;
      }
    }
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
    if (this.el.querySelector('input')) {
      this.inputEl = this.el.querySelector('input');
      this.inputEl.checked = this.selected;
      if (this.disabled) {
        this.inputEl.setAttribute('disabled', 'disabled');
      }
    }
    this.handleEvent();
  }
  componentDidUpdate() {
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    else if (this.inputEl !== null && this.inputEl.hasAttribute('disabled')) {
      this.inputEl.removeAttribute('disabled');
    }
  }
  /**
   * @description Control if a component is disabled
   * @return {boolean}
   */
  isDisabled() {
    return (this.disabled) ? true : false;
  }
  /**
   * @description Control if a component is motionless
   * @return {boolean}
   */
  isMotionless() {
    return (this.motionless) ? true : false;
  }
  /**
   * @description Control if a component is motionless
   * @return {boolean}
   */
  isReadOnly() {
    return (this.readOnly) ? true : false;
  }
  /**
   * @description Control if a icon/avatar/radio leading parameter should be display
   * @return {boolean}
   */
  hasLeading() {
    return (this.leadingType && this.availableType.includes(this.leadingType)) ? true : false;
  }
  /**
   * @description Control if a icon/avatar/radio leading parameter should be display
   * @return {boolean}
   */
  hasTrailing() {
    return (this.trailingType && this.availableType.includes(this.trailingType)) ? true : false;
  }
  /**
   * @description Get component size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  getVariationClasses() {
    const classes = [];
    if (this.isDisabled()) {
      classes.push(`${this.classNames.EL}${this.classNames.DISABLED}`);
    }
    if (this.isReadOnly()) {
      classes.push(`${this.classNames.EL}${this.classNames.READ_ONLY}`);
    }
    if (this.isMotionless()) {
      classes.push(`${this.classNames.EL}${this.classNames.MOTIONLESS}`);
    }
    if (this.unselectable === true) {
      classes.push(`${this.classNames.EL}${this.classNames.UNSELECTABLE}`);
    }
    if (this.hasLeading() || this.hasTrailing()) {
      if (this.leadingType === 'avatar' || this.trailingType === 'avatar') {
        if (this.sizeAvatar === 'xxs') {
          classes.push(`${this.classNames.EL}${this.classNames.HAS_ICON}`);
        }
        else {
          classes.push(`${this.classNames.EL}${this.classNames.HAS_AVATAR}`);
        }
      }
      else if (this.leadingType === 'badge' || this.trailingType === 'badge') {
        classes.push(`${this.classNames.EL}${this.classNames.HAS_BADGE}`);
      }
      else {
        classes.push(`${this.classNames.EL}${this.classNames.HAS_ICON}`);
      }
    }
    return classes.join(' ');
  }
  /**
   * @description Attach event to component
   */
  handleEvent() {
    const shape = this.el.querySelector(`.${this.classNames.EL}`);
    if (!this.isMotionless()) {
      if (this._clickHandler && typeof this._clickHandler === 'object') {
        this._clickHandler.removeEvent();
      }
      this._clickHandler = new TapEvent(shape, e => {
        this.clickHandler(e);
      });
      if (this.trailingEvent) {
        const trailingElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`);
        if (trailingElement) {
          if (this._clickTrailingHandler && typeof this._clickTrailingHandler === 'object') {
            this._clickTrailingHandler.removeEvent();
          }
          this._clickTrailingHandler = new TapEvent(trailingElement, e => {
            e.preventDefault();
            this.clickTrailing.emit(this);
          });
        }
      }
    }
  }
  clickHandler(e) {
    e.preventDefault();
    if (!this.disabled) {
      this.clickChip.emit({ 'uid': this.uid, 'inputName': this.inputName, 'selected': this.selected });
      this.selected = !this.selected;
    }
  }
  render() {
    return [
      h("input", { type: "radio", name: this.inputName, value: this.value }),
      h("button", { type: "button", class: [
          this.classNames.EL,
          this.getSize(),
          this.getVariationClasses(),
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' ') },
        (() => {
          switch (this.leadingType) {
            case 'avatar':
              return h("eds-avatar", { src: this.leadingValue, size: this.size === 'sm' && this.sizeAvatar === undefined ? 'xs' : this.sizeAvatar, class: [
                  `${this.classNames.EL}${this.classNames.AVATAR}`,
                  `${this.classNames.EL}${this.classNames.LEADING}${this.classNames.ELEMENT}`,
                ].join(' ') });
            case 'icon':
              return h("eds-icon", { class: [
                  `${this.classNames.EL}${this.classNames.ICON}`,
                  `${this.classNames.EL}${this.classNames.LEADING}${this.classNames.ELEMENT}`,
                ].join(' '), icon: this.leadingValue });
            case 'radio':
              return h("div", { class: [
                  `${this.classNames.EL}${this.classNames.RADIO}`,
                  `${this.classNames.EL}${this.classNames.LEADING}${this.classNames.ELEMENT}`,
                ].join(' ') });
          }
        })(),
        h("label", null, this.label),
        (() => {
          switch (this.trailingType) {
            case 'avatar':
              return h("eds-avatar", { src: this.trailingValue, size: this.size === 'sm' && this.sizeAvatar === undefined ? 'xs' : this.sizeAvatar, class: [
                  `${this.classNames.EL}${this.classNames.AVATAR}`,
                  `${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`,
                ].join(' ') });
            case 'icon':
              return h("eds-icon", { class: [
                  `${this.classNames.EL}${this.classNames.ICON}`,
                  `${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`,
                ].join(' '), icon: this.trailingValue });
            case 'badge':
              return h("eds-badge", { class: [
                  `${this.classNames.EL}${this.classNames.BADGE}`,
                  `${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`,
                ].join(' '), text: this.trailingValue, size: this.size === 'lg' ? 'md' : 'sm' });
            case 'radio':
              return h("div", { class: [
                  `${this.classNames.EL}${this.classNames.RADIO}`,
                  `${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`,
                ].join(' ') });
          }
        })()),
    ];
  }
  static get is() { return "eds-chip"; }
  static get originalStyleUrls() { return {
    "$": ["chip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["chip.css"]
  }; }
  static get properties() { return {
    "uid": {
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
      "attribute": "uid",
      "reflect": false
    },
    "selected": {
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
      "attribute": "selected",
      "reflect": false,
      "defaultValue": "false"
    },
    "unselectable": {
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
      "attribute": "unselectable",
      "reflect": false,
      "defaultValue": "false"
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
      "reflect": false,
      "defaultValue": "false"
    },
    "motionless": {
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
      "attribute": "motionless",
      "reflect": false,
      "defaultValue": "false"
    },
    "readOnly": {
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
      "attribute": "read-only",
      "reflect": false,
      "defaultValue": "false"
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
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "value": {
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
      "attribute": "value",
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
    "leadingType": {
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
      "attribute": "leading-type",
      "reflect": false
    },
    "leadingValue": {
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
      "attribute": "leading-value",
      "reflect": false
    },
    "trailingType": {
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
      "attribute": "trailing-type",
      "reflect": false
    },
    "trailingValue": {
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
      "attribute": "trailing-value",
      "reflect": false
    },
    "trailingEvent": {
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
      "attribute": "trailing-event",
      "reflect": false,
      "defaultValue": "false"
    },
    "sizeAvatar": {
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
      "attribute": "size-avatar",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "clickChip",
      "name": "clickChip",
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
      "method": "clickTrailing",
      "name": "clickTrailing",
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
      "propName": "selected",
      "methodName": "watchDataHandler"
    }]; }
}
