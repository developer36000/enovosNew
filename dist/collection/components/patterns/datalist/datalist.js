import { Component, Element, Event, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { forEach, isEqual } from 'lodash-es';
import { DatalistItem } from '../../../models/components/datalist-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { DatalistItemPropsHelper } from '../../../utils/DatalistItemPropsHelper';
/**
 * @name Datalist
 * @description The pattern manages a list of Datalist Items and displays them vertically. Datalist manage the way to display children with accordion or not or even if lines should be alternated (even/odd templates).
 * @path patterns
 * @documented true
 */
export class ENOVOSDatalist {
  constructor() {
    this.clickable = false;
    this.alternate = false;
    this.alternateReverse = false;
    this.items = [];
    this.datalistItems = [];
    this.classNames = {
      EL: 'datalist',
      ITEM: '__item',
      CHILDREN: '__children',
      ACCORDION: '--accordion',
      COLLAPSED: '--collapsed',
      INDENT: '--indent',
      LEVEL: '--level',
    };
    this.animationDuration = 200;
    this.loaded = false;
  }
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
    this.initComponent(this.items);
  }
  /**
   * @description catch custom event and manage expandable children
   * if the parent is configurate as expandable element
   */
  expandableItems(event) {
    const item = event.detail;
    if (item && item instanceof DatalistItem) {
      if (this.isAccordionConfig(item)) {
        event.preventDefault();
        const childrenContainer = this.el.querySelector(`#${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}_${item.getProp('uid')}`);
        childrenContainer.classList.toggle(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}${this.classNames.COLLAPSED}`);
      }
      this.clickDatalist.emit(item);
    }
  }
  /**
   * @description Init the dataitem
   */
  async setDatalistItems(items) {
    this.initComponent(items);
  }
  /**
   * @description Collapse item
   */
  async collapse(value) {
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}`)
      .forEach((el) => el.collapse(value));
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}`)
      .forEach((el) => {
      el.classList.toggle(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}${this.classNames.COLLAPSED}`);
    });
  }
  /**
   * @description Add datalist to the component
   * Replace the div container by a documentFragment in case there's a
   * new call to setDatalist for an update for example
   * @param {Object} data The data to be display
   */
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && newData.length > 0) {
      this.initComponent(newData);
    }
  }
  initComponent(data) {
    let currentContainer = this.el.querySelector(`.${this.classNames.EL}`);
    // Create the document fragment which will contain the HTML data
    this.documentFragment = document.createDocumentFragment();
    const main = document.createElement('div');
    main.setAttribute('class', [
      `${this.classNames.EL}`,
      DatalistItemPropsHelper.getStyles(this.styles, this.classNames.EL),
    ].join(' '));
    main.setAttribute('style', `opacity: ${(this.loaded) ? '0' : '1'}`);
    this.documentFragment.appendChild(main);
    // Create html list inside fragment
    this.initDatalist(data, undefined);
    // Doesn't apply styles animation the first time the datalist is set
    if (!this.loaded) {
      // Replace current container by the updated one
      this.el.replaceChild(this.documentFragment, currentContainer);
      this.loaded = true;
    }
    else {
      // Hide the current list container with opacity and set the current height
      // to the main container in order to avoiding gap when a change/update should be apply on data parameters
      currentContainer.style.opacity = '0';
      this.el.style.height = `${currentContainer.offsetHeight}px`;
      // Replace the old div container by the one containing the udpate list then
      // remove the fixed height to restore the normal container size
      setTimeout(() => {
        if (this.el.contains(currentContainer)) {
          this.el.replaceChild(this.documentFragment, currentContainer);
          // Restore height and opacity after node replacement
          setTimeout(() => {
            this.el.style.height = '';
            currentContainer = this.el.querySelector(`.${this.classNames.EL}`);
            currentContainer.style.opacity = '1';
          }, this.animationDuration);
        }
      }, this.animationDuration);
    }
  }
  /**
   * @description Loop each item and generate render the HTML
   * @param {data} The data object provide by API
   * @param {parentID} The ID of parent item
   * @param {level} The depth of the data item
   */
  initDatalist(data, parentID, level = 0, isAccordion = false) {
    let newItem;
    let datalistNode = this.documentFragment.querySelector(`.${this.classNames.EL}`);
    let isEven = true;
    forEach(data, (item) => {
      // Create a new object DatalistItem
      newItem = new DatalistItem(item);
      if (this.alternate) {
        if (!newItem.hasProp('type')) {
          isEven = !isEven;
          newItem.setProp('type', (isEven) ? 'even' : 'odd');
        }
        else {
          isEven = true;
        }
      }
      else if (this.alternateReverse) {
        if (!newItem.hasProp('type')) {
          isEven = !isEven;
          newItem.setProp('type', (isEven) ? 'odd' : 'even');
        }
        else {
          isEven = true;
        }
      }
      isAccordion = ((newItem.hasProp('children') && newItem.getProp('children').length > 0) || level > 0)
        ? this.isAccordionConfig(newItem)
          ? true
          : isAccordion
        : false;
      if (parentID !== undefined) {
        newItem.setProp('parent', parentID);
        datalistNode = this.documentFragment.querySelector(`#${this.classNames.EL + this.classNames.ITEM}_${parentID}`);
      }
      this.renderDatalist(newItem, datalistNode, level, isAccordion);
    });
  }
  /**
   * @description Render the html datalist
   */
  renderDatalist(item, nodeContainer, level = 0, isAccordion = false) {
    let dataItem;
    // Inset the component datalist item
    nodeContainer.insertAdjacentHTML('beforeend', this.getHTMLDatalistItem(item, level, isAccordion));
    // Get the create item by ID
    dataItem = this.documentFragment.querySelector(`#${this.classNames.EL + this.classNames.ITEM}_${item.getProp('uid')}`);
    // Call the method to init data of component
    dataItem.setDatalistItem(item);
    // Move the dataitem inside div
    if (item.getProp('parent')) {
      // Inset the component datalist item
      const childrenContainer = this.documentFragment.querySelector(`#${this.classNames.EL + this.classNames.ITEM + this.classNames.CHILDREN}_${item.getProp('parent')}`);
      childrenContainer.appendChild(dataItem);
    }
    // If current item has children
    if (item.hasProp('children') && item.getProp('children').length > 0) {
      // Create the container div for children
      dataItem.insertAdjacentHTML('afterend', this.getHTMLDatalistChildrenContainer(item));
      this.initDatalist(item.getProp('children'), item.getProp('uid'), level + 1, isAccordion);
    }
  }
  isAccordionConfig(item) {
    return (item.hasProp('accordion') && item.getProp('accordion') === true);
  }
  /**
   * @description Generate HTML for DatalistItem component
   */
  getHTMLDatalistItem(item, level, isAccordion) {
    const className = `${this.classNames.EL}${this.classNames.ITEM}`;
    const classes = [className];
    if (isAccordion === true && !item.hasProp('type')) {
      item.setProp('type', 'collapsed');
    }
    if (item.hasProp('type') && ['heading', 'indented'].includes(item.getProp('type'))) {
      classes.push(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.INDENT}`);
    }
    return `<eds-datalist-item class="${classes.join(' ')}" indent=${level}
      padding=${this.padding}
      clickable=${this.clickable}
      id="${this.classNames.EL}${this.classNames.ITEM}_${item.getProp('uid')}">
    </eds-datalist-item>`;
  }
  /**
   * @description Generate HTML for DatalistItem children component
   */
  getHTMLDatalistChildrenContainer(item) {
    const className = `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}`;
    const classes = [className];
    if (this.isAccordionConfig(item)) {
      classes.push(`${className}${this.classNames.ACCORDION}`);
      if (!item.hasProp('collapsed.open') || item.getProp('collapsed.open') === true) {
        classes.push(`${className}${this.classNames.COLLAPSED}`);
      }
    }
    return `<div class="${classes.join(' ')}"
      id="${className}_${item.getProp('uid')}">
    </div>`;
  }
  render() {
    return [
      h("div", { class: `${this.classNames.EL}` }),
    ];
  }
  static get is() { return "eds-datalist"; }
  static get originalStyleUrls() { return {
    "$": ["datalist.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["datalist.css"]
  }; }
  static get properties() { return {
    "clickable": {
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
      "attribute": "clickable",
      "reflect": false,
      "defaultValue": "false"
    },
    "alternate": {
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
      "attribute": "alternate",
      "reflect": false,
      "defaultValue": "false"
    },
    "alternateReverse": {
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
      "attribute": "alternate-reverse",
      "reflect": false,
      "defaultValue": "false"
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
    "padding": {
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
      "attribute": "padding",
      "reflect": false
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "DatalistItem[]",
        "resolved": "DatalistItem[]",
        "references": {
          "DatalistItem": {
            "location": "import",
            "path": "../../../models/components/datalist-item"
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
    }
  }; }
  static get states() { return {
    "datalistItems": {}
  }; }
  static get events() { return [{
      "method": "clickDatalist",
      "name": "clickDatalist",
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
    "setDatalistItems": {
      "complexType": {
        "signature": "(items: DatalistItem[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "DatalistItem": {
            "location": "import",
            "path": "../../../models/components/datalist-item"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Init the dataitem"
          }]
      }
    },
    "collapse": {
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
            "text": "Collapse item"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "items",
      "methodName": "watchItemsHandler"
    }]; }
  static get listeners() { return [{
      "name": "clickDatalistItem",
      "method": "expandableItems",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
