import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Container
 * @description Container
 * @path layout/container
 * @documented false
 */
export class ENOVOSContainer {
  constructor() {
    this.fluid = false;
    this.fullHeight = true;
    this.noPadding = false;
    this.center = false;
    this.classNames = {
      EL: 'container',
    };
  }
  /**
   * @description Init component variables
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
  // for fullscreen container
  getCenter() {
    return (this.center) ? `${this.classNames.EL}--center` : '';
  }
  // for 100% height container
  getFullHeight() {
    return (this.fullHeight) ? `${this.classNames.EL}--full-height` : '';
  }
  // for fullscreen container
  getFluid() {
    return (this.fluid) ? `${this.classNames.EL}--fluid` : '';
  }
  // for fullscreen container
  getNoPadding() {
    return (this.noPadding) ? `${this.classNames.EL}--no-padding` : '';
  }
  /**
   * @description Force container size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /**
   * @description Force container size
   */
  getFluidForce() {
    return (this.fluidForce !== undefined) ? `${this.classNames.EL}--force-${this.fluidForce}` : '';
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.getFluid(),
        this.getNoPadding(),
        this.getCenter(),
        this.getSize(),
        this.getFullHeight(),
        this.getFluidForce(),
      ].join(' ') },
      h("slot", null)));
  }
  static get is() { return "eds-container"; }
  static get originalStyleUrls() { return {
    "$": ["container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["container.css"]
  }; }
  static get properties() { return {
    "fluid": {
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
      "attribute": "fluid",
      "reflect": false,
      "defaultValue": "false"
    },
    "fullHeight": {
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
      "attribute": "full-height",
      "reflect": false,
      "defaultValue": "true"
    },
    "noPadding": {
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
      "attribute": "no-padding",
      "reflect": false,
      "defaultValue": "false"
    },
    "center": {
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
      "attribute": "center",
      "reflect": false,
      "defaultValue": "false"
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
    "fluidForce": {
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
      "attribute": "fluid-force",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
