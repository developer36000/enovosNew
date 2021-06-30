import { Component, Element, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { clone, compact, concat, filter, find, findIndex, flatten, get, has, map, remove, set, uniq } from 'lodash-es';
import { InputChipItem } from '../../../models/input-chip-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Input chip
 * @description Input chip is a specific pattern used to display chips inside a text field. Chips can be added from a dropdown. The text field can be scrollable to display the different selected chip or display as stacked.
 * @path patterns
 * @documented true
 */
export class ENOVOSInputChip {
  constructor() {
    this.data = [];
    this.size = 'sm';
    this.readOnly = false;
    this.stacked = false;
    this.trailingType = 'icon'; // url / icon
    this.trailingValue = 'times-circle'; // url / icon
    this.styles = 'tertiary';
    this.sizeAvatar = 'xxs';
    this.inputChipItems = [];
    this.classNames = {
      EL: 'input-chip',
      DROPDOWN: '__dropdown',
      ITEM: '__item',
      STACKED: '--stacked',
    };
    this.availableItems = [];
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init component variables
   */
  componentWillLoad() {
    this.setAvailableItems(this.data);
    this.setChipItems();
    if (this.selectionControlType) {
      this.selectionControls = {
        'type': this.selectionControlType,
        'data': this.data,
      };
    }
  }
  /**
   * @description Init the host element and set dropdown data items
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
    this.setDropdownData();
  }
  /**
   * @description Remove chip from input when catch click on trailing icon (cross)
   */
  clickTrailingHandler(event) {
    if (event.detail.uid) {
      this.selectChip(event.detail.uid, false, undefined);
      if (this.selectionControlType === 'checkbox') {
        this.setDropdownData();
      }
    }
  }
  /**
   * @description Add chip in input when catch click dropdown item
   */
  clickDropdownItemHandler(event) {
    if (event.detail.uid) {
      this.selectChip(event.detail.uid, true, undefined);
    }
  }
  clickSelectionControlsItemHandler(event) {
    if (has(event.detail, 'currentItem.uid')) {
      this.selectChip(event.detail.currentItem.uid, (get(event.detail, 'currentItem.selected') === true) ? true : false, event.detail.parent);
    }
  }
  async setItems(data) {
    this.data = data;
  }
  /**
   * @description If there's a change on available chip item,  refresh input/dropdown
   */
  watchHandler(newData, oldData) {
    if (newData !== oldData) {
      this.setAvailableItems(newData);
      this.setChipItems();
      if (this.selectionControlType) {
        this.selectionControls = {
          'type': this.selectionControlType,
          'data': this.data,
        };
      }
      this.setDropdownData();
    }
  }
  /**
   * @description Set the chip parameters.
   * One for the chip display in input this.inputChipItems
   * One for the chip display in dropdown this.availableItems
   * The configuration is a little bit different in the 2 components like the size or trailing icon
   */
  selectChip(uid, value, parent) {
    const availableItem = find(this.availableItems, item => uid === get(item, 'uid'));
    if (availableItem) {
      // Define if the chip should be visible in the input
      if (value === false) {
        if (this.selectionControlType === 'checkbox') {
          this.removeCheckboxSelectedChip(uid, value, availableItem);
          if (parent && parent.hasProp('children') && parent.getProp('children').length > 0) {
            this.removeSelectedChip(get(parent, 'uid'), value);
            const availableItemParent = find(this.availableItems, item => get(parent, 'uid') === get(item, 'uid'));
            if (has(availableItemParent, 'children') && availableItemParent.children.length > 0) {
              const selectedChildren = filter(availableItemParent.children, item => get(item, 'selected') === true);
              selectedChildren.map(child => {
                this.setSelectedChip(child, true);
              });
            }
          }
        }
        else {
          this.removeSelectedChip(uid, value);
        }
      }
      else {
        if (this.selectionControlType === 'checkbox') {
          if (parent && parent.hasProp('children') && parent.getProp('children').length > 0) {
            const nbCheckedChildren = filter(parent.getProp('children'), (item) => item.getProp('selected') === true);
            if (nbCheckedChildren.length === parent.getProp('children').length) {
              this.setCheckboxSelectedChip(find(this.availableItems, item => get(parent, 'uid') === get(item, 'uid')));
            }
            else {
              this.setCheckboxSelectedChip(availableItem);
            }
          }
          else {
            this.setCheckboxSelectedChip(availableItem);
          }
        }
        else {
          this.setSelectedChip(availableItem, true);
        }
      }
      this.setDropdownData();
    }
  }
  setCheckboxSelectedChip(availableItem) {
    this.setSelectedChip(availableItem, true);
    if (has(availableItem, 'children') && availableItem.children.length > 0) {
      availableItem.children.map(child => {
        this.removeSelectedChip(get(child, 'uid'), (get(availableItem, 'selected') === true) ? true : false);
      });
    }
  }
  updateAvailableItems(uid, value) {
    const indexItem = findIndex(this.availableItems, item => uid === get(item, 'uid'));
    if (indexItem !== -1) {
      set(this.availableItems[indexItem], 'selected', value);
    }
  }
  setSelectedChip(availableItem, value) {
    this.updateAvailableItems(get(availableItem, 'uid'), value);
    const inputChipItem = new InputChipItem(availableItem);
    this.formatChipItem(availableItem, inputChipItem);
    inputChipItem.setProp('selected', value);
    if (this.readOnly) {
      inputChipItem.setProp('readOnly', true);
    }
    else {
      inputChipItem.setProp('readOnly', false);
    }
    this.inputChipItems = filter([...this.inputChipItems, inputChipItem], { selected: true });
  }
  removeCheckboxSelectedChip(uid, value, availableItem) {
    this.removeSelectedChip(uid, value);
    if (has(availableItem, 'children') && availableItem.children.length > 0) {
      availableItem.children.map(child => {
        this.removeSelectedChip(get(child, 'uid'), (get(availableItem, 'selected') === true) ? true : false);
      });
    }
  }
  removeSelectedChip(uid, value) {
    const inputChip = find(this.inputChipItems, item => uid === item.getProp('uid'));
    if (inputChip) {
      inputChip.setProp('selected', value);
    }
    this.updateAvailableItems(uid, value);
    this.inputChipItems = remove(this.inputChipItems, item => {
      return uid !== item.getProp('uid');
    });
  }
  /**
   * @description Init the dropdown item (this.availableItems) from an array of item
   * and set array of chip to be display in input (this.availableItems) if prop selected is true
   */
  setChipItems() {
    this.inputChipItems = [];
    if (Array.isArray(this.availableItems)) {
      this.availableItems.map(item => {
        const inputChipItem = new InputChipItem(item);
        this.formatChipItem(item, inputChipItem);
        set(item, 'uid', inputChipItem.getProp('uid'));
        if (this.readOnly) {
          inputChipItem.setProp('readOnly', true);
        }
        else {
          inputChipItem.setProp('readOnly', false);
        }
        if (inputChipItem.getProp('selected') === true) {
          this.inputChipItems.push(inputChipItem);
        }
      });
    }
  }
  setAvailableItems(data) {
    const availableItems = clone(data);
    const chainedData = uniq((flatten(map(availableItems, 'children'))).slice().sort());
    this.availableItems = compact(concat(availableItems, Array.isArray(chainedData) ? chainedData : []));
  }
  /**
   * @description Define specific and default proprieties to chip display in input
   */
  formatChipItem(item, inputChipItem) {
    if (!has(item, 'size')) {
      inputChipItem.setProp('size', this.size);
    }
    if (!has(item, 'styles')) {
      inputChipItem.setProp('styles', this.styles);
    }
    if (!this.readOnly) {
      if (!has(item, 'trailingType')) {
        inputChipItem.setProp('trailing.type', this.trailingType);
      }
      if (!has(item, 'trailingValue')) {
        inputChipItem.setProp('trailing.value', this.trailingValue);
      }
    }
    if (!has(item, 'sizeAvatar')) {
      inputChipItem.setProp('sizeAvatar', this.sizeAvatar);
    }
  }
  /**
   * @description Set the available data in dropdown
   */
  setDropdownData() {
    const elementDropdown = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}`);
    if (elementDropdown) {
      if (!this.selectionControls) {
        elementDropdown.data = []; // Force refresh dropdown
        elementDropdown.data = this.availableItems;
      }
      else {
        elementDropdown.selectionControls = {
          'type': undefined,
          'data': [],
        }; // Force refresh dropdown
        elementDropdown.selectionControls = this.selectionControls;
      }
    }
  }
  /** REMOVABLE START */
  render() {
    return ((!this.readOnly)
      ? h("eds-dropdown", { class: [
          `${this.classNames.EL}${this.classNames.DROPDOWN}`,
        ].join(' '), "autocomplete-on-focus": true, selectionControls: this.selectionControls },
        h("div", { slot: "selector" },
          h("eds-text-field", { "icon-leading": this.iconLeading, "icon-trailing": this.iconTrailing, type: "text", stacked: this.stacked, chips: this.inputChipItems })))
      : h("eds-text-field", { "read-only": this.readOnly, "icon-leading": this.iconLeading, "icon-trailing": this.iconTrailing, type: "text", stacked: this.stacked, chips: this.inputChipItems }));
  }
  static get is() { return "eds-input-chip"; }
  static get originalStyleUrls() { return {
    "$": ["input-chip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input-chip.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
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
      "reflect": false,
      "defaultValue": "'sm'"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "read-only",
      "reflect": false,
      "defaultValue": "false"
    },
    "stacked": {
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
      "attribute": "stacked",
      "reflect": false,
      "defaultValue": "false"
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
      "reflect": false,
      "defaultValue": "'icon'"
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
      "reflect": false,
      "defaultValue": "'times-circle'"
    },
    "iconLeading": {
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
      "attribute": "icon-leading",
      "reflect": false
    },
    "iconTrailing": {
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
      "attribute": "icon-trailing",
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
      "reflect": false,
      "defaultValue": "'tertiary'"
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
      "reflect": false,
      "defaultValue": "'xxs'"
    },
    "selectionControlType": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "selection-control-type",
      "reflect": false
    }
  }; }
  static get states() { return {
    "inputChipItems": {}
  }; }
  static get methods() { return {
    "setItems": {
      "complexType": {
        "signature": "(data: InputChipItem[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "InputChipItem": {
            "location": "import",
            "path": "../../../models/input-chip-item"
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
  static get watchers() { return [{
      "propName": "data",
      "methodName": "watchHandler"
    }]; }
  static get listeners() { return [{
      "name": "clickTrailing",
      "method": "clickTrailingHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickDropdownItem",
      "method": "clickDropdownItemHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickSelectionControls",
      "method": "clickSelectionControlsItemHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
