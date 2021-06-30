import { Component, Element, Event, Method, Prop, State, h } from '@stencil/core';
import { get, has, isObject } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Data Table Header
 * @description TBD
 * @path components
 * @documented false
 */
export class ENOVOSDataTableHeader {
  constructor() {
    this.columns = [];
    this.columnSizes = [];
    this.sort = [];
    this.checkable = false;
    this.expandable = false;
    this.hasIndentedColumn = false;
    this.selected = false;
    this.classNames = {
      EL: 'data-table-header',
      CELL: '__cell',
      CHECKBOX: '__checkbox',
      SWITCH: '__switch',
      DROPDOWN: '__dropdown',
      TEXT: '__text',
      ICON: '__icon',
      SORTING_ICON: '__sorting-icon',
      HAS_CHECKBOX: '--checkbox',
      INTERACTIVE: '--interactive',
      STICKY: '--sticky',
      IS_EXPANDABLE: '--expandable',
      INDENTED: '--indented',
      FITTED: '--fitted',
      SORTED: '--sorted',
    };
    this.sortingStates = {
      ASC: 'asc',
      DESC: 'desc',
    };
    this._clickItemHandler = [];
    this._clickDropdownItemHandler = [];
    this._activeSelectorItemHandler = [];
    this._sorting = [];
  }
  /**
   * @description Call this method to select the header row checkbox
   */
  async activeCheckbox(value) {
    this.selected = value;
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
    this.attachEvents();
    this.setElementClass();
  }
  /**
   * @description Call to specific function before each render
   */
  componentWillRender() {
    this.initHeaderSorting();
  }
  /**
   * @description Call to specific function when a prop/state is changed.
   */
  componentDidUpdate() {
    this.attachEvents();
    this.setElementClass();
  }
  /**
   * @description Set the sorting array, use to define the configuration of
   * each header column.
   */
  initHeaderSorting() {
    if (this.sort && this.sort.length) {
      this.sort.map(value => {
        this._sorting.push({
          sortable: value,
          direction: this.sortingStates.ASC,
        });
      });
    }
  }
  /**
   * @description Catch the event when click on header row checkbox.
   */
  clickCheckboxHandler(e) {
    this.selected = get(e, 'detail.checked');
    this.clickHeaderCheckbox.emit({ selected: this.selected });
  }
  /**
   * @description Catch the event when click on header row sorting.
   */
  clickSortColumnHandler(e, index) {
    e.preventDefault();
    if (get(this._sorting[index], 'sortable') === true) {
      this.clickSortColumn.emit({ direction: get(this._sorting[index], 'direction'), index });
      this._sorting[index].direction = get(this._sorting[index], 'direction') === this.sortingStates.ASC ? this.sortingStates.DESC : this.sortingStates.ASC;
      this.setSortingIcon(index);
      this.el.querySelectorAll(`[data-index].${this.classNames.EL}${this.classNames.CELL}${this.classNames.INTERACTIVE}`).forEach((el) => el.classList.remove(`${this.classNames.EL}${this.classNames.CELL}${this.classNames.SORTED}`));
      const cell = this.el.querySelector(`[data-index='${index}'].${this.classNames.EL}${this.classNames.CELL}`);
      if (cell) {
        cell.classList.add(`${this.classNames.EL}${this.classNames.CELL}${this.classNames.SORTED}`);
      }
    }
    return false;
  }
  /**
   * @description Return the interactive class if the cell is sortable (css styles)
   */
  getIsInteractiveClass(index) {
    return get(this._sorting[index], 'sortable') === true ? `${this.classNames.EL}${this.classNames.CELL}${this.classNames.INTERACTIVE}` : '';
  }
  /**
   * @description Attach events the header row.
   * Each sorted row can be clicked.
   * Attach event on checkbox
   */
  attachEvents() {
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.CELL}${this.classNames.INTERACTIVE}`)
      .forEach((el) => {
      const index = el.dataset.index;
      if (this._clickItemHandler[index] && typeof this._clickItemHandler[index] === 'object') {
        this._clickItemHandler[index].removeEvent();
      }
      this._clickItemHandler[index] = new TapEvent(el, e => {
        this.clickSortColumnHandler(e, index);
      });
    });
    if (this.checkable === true) {
      const checkboxCell = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CELL}${this.classNames.CHECKBOX}`);
      // Kill attached events
      checkboxCell.removeEventListener('clickCheckbox', this._clickCheckboxHandler);
      // Attach new event
      checkboxCell.addEventListener('clickCheckbox', this._clickCheckboxHandler = e => this.clickCheckboxHandler(e), false);
    }
    this.el.querySelectorAll(`[data-dropdown]`).forEach((el, index) => {
      el.removeEventListener('clickDropdownItem', this._clickDropdownItemHandler[index]);
      el.addEventListener('clickDropdownItem', this._clickDropdownItemHandler[index] = e => {
        const menuDropdownHeading = el.querySelector(`.${this.classNames.EL}${this.classNames.CELL}${this.classNames.DROPDOWN}${this.classNames.TEXT}`);
        menuDropdownHeading.content = e.detail.text;
        const iconDropdownHeading = el.querySelector(`.${this.classNames.EL}${this.classNames.CELL}${this.classNames.DROPDOWN}${this.classNames.ICON}`);
        iconDropdownHeading.icon = 'chevron-down';
        this.clickHeaderDropdown.emit({ column: this.columns[el.dataset.dropdown], value: e.detail });
      }, false);
      el.removeEventListener('activeSelectorItem', this._activeSelectorItemHandler[index]);
      el.addEventListener('activeSelectorItem', this._activeSelectorItemHandler[index] = e => {
        const iconDropdownHeading = el.querySelector(`.${this.classNames.EL}${this.classNames.CELL}${this.classNames.DROPDOWN}${this.classNames.ICON}`);
        iconDropdownHeading.icon = (e.detail === true) ? 'chevron-up' : 'chevron-down';
      }, false);
    });
  }
  /**
   * @description Set specific class to the component.
   */
  setElementClass() {
    // Set the header as sticky, the content is scrollable.
    if (this.maxHeight !== undefined) {
      this.el.classList.add(`${this.classNames.EL}${this.classNames.STICKY}`);
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}${this.classNames.STICKY}`);
    }
    // Set the header as indented, the header is set inside a sub table.
    if (this.hasIndentedColumn === true) {
      this.el.classList.add(`${this.classNames.EL}${this.classNames.INDENTED}`);
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}${this.classNames.INDENTED}`);
    }
  }
  setSortingIcon(index) {
    this.el.querySelectorAll(`[data-index] .${this.classNames.EL}${this.classNames.CELL}${this.classNames.SORTING_ICON}`).forEach((el) => el.icon = 'sort');
    const sortingCellIcon = this.el.querySelector(`[data-index='${index}'] .${this.classNames.EL}${this.classNames.CELL}${this.classNames.SORTING_ICON}`);
    if (sortingCellIcon) {
      sortingCellIcon.icon = get(this._sorting[index], 'direction') === this.sortingStates.ASC ? 'sort-down' : 'sort-up';
    }
  }
  setCellClasses(index) {
    return [
      `${this.classNames.EL}${this.classNames.CELL}`,
      this.styles ? `${this.classNames.EL}--${this.styles}${this.classNames.CELL}` : '',
      (this.columnSizes[index] === 'fitted') ? `${this.classNames.EL}${this.classNames.CELL}${this.classNames.FITTED}` : '',
      this.getIsInteractiveClass(index),
    ].join(' ');
  }
  displayComponentType(value, index) {
    switch (get(value, 'props.type')) {
      case 'description-item':
        return h("div", null,
          h("eds-paragraph", { type: get(value, 'props.data.title.type'), "font-weight": get(value, 'props.data.title.fontWeight'), styles: get(value, 'props.data.title.styles') }, get(value, 'props.data.title.content')),
          h("eds-paragraph", { type: get(value, 'props.data.content.type'), "font-weight": get(value, 'props.data.content.fontWeight'), styles: get(value, 'props.data.title.styles') }, get(value, 'props.data.content.content')));
      case 'switch':
        return [
          h("eds-switch", { size: "sm", "margin-right-1": true, class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.SWITCH}`, inputName: has(value, 'props.inputName') ? get(value, 'props.inputName') : '', value: has(value, 'props.value') ? get(value, 'props.value') : '', checked: has(value, 'props.checked') && get(value, 'props.checked') === true ? true : false }),
          has(value, 'props.label')
            ? get(value, 'props.label')
            : '',
        ];
      case 'dropdown':
        return h("eds-dropdown", { "data-dropdown": index, class: `${this.classNames.EL}${this.classNames.DROPDOWN}`, data: get(value, 'props.data') },
          h("div", { slot: "selector" },
            h("div", { class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.DROPDOWN}` },
              h("eds-paragraph", { id: "menu-dropdown-heading", class: [
                  `${this.classNames.EL}${this.classNames.CELL}${this.classNames.DROPDOWN}${this.classNames.TEXT}`,
                ].join(' '), type: "body-1", "font-weight": "bold", content: get(value, 'props.label') }),
              h("eds-icon", { id: "icon-dropdown-heading", slot: "icon", class: [
                  `${this.classNames.EL}${this.classNames.CELL}${this.classNames.ICON}`,
                  `${this.classNames.EL}${this.classNames.CELL}${this.classNames.DROPDOWN}${this.classNames.ICON}`,
                ].join(' '), icon: "chevron-down" }))));
    }
  }
  render() {
    if (this.columns && this.columns.length > 0) {
      return (h("tr", { class: [
          `${this.classNames.EL}`,
          this.size ? `${this.classNames.EL}--${this.size}` : '',
          this.styles ? `${this.classNames.EL}--${this.styles}` : '',
        ].join(' ') },
        this.hasIndentedColumn === true
          ? h("td", { class: [
              `${this.classNames.EL}${this.classNames.CELL}`,
              `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_EXPANDABLE}`,
              `${this.classNames.EL}${this.classNames.CELL}${this.classNames.INDENTED}`,
            ].join(' ') })
          : '',
        this.checkable === true
          ? h("th", { class: [
              `${this.classNames.EL}${this.classNames.CELL}`,
              `${this.classNames.EL}${this.classNames.CELL}${this.classNames.HAS_CHECKBOX}`,
            ].join(' ') },
            h("div", null,
              h("eds-checkbox", { class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.CHECKBOX}`, selected: this.selected, inputName: "checkbox-header", value: "1" })))
          : '',
        this.expandable === true
          ? h("td", { class: [
              `${this.classNames.EL}${this.classNames.CELL}`,
              `${this.classNames.EL}--${this.styles}${this.classNames.CELL}`,
              `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_EXPANDABLE}`,
            ].join(' ') })
          : '',
        this.columns.map((value, index) => h("th", { class: this.setCellClasses(index), style: (this.columnSizes[index] !== undefined && !['fitted'].includes(this.columnSizes[index]))
            ? { 'width': this.columnSizes[index] }
            : {}, "data-index": index },
          h("div", null,
            isObject(value) && has(value, 'props.type')
              ? this.displayComponentType(value, index)
              : h("div", { innerHTML: value }),
            get(this._sorting[index], 'sortable') === true
              ? h("eds-icon", { class: [
                  `${this.classNames.EL}${this.classNames.CELL}${this.classNames.ICON}`,
                  `${this.classNames.EL}${this.classNames.CELL}${this.classNames.SORTING_ICON}`,
                ].join(' '), icon: "sort" })
              : '',
            h("slot", { name: `header-cell-${index}` }))))));
    }
    else {
      return (h("thead", null));
    }
  }
  static get is() { return "eds-data-table-header"; }
  static get originalStyleUrls() { return {
    "$": ["data-table-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["data-table-header.css"]
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
    }
  }; }
  static get states() { return {
    "selected": {}
  }; }
  static get events() { return [{
      "method": "clickSortColumn",
      "name": "clickSortColumn",
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
      "method": "clickHeaderCheckbox",
      "name": "clickHeaderCheckbox",
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
      "method": "clickHeaderDropdown",
      "name": "clickHeaderDropdown",
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
