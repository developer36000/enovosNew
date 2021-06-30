import { Component, Element, Event, Method, Prop, State, h } from '@stencil/core';
import { get } from 'lodash-es';
import { CellItem } from '../../../models/cell-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Data Table Row
 * @description TBD
 * @path components
 * @documented false
 */
export class ENOVOSDataTableRow {
  constructor() {
    this.data = { id: undefined, values: [], children: [], selected: false };
    this.columnSizes = [];
    this.checkable = false;
    this.expandable = false;
    this.hasIndentedColumn = false;
    this.isExpand = false;
    this.isChecked = false;
    this.classNames = {
      EL: 'data-table-row',
      CELL: '__cell',
      ICON: '__icon',
      CHECKBOX: '__checkbox',
      HAS_CHECKBOX: '--checkbox',
      STICKY: '--sticky',
      IS_EXPANDABLE: '--expandable',
      INTERACTIVE: '--interactive',
      IS_OPEN: '--is-open',
      IS_CHECKED: '--is-checked',
      FIXED_SIZE: '--fixed-size',
      FITTED: '--fitted',
      IS_ACTION: '--is-action',
      IS_ICON: '--is-icon',
    };
    this.dataItems = [];
  }
  /**
   * @description Call this method to select the header row checkbox
   */
  async activeCheckbox(value) {
    const checkboxCell = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CELL}${this.classNames.CHECKBOX}`);
    checkboxCell.selected = value;
    this.isChecked = checkboxCell.selected;
    this.data.selected = this.isChecked;
  }
  /**
   * @description Call to specific function before each render
   * Define the data as CellItem object to generate each row cell.
   */
  componentWillRender() {
    this.dataItems = [];
    this.isChecked = this.data.selected; // Check the row if define from data
    if (this.data.values) {
      this.data.values.map(item => {
        const dataItem = new CellItem(item);
        this.dataItems.push(dataItem);
      });
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
    this.setElementClass();
    this.attachEvents();
  }
  /**
   * @description Call to specific function when a prop/state is changed.
   */
  componentDidUpdate() {
    this.setElementClass();
    this.attachEvents();
  }
  /**
   * @description Event attached on expand button
   */
  clickExpandHandler(e) {
    e.preventDefault();
    if (this.expandable === true) {
      this.isExpand = !this.isExpand;
      this.clickExpand.emit(e);
    }
  }
  /**
   * @description Attach events the row.
   * Attach event on checkbox
   */
  attachEvents() {
    if (this.checkable === true) {
      const checkboxCell = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CELL}${this.classNames.CHECKBOX}`);
      // Kill attached events
      checkboxCell.removeEventListener('clickCheckbox', this._clickCheckboxHandler);
      // Attach new event
      checkboxCell.addEventListener('clickCheckbox', this._clickCheckboxHandler = e => this.clickCheckboxHandler(e), false);
    }
  }
  /**
   * @description Catch the event when click on row checkbox.
   */
  clickCheckboxHandler(e) {
    this.data.selected = get(e, 'detail.checked');
    this.isChecked = this.data.selected;
    this.clickRowCheckbox.emit(this.data);
  }
  /**
   * @description Set specific class to the component.
   */
  setElementClass() {
    // Set the row as sticky, the content is scrollable.
    if (this.maxHeight !== undefined) {
      this.el.classList.add(`${this.classNames.EL}${this.classNames.STICKY}`);
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}${this.classNames.STICKY}`);
    }
    // Set the row as expand and open/close the content.
    if (this.isExpand === true) {
      this.el.classList.add(`${this.classNames.EL}${this.classNames.IS_OPEN}`);
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}${this.classNames.IS_OPEN}`);
    }
    // Set specific class if the row is checked or not
    if (this.isChecked === true) {
      this.el.classList.add(`${this.classNames.EL}${this.classNames.IS_CHECKED}`);
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}${this.classNames.IS_CHECKED}`);
    }
  }
  isActionButton(data) {
    return ['action', 'button'].includes(data.getProp('props.type'));
  }
  isIcon(data) {
    return ['icon'].includes(data.getProp('props.type'));
  }
  setIndentedRowClasses() {
    return [
      `${this.classNames.EL}${this.classNames.CELL}`,
      `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_EXPANDABLE}`,
    ].join(' ');
  }
  setCheckableRowClasses() {
    return [
      `${this.classNames.EL}${this.classNames.CELL}`,
      `${this.classNames.EL}${this.classNames.CELL}${this.classNames.HAS_CHECKBOX}`,
    ].join(' ');
  }
  setExpandableRowClasses() {
    return [
      `${this.classNames.EL}${this.classNames.CELL}`,
      `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_EXPANDABLE}`,
      this.isExpand ? `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_OPEN}` : '',
      this.data.children ? `${this.classNames.EL}${this.classNames.CELL}${this.classNames.INTERACTIVE}` : '',
    ].join(' ');
  }
  setCellRowClasses(data, index) {
    return [
      `${this.classNames.EL}${this.classNames.CELL}`,
      (this.columnSizes[index] === 'fitted') ? `${this.classNames.EL}${this.classNames.CELL}${this.classNames.FITTED}` : '',
      (this.columnSizes[index] !== undefined && this.columnSizes[index] !== null && !['fitted'].includes(this.columnSizes[index])) ? `${this.classNames.EL}${this.classNames.CELL}${this.classNames.FIXED_SIZE}` : '',
      this.isActionButton(data) ? `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_ACTION}` : '',
      this.isIcon(data) ? `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_ICON}` : '',
    ].join(' ');
  }
  getCellRenderer(index) {
    if (this.columnRenderers && this.columnRenderers[index]) {
      return this.columnRenderers[index];
    }
    return undefined;
  }
  render() {
    if (this.dataItems && this.dataItems.length > 0) {
      return [
        this.hasIndentedColumn === true
          ? h("td", { class: this.setIndentedRowClasses(), rowSpan: get(this.data, 'rowspan'), colSpan: get(this.data, 'colspan') })
          : '',
        this.checkable === true
          ? h("td", { class: this.setCheckableRowClasses(), rowSpan: get(this.data, 'rowspan'), colSpan: get(this.data, 'colspan') },
            h("eds-checkbox", { selected: this.data.selected, class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.CHECKBOX}`, inputName: "checkbox-column", value: "1" }))
          : '',
        this.expandable === true
          ? h("td", { class: this.setExpandableRowClasses(), onClick: ev => this.clickExpandHandler(ev), rowSpan: get(this.data, 'rowspan'), colSpan: get(this.data, 'colspan') }, this.data.children
            ? h("eds-icon", { class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.ICON}${this.classNames.IS_EXPANDABLE}`, icon: this.isExpand ? 'chevron-up' : 'chevron-down', "size-md": true })
            : '')
          : '',
        this.dataItems.map((data, index) => {
          return h("td", { class: this.setCellRowClasses(data, index), rowSpan: get(data, 'rowspan'), colSpan: get(data, 'colspan') },
            h("eds-data-table-cell", { "row-id": get(this.data, 'id'), data: data, index: index, renderer: this.getCellRenderer(index), size: this.size }));
        }),
      ];
    }
    else {
      return (h("tr", null));
    }
  }
  static get is() { return "eds-data-table-row"; }
  static get originalStyleUrls() { return {
    "$": ["data-table-row.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["data-table-row.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ id: any; values: any[]; children: any[]; selected: boolean; }",
        "resolved": "{ id: any; values: any[]; children: any[]; selected: boolean; }",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{ id: undefined, values: [], children: [], selected: false }"
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
    "columnRenderers": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "((value: any) => any)[]",
        "resolved": "((value: any) => any)[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
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
    "expandable": {
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
      "attribute": "expandable",
      "reflect": false,
      "defaultValue": "false"
    },
    "maxHeight": {
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
      "attribute": "max-height",
      "reflect": false
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
    }
  }; }
  static get states() { return {
    "isExpand": {},
    "isChecked": {}
  }; }
  static get events() { return [{
      "method": "clickExpand",
      "name": "clickExpand",
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
      "method": "clickRowCheckbox",
      "name": "clickRowCheckbox",
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
  static get methods() { return {
    "activeCheckbox": {
      "complexType": {
        "signature": "(value: boolean) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Call this method to select the header row checkbox"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
