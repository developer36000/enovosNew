import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Data Table Heading
 * @description TBD
 * @path components
 * @documented false
 */
export class ENOVOSDataTableHeading {
  constructor() {
    this.columns = [];
    this.columnSizes = [];
    this.checkable = false;
    this.hasIndentedColumn = false;
    this.checkedRows = 0;
    this.classNames = {
      EL: 'data-table__heading',
      CHECKBOXES: '__checkboxes',
      ACTIONS: '__actions',
      CANCEL: '__cancel',
      VISIBLE: '--visible',
    };
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
  setClasses() {
    return [
      `${this.classNames.EL}`,
      this.styles ? `${this.classNames.EL}--${this.styles}` : '',
      this.size ? `${this.classNames.EL}--${this.size}` : '',
    ].join(' ');
  }
  render() {
    return (h("div", { class: this.setClasses() },
      h("slot", { name: "header" }),
      this.checkable && !this.hasIndentedColumn ?
        h("div", { class: [
            `${this.classNames.EL}${this.classNames.CHECKBOXES}`,
            this.checkedRows ? `${this.classNames.EL}${this.classNames.CHECKBOXES}${this.classNames.VISIBLE}` : '',
          ].join(' ') },
          h("eds-paragraph", { type: "body-1", styles: "secondary-500" },
            this.checkedRows,
            " Item",
            this.checkedRows > 1 ? 's' : '',
            " Selected"),
          h("div", { class: `${this.classNames.EL}${this.classNames.CHECKBOXES}${this.classNames.ACTIONS}` },
            h("eds-button", { content: "Cancel", size: "md", outlined: true, class: `${this.classNames.EL}${this.classNames.CHECKBOXES}${this.classNames.ACTIONS}${this.classNames.CANCEL}` }),
            h("slot", { name: "checkbox-actions" })))
        : ''));
  }
  static get is() { return "eds-data-table-heading"; }
  static get originalStyleUrls() { return {
    "$": ["data-table-heading.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["data-table-heading.css"]
  }; }
  static get properties() { return {
    "styles": {
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false
    },
    "columns": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "columnSizes": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "checkable": {
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
      "attribute": "checkable",
      "reflect": false,
      "defaultValue": "false"
    },
    "hasIndentedColumn": {
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
      "attribute": "has-indented-column",
      "reflect": false,
      "defaultValue": "false"
    },
    "checkedRows": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "checked-rows",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get elementRef() { return "el"; }
}
