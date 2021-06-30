import { Component, Element, Method, Prop, h } from '@stencil/core';
import { isEqual } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
/**
 * @name Tooltip
 * @description Tooltips are short, informative messages that are displayed when a cursor is positioned on a target element.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-tooltip.html
 *
 * @prop --styles_[#{$color-name}]: Color of the tooltip (Ex. white, tertiary-800,...)
 * @prop --size_[md/sm/xs]: Size of the tooltip. Default is md.
 * @prop --placement_[top/bottom/left/right]: Placement of the tooltip. Default is top. It can be a combination of horizontal/vertifcal placement.
 */
export class ENOVOSTooltip {
  constructor() {
    this.autoInit = true; // Defines if component should be initalize as soon as it's loaded
    this.placement = 'top'; // The position where the tooltip should be display
    this.timeoutValue = 2000; // Default value for timeout delay
    this.notimeout = false;
    this.elevationStyle = 'light';
    this.elevationLevel = '2';
    this.availableVerticalPosition = ['top', 'middle', 'bottom'];
    this.availableHorizontalPosition = ['left', 'center', 'right'];
    this.finalPlacement = [];
    this.revertPlacement = [];
    this.classNames = {
      EL: 'tooltip',
      CONTENT: '__content',
      TEXT: '__text',
      POINTER: '--pointer',
      ACTIVE: '--active',
    };
    this.tooltipRect = {
      width: 0,
      height: 0,
    };
    this.space = 8;
    this.eventStart = 'mouseover';
    this.eventEnd = 'mouseleave';
    this.attachmentMap = {
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left',
      CENTER: 'center',
    };
  }
  /** INJECT_ANCHOR */
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
    if (this.autoInit) {
      this.init();
    }
  }
  async init() {
    const selectorEl = document.querySelector(`#${this.selector}`);
    if (selectorEl) {
      this.initEventsListener(selectorEl);
    }
    const availableVerticalPositionClasses = [];
    const availableHorizontalPositionClasses = [];
    const availablePositionClasses = this.placement.split(' ');
    availablePositionClasses.map(availablePositionClass => {
      if (this.availableVerticalPosition.includes(availablePositionClass)) {
        availableVerticalPositionClasses.push(availablePositionClass);
      }
      if (this.availableHorizontalPosition.includes(availablePositionClass)) {
        availableHorizontalPositionClasses.push(availablePositionClass);
      }
    });
    // Set default top center if wrong/missing values are set
    if (availableVerticalPositionClasses.length === 0) {
      availableVerticalPositionClasses.push(this.availableVerticalPosition[1]);
    }
    if (availableHorizontalPositionClasses.length === 0) {
      availableHorizontalPositionClasses.push(this.availableHorizontalPosition[1]);
    }
    // Set final placement
    const elComponent = this.el.querySelector(`.${this.classNames.EL}`);
    if (elComponent) {
      elComponent.setAttribute('data-placement', availableVerticalPositionClasses.concat(availableHorizontalPositionClasses).join(' '));
    }
    this.finalPlacement = availableVerticalPositionClasses.concat(availableHorizontalPositionClasses);
  }
  async closeTooltip() {
    this.tooltip.style.display = 'none';
    this.hideTooltip();
    setTimeout(() => { this.tooltip.style.removeProperty('display'); }, 1);
  }
  /**
   * @description Add event listener on targer element
   */
  initEventsListener(el) {
    const allowedTouch = 'ontouchstart' in window;
    if (allowedTouch) {
      this.eventStart = 'touchstart';
      this.eventEnd = 'touchend';
    }
    this.tooltip = this.el.querySelector(`.${this.classNames.EL}`);
    el.addEventListener(this.eventStart, () => this.showTooltip());
    // If the user takes another action before timeout, the tooltip is automatically hide
    el.addEventListener(this.eventEnd, () => this.hideTooltip());
  }
  /**
   * @description Trigger mouse over element on target element
   */
  showTooltip() {
    const target = document.querySelector(`#${this.selector}`);
    if (target) {
      // Get the original size of tooltip.
      // Changes can be applied if the placement should be reverse
      this.tooltipRect = {
        width: this.tooltip.offsetWidth,
        height: this.tooltip.offsetHeight,
      };
      // Get the default coords position
      let coords = this.setPosition(target, this.finalPlacement);
      this.tooltip.style.left = `${Math.round(coords.left)}px`;
      this.tooltip.style.top = `${Math.round(coords.top)}px`;
      // Check if the tooltip is visible or not in the view port
      if (!this.isInViewPort()) {
        // Generate the new coords position of the tooltip with revert value
        coords = this.setPosition(target, this.revertPlacement);
        this.tooltip.style.left = `${Math.round(coords.left)}px`;
        this.tooltip.style.top = `${Math.round(coords.top)}px`;
        // Set final placement
        this.el.querySelector(`.${this.classNames.EL}`).setAttribute('data-placement', this.revertPlacement.join(' '));
        this.finalPlacement = this.revertPlacement;
      }
      // Show the tooltip
      this.tooltip.classList.add(`${this.classNames.EL}${this.classNames.ACTIVE}`);
      // The tooltip is display for a define period only if notimeout is false
      if (!this.notimeout) {
        this.timeout = setTimeout(() => { this.hideTooltip(); }, this.timeoutValue);
      }
    }
  }
  /**
   * @description Hide the tooltip, removing the active class
   */
  hideTooltip() {
    this.tooltip.classList.remove(`${this.classNames.EL}${this.classNames.ACTIVE}`);
    clearTimeout(this.timeout);
  }
  /**
   * @description Hide the tooltip, removing the active class
   * @param el {HTMLElement} The target element on which the tooltip is attached
   * @param placement {string} The position of the tooltip compared to target element
   */
  setPosition(el, placement) {
    const elBoundingClientRect = el.getBoundingClientRect();
    // Init the tooltip position exactly hover the target element
    const coords = {
      left: Math.round(elBoundingClientRect.left + ((elBoundingClientRect.width - this.tooltipRect.width) / 2)),
      top: Math.round(elBoundingClientRect.top - ((this.tooltipRect.height - elBoundingClientRect.height) / 2)),
    };
    // The depending the placement position, adapt the absolute position
    placement.map(placementKey => {
      switch (placementKey) {
        case this.attachmentMap.LEFT:
          coords.left -= Math.round(elBoundingClientRect.width) / 2;
          break;
        case this.attachmentMap.RIGHT:
          coords.left += Math.round(elBoundingClientRect.width) / 2;
          break;
        case this.attachmentMap.BOTTOM:
          if (!placement.includes(this.attachmentMap.CENTER)) {
            coords.top -= Math.round(elBoundingClientRect.height) / 2;
          }
          else {
            coords.top += Math.round(elBoundingClientRect.height) / 2;
          }
          break;
        case this.attachmentMap.TOP:
          if (!placement.includes(this.attachmentMap.CENTER)) {
            coords.top += Math.round(elBoundingClientRect.height) / 2;
          }
          else {
            coords.top -= Math.round(elBoundingClientRect.height) / 2;
          }
          break;
      }
    });
    return coords;
  }
  /**
   * @description Check if the position of the tooltip is visible in the view port
   * Check on the extrem point of the tooltip for each direction. For example, if the
   * position of the tooltip is right, check if the right corner of the tooltip is visible
   * or not
   */
  isInViewPort() {
    const x = this.tooltip.getBoundingClientRect().left;
    const y = this.tooltip.getBoundingClientRect().top;
    const width = this.tooltipRect.width;
    const height = this.tooltipRect.height;
    const ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.revertPlacement = [];
    this.finalPlacement.map(placementKey => {
      switch (placementKey) {
        case this.attachmentMap.LEFT:
          this.revertPlacement.push((x > 0) ? this.attachmentMap.LEFT : this.attachmentMap.RIGHT);
          break;
        case this.attachmentMap.RIGHT:
          this.revertPlacement.push(((x + width) < ww) ? this.attachmentMap.RIGHT : this.attachmentMap.LEFT);
          break;
        case this.attachmentMap.BOTTOM:
          this.revertPlacement.push(((y + height) < hw) ? this.attachmentMap.BOTTOM : this.attachmentMap.TOP);
          break;
        case this.attachmentMap.TOP:
          this.revertPlacement.push((y > 0) ? this.attachmentMap.TOP : this.attachmentMap.BOTTOM);
          break;
        default:
          this.revertPlacement.push(placementKey);
          break;
      }
    });
    return isEqual(this.finalPlacement.sort(), this.revertPlacement.sort());
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { tabIndex: -1, class: [
        this.classNames.EL,
        this.pointer ? `${this.classNames.EL}${this.classNames.POINTER}` : '',
        this.getSize(),
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') },
      h("eds-elevation", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, styles: this.elevationStyle, level: this.elevationLevel },
        h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}${this.classNames.TEXT}` }, this.text ? this.text : ''),
        this.pointer ?
          h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}${this.classNames.POINTER}` })
          : '')));
  }
  static get is() { return "eds-tooltip"; }
  static get originalStyleUrls() { return {
    "$": ["tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tooltip.css"]
  }; }
  static get properties() { return {
    "autoInit": {
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
      "attribute": "auto-init",
      "reflect": false,
      "defaultValue": "true"
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
    "selector": {
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
      "attribute": "selector",
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
    "text": {
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
      "attribute": "text",
      "reflect": false
    },
    "placement": {
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
      "attribute": "placement",
      "reflect": false,
      "defaultValue": "'top'"
    },
    "timeoutValue": {
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
      "attribute": "timeout-value",
      "reflect": false,
      "defaultValue": "2000"
    },
    "notimeout": {
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
      "attribute": "notimeout",
      "reflect": false,
      "defaultValue": "false"
    },
    "pointer": {
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
      "attribute": "pointer",
      "reflect": false
    },
    "elevationStyle": {
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
      "attribute": "elevation-style",
      "reflect": false,
      "defaultValue": "'light'"
    },
    "elevationLevel": {
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
      "attribute": "elevation-level",
      "reflect": false,
      "defaultValue": "'2'"
    }
  }; }
  static get methods() { return {
    "init": {
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
        "tags": []
      }
    },
    "closeTooltip": {
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
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
