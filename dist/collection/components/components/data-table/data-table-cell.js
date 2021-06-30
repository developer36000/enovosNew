import { Component, Element, Event, Listen, Prop, h } from '@stencil/core';
import { isNumber, uniqueId } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { Format } from '../../../utils/Format';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
// import { IsVisibleObservable } from '../../../../utils/isVisibleObservable';
/**
 * @name Data Table Cell
 * @description TBD
 * @path components
 * @documented false
 */
export class ENOVOSDataTableCell {
  constructor() {
    this.fitted = false;
    this.classNames = {
      EL: 'data-table-cell',
      ICON: '__icon',
      TOOLTIP: '__tooltip',
      CONTENT: '__content',
      DROPDOWN: '__dropdown',
      NUMERICAL: '--numerical',
      FIRST: '--first',
      IS_ELLIPSIS: '--is-ellipsis',
      IS_ACTION: '--is-action',
      IS_ICON: '--is-icon',
    };
    this._mouseEnterHandler = undefined;
    this._mouseLeaveHandler = undefined;
    this._observable = undefined; // observer;
  }
  clickCellButtonHandler(event) {
    event.preventDefault();
    this.clickRowButton.emit({ id: this.rowId, values: this.data });
  }
  clickCellIconHandler(event) {
    event.preventDefault();
    this.clickRowIcon.emit({ id: this.rowId, values: this.data });
  }
  componentWillLoad() {
    this._tooltipID = uniqueId('tooltip-cell-');
    this._cellID = uniqueId('table-cell-');
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
    // this.attachObservable();
    this.attachEvents();
  }
  componentDidUpdate() {
    // this.attachObservable();
    this.attachEvents();
  }
  // TODO: to be restaured when ok for design
  /*private attachObservable() {
    this._observable = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        this.mouseEnterHandler();
        this._observable.disconnectObserver();
      }
    }, {
      threshold: 1,
    });
  }*/
  attachEvents() {
    const dropdown = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}`);
    if (dropdown) {
      dropdown.removeEventListener('clickDropdownItem', this._clickDropdownItemHandler);
      dropdown.addEventListener('clickDropdownItem', this._clickDropdownItemHandler = e => {
        this.clickRowDropdown.emit({ row: this.rowId, value: e.detail });
      }, false);
    }
  }
  mouseEnterHandler() {
    const currentCell = this.el.querySelector(`.${this.classNames.EL}`);
    const currentSpan = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTENT}`);
    const el = this.el;
    const elBoundingClientRect = el.getBoundingClientRect();
    if (currentSpan) {
      if (currentSpan.offsetWidth <= elBoundingClientRect.width) {
        currentCell.classList.remove(`${this.classNames.EL}${this.classNames.IS_ELLIPSIS}`);
      }
      else {
        currentCell.classList.add(`${this.classNames.EL}${this.classNames.IS_ELLIPSIS}`);
      }
    }
  }
  isNumericalValue() {
    return isNumber(this.data.getProp('data'));
  }
  isActionButton() {
    return ['action', 'button'].includes(this.data.getProp('props.type'));
  }
  isIcon() {
    return ['icon'].includes(this.data.getProp('props.type'));
  }
  setMainElementClasses() {
    return [
      this.classNames.EL,
      this.isNumericalValue() ? `${this.classNames.EL}${this.classNames.NUMERICAL}` : '',
      this.data.getProp('alignment') ? `${this.classNames.EL}--${this.data.getProp('alignment')}` : '',
      this.index === 0 ? `${this.classNames.EL}${this.classNames.FIRST}` : '',
      this.isActionButton() ? `${this.classNames.EL}${this.classNames.IS_ACTION}` : '',
      this.isIcon() ? `${this.classNames.EL}${this.classNames.IS_ICON}` : '',
      StylePropsHelper.getStyles(this.styles, `${this.classNames.EL}`),
      this.size ? `${this.classNames.EL}--${this.size}` : '',
    ].join(' ');
  }
  displayComponentType() {
    switch (this.data.getProp('props.type')) {
      case 'icon':
        return h("eds-icon", { icon: this.data.getProp('props.icon'), onClick: ev => this.clickCellIconHandler(ev), styles: this.data.getProp('props.styles'), size: this.data.getProp('props.size') });
      case 'inline-message':
        return h("eds-message", { "icon-leading": this.data.getProp('props.icon'), styles: this.data.getProp('props.styles'), "icon-styles": this.data.getProp('props.iconStyles'), "font-weight": this.data.getProp('props.fontWeight'), "font-size": this.data.getProp('props.fontSize'), inline: true }, this.data.getProp('data'));
      case 'switch':
        return h("eds-switch", { inputName: "switch-normal", checked: this.data.getProp('props.checked'), size: this.data.getProp('props.size'), styles: this.data.getProp('props.styles'), label: this.data.getProp('props.label'), disabled: this.data.getProp('props.disabled'), value: this.data.getProp('props.value') });
      case 'description-list':
        return h("eds-description-list", { id: "description-list", data: this.data.getProp('props.data') });
      case 'badge':
        return h("eds-badge", { text: this.data.getProp('props.text'), size: this.data.getProp('props.size'), styles: this.data.getProp('props.styles') });
      case 'description-item':
        return h("div", null,
          h("eds-paragraph", { type: this.data.getProp('props.data.title.type'), styles: this.data.getProp('props.data.title.styles'), "font-weight": this.data.getProp('props.data.title.fontWeight') }, this.data.getProp('props.data.title.content')),
          h("eds-paragraph", { type: this.data.getProp('props.data.content.type'), styles: this.data.getProp('props.data.content.styles'), "font-weight": this.data.getProp('props.data.content.fontWeight') }, this.data.getProp('props.data.content.content')));
      case 'action':
        return h("eds-dropdown", { "align-right": true, class: `${this.classNames.EL}${this.classNames.DROPDOWN}`, data: this.data.getProp('props.dropdown') },
          h("div", { slot: "selector" },
            h("eds-icon", { slot: "icon", icon: "ellipsis-v", size: this.data.getProp('props.size'), styles: this.data.getProp('props.styles') })));
      case 'button':
        return h("eds-button", { size: this.data.getProp('props.size'), "text-only": this.data.hasProp('props.textOnly') ? true : false, outlined: this.data.hasProp('props.outlined') ? true : false, expand: this.data.hasProp('props.expand') ? true : false, disabled: this.data.hasProp('props.disabled') ? true : false, rounded: this.data.hasProp('props.rounded') ? true : false, content: this.data.getProp('props.content'), styles: this.data.getProp('props.styles'), "icon-position": this.data.getProp('props.iconPosition') }, this.data.hasProp('props.icon') ?
          h("eds-icon", { slot: "icon", icon: this.data.getProp('props.icon') })
          : '');
      case 'link':
        return h("eds-link", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, content: this.data.getProp('data'), url: this.data.getProp('props.url'), size: this.data.getProp('props.size') });
      case 'field':
        return h("eds-text-field", { type: "text", styles: this.data.hasProp('props.styles') ? this.data.getProp('props.styles') : '', placeholder: this.data.hasProp('props.placeholder') ? this.data.getProp('props.placeholder') : '', "assistive-text": this.data.hasProp('props.assistive-text') ? this.data.getProp('props.assistive-text') : '', "icon-assistive-text": this.data.hasProp('props.icon-assistive-text') ? this.data.getProp('props.icon-assistive-text') : '', "data-value": this.data.getProp('data') });
    }
  }
  getInnerHTMLValue(data, renderer) {
    let value = (this.isNumericalValue())
      ? Format.amount(data, '.', ',', 2)
      : data;
    if (renderer) {
      return renderer(value);
    }
    return value;
  }
  render() {
    return [
      h("div", { class: this.setMainElementClasses(), id: this._cellID },
        this.data.hasProp('props.type')
          ? this.displayComponentType()
          : h("span", { class: [
              `${this.classNames.EL}${this.classNames.CONTENT}`,
              this.data.hasProp('props.styles') ? StylePropsHelper.getStyles(this.data.getProp('props.styles'), this.classNames.EL) : '',
            ].join(' '), style: this.data.hasProp('contentSize') && { width: this.data.getProp('contentSize') }, innerHTML: this.getInnerHTMLValue(this.data.getProp('data'), this.renderer) }),
        this.data.hasProp('tooltip.value')
          ? [
            h("eds-icon", { class: `${this.classNames.EL}${this.classNames.TOOLTIP}${this.classNames.ICON}`, id: this._tooltipID, styles: this.data.getProp('tooltip.iconStyles') || 'contextual-info', icon: this.data.getProp('tooltip.icon') || 'exclamation-circle', "margin-left-1": true }),
            h("eds-tooltip", { selector: this._tooltipID, text: this.data.getProp('tooltip.value'), "size-md": true, pointer: this.data.getProp('tooltip.pointer') }),
          ]
          : '',
        !this.data.hasProp('props.type') ?
          h("eds-tooltip", { class: [
              `${this.classNames.EL}${this.classNames.TOOLTIP}`,
            ].join(' '), selector: this._cellID, placement: "top", styles: "secondary", text: this.data.getProp('data'), "size-md": true })
          : ''),
    ];
  }
  static get is() { return "eds-data-table-cell"; }
  static get originalStyleUrls() { return {
    "$": ["data-table-cell.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["data-table-cell.css"]
  }; }
  static get properties() { return {
    "rowId": {
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
      "attribute": "row-id",
      "reflect": false
    },
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "CellItem",
        "resolved": "CellItem",
        "references": {
          "CellItem": {
            "location": "import",
            "path": "../../../models/cell-item"
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
    "index": {
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
      "attribute": "index",
      "reflect": false
    },
    "fitted": {
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
      "attribute": "fitted",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false
    },
    "contentSize": {
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
      "attribute": "content-size",
      "reflect": false
    },
    "renderer": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(value: any) => any",
        "resolved": "(value: any) => any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get events() { return [{
      "method": "clickRowButton",
      "name": "clickRowButton",
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
      "method": "clickRowDropdown",
      "name": "clickRowDropdown",
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
      "method": "clickRowIcon",
      "name": "clickRowIcon",
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
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "clickButton",
      "method": "clickCellButtonHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
