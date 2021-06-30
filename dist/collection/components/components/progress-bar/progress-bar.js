import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
/**
 * @name Progress Bar
 * @description The Progress Bar is an indicator which inform user about the status of ongoing processes. The component can also display additional information about status with 2 specific props below the progress bar.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-progress-bar.html
 */
export class ENOVOSProgressBar {
  constructor() {
    this.light = false;
    this.animated = false;
    this.graduated = false;
    this.classNames = {
      EL: 'progress-bar',
      BAR: '__bar',
      TITLE: '__title',
      GRADUATE: '__graduated',
      VALUE: '__value',
      BOTTOM: '__bottom',
      LEFT: '__left',
      RIGHT: '__right',
      ANIMATED: '--animated',
      ACTIVE: '--active',
    };
    this.graduatedItems = [];
    this.ratio = 0;
  }
  /**
   * @description If the progress bar is in graduated mode,
   * generate an array of graduated definition
   */
  getGraduateItems() {
    this.graduatedItems = [];
    if (this.graduated) {
      for (let i = 1; i <= this.progressMax; i++) {
        this.graduatedItems.push({ isActive: (i <= this.progressValue) ? true : false });
      }
    }
    return this.graduatedItems;
  }
  /**
   * @description When the component is loaded
   * Set the progress bar width on the ratio progress value / progress max
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
    if (!this.graduated) {
      this.el.setAttribute('name', this.classNames.EL);
      this.ratio = (100 * this.progressValue) / this.progressMax;
      const progressBar = this.el.querySelector(`.${this.classNames.EL}${this.classNames.VALUE}`);
      if (this.animated === true) {
        progressBar.classList.add(`${this.classNames.EL}${this.classNames.VALUE}${this.classNames.ANIMATED}`);
      }
      progressBar.style.width = Math.round(this.ratio) + '%';
    }
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
      ].join(' ') },
      this.titleText
        ? h("eds-paragraph", { class: `${this.classNames.EL}${this.classNames.TITLE}`, type: "body-1", styles: (this.light) ? 'white' : 'secondary-500', "font-weight": "semi-bold", innerHTML: this.titleText })
        : '',
      this.graduated === true
        ? h("div", { class: `${this.classNames.EL}${this.classNames.GRADUATE}` }, this.getGraduateItems().map(graduatedItem => h("span", { class: [
            `${this.classNames.EL}${this.classNames.GRADUATE}${this.classNames.VALUE}`,
            (graduatedItem.isActive) ? `${this.classNames.EL}${this.classNames.GRADUATE}${this.classNames.VALUE}${this.classNames.ACTIVE}` : '',
          ].join(' ') })))
        : h("div", { class: `${this.classNames.EL}${this.classNames.BAR}` },
          h("span", { class: `${this.classNames.EL}${this.classNames.VALUE}` })),
      this.leadingText || this.trailingText
        ? h("div", { class: `${this.classNames.EL}${this.classNames.BOTTOM}` },
          this.leadingText
            ? h("eds-paragraph", { class: `${this.classNames.EL}${this.classNames.BOTTOM}${this.classNames.LEFT}`, type: "body-3", styles: (this.light) ? 'white' : 'tertiary-500', innerHTML: this.leadingText })
            : '',
          this.trailingText
            ? h("eds-paragraph", { class: `${this.classNames.EL}${this.classNames.BOTTOM}${this.classNames.RIGHT}`, type: "body-3", styles: (this.light) ? 'white' : 'tertiary-500', innerHTML: this.trailingText })
            : '')
        : ''));
  }
  static get is() { return "eds-progress-bar"; }
  static get originalStyleUrls() { return {
    "$": ["progress-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["progress-bar.css"]
  }; }
  static get properties() { return {
    "progressMax": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "progress-max",
      "reflect": false
    },
    "progressValue": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "progress-value",
      "reflect": false
    },
    "leadingText": {
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
      "attribute": "leading-text",
      "reflect": false
    },
    "trailingText": {
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
      "attribute": "trailing-text",
      "reflect": false
    },
    "titleText": {
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
      "attribute": "title-text",
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
    "light": {
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
      "attribute": "light",
      "reflect": false,
      "defaultValue": "false"
    },
    "animated": {
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
      "attribute": "animated",
      "reflect": false,
      "defaultValue": "false"
    },
    "graduated": {
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
      "attribute": "graduated",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
