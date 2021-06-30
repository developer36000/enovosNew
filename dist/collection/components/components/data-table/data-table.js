import { Component, Element, Event, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { compact, findIndex, flatten, get, has, orderBy, uniqueId } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { LayoutPropsHelper } from '../../../utils/LayoutPropsHelper';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
/**
 * @name Data Table
 * @description Data table allows to display data inside rows and columns with multiple possibilities to manipulate information like sort, filter or actions...
 * @path components
 * @documented true
 */
export class ENOVOSDataTable {
  constructor() {
    this.columns = [];
    this.columnSizes = [];
    this.data = [];
    this.sort = [];
    this.checkable = false;
    this.stickyElevation = '1';
    this.hasIndentedColumn = false;
    this.formattedData = [];
    this.checkedRows = 0;
    this.classNames = {
      EL: 'data-table',
      ROW: '-row',
      CONTAINER: '__container',
      HEADER: '__header',
      HEADING: '__heading',
      FOOTER: '__footer',
      SLOT: '__slot',
      ELEVATION: '__elevation',
      CHECKBOXES: '__checkboxes',
      ACTIONS: '__actions',
      CANCEL: '__cancel',
      OVERFLOW: '--overflow',
      INDENTED: '--indented',
      HIDE_INDENTED_HEADER: '--hide-indented-header',
      EXPANDABLE: '--expandable',
      EXPANDED: '--expanded',
      COLLAPSE: '--collapsed',
      HIDDEN: '--hidden',
      VISIBLE: '--visible',
      FIXED_SIZE: '--fixed-size',
      EMPTY: '--empty',
      PAGINATION_ONLY: '--pagination-only',
    };
    this.headerColumns = [];
    this.expandable = false;
  }
  /**
   * @description Catch the click on sort event from header row
   * if the table is autonomous, manage the table data in order values based
   * on column index.
   */
  clickSortColumnHandler(event) {
    this.sortDirection = event.detail.direction;
    this.sortIndex = event.detail.index;
    this.computeFormattedData();
  }
  /**
   * @description Catch the click on pagination event
   * if the table is autonomous, manage the table data
   */
  clickPaginationItemHandler(event) {
    this.currentPage = event.detail.value;
    this.visibleItemsCount = event.detail.items;
    this.computeFormattedData();
  }
  clickHeaderCheckboxHandler(event) {
    event.stopPropagation();
    this.setTableCheckboxes(this._id, this.el.querySelector(`.${this.classNames.EL}`), this.formattedData, get(event, 'detail.selected'));
  }
  clickHeaderDropdownHandler(event) {
    event.stopPropagation();
    this.activeHeaderDropdown.emit(event.detail);
  }
  clickRowDropdownHandler(event) {
    event.stopPropagation();
    this.activeRowDropdown.emit(event.detail);
  }
  clickCheckboxHandler() {
    this.checkedRows = this.getSelected(this.formattedData);
  }
  clickRowButtonHandler(event) {
    event.stopPropagation();
    this.clickRowCellButton.emit(event.detail);
  }
  clickRowCheckboxHandler(event) {
    if (this.hasIndentedColumn === false) {
      event.stopPropagation();
      try {
        const nextElement = get(event, 'target.nextElementSibling');
        const subTable = nextElement.querySelector(`.${this.classNames.EL}`);
        if (subTable) {
          this.setTableCheckboxes(subTable.getAttribute('id'), subTable, get(event, 'detail.children'), get(event, 'detail.selected'));
        }
      }
      catch (error) {
        // No next element sibling can be found.
      }
    }
  }
  clickExpandHandler(event) {
    event.stopPropagation();
    const nextElement = get(event, 'target.nextElementSibling');
    if (nextElement) {
      if (nextElement.classList.contains(`${this.classNames.EL}${this.classNames.ROW}${this.classNames.EXPANDABLE}`)) {
        if (nextElement.classList.contains(`${this.classNames.EL}${this.classNames.ROW}${this.classNames.COLLAPSE}`)) {
          nextElement.classList.remove(`${this.classNames.EL}${this.classNames.ROW}${this.classNames.COLLAPSE}`);
        }
        else {
          nextElement.classList.add(`${this.classNames.EL}${this.classNames.ROW}${this.classNames.COLLAPSE}`);
        }
      }
    }
  }
  watchDataHandler(newValue, oldValue) {
    if (oldValue !== newValue) {
      this.hasExpandable();
      this.formattedData = this.data;
      this.checkedRows = this.getSelected(this.formattedData);
    }
  }
  watchPaginationHandler(newValue, oldValue) {
    if (oldValue !== newValue) {
      if (this.hasPagination()) {
        this.currentPage = 0;
        this.visibleItemsCount = this.pagination.items;
        this.computeFormattedData();
      }
    }
  }
  /**
   * @description Set the default active item
   */
  async setPagination(data) {
    this.pagination = data;
  }
  /**
   * @description Set the default active item
   */
  async setData(data) {
    this.data = data;
  }
  componentWillLoad() {
    this.formattedData = this.data;
    this._id = uniqueId(`${this.classNames.EL}-`);
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
  componentDidRender() {
    this.hasSlotHeading = !!this.el.querySelector(`[slot="header"]`);
    this.hasSlotFooter = !!this.el.querySelector(`[slot="footer"]`);
    this.hasSlotCheckboxActions = !!this.el.querySelector(`[slot="checkbox-actions"]`);
    // Fix IE Slot
    if (this.hasSlotHeading) {
      const slotHeaderElement = this.el.querySelector('[slot=header]');
      slotHeaderElement.classList.add(`${this.classNames.EL}${this.classNames.HEADING}${this.classNames.SLOT}`);
    }
    if (this.hasSlotFooter) {
      const slotFooterElement = this.el.querySelector('[slot=footer]');
      slotFooterElement.classList.add(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.SLOT}`);
      const footerContainerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}`);
      if (footerContainerElement) {
        if (slotFooterElement.innerHTML.trim().length === 0 && !this.hasPagination()) {
          footerContainerElement.classList.add(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}${this.classNames.EMPTY}`);
        }
        else {
          footerContainerElement.classList.remove(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}${this.classNames.EMPTY}`);
        }
      }
    }
    if (this.hasSlotCheckboxActions) {
      const slotCheckboxActions = this.el.querySelector('[slot=checkbox-actions]');
      slotCheckboxActions.classList.add(`${this.classNames.EL}${this.classNames.HEADING}${this.classNames.CHECKBOXES}${this.classNames.ACTIONS}${this.classNames.SLOT}`);
    }
    if (this.hasPagination()) {
      const pagination = this.el.querySelector('#pagination');
      pagination.setConfig(this.pagination);
      const footerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.FOOTER}`);
      if (footerElement) {
        footerElement.classList.remove(`${this.classNames.EL}${this.classNames.HIDDEN}`);
        if (!this.hasSlotFooter) {
          footerElement.classList.add(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}${this.classNames.PAGINATION_ONLY}`);
        }
      }
    }
    else {
      if (!this.hasSlotFooter) {
        const footerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.FOOTER}`);
        footerElement.classList.add(`${this.classNames.EL}${this.classNames.HIDDEN}`);
        footerElement.classList.remove(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}${this.classNames.PAGINATION_ONLY}`);
      }
    }
    if (this.checkable === false || this.hasIndentedColumn) {
      if (!this.hasSlotHeading) {
        const headerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.HEADING}`);
        headerElement.classList.add(`${this.classNames.EL}${this.classNames.HIDDEN}`);
      }
    }
    if (this.checkable && !this.hasIndentedColumn) {
      const checkboxCancel = this.el.querySelector(`.${this.classNames.EL}${this.classNames.HEADING}${this.classNames.CHECKBOXES}${this.classNames.ACTIONS}${this.classNames.CANCEL}`);
      // Kill attached events
      checkboxCancel.removeEventListener('clickButton', this._clickCheckboxCancelHandler);
      // Attach new event
      checkboxCancel.addEventListener('clickButton', this._clickCheckboxCancelHandler = () => this.clickCheckboxCancelHandler(), false);
    }
    if (this.hasIndentedColumn === false) {
      const layoutStyles = compact(LayoutPropsHelper.getStyles(this.styles, '').split(' '));
      if (Array.isArray(layoutStyles) && layoutStyles.length > 0) {
        this.el.classList.add(...layoutStyles);
      }
    }
    this.didRender.emit();
  }
  checkFormattedData(data, value) {
    data.forEach(row => {
      row.selected = value;
      if (has(row, 'children')) {
        this.checkFormattedData(row.children, value);
      }
    });
  }
  setTableCheckboxes(tableID, targetElement, data, selectValue) {
    targetElement.querySelectorAll(`#${tableID} .${this.classNames.EL}${this.classNames.ROW}${this.classNames.CONTAINER}`)
      .forEach((el) => {
      el.activeCheckbox(selectValue);
    });
    targetElement.querySelectorAll(`#${tableID} .${this.classNames.EL}${this.classNames.HEADER}${this.classNames.ROW}`)
      .forEach((el) => {
      el.activeCheckbox(selectValue);
    });
    this.checkFormattedData(data, selectValue);
  }
  getSelected(arrayData) {
    if (Array.isArray(arrayData)) {
      let nb = flatten(arrayData).filter(data => has(data, 'selected') && get(data, 'selected') === true).length;
      arrayData.forEach(data => {
        if (has(data, 'children')) {
          nb += this.getSelected(data.children);
        }
      });
      return nb;
    }
    return 0;
  }
  computeFormattedData() {
    let formattedData = [];
    // Get sorted data
    if (this.sortDirection && !!this.sortIndex) {
      formattedData = orderBy(this.data, [item => {
          if (item.values[this.sortIndex]) {
            return item.values[this.sortIndex].data;
          }
          return false;
        }], this.sortDirection);
    }
    else {
      formattedData = this.data;
    }
    const basePage = this.currentPage * this.visibleItemsCount;
    if (this.currentPage >= 0 && basePage < formattedData.length) {
      // Get visible data (current page) based on sorted data
      formattedData = formattedData.slice(basePage, basePage + this.visibleItemsCount);
    }
    this.formattedData = formattedData;
  }
  clickCheckboxCancelHandler() {
    this.el.querySelectorAll(`#${this._id} > tbody > .${this.classNames.EL}${this.classNames.ROW}${this.classNames.CONTAINER}`)
      .forEach((el) => {
      el.activeCheckbox(false);
    });
    this.el.querySelectorAll(`#${this._id} > .${this.classNames.EL}${this.classNames.HEADER}${this.classNames.ROW}`)
      .forEach((el) => {
      el.activeCheckbox(false);
    });
    this.formattedData.forEach(data => {
      data.selected = false;
    });
    this.checkedRows = 0;
  }
  hasScrollingContentClass() {
    return (this.maxHeight !== undefined) ? `${this.classNames.EL}${this.classNames.OVERFLOW}` : '';
  }
  hasExpandable() {
    this.expandable = findIndex(this.data, 'children') >= 0 ? true : this.expandable;
  }
  getColspan(data) {
    let value = data.length + 1; // +1 for the indented column
    if (this.checkable) {
      value = value + 1;
    }
    return value;
  }
  hasFixedColumnsClass() {
    return (this.columnSizes.length > 0) ? `${this.classNames.EL}${this.classNames.FIXED_SIZE}` : '';
  }
  hasPagination() {
    return this.pagination && this.pagination.items > 0 && this.pagination.total > 0;
  }
  setTableClasses() {
    return [
      this.classNames.EL,
      this.hasScrollingContentClass(),
      this.hasIndentedColumn ? `${this.classNames.EL}${this.classNames.INDENTED}` : '',
      this.hideIndentedHeader ? `${this.classNames.EL}${this.classNames.HIDE_INDENTED_HEADER}` : '',
      this.hasFixedColumnsClass(),
      this.size ? `${this.classNames.EL}--${this.size}` : '',
      StylePropsHelper.getStyles(this.styles, this.classNames.EL),
    ].join(' ');
  }
  render() {
    return [
      h("eds-data-table-heading", { checkable: this.checkable, hasIndentedColumn: this.hasIndentedColumn, checkedRows: this.checkedRows, styles: this.styles, size: this.size },
        h("slot", { name: "header" })),
      h("table", { class: this.setTableClasses(), id: this._id },
        this.columns && this.columns.length > 0
          ? (this.maxHeight !== undefined && this.hasIndentedColumn === false)
            ? h("eds-elevation", { level: (this.maxHeight !== undefined && this.hasIndentedColumn === false) ? this.stickyElevation : '0' },
              h("eds-data-table-header", { checkable: this.checkable, expandable: this.expandable, size: this.size, styles: this.styles, columns: this.columns, columnSizes: this.columnSizes, maxHeight: this.maxHeight, hasIndentedColumn: this.hasIndentedColumn, class: `${this.classNames.EL}${this.classNames.HEADER}${this.classNames.ROW}`, sort: this.sort }))
            : h("eds-data-table-header", { checkable: this.checkable, expandable: this.expandable, size: this.size, styles: this.styles, columns: this.columns, columnSizes: this.columnSizes, maxHeight: this.maxHeight, hasIndentedColumn: this.hasIndentedColumn, class: `${this.classNames.EL}${this.classNames.HEADER}${this.classNames.ROW}`, sort: this.sort })
          : '',
        this.formattedData && this.formattedData.length > 0
          ? h("tbody", { style: (this.maxHeight !== undefined && this.hasIndentedColumn === false)
              ? { 'height': this.maxHeight }
              : {} }, this.formattedData.map(data => {
            return [
              h("eds-data-table-row", { columnSizes: this.columnSizes, columnRenderers: this.columnRenderers, maxHeight: this.maxHeight, class: [
                  `${this.classNames.EL}${this.classNames.ROW}`,
                  `${this.classNames.EL}${this.classNames.ROW}${this.classNames.CONTAINER}`,
                  StylePropsHelper.getStyles(this.styles, `${this.classNames.EL}${this.classNames.ROW}`),
                ].join(' '), checkable: this.checkable, expandable: this.expandable, hasIndentedColumn: this.hasIndentedColumn, data: data, size: this.size }),
              (data.children)
                ? h("tr", { class: [
                    `${this.classNames.EL}${this.classNames.ROW}`,
                    `${this.classNames.EL}${this.classNames.ROW}${this.classNames.EXPANDABLE}`,
                    `${this.classNames.EL}${this.classNames.ROW}${this.classNames.COLLAPSE}`,
                    (this.maxHeight !== undefined && this.hasIndentedColumn === false) ? `${this.classNames.EL}${this.classNames.ROW}${this.classNames.EXPANDED}` : '',
                  ].join(' ') },
                  h("td", { colSpan: this.getColspan(data.values) },
                    h("eds-data-table", { class: [
                        `${this.classNames.EL}${this.classNames.ROW}`,
                      ].join(' '), columnSizes: this.columnSizes, columnRenderers: this.columnRenderers, maxHeight: this.maxHeight, hasIndentedColumn: true, columns: this.columns, checkable: this.checkable, styles: this.styles, data: data.children })))
                : '',
            ];
          }))
          : ''),
      (this.maxHeight !== undefined && this.hasIndentedColumn === false)
        ? h("eds-elevation", { reverse: true, class: [
            `${this.classNames.EL}${this.classNames.FOOTER}`,
            `${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.ELEVATION}`,
          ].join(' '), level: (this.maxHeight !== undefined) ? this.stickyElevation : '0' },
          h("div", { class: `${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}` },
            h("slot", { name: "footer" }),
            this.hasPagination() ?
              h("eds-pagination", { id: "pagination", outlined: true, size: "md" })
              : ''))
        : h("div", { class: [
            `${this.classNames.EL}${this.classNames.FOOTER}`,
            `${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}`,
          ].join(' ') },
          h("slot", { name: "footer" }),
          this.hasPagination() ?
            h("eds-pagination", { id: "pagination", outlined: true, size: "md" })
            : ''),
    ];
  }
  static get is() { return "eds-data-table"; }
  static get originalStyleUrls() { return {
    "$": ["data-table.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["data-table.css"]
  }; }
  static get properties() { return {
    "columns": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
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
        "original": "string[]",
        "resolved": "string[]",
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
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "DataTableValues[]",
        "resolved": "DataTableValues[]",
        "references": {
          "DataTableValues": {
            "location": "import",
            "path": "../../../models/components/datatable"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "sort": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "boolean[]",
        "resolved": "boolean[]",
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
    "stickyElevation": {
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
      "attribute": "sticky-elevation",
      "reflect": false,
      "defaultValue": "'1'"
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
    "pagination": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Pagination",
        "resolved": "Pagination",
        "references": {
          "Pagination": {
            "location": "import",
            "path": "../../../models/patterns/pagination"
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
    "hideIndentedHeader": {
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
      "attribute": "hide-indented-header",
      "reflect": false
    }
  }; }
  static get states() { return {
    "formattedData": {},
    "checkedRows": {}
  }; }
  static get events() { return [{
      "method": "didRender",
      "name": "didRender",
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
      "method": "activeHeaderDropdown",
      "name": "activeHeaderDropdown",
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
      "method": "activeRowDropdown",
      "name": "activeRowDropdown",
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
      "method": "clickRowCellButton",
      "name": "clickRowCellButton",
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
    "setPagination": {
      "complexType": {
        "signature": "(data: Pagination) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Pagination": {
            "location": "import",
            "path": "../../../models/patterns/pagination"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Set the default active item"
          }]
      }
    },
    "setData": {
      "complexType": {
        "signature": "(data: DataTableValues[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "DataTableValues": {
            "location": "import",
            "path": "../../../models/components/datatable"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Set the default active item"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "data",
      "methodName": "watchDataHandler"
    }, {
      "propName": "pagination",
      "methodName": "watchPaginationHandler"
    }]; }
  static get listeners() { return [{
      "name": "clickSortColumn",
      "method": "clickSortColumnHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickPaginationItem",
      "method": "clickPaginationItemHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickHeaderCheckbox",
      "method": "clickHeaderCheckboxHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickHeaderDropdown",
      "method": "clickHeaderDropdownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickRowDropdown",
      "method": "clickRowDropdownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickCheckbox",
      "method": "clickCheckboxHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickRowButton",
      "method": "clickRowButtonHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickRowCheckbox",
      "method": "clickRowCheckboxHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickExpand",
      "method": "clickExpandHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
