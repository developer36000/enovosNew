import { Component, Element, Event, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { compact, concat, filter, find, flatten, get, has, map, uniq, uniqueId } from 'lodash-es';
import { SelectionControlsItem } from '../../../models/selection-controls';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Selection Controls
 * @description Selection controls allow the user to select options. The pattern can be configured with checkboxes/radio buttons/switches.<br />The selection control can be associated with the input-chip component in checkbox version.
 * @path patterns
 * @documented true
 */
export class ENOVOSSelectionControls {
  constructor() {
    this.data = [];
    this.indented = false;
    this.items = [];
    this.classNames = {
      EL: 'selection-controls',
      ITEM: '__item',
      SWITCH: '__switch',
      INDENTED: '--indented',
      SELECTED: '--selected',
      INDETERMINATE: '--indeterminate',
    };
    this.prefixId = 'controlId_';
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
  // Add selected state when component is rendered
  componentDidRender() {
    this.items.forEach(item => {
      const activeElement = this.el.querySelector(`#${item.id}`);
      activeElement.selected ? activeElement.classList.add(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}`) : activeElement.classList.remove(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}`);
    });
  }
  componentWillLoad() {
    this.items = this.setItems(this.data);
  }
  clickSelectionControlItemCatch(event) {
    this.activeItem = event.detail.getProp('id');
  }
  /**
   * @description Listen the event on checkbox
   */
  clickCheckboxHandler(e) {
    // the click is propagated throught SelectionControls from children to parents.
    // Get the current click item in current this.items
    let foundObject = this.foundCurrentItem(this.items, e.target.id);
    // If the current item isn't found, that means the item is a child, so try to retrieve the parent
    if (!foundObject) {
      foundObject = this.foundParentItem(this.items, e.target.id);
    }
    if (foundObject) {
      // If the click item has children
      if (foundObject.hasProp('children')) {
        if (e.target.id !== foundObject.getProp('id')) {
          // Check the total number of children checked and set state of parent
          this.setIndeterminateState(foundObject, undefined, undefined);
        }
        else {
          const selected = foundObject.indeterminate === true || foundObject.selected === false ? true : false;
          // Select/Unselect the parent and set indeterminate to false
          this.setIndeterminateState(foundObject, false, selected);
          foundObject.getProp('children').map((item) => {
            // Select/Unselect the children depending the parent
            this.setIndeterminateState(item, false, selected);
          });
        }
      }
      else {
        // Current item, set the select value
        foundObject.setProp('selected', (foundObject.selected === false || foundObject.selected === undefined) ? true : false);
      }
    }
    const selectedItems = this.getSelectedItems(this.items);
    // Send click event when event propagated to top parent only
    if (!this.indented) {
      const parentItem = this.foundParentItem(this.items, e.target.id);
      const currentItem = this.foundOriginalItem(this.items, e.target.id);
      if (currentItem) {
        this.clickSelectionControls.emit({ items: this.items, currentItem, parent: (parentItem && parentItem.getProp('id') !== currentItem.getProp('id')) ? parentItem : undefined, nbSelected: selectedItems.length });
      }
    }
    this.items = [...this.items];
    this.refresh = Date.now();
  }
  /**
   * @description Listen the event on radio button
   */
  clickRadioButtonHandler(e) {
    const foundObject = this.foundCurrentItem(this.items, e.target.id);
    if (foundObject) {
      foundObject.setProp('selected', !foundObject.selected);
    }
    this.items.map((item) => {
      if (e.target.id !== item.getProp('id')) {
        const childEl = this.el.querySelector(`#${item.getProp('id')}`);
        if (childEl) {
          item.setProp('selected', false);
          childEl.selected = false;
        }
      }
    });
    if (!this.indented) {
      this.clickSelectionControls.emit({ 'items': this.items, currentItem: foundObject });
    }
  }
  /**
   * @description Listen the event on radio button
   */
  clickSwitchHandler(e) {
    const foundObject = this.foundCurrentItem(this.items, e.target.id);
    if (foundObject) {
      foundObject.setProp('checked', !foundObject.checked);
      const labelEl = this.el.querySelector(`#label_${foundObject.getProp('id')}`);
      if (labelEl) {
        labelEl.styles = foundObject.checked === true ? 'secondary-500' : 'tertiary-500';
        labelEl.fontWeight = foundObject.checked === true ? 'bold' : 'regular';
      }
    }
    if (!this.indented) {
      this.clickSelectionControls.emit({ 'items': this.items, currentItem: foundObject });
    }
  }
  async setData(data) {
    this.data = data;
  }
  async clearData() {
    const itemsTmp = compact(concat(this.items, uniq((flatten(map(this.items, 'children'))).slice().sort())));
    itemsTmp.map(item => {
      item.selected = false;
      if (has(item, 'indeterminate')) {
        item.indeterminate = false;
      }
      const itemEl = this.el.querySelector(`#${item.getProp('id')}`);
      if (itemEl) {
        item.selected = false;
        itemEl.selected = false;
        if (has(item, 'indeterminate')) {
          item.indeterminate = false;
          itemEl.indeterminate = false;
        }
      }
    });
    this.items = [...this.items];
    this.refresh = Date.now();
    this.clickSelectionControls.emit({ 'items': this.items, nbSelected: 0 });
  }
  watchHandler(newData, oldData) {
    if (newData !== oldData) {
      this.items = this.setItems(newData);
    }
  }
  /**
   * Found recursively top parent based on an item id
   */
  foundParentItem(items, id) {
    let foundObject;
    items.map((item) => {
      if (item.getProp('id') !== id && item.hasProp('children') && !foundObject) {
        if (this.foundCurrentItem(item.getProp('children'), id)) {
          foundObject = item;
        }
      }
    });
    return foundObject;
  }
  /**
   * Alternative version to foundOriginalItem which create an instance and don't allows to
   * correctly update this.items through different identation
   */
  foundCurrentItem(items, id) {
    return find(items, (item) => {
      if (item.getProp(`id`) === id) {
        return item;
      }
      else if (item.hasProp('children')) {
        return this.foundParentItem(item.getProp('children'), id);
      }
    });
  }
  /**
   * Found item throught all available items. Return an instance.
   */
  foundOriginalItem(items, id) {
    return find(compact(concat(items, uniq((flatten(map(items, 'children'))).slice().sort()))), (item) => (item.getProp(`id`) === id));
  }
  getSelectedItems(items) {
    return filter(compact(concat(items, uniq((flatten(map(items, 'children'))).slice().sort()))), (item) => (item.getProp(`selected`) === true));
  }
  /**
   * @description Init the dropdown from an array of item
   */
  setItems(items) {
    const tmpItems = [];
    if (Array.isArray(items)) {
      items.map(item => {
        if (item) {
          const formatItem = new SelectionControlsItem(item);
          formatItem.id = (!has(item, 'id')) ? `${this.prefixId}${uniqueId()}` : `${this.prefixId}${get(item, 'id')}`;
          if (has(item, 'children')) {
            formatItem.children = this.setItems(get(item, 'children'));
          }
          // Now set indeterminate if one child is selected
          this.setIndeterminateState(formatItem, undefined, undefined);
          tmpItems.push(formatItem);
        }
      });
    }
    return tmpItems;
  }
  /**
   * @description Check the total number of children checked and set state of parent
   * If all children are checked, parent should be checked
   * If some children are checked, parent should be indeterminate
   * If all children are unchecked, parent should be unchecked
   */
  setIndeterminateState(item, forceIndeterminate, forceSelected) {
    let indeterminate = (forceIndeterminate !== undefined) ? forceIndeterminate : undefined;
    let selected = (forceSelected !== undefined) ? forceSelected : undefined;
    if (item.hasProp('children')) {
      const nbChildren = item.getProp('children').length;
      const nbCheckedChildren = filter(item.getProp('children'), (child) => child.getProp('selected') === true);
      indeterminate = (forceIndeterminate !== undefined) ? forceIndeterminate : (nbCheckedChildren.length < nbChildren && nbCheckedChildren.length > 0) ? true : false;
      selected = (forceSelected !== undefined) ? forceSelected : (nbCheckedChildren.length < nbChildren) ? false : true;
    }
    if (indeterminate !== undefined && selected !== undefined) {
      item.setProp('indeterminate', indeterminate);
      item.setProp('selected', selected);
      // If render is done, update view dynamically
      const itemEl = this.el.querySelector(`#${item.getProp('id')}`);
      if (itemEl) {
        itemEl.indeterminate = indeterminate;
        itemEl.selected = selected;
        if (indeterminate) {
          itemEl.classList.add(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.INDETERMINATE}`);
        }
        else {
          itemEl.classList.remove(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.INDETERMINATE}`);
        }
      }
    }
  }
  setMainElementClasses() {
    return [
      this.classNames.EL,
      this.indented ? `${this.classNames.EL}${this.classNames.INDENTED}` : '',
    ].join(' ');
  }
  render() {
    return (h("div", { class: this.setMainElementClasses() }, (() => {
      switch (this.type) {
        case 'checkbox':
          return this.items.map((item) => {
            return [
              h("eds-checkbox", { class: [
                  `${this.classNames.EL}${this.classNames.ITEM}`,
                  item.getProp(`selected`) === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}` : '',
                  item.getProp(`indeterminate`) === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.INDETERMINATE}` : '',
                ].join(' '), id: `${item.getProp(`id`)}`, selected: item.getProp(`selected`) === true ? true : false, disabled: item.getProp(`disabled`) === true ? true : false, indeterminate: item.getProp(`indeterminate`) === true ? true : false, inputName: item.getProp(`inputName`), size: item.getProp(`size`), styles: item.getProp(`styles`), value: item.getProp(`value`), label: item.getProp(`label`) }),
              (item.hasProp('children')) ?
                h("eds-selection-controls", { indented: true, refresh: this.refresh, data: item.getProp('children'), type: this.type })
                : '',
            ];
          });
        case 'radio-button':
          return this.items.map((item) => {
            return h("eds-radio-button", { class: [
                `${this.classNames.EL}${this.classNames.ITEM}`,
                item.getProp(`selected`) === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}` : '',
              ].join(' '), id: item.getProp(`id`), selected: item.getProp(`selected`) === true ? true : false, disabled: item.getProp(`disabled`) === true ? true : false, inputName: item.getProp(`inputName`), size: item.getProp(`size`), styles: item.getProp(`styles`), label: item.getProp(`label`), value: item.getProp(`value`), icon: item.getProp(`icon`) });
          });
        case 'switch':
          return this.items.map((item) => {
            return h("eds-switch", { class: [
                `${this.classNames.EL}${this.classNames.ITEM}`,
                `${this.classNames.EL}${this.classNames.SWITCH}`,
                item.getProp(`selected`) === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}` : '',
              ].join(' '), label: item.getProp(`label`), id: item.getProp(`id`), checked: item.getProp(`checked`) === true ? true : false, disabled: item.getProp(`disabled`) === true ? true : false, inputName: item.getProp(`inputName`), size: item.getProp(`size`), value: item.getProp(`value`), styles: item.getProp(`styles`) });
          });
      }
    })()));
  }
  static get is() { return "eds-selection-controls"; }
  static get originalStyleUrls() { return {
    "$": ["selection-controls.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["selection-controls.css"]
  }; }
  static get properties() { return {
    "activeItem": {
      "type": "string",
      "mutable": true,
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
      "attribute": "active-item",
      "reflect": false
    },
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SelectionControlsItem[]",
        "resolved": "SelectionControlsItem[]",
        "references": {
          "SelectionControlsItem": {
            "location": "import",
            "path": "../../../models/selection-controls"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "indented": {
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
      "attribute": "indented",
      "reflect": false,
      "defaultValue": "false"
    },
    "refresh": {
      "type": "number",
      "mutable": true,
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
      "attribute": "refresh",
      "reflect": false
    }
  }; }
  static get states() { return {
    "items": {}
  }; }
  static get events() { return [{
      "method": "clickSelectionControlItem",
      "name": "clickSelectionControlItem",
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
      "method": "clickSelectionControls",
      "name": "clickSelectionControls",
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
    "setData": {
      "complexType": {
        "signature": "(data: SelectionControlsItem[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "SelectionControlsItem": {
            "location": "import",
            "path": "../../../models/selection-controls"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "clearData": {
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
  static get watchers() { return [{
      "propName": "data",
      "methodName": "watchHandler"
    }]; }
  static get listeners() { return [{
      "name": "clickSelectionControlItem",
      "method": "clickSelectionControlItemCatch",
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
      "name": "clickRadioButton",
      "method": "clickRadioButtonHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "clickSwitch",
      "method": "clickSwitchHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
