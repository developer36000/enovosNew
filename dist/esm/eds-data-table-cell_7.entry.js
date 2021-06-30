import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import './isSymbol-94e88fb4.js';
import './toString-e72a88e9.js';
import { i as isObject } from './isObject-7039fcda.js';
import './_MapCache-a3ede28d.js';
import { s as set } from './set-913bca4c.js';
import { g as get } from './_hasPath-4dd0f44a.js';
import { h as has } from './has-1e48d487.js';
import { i as isNumber, a as MessageButton } from './message-3f8767d8.js';
import { u as uniqueId } from './uniqueId-a86eb722.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import './v4-4d460ace.js';
import { T as TapEvent } from './tapEvent-8abcbf66.js';
import { S as StylePropsHelper } from './StylePropsHelper-cfc9e3bf.js';

class Format {
  static amount(value, separator = '.', interval = ' ', fixed = 0) {
    const formattedNumber = (typeof value === 'string') ? Number.parseFloat(value.replace(',', '.').replace(/ /g, '')) : value;
    const formattedString = (fixed > 0) ? formattedNumber.toFixed(fixed) : formattedNumber.toString();
    return formattedString
      .replace(',', separator)
      .replace('.', separator)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${interval}`);
  }
}

const dataTableCellCss = "[name=data-table-cell]{display:flex;align-items:baseline;height:100%;text-align:left}[name=data-table-cell] .data-table-cell--left{text-align:left !important}[name=data-table-cell] .data-table-cell--center{text-align:center !important}[name=data-table-cell] .data-table-cell--right{text-align:right !important}[name=data-table-cell] .data-table-cell--capitalize{text-transform:capitalize !important}[name=data-table-cell] .data-table-cell--uppercase{text-transform:uppercase !important}[name=data-table-cell] .data-table-cell--lowercase{text-transform:lowercase !important}[name=data-table-cell] .data-table-cell--underline{text-decoration:underline !important}[name=data-table-cell] .data-table-cell--italic{font-style:italic !important}[name=data-table-cell] .data-table-cell--fit-content{height:inherit !important;line-height:unset !important}[name=data-table-cell] .data-table-cell--line-height-body-2{line-height:16px !important}[name=data-table-cell] .data-table-cell--weight-100{font-weight:100 !important}[name=data-table-cell] .data-table-cell--weight-200{font-weight:200 !important}[name=data-table-cell] .data-table-cell--weight-300{font-weight:300 !important}[name=data-table-cell] .data-table-cell--weight-400{font-weight:400 !important}[name=data-table-cell] .data-table-cell--weight-500{font-weight:500 !important}[name=data-table-cell] .data-table-cell--weight-600{font-weight:600 !important}[name=data-table-cell] .data-table-cell--weight-700{font-weight:700 !important}[name=data-table-cell] .data-table-cell--weight-800{font-weight:800 !important}[name=data-table-cell] .data-table-cell--weight-900{font-weight:900 !important}[name=data-table-cell] .data-table-cell--weight-thin{font-weight:100 !important}[name=data-table-cell] .data-table-cell--weight-extra-light{font-weight:200 !important}[name=data-table-cell] .data-table-cell--weight-light{font-weight:300 !important}[name=data-table-cell] .data-table-cell--weight-regular{font-weight:400 !important}[name=data-table-cell] .data-table-cell--weight-medium{font-weight:500 !important}[name=data-table-cell] .data-table-cell--weight-semi-bold{font-weight:600 !important}[name=data-table-cell] .data-table-cell--weight-bold{font-weight:700 !important}[name=data-table-cell] .data-table-cell--weight-extra-bold{font-weight:800 !important}[name=data-table-cell] .data-table-cell--style-normal{font-style:normal !important}[name=data-table-cell] .data-table-cell--style-italic{font-style:italic !important}[name=data-table-cell] .data-table-cell--style-oblique{font-style:oblique !important}[name=data-table-cell] .data-table-cell--font-family-1{font-family:\"Montserrat\", sans-serif !important}[name=data-table-cell] .data-table-cell--font-family-2{font-family:\"Montserrat\", sans-serif !important}[name=data-table-cell] .data-table-cell{display:flex;align-items:center;width:100%;min-height:inherit;padding:4px 0;min-height:inherit;padding:16px 0}[name=data-table-cell] .data-table-cell--numerical,[name=data-table-cell] .data-table-cell--right{justify-content:flex-end}[name=data-table-cell] .data-table-cell--center{justify-content:center}[name=data-table-cell] .data-table-cell--is-action{overflow:visible;transition:color 0.2s ease-in-out;cursor:pointer}[name=data-table-cell] .data-table-cell--is-icon{transition:color 0.2s ease-in-out;cursor:pointer}[name=data-table-cell] .data-table-cell--is-ellipsis{cursor:pointer}[name=data-table-cell] .data-table-cell:not(.data-table-cell--is-ellipsis) .data-table-cell__tooltip{display:none}[name=data-table-cell] .data-table-cell__tooltip__icon{vertical-align:sub}[name=data-table-cell] .data-table-cell.data-table-cell{font-size:12px;font-weight:500;line-height:16px}[name=data-table-cell] .data-table-cell.data-table-cell.data-table-cell--first{font-size:14px;font-weight:400}[name=data-table-cell] .data-table-cell.data-table-cell.data-table-cell--is-icon{font-size:24px}[name=data-table-cell] .data-table-cell.data-table-cell.data-table-cell--is-action{font-size:24px}[name=data-table-cell] .data-table-cell .data-table-cell__tooltip__icon{font-size:24px}[name=data-table-cell] .data-table-cell.data-table-cell--lg{font-size:14px;font-weight:500;line-height:16px}[name=data-table-cell] .data-table-cell.data-table-cell--lg.data-table-cell--first{font-size:14px;font-weight:false}[name=data-table-cell] .data-table-cell.data-table-cell--lg.data-table-cell--is-icon{font-size:14px}[name=data-table-cell] .data-table-cell.data-table-cell--lg.data-table-cell--is-action{font-size:14px}[name=data-table-cell] .data-table-cell .data-table-cell__tooltip__icon{font-size:\"auto\"}[name=data-table-cell] .data-table-cell.data-table-cell{color:#5E5E5E;font-family:\"Montserrat\", sans-serif;font-style:normal}[name=data-table-cell] .data-table-cell.data-table-cell--is-icon{color:#5E5E5E}[name=data-table-cell] .data-table-cell.data-table-cell--is-action{color:#5E5E5E}@media (hover: hover){[name=data-table-cell] .data-table-cell.data-table-cell--is-icon:not([disabled]):hover,[name=data-table-cell] .data-table-cell.data-table-cell--is-action:not([disabled]):hover{color:#F76700}}[name=data-table-cell] .data-table-cell.data-table-cell--is-icon:not([disabled]):focus,[name=data-table-cell] .data-table-cell.data-table-cell--is-action:not([disabled]):focus{color:#F76700}[name=data-table-cell] .data-table-cell.data-table-cell--is-icon:not([disabled]):active,[name=data-table-cell] .data-table-cell.data-table-cell--is-action:not([disabled]):active{color:#F76700}[name=data-table-cell] .data-table-cell.data-table-cell--blue{color:#000000;font-family:\"Montserrat\", sans-serif;font-style:normal}[name=data-table-cell] .data-table-cell.data-table-cell--blue--is-icon{color:#000000}[name=data-table-cell] .data-table-cell.data-table-cell--blue--is-action{color:#000000}@media (hover: hover){[name=data-table-cell] .data-table-cell.data-table-cell--blue--is-icon:not([disabled]):hover,[name=data-table-cell] .data-table-cell.data-table-cell--blue--is-action:not([disabled]):hover{color:#000000}}[name=data-table-cell] .data-table-cell.data-table-cell--blue--is-icon:not([disabled]):focus,[name=data-table-cell] .data-table-cell.data-table-cell--blue--is-action:not([disabled]):focus{color:#000000}[name=data-table-cell] .data-table-cell.data-table-cell--blue--is-icon:not([disabled]):active,[name=data-table-cell] .data-table-cell.data-table-cell--blue--is-action:not([disabled]):active{color:#000000}[name=data-table-cell] .data-table-cell.data-table-cell--primary{color:#000000;font-family:\"Montserrat\", sans-serif;font-style:normal}[name=data-table-cell] .data-table-cell.data-table-cell--primary--is-icon{color:#000000}[name=data-table-cell] .data-table-cell.data-table-cell--primary--is-action{color:#000000}@media (hover: hover){[name=data-table-cell] .data-table-cell.data-table-cell--primary--is-icon:not([disabled]):hover,[name=data-table-cell] .data-table-cell.data-table-cell--primary--is-action:not([disabled]):hover{color:#000000}}[name=data-table-cell] .data-table-cell.data-table-cell--primary--is-icon:not([disabled]):focus,[name=data-table-cell] .data-table-cell.data-table-cell--primary--is-action:not([disabled]):focus{color:#000000}[name=data-table-cell] .data-table-cell.data-table-cell--primary--is-icon:not([disabled]):active,[name=data-table-cell] .data-table-cell.data-table-cell--primary--is-action:not([disabled]):active{color:#000000}[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark{color:#5E5E5E;font-family:\"Montserrat\", sans-serif;font-style:normal}[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark--is-icon{color:#004885}[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark--is-action{color:#004885}@media (hover: hover){[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark--is-icon:not([disabled]):hover,[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark--is-action:not([disabled]):hover{color:#004885}}[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark--is-icon:not([disabled]):focus,[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark--is-action:not([disabled]):focus{color:#004885}[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark--is-icon:not([disabled]):active,[name=data-table-cell] .data-table-cell.data-table-cell--brand-expressive-orange-dark--is-action:not([disabled]):active{color:#004885}";

const ENOVOSDataTableCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickRowButton = createEvent(this, "clickRowButton", 7);
    this.clickRowDropdown = createEvent(this, "clickRowDropdown", 7);
    this.clickRowIcon = createEvent(this, "clickRowIcon", 7);
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
    onChange('theme', () => {
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
        return h("div", null, h("eds-paragraph", { type: this.data.getProp('props.data.title.type'), styles: this.data.getProp('props.data.title.styles'), "font-weight": this.data.getProp('props.data.title.fontWeight') }, this.data.getProp('props.data.title.content')), h("eds-paragraph", { type: this.data.getProp('props.data.content.type'), styles: this.data.getProp('props.data.content.styles'), "font-weight": this.data.getProp('props.data.content.fontWeight') }, this.data.getProp('props.data.content.content')));
      case 'action':
        return h("eds-dropdown", { "align-right": true, class: `${this.classNames.EL}${this.classNames.DROPDOWN}`, data: this.data.getProp('props.dropdown') }, h("div", { slot: "selector" }, h("eds-icon", { slot: "icon", icon: "ellipsis-v", size: this.data.getProp('props.size'), styles: this.data.getProp('props.styles') })));
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
      h("div", { class: this.setMainElementClasses(), id: this._cellID }, this.data.hasProp('props.type')
        ? this.displayComponentType()
        : h("span", { class: [
            `${this.classNames.EL}${this.classNames.CONTENT}`,
            this.data.hasProp('props.styles') ? StylePropsHelper.getStyles(this.data.getProp('props.styles'), this.classNames.EL) : '',
          ].join(' '), style: this.data.hasProp('contentSize') && { width: this.data.getProp('contentSize') }, innerHTML: this.getInnerHTMLValue(this.data.getProp('data'), this.renderer) }), this.data.hasProp('tooltip.value')
        ? [
          h("eds-icon", { class: `${this.classNames.EL}${this.classNames.TOOLTIP}${this.classNames.ICON}`, id: this._tooltipID, styles: this.data.getProp('tooltip.iconStyles') || 'contextual-info', icon: this.data.getProp('tooltip.icon') || 'exclamation-circle', "margin-left-1": true }),
          h("eds-tooltip", { selector: this._tooltipID, text: this.data.getProp('tooltip.value'), "size-md": true, pointer: this.data.getProp('tooltip.pointer') }),
        ]
        : '', !this.data.hasProp('props.type') ?
        h("eds-tooltip", { class: [
            `${this.classNames.EL}${this.classNames.TOOLTIP}`,
          ].join(' '), selector: this._cellID, placement: "top", styles: "secondary", text: this.data.getProp('data'), "size-md": true })
        : ''),
    ];
  }
  get el() { return getElement(this); }
};
ENOVOSDataTableCell.style = dataTableCellCss;

const dataTableHeaderCss = "[name=data-table-header]{z-index:3000;display:table-header-group;text-align:left}[name=data-table-header].data-table-header--sticky{position:relative;display:block;width:100%}[name=data-table-header].data-table-header--sticky .data-table-header{display:flex;width:100%}[name=data-table-header].data-table-header--sticky .data-table-header__cell{display:flex;align-items:center;flex-basis:100%;flex-grow:2}[name=data-table-header].data-table-header--sticky .data-table-header__cell--checkbox{flex-basis:auto;flex-grow:1;flex-shrink:0;width:auto}[name=data-table-header].data-table-header--sticky .data-table-header__cell--expandable{flex-basis:40px;flex-grow:1;flex-shrink:0}[name=data-table-header] .data-table-header__cell{height:calc((8px * 7) - 1px);min-height:calc((8px * 7) - 1px);padding-right:40px;padding-left:16px;vertical-align:middle}[name=data-table-header] .data-table-header__cell>div{display:flex;align-items:center;width:100%}[name=data-table-header] .data-table-header__cell--interactive{cursor:pointer}[name=data-table-header] .data-table-header__cell--fitted{width:1%;padding-right:8px !important;padding-left:8px !important}[name=data-table-header] .data-table-header__cell--checkbox{width:72px;padding-right:16px;white-space:nowrap}[name=data-table-header] .data-table-header__cell--checkbox+.data-table-header__cell.data-table-header__cell--expandable{width:40px !important}[name=data-table-header] .data-table-header__cell--checkbox+.data-table-header__cell:not(.data-table-header__cell--expandable){padding-left:0}[name=data-table-header] .data-table-header__cell--expandable{width:56px;padding:0;white-space:nowrap}[name=data-table-header] .data-table-header__cell--expandable+.data-table-header__cell{padding-left:0}[name=data-table-header] .data-table-header__cell--indented{padding:0}[name=data-table-header] .data-table-header__cell--indented+.data-table-header__cell{padding-left:0}[name=data-table-header] .data-table-header__cell__icon{margin-left:8px;font-size:16px;line-height:16px}[name=data-table-header] .data-table-header__cell__dropdown{display:flex;align-items:center;width:100%;cursor:pointer}[name=data-table-header] .data-table-header__dropdown{width:100%}[name=data-table-header].data-table-header--sticky .data-table-header__cell--indented+.data-table-header__cell--checkbox{padding-left:80px}[name=data-table-header] .data-table-header .data-table-header__cell{border-bottom-width:1px;padding-left:8px;padding-right:8px;font-size:12px;font-weight:700}[name=data-table-header] .data-table-header .data-table-header__cell__sorting-icon{font-size:16px;line-height:16px}[name=data-table-header] .data-table-header .data-table-header__cell__switch{line-height:8px}[name=data-table-header] .data-table-header .data-table-header__cell--indented{width:80px}[name=data-table-header] .data-table-header .data-table-header__cell--indented+.data-table-header__cell--checkbox{padding-left:56px}[name=data-table-header].data-table-header--sticky .data-table-header__cell--indented+.data-table-header__cell--checkbox{padding-left:56px}[name=data-table-header] .data-table-header--lg .data-table-header__cell{border-bottom-width:1px;padding-left:8px;padding-right:8px;font-size:0;font-weight:500}[name=data-table-header] .data-table-header--lg .data-table-header__cell__sorting-icon{font-size:\"auto\";line-height:\"auto\"}[name=data-table-header] .data-table-header--lg .data-table-header__cell__switch{line-height:\"auto\"/2}[name=data-table-header] .data-table-header--lg .data-table-header__cell--indented{width:56px}[name=data-table-header] .data-table-header--lg .data-table-header__cell--indented+.data-table-header__cell--checkbox{padding-left:32px}[name=data-table-header].data-table-header--indented .data-table-header{background-color:#5E5E5E}[name=data-table-header] .data-table-header{color:#A7A7A7;background-color:transparent}[name=data-table-header] .data-table-header__cell{border-bottom-color:transparent;border-bottom-style:solid;font-family:\"Montserrat\", sans-serif;font-style:normal}[name=data-table-header] .data-table-header__cell--sorted{color:#5E5E5E}[name=data-table-header] .data-table-header__cell__dropdown__text{color:#004885}[name=data-table-header].data-table-header--blue--indented .data-table-header--blue{background-color:transparent}[name=data-table-header] .data-table-header--blue{color:#000000;background-color:transparent}[name=data-table-header] .data-table-header--blue__cell{border-bottom-color:transparent;border-bottom-style:\"solid\";font-family:\"Montserrat\", sans-serif;font-style:normal}[name=data-table-header] .data-table-header--blue__cell--sorted{color:\"\"}[name=data-table-header] .data-table-header--blue__cell__dropdown__text{color:#004885}[name=data-table-header].data-table-header--primary--indented .data-table-header--primary{background-color:transparent}[name=data-table-header] .data-table-header--primary{color:#000000;background-color:transparent}[name=data-table-header] .data-table-header--primary__cell{border-bottom-color:transparent;border-bottom-style:\"solid\";font-family:\"Montserrat\", sans-serif;font-style:normal}[name=data-table-header] .data-table-header--primary__cell--sorted{color:\"\"}[name=data-table-header] .data-table-header--primary__cell__dropdown__text{color:#004885}[name=data-table-header].data-table-header--brand-expressive-orange-dark--indented .data-table-header--brand-expressive-orange-dark{background-color:#5A8D00}[name=data-table-header] .data-table-header--brand-expressive-orange-dark{color:#96C11F;background-color:#CAA08D}[name=data-table-header] .data-table-header--brand-expressive-orange-dark__cell{border-bottom-color:\"\";border-bottom-style:\"\";font-family:\"Montserrat\", sans-serif;font-style:normal}[name=data-table-header] .data-table-header--brand-expressive-orange-dark__cell--sorted{color:#96C11F}[name=data-table-header] .data-table-header--brand-expressive-orange-dark__cell__dropdown__text{color:#004885}";

const ENOVOSDataTableHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickSortColumn = createEvent(this, "clickSortColumn", 7);
    this.clickHeaderCheckbox = createEvent(this, "clickHeaderCheckbox", 7);
    this.clickHeaderDropdown = createEvent(this, "clickHeaderDropdown", 7);
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
    onChange('theme', () => {
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
        return h("div", null, h("eds-paragraph", { type: get(value, 'props.data.title.type'), "font-weight": get(value, 'props.data.title.fontWeight'), styles: get(value, 'props.data.title.styles') }, get(value, 'props.data.title.content')), h("eds-paragraph", { type: get(value, 'props.data.content.type'), "font-weight": get(value, 'props.data.content.fontWeight'), styles: get(value, 'props.data.title.styles') }, get(value, 'props.data.content.content')));
      case 'switch':
        return [
          h("eds-switch", { size: "sm", "margin-right-1": true, class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.SWITCH}`, inputName: has(value, 'props.inputName') ? get(value, 'props.inputName') : '', value: has(value, 'props.value') ? get(value, 'props.value') : '', checked: has(value, 'props.checked') && get(value, 'props.checked') === true ? true : false }),
          has(value, 'props.label')
            ? get(value, 'props.label')
            : '',
        ];
      case 'dropdown':
        return h("eds-dropdown", { "data-dropdown": index, class: `${this.classNames.EL}${this.classNames.DROPDOWN}`, data: get(value, 'props.data') }, h("div", { slot: "selector" }, h("div", { class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.DROPDOWN}` }, h("eds-paragraph", { id: "menu-dropdown-heading", class: [
            `${this.classNames.EL}${this.classNames.CELL}${this.classNames.DROPDOWN}${this.classNames.TEXT}`,
          ].join(' '), type: "body-1", "font-weight": "bold", content: get(value, 'props.label') }), h("eds-icon", { id: "icon-dropdown-heading", slot: "icon", class: [
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
        ].join(' ') }, this.hasIndentedColumn === true
        ? h("td", { class: [
            `${this.classNames.EL}${this.classNames.CELL}`,
            `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_EXPANDABLE}`,
            `${this.classNames.EL}${this.classNames.CELL}${this.classNames.INDENTED}`,
          ].join(' ') })
        : '', this.checkable === true
        ? h("th", { class: [
            `${this.classNames.EL}${this.classNames.CELL}`,
            `${this.classNames.EL}${this.classNames.CELL}${this.classNames.HAS_CHECKBOX}`,
          ].join(' ') }, h("div", null, h("eds-checkbox", { class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.CHECKBOX}`, selected: this.selected, inputName: "checkbox-header", value: "1" })))
        : '', this.expandable === true
        ? h("td", { class: [
            `${this.classNames.EL}${this.classNames.CELL}`,
            `${this.classNames.EL}--${this.styles}${this.classNames.CELL}`,
            `${this.classNames.EL}${this.classNames.CELL}${this.classNames.IS_EXPANDABLE}`,
          ].join(' ') })
        : '', this.columns.map((value, index) => h("th", { class: this.setCellClasses(index), style: (this.columnSizes[index] !== undefined && !['fitted'].includes(this.columnSizes[index]))
          ? { 'width': this.columnSizes[index] }
          : {}, "data-index": index }, h("div", null, isObject(value) && has(value, 'props.type')
        ? this.displayComponentType(value, index)
        : h("div", { innerHTML: value }), get(this._sorting[index], 'sortable') === true
        ? h("eds-icon", { class: [
            `${this.classNames.EL}${this.classNames.CELL}${this.classNames.ICON}`,
            `${this.classNames.EL}${this.classNames.CELL}${this.classNames.SORTING_ICON}`,
          ].join(' '), icon: "sort" })
        : '', h("slot", { name: `header-cell-${index}` }))))));
    }
    else {
      return (h("thead", null));
    }
  }
  get el() { return getElement(this); }
};
ENOVOSDataTableHeader.style = dataTableHeaderCss;

const dataTableHeadingCss = "[name=data-table__heading]{display:block;width:100%}[name=data-table__heading] .data-table__heading__slot{display:flex;align-items:center;justify-content:space-between;width:100%}[name=data-table__heading] .data-table__heading__checkboxes{display:flex;align-items:center;justify-content:space-between}[name=data-table__heading] .data-table__heading__checkboxes__actions{display:flex;align-items:center}[name=data-table__heading] .data-table__heading__checkboxes__actions__slot{display:block}[name=data-table__heading] .data-table__heading.data-table__heading{min-height:72px;padding:16px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-radius:4px 4px 0 0}[name=data-table__heading] .data-table__heading.data-table__heading .data-table__heading__checkboxes__actions__slot{margin-left:0}[name=data-table__heading] .data-table__heading.data-table__heading .data-table__heading__checkboxes__actions__slot>*:not(:last-child){margin-right:0}[name=data-table__heading] .data-table__heading.data-table__heading--lg{min-height:72px;padding:16px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-radius:4px 4px 0 0}[name=data-table__heading] .data-table__heading.data-table__heading--lg .data-table__heading__checkboxes__actions__slot{margin-left:0}[name=data-table__heading] .data-table__heading.data-table__heading--lg .data-table__heading__checkboxes__actions__slot>*:not(:last-child){margin-right:0}[name=data-table__heading] .data-table__heading.data-table__heading{background:#FFFFFF}[name=data-table__heading] .data-table__heading.data-table__heading--blue{background:#FFFFFF}[name=data-table__heading] .data-table__heading.data-table__heading--primary{background:#FFFFFF}[name=data-table__heading] .data-table__heading.data-table__heading--brand-expressive-orange-dark{background:#FFFFFF}";

const ENOVOSDataTableHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    onChange('theme', () => {
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
    return (h("div", { class: this.setClasses() }, h("slot", { name: "header" }), this.checkable && !this.hasIndentedColumn ?
      h("div", { class: [
          `${this.classNames.EL}${this.classNames.CHECKBOXES}`,
          this.checkedRows ? `${this.classNames.EL}${this.classNames.CHECKBOXES}${this.classNames.VISIBLE}` : '',
        ].join(' ') }, h("eds-paragraph", { type: "body-1", styles: "secondary-500" }, this.checkedRows, " Item", this.checkedRows > 1 ? 's' : '', " Selected"), h("div", { class: `${this.classNames.EL}${this.classNames.CHECKBOXES}${this.classNames.ACTIONS}` }, h("eds-button", { content: "Cancel", size: "md", outlined: true, class: `${this.classNames.EL}${this.classNames.CHECKBOXES}${this.classNames.ACTIONS}${this.classNames.CANCEL}` }), h("slot", { name: "checkbox-actions" })))
      : ''));
  }
  get el() { return getElement(this); }
};
ENOVOSDataTableHeading.style = dataTableHeadingCss;

class CellItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CellItem) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
  setProp(key, value) {
    set(this, key, value);
  }
}

const dataTableRowCss = "[name=data-table-row]{display:table-row;text-align:left;transition:background-color 0.2s ease-in-out}[name=data-table-row].data-table-row--sticky{display:flex;width:100%}[name=data-table-row].data-table-row--sticky .data-table-row__cell{display:flex;align-items:center;flex-basis:100%;flex-grow:2}[name=data-table-row].data-table-row--sticky .data-table-row__cell--checkbox{flex-basis:auto;flex-grow:1;flex-shrink:0;width:auto}[name=data-table-row].data-table-row--sticky .data-table-row__cell--expandable{flex-basis:40px;flex-grow:1;flex-shrink:0}[name=data-table-row].data-table-row--is-open .data-table-row__cell{position:relative}[name=data-table-row].data-table-row--is-open .data-table-row__cell:first-child:before{position:absolute;left:0;top:0;height:100%;content:\"\";transition:opacity 0.2s ease-in-out}[name=data-table-row]:not(:last-of-type).data-table-row--is-open .data-table-row__cell{border-bottom:none}[name=data-table-row]:not(:last-of-type) .data-table-row__cell{border-bottom-style:solid}[name=data-table-row] .data-table-row__cell{vertical-align:middle}[name=data-table-row] .data-table-row__cell--interactive{cursor:pointer}[name=data-table-row] .data-table-row__cell--fitted{padding-right:8px !important;padding-left:8px !important}[name=data-table-row] .data-table-row__cell--checkbox{vertical-align:middle}[name=data-table-row] .data-table-row__cell--checkbox+.data-table-row__cell{padding-left:0}[name=data-table-row] .data-table-row__cell--expandable{vertical-align:middle}[name=data-table-row] .data-table-row__cell--expandable+.data-table-row__cell{padding-left:0}[name=data-table-row] .data-table-row__cell--fixed-size{white-space:normal}[name=data-table-row] .data-table-row__cell__icon--expandable{display:block}[name=data-table-row]:not(:last-of-type) .data-table-row__cell{border-bottom-width:1px}[name=data-table-row].data-table-row--is-open .data-table-row__cell:first-child:before{width:4px}[name=data-table-row].data-table-row--sticky .data-table-row__cell--expandable+.data-table-row__cell--checkbox{padding-left:80px}[name=data-table-row].data-table-row .data-table-row__cell{padding-left:8px;padding-right:8px}[name=data-table-row].data-table-row .data-table-row__cell--checkbox{padding-right:16px}[name=data-table-row].data-table-row .data-table-row__cell--expandable{padding-right:8px}[name=data-table-row].data-table-row .data-table-row__cell--expandable+.data-table-row__cell--checkbox{padding-left:56px}[name=data-table-row].data-table-row .data-table-row__cell__icon--expandable{height:24px;font-size:24px;line-height:24px}[name=data-table-row]:not(:last-of-type) .data-table-row__cell{border-bottom-width:1px}[name=data-table-row].data-table-row--is-open .data-table-row__cell:first-child:before{width:1px}[name=data-table-row].data-table-row--sticky .data-table-row__cell--expandable+.data-table-row__cell--checkbox{padding-left:56px}[name=data-table-row].data-table-row--lg .data-table-row__cell{padding-left:8px;padding-right:8px}[name=data-table-row].data-table-row--lg .data-table-row__cell--checkbox{padding-right:16px}[name=data-table-row].data-table-row--lg .data-table-row__cell--expandable{padding-right:8px}[name=data-table-row].data-table-row--lg .data-table-row__cell--expandable+.data-table-row__cell--checkbox{padding-left:32px}[name=data-table-row].data-table-row--lg .data-table-row__cell__icon--expandable{height:\"auto\";font-size:\"auto\";line-height:\"auto\"}[name=data-table-row].data-table-row{background-color:transparent}[name=data-table-row].data-table-row:hover{background-color:transparent}[name=data-table-row].data-table-row.data-table-row--is-open{color:#5E5E5E;background-color:#EEEEEE}[name=data-table-row].data-table-row.data-table-row--is-open .data-table-row__cell:first-child:before{background-color:#F76700}[name=data-table-row].data-table-row.data-table-row--is-checked{color:#5E5E5E;background-color:#FFF1E5}[name=data-table-row]:not(:last-of-type) .data-table-row__cell{border-bottom-color:#EEEEEE}[name=data-table-row].data-table-row .data-table-row__cell--is-open{color:#F76700}[name=data-table-row].data-table-row--blue{background-color:transparent}[name=data-table-row].data-table-row--blue:hover{background-color:transparent}[name=data-table-row].data-table-row--blue.data-table-row--is-open{color:#000000;background-color:transparent}[name=data-table-row].data-table-row--blue.data-table-row--is-open .data-table-row__cell:first-child:before{background-color:transparent}[name=data-table-row].data-table-row--blue.data-table-row--is-checked{color:#000000;background-color:transparent}[name=data-table-row]:not(:last-of-type) .data-table-row__cell{border-bottom-color:transparent}[name=data-table-row].data-table-row--blue .data-table-row__cell--is-open{color:#000000}[name=data-table-row].data-table-row--primary{background-color:transparent}[name=data-table-row].data-table-row--primary:hover{background-color:transparent}[name=data-table-row].data-table-row--primary.data-table-row--is-open{color:#000000;background-color:transparent}[name=data-table-row].data-table-row--primary.data-table-row--is-open .data-table-row__cell:first-child:before{background-color:transparent}[name=data-table-row].data-table-row--primary.data-table-row--is-checked{color:#000000;background-color:transparent}[name=data-table-row]:not(:last-of-type) .data-table-row__cell{border-bottom-color:transparent}[name=data-table-row].data-table-row--primary .data-table-row__cell--is-open{color:#000000}[name=data-table-row].data-table-row--brand-expressive-orange-dark{background-color:#FFFFFF}[name=data-table-row].data-table-row--brand-expressive-orange-dark:hover{background-color:#BCD870}[name=data-table-row].data-table-row--brand-expressive-orange-dark.data-table-row--is-open{color:#5E5E5E;background-color:#CDE294}[name=data-table-row].data-table-row--brand-expressive-orange-dark.data-table-row--is-open .data-table-row__cell:first-child:before{background-color:#EF7D00}[name=data-table-row].data-table-row--brand-expressive-orange-dark.data-table-row--is-checked{color:#5E5E5E;background-color:#5C8AB1}[name=data-table-row]:not(:last-of-type) .data-table-row__cell{border-bottom-color:#EEEEEE}[name=data-table-row].data-table-row--brand-expressive-orange-dark .data-table-row__cell--is-open{color:#EF7D00}";

const ENOVOSDataTableRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickExpand = createEvent(this, "clickExpand", 7);
    this.clickRowCheckbox = createEvent(this, "clickRowCheckbox", 7);
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
    onChange('theme', () => {
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
          ? h("td", { class: this.setCheckableRowClasses(), rowSpan: get(this.data, 'rowspan'), colSpan: get(this.data, 'colspan') }, h("eds-checkbox", { selected: this.data.selected, class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.CHECKBOX}`, inputName: "checkbox-column", value: "1" }))
          : '',
        this.expandable === true
          ? h("td", { class: this.setExpandableRowClasses(), onClick: ev => this.clickExpandHandler(ev), rowSpan: get(this.data, 'rowspan'), colSpan: get(this.data, 'colspan') }, this.data.children
            ? h("eds-icon", { class: `${this.classNames.EL}${this.classNames.CELL}${this.classNames.ICON}${this.classNames.IS_EXPANDABLE}`, icon: this.isExpand ? 'chevron-up' : 'chevron-down', "size-md": true })
            : '')
          : '',
        this.dataItems.map((data, index) => {
          return h("td", { class: this.setCellRowClasses(data, index), rowSpan: get(data, 'rowspan'), colSpan: get(data, 'colspan') }, h("eds-data-table-cell", { "row-id": get(this.data, 'id'), data: data, index: index, renderer: this.getCellRenderer(index), size: this.size }));
        }),
      ];
    }
    else {
      return (h("tr", null));
    }
  }
  get el() { return getElement(this); }
};
ENOVOSDataTableRow.style = dataTableRowCss;

const descriptionListCss = "[name=description-list] .description-list dl{display:flex}[name=description-list] .description-list.description-list--inline .description-list__dd-container{display:flex;align-items:center}[name=description-list] .description-list.description-list--horizontal{display:flex}[name=description-list] .description-list.description-list--horizontal dl{display:block}[name=description-list] .description-list .description-list__dd-container{flex:1}[name=description-list] .description-list.description-list{font-family:\"Montserrat\", sans-serif}[name=description-list] .description-list.description-list [name=paragraph]{color:#96C11F !important}[name=description-list] .description-list.description-list dl dt{font-weight:400;text-align:right}[name=description-list] .description-list.description-list dl dd{font-weight:700;text-align:left}[name=description-list] .description-list.description-list--horizontal dl+dl{margin-left:24px}[name=description-list] .description-list.description-list--horizontal dl dt{text-align:left;text-transform:uppercase}[name=description-list] .description-list.description-list{font-size:12px;line-height:16px}[name=description-list] .description-list.description-list dl+dl{margin-top:4px}[name=description-list] .description-list.description-list dl dt{width:50%;margin-top:4px;margin-right:2px}[name=description-list] .description-list.description-list dl dd{margin-left:2px}[name=description-list] .description-list.description-list--horizontal dl+dl{margin-top:0;margin-left:24px}[name=description-list] .description-list.description-list--horizontal dl dt{width:auto;margin-top:0;margin-right:0}[name=description-list] .description-list.description-list--horizontal dl dd{margin-left:0}[name=description-list] .description-list.description-list--inline .description-list__dd-container dd{margin-right:4px}[name=description-list] .description-list.description-list--inline .description-list__dd-container dd:last-child{margin-right:0}[name=description-list] .description-list.description-list--md{font-size:14px;line-height:16px}[name=description-list] .description-list.description-list--md dl+dl{margin-top:4px}[name=description-list] .description-list.description-list--md dl dt{width:50%;margin-top:4px;margin-right:2px}[name=description-list] .description-list.description-list--md dl dd{margin-left:2px}[name=description-list] .description-list.description-list--md--horizontal dl+dl{margin-top:0;margin-left:24px}[name=description-list] .description-list.description-list--md--horizontal dl dt{width:auto;margin-top:0;margin-right:0}[name=description-list] .description-list.description-list--md--horizontal dl dd{margin-left:0}[name=description-list] .description-list.description-list--md--inline .description-list__dd-container dd{margin-right:16px}[name=description-list] .description-list.description-list--md--inline .description-list__dd-container dd:last-child{margin-right:0}";

const ENOVOSDescriptionList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = [];
    this.classNames = {
      EL: 'description-list',
    };
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (h("div", { class: [
        `${this.classNames.EL}`,
        this.isHorizontal ? `${this.classNames.EL}--horizontal` : '',
        this.isInline ? `${this.classNames.EL}--inline` : '',
      ].join(' ') }, this.data.map((value, index) => h("dl", null, Object.keys(value).map(subValue => subValue === 'term'
      ? h("dt", null, h("eds-paragraph", { type: this.data[index][subValue].type || 'body-2', "font-weight": this.data[index][subValue].fontWeight || '', styles: this.data[index][subValue].styles || '', "font-style": this.data[index][subValue].fontStyle || '' }, this.data[index][subValue].data))
      : h("div", { class: `${this.classNames.EL}__dd-container` }, Array.from(Array.isArray(this.data[index][subValue].data) ? this.data[index][subValue].data : [this.data[index][subValue].data]).map(description => description['component'] === 'tooltip'
        ? h("dd", null, h("eds-icon", { id: "tooltip-normal", icon: description['icon'], size: description['size'], styles: description['styles'] }), h("eds-tooltip", { selector: "tooltip-normal", text: description['text'], pointer: description['pointer'] ? true : false, notimeout: description['notimeout'] ? true : false }))
        : description['component'] === 'badge'
          ? h("dd", null, h("eds-badge", { text: description['text'], styles: description['styles'], size: description['size'] }))
          : h("dd", null, h("eds-message", { "icon-leading": description['icon'], styles: description['styles'], "icon-styles": description['iconStyles'], "font-weight": description['fontWeight'], "font-size": description['fontSize'], inline: true }, description['text'])))))))));
  }
  get el() { return getElement(this); }
};
ENOVOSDescriptionList.style = descriptionListCss;

const messageCss = "[name=message]{width:100%}@media (min-width : 1440px){[name=message].message--cols-0 .message{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-0 .message{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-1 .message{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-1 .message{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-2 .message{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-2 .message{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-3 .message{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-3 .message{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-4 .message{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-4 .message{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-5 .message{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-5 .message{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-6 .message{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-6 .message{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-7 .message{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-7 .message{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-8 .message{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-8 .message{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-9 .message{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-9 .message{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-10 .message{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-10 .message{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-11 .message{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-11 .message{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}[name=message].message--cols-12 .message{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;margin:auto}[name=message].message--cols-fluid-12 .message{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:100%;margin:0 auto}}@media (max-width : 1439px){[name=message].message--cols-0 .message{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-0 .message{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-1 .message{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-1 .message{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-2 .message{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-2 .message{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-3 .message{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-3 .message{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-4 .message{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-4 .message{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-5 .message{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-5 .message{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-6 .message{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-6 .message{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-7 .message{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-7 .message{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-8 .message{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-8 .message{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-9 .message{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-9 .message{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-10 .message{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-10 .message{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-11 .message{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-11 .message{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}[name=message].message--cols-12 .message{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;margin:auto}[name=message].message--cols-fluid-12 .message{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:1439px;margin:0 auto}}@media (max-width : 1151px){[name=message].message--cols-0 .message{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-0 .message{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-1 .message{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-1 .message{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-2 .message{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-2 .message{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-3 .message{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-3 .message{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-4 .message{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-4 .message{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-5 .message{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-5 .message{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-6 .message{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-6 .message{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-7 .message{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-7 .message{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-8 .message{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-8 .message{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-9 .message{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-9 .message{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-10 .message{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-10 .message{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-11 .message{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-11 .message{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}[name=message].message--cols-12 .message{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:864px;margin:auto}[name=message].message--cols-fluid-12 .message{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:1151px;margin:0 auto}}@media (max-width : 863px){[name=message].message--cols-0 .message{width:calc( ((0 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-0 .message{width:calc( ((0 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}[name=message].message--cols-1 .message{width:calc( ((1 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-1 .message{width:calc( ((1 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}[name=message].message--cols-2 .message{width:calc( ((2 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-2 .message{width:calc( ((2 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}[name=message].message--cols-3 .message{width:calc( ((3 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-3 .message{width:calc( ((3 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}[name=message].message--cols-4 .message{width:calc( ((4 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-4 .message{width:calc( ((4 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}[name=message].message--cols-5 .message{width:calc( ((5 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-5 .message{width:calc( ((5 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}[name=message].message--cols-6 .message{width:calc( ((6 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-6 .message{width:calc( ((6 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}[name=message].message--cols-7 .message{width:calc( ((7 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-7 .message{width:calc( ((7 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}[name=message].message--cols-8 .message{width:calc( ((8 / 8) * 100%) - ( 2 * 12px) );max-width:640px;margin:auto}[name=message].message--cols-fluid-8 .message{width:calc( ((8 / 8) * 100%) - ( 2 * 12px) );max-width:863px;margin:0 auto}}@media (max-width : 639px){[name=message].message--cols-0 .message{width:calc( ((0 / 4) * 100%) - ( 2 * 24px) );max-width:321px;margin:auto}[name=message].message--cols-fluid-0 .message{width:calc( ((0 / 4) * 100%) - ( 2 * 24px) );max-width:639px;margin:0 auto}[name=message].message--cols-1 .message{width:calc( ((1 / 4) * 100%) - ( 2 * 24px) );max-width:321px;margin:auto}[name=message].message--cols-fluid-1 .message{width:calc( ((1 / 4) * 100%) - ( 2 * 24px) );max-width:639px;margin:0 auto}[name=message].message--cols-2 .message{width:calc( ((2 / 4) * 100%) - ( 2 * 24px) );max-width:321px;margin:auto}[name=message].message--cols-fluid-2 .message{width:calc( ((2 / 4) * 100%) - ( 2 * 24px) );max-width:639px;margin:0 auto}[name=message].message--cols-3 .message{width:calc( ((3 / 4) * 100%) - ( 2 * 24px) );max-width:321px;margin:auto}[name=message].message--cols-fluid-3 .message{width:calc( ((3 / 4) * 100%) - ( 2 * 24px) );max-width:639px;margin:0 auto}[name=message].message--cols-4 .message{width:calc( ((4 / 4) * 100%) - ( 2 * 24px) );max-width:321px;margin:auto}[name=message].message--cols-fluid-4 .message{width:calc( ((4 / 4) * 100%) - ( 2 * 24px) );max-width:639px;margin:0 auto}}@media (max-width : 320px){[name=message].message--cols-0 .message{width:calc( ((0 / 4) * 100%) - ( 2 * 24px) );max-width:0;margin:auto}[name=message].message--cols-fluid-0 .message{width:calc( ((0 / 4) * 100%) - ( 2 * 24px) );max-width:320px;margin:0 auto}[name=message].message--cols-1 .message{width:calc( ((1 / 4) * 100%) - ( 2 * 24px) );max-width:0;margin:auto}[name=message].message--cols-fluid-1 .message{width:calc( ((1 / 4) * 100%) - ( 2 * 24px) );max-width:320px;margin:0 auto}[name=message].message--cols-2 .message{width:calc( ((2 / 4) * 100%) - ( 2 * 24px) );max-width:0;margin:auto}[name=message].message--cols-fluid-2 .message{width:calc( ((2 / 4) * 100%) - ( 2 * 24px) );max-width:320px;margin:0 auto}[name=message].message--cols-3 .message{width:calc( ((3 / 4) * 100%) - ( 2 * 24px) );max-width:0;margin:auto}[name=message].message--cols-fluid-3 .message{width:calc( ((3 / 4) * 100%) - ( 2 * 24px) );max-width:320px;margin:0 auto}[name=message].message--cols-4 .message{width:calc( ((4 / 4) * 100%) - ( 2 * 24px) );max-width:0;margin:auto}[name=message].message--cols-fluid-4 .message{width:calc( ((4 / 4) * 100%) - ( 2 * 24px) );max-width:320px;margin:0 auto}}.message{position:relative;z-index:1;display:block;width:100%;text-align:left;-webkit-tap-highlight-color:transparent;transition:background-color 0.2s ease-in-out}.message [name=paragraph] .message--primary{color:#F76700 !important}.message [name=paragraph] .message--secondary{color:#5E5E5E !important}.message [name=paragraph] .message--tertiary{color:#004885 !important}.message [name=paragraph] .message--quaternary{color:#96C11F !important}.message [name=paragraph] .message--quinary{color:#EF7B0B !important}.message [name=paragraph] .message--senary{color:#CAA08D !important}.message [name=paragraph] .message--septenary{color:#6C887A !important}.message [name=paragraph] .message--grey{color:#757575 !important}.message [name=paragraph] .message--primary-900{color:#F76700 !important}.message [name=paragraph] .message--primary-800{color:#F76700 !important}.message [name=paragraph] .message--primary-700{color:#D52B1E !important}.message [name=paragraph] .message--primary-600{color:#C75300 !important}.message [name=paragraph] .message--primary-500{color:#F76700 !important}.message [name=paragraph] .message--primary-400{color:#FFA14C !important}.message [name=paragraph] .message--primary-300{color:#FFB673 !important}.message [name=paragraph] .message--primary-200{color:#FFDDBF !important}.message [name=paragraph] .message--primary-100{color:#FFF1E5 !important}.message [name=paragraph] .message--primary-50{color:#FFF1E5 !important}.message [name=paragraph] .message--secondary-900{color:#5E5E5E !important}.message [name=paragraph] .message--secondary-800{color:#5E5E5E !important}.message [name=paragraph] .message--secondary-700{color:#5E5E5E !important}.message [name=paragraph] .message--secondary-600{color:#5E5E5E !important}.message [name=paragraph] .message--secondary-500{color:#5E5E5E !important}.message [name=paragraph] .message--secondary-400{color:#8E8E8E !important}.message [name=paragraph] .message--secondary-300{color:#A7A7A7 !important}.message [name=paragraph] .message--secondary-200{color:#D7D7D7 !important}.message [name=paragraph] .message--secondary-100{color:#EEEEEE !important}.message [name=paragraph] .message--secondary-50{color:#EEEEEE !important}.message [name=paragraph] .message--tertiary-900{color:#004885 !important}.message [name=paragraph] .message--tertiary-800{color:#004885 !important}.message [name=paragraph] .message--tertiary-700{color:#004885 !important}.message [name=paragraph] .message--tertiary-600{color:#004885 !important}.message [name=paragraph] .message--tertiary-500{color:#004885 !important}.message [name=paragraph] .message--tertiary-400{color:#5C8AB1 !important}.message [name=paragraph] .message--tertiary-300{color:#85A8C5 !important}.message [name=paragraph] .message--tertiary-200{color:#C2D3E2 !important}.message [name=paragraph] .message--tertiary-100{color:#EBF1F6 !important}.message [name=paragraph] .message--tertiary-50{color:#EBF1F6 !important}.message [name=paragraph] .message--quaternary-900{color:#5A8D00 !important}.message [name=paragraph] .message--quaternary-800{color:#5A8D00 !important}.message [name=paragraph] .message--quaternary-700{color:#5A8D00 !important}.message [name=paragraph] .message--quaternary-600{color:#5A8D00 !important}.message [name=paragraph] .message--quaternary-500{color:#96C11F !important}.message [name=paragraph] .message--quaternary-400{color:#BCD870 !important}.message [name=paragraph] .message--quaternary-300{color:#CDE294 !important}.message [name=paragraph] .message--quaternary-200{color:#E6F0C9 !important}.message [name=paragraph] .message--quaternary-100{color:#F7FAED !important}.message [name=paragraph] .message--quaternary-50{color:#F7FAED !important}.message [name=paragraph] .message--quinary-900{color:#C75300 !important}.message [name=paragraph] .message--quinary-800{color:#C75300 !important}.message [name=paragraph] .message--quinary-700{color:#C75300 !important}.message [name=paragraph] .message--quinary-600{color:#C75300 !important}.message [name=paragraph] .message--quinary-500{color:#EF7B0B !important}.message [name=paragraph] .message--quinary-400{color:#FFA14C !important}.message [name=paragraph] .message--quinary-300{color:#FFB673 !important}.message [name=paragraph] .message--quinary-200{color:#FFDDBF !important}.message [name=paragraph] .message--quinary-100{color:#FFF1E5 !important}.message [name=paragraph] .message--quinary-50{color:#FFF1E5 !important}.message [name=paragraph] .message--senary-900{color:#602A10 !important}.message [name=paragraph] .message--senary-800{color:#95431D !important}.message [name=paragraph] .message--senary-700{color:#B66E4D !important}.message [name=paragraph] .message--senary-600{color:#B78670 !important}.message [name=paragraph] .message--senary-500{color:#CAA08D !important}.message [name=paragraph] .message--senary-400{color:#DEAE98 !important}.message [name=paragraph] .message--senary-300{color:#EEC3AF !important}.message [name=paragraph] .message--senary-200{color:#FAD5C5 !important}.message [name=paragraph] .message--senary-100{color:#FFE9DF !important}.message [name=paragraph] .message--senary-50{color:transparent !important}.message [name=paragraph] .message--septenary-900{color:transparent !important}.message [name=paragraph] .message--septenary-800{color:transparent !important}.message [name=paragraph] .message--septenary-700{color:transparent !important}.message [name=paragraph] .message--septenary-600{color:transparent !important}.message [name=paragraph] .message--septenary-500{color:#6C887A !important}.message [name=paragraph] .message--septenary-400{color:transparent !important}.message [name=paragraph] .message--septenary-300{color:transparent !important}.message [name=paragraph] .message--septenary-200{color:transparent !important}.message [name=paragraph] .message--septenary-100{color:transparent !important}.message [name=paragraph] .message--septenary-50{color:transparent !important}.message [name=paragraph] .message--grey-900{color:#1D1D1D !important}.message [name=paragraph] .message--grey-800{color:#333333 !important}.message [name=paragraph] .message--grey-700{color:#4D4D4D !important}.message [name=paragraph] .message--grey-600{color:#666666 !important}.message [name=paragraph] .message--grey-500{color:#757575 !important}.message [name=paragraph] .message--grey-400{color:#999999 !important}.message [name=paragraph] .message--grey-300{color:#B3B3B3 !important}.message [name=paragraph] .message--grey-200{color:#CCCCCC !important}.message [name=paragraph] .message--grey-100{color:#E6E6E6 !important}.message [name=paragraph] .message--grey-50{color:#F8F8F8 !important}.message [name=paragraph] .message--contextual-success{color:#00856A !important}.message [name=paragraph] .message--success{color:#00856A !important}.message [name=paragraph] .message--contextual-success-light{color:#E5F2F0 !important}.message [name=paragraph] .message--success-light{color:#E5F2F0 !important}.message [name=paragraph] .message--contextual-info{color:#2899A8 !important}.message [name=paragraph] .message--info{color:#2899A8 !important}.message [name=paragraph] .message--contextual-info-light{color:#DBF6FF !important}.message [name=paragraph] .message--info-light{color:#DBF6FF !important}.message [name=paragraph] .message--contextual-warning{color:#F76700 !important}.message [name=paragraph] .message--warning{color:#F76700 !important}.message [name=paragraph] .message--contextual-warning-light{color:#FFF1E5 !important}.message [name=paragraph] .message--warning-light{color:#FFF1E5 !important}.message [name=paragraph] .message--contextual-error{color:#EB0000 !important}.message [name=paragraph] .message--error{color:#EB0000 !important}.message [name=paragraph] .message--contextual-error-light{color:#FDE5E5 !important}.message [name=paragraph] .message--error-light{color:#FDE5E5 !important}.message [name=paragraph] .message--pfm-blue{color:#55A1D3 !important}.message [name=paragraph] .message--pfm-green{color:#8DDE54 !important}.message [name=paragraph] .message--pfm-yellow{color:#FFC600 !important}.message [name=paragraph] .message--pfm-orange{color:#FC912E !important}.message [name=paragraph] .message--pfm-red{color:#DF5036 !important}.message [name=paragraph] .message--external-bank-ing{color:#F58220 !important}.message [name=paragraph] .message--external-bank-bil{color:#71308B !important}.message [name=paragraph] .message--external-bank-bcee{color:#144093 !important}.message [name=paragraph] .message--external-bank-post{color:#FABC0B !important}.message [name=paragraph] .message--external-bank-raiffeisen{color:#112242 !important}.message [name=paragraph] .message--external-bank-bnp-paribas{color:#00915A !important}.message [name=paragraph] .message--white-15{color:rgba(255, 255, 255, 0.15) !important}.message [name=paragraph] .message--white-25{color:rgba(255, 255, 255, 0.25) !important}.message [name=paragraph] .message--white-50{color:rgba(255, 255, 255, 0.5) !important}.message [name=paragraph] .message--brand-pfm-blue{color:#55A1D3 !important}.message [name=paragraph] .message--brand-pfm-green{color:#8DDE54 !important}.message [name=paragraph] .message--brand-pfm-yellow{color:#FFC600 !important}.message [name=paragraph] .message--brand-pfm-orange{color:#FC912E !important}.message [name=paragraph] .message--brand-pfm-red{color:#DF5036 !important}.message [name=paragraph] .message--brand-expressive-green-light{color:#4FB482 !important}.message [name=paragraph] .message--brand-expressive-green-dark{color:#133B2C !important}.message [name=paragraph] .message--brand-expressive-blue-light{color:#1B8DC0 !important}.message [name=paragraph] .message--brand-expressive-blue-dark{color:#0A324B !important}.message [name=paragraph] .message--brand-expressive-yellow-light{color:#F0BE21 !important}.message [name=paragraph] .message--brand-expressive-yellow-dark{color:#B77918 !important}.message [name=paragraph] .message--brand-expressive-orange-light{color:#F3B969 !important}.message [name=paragraph] .message--brand-expressive-orange-dark{color:#EF7D00 !important}.message [name=paragraph] .message--brand-expressive-pink-light{color:#C03152 !important}.message [name=paragraph] .message--brand-expressive-pink-dark{color:#4F0F15 !important}.message [name=paragraph] .message--brand-expressive-red-light{color:#F7B7AF !important}.message [name=paragraph] .message--brand-expressive-red-dark{color:#E62D32 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-900{color:#4D2800 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-800{color:#804200 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-700{color:#B35C00 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-600{color:#CC6A00 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-500{color:#EF7D00 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-400{color:#FC8823 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-300{color:#FC9E4C !important}.message [name=paragraph] .message--brand-expressive-orange-dark-200{color:#FFB675 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-100{color:#FFD1A8 !important}.message [name=paragraph] .message--brand-expressive-orange-dark-50{color:transparent !important}.message [name=paragraph] .message--brand-expressive-blue-light-900{color:#0C4159 !important}.message [name=paragraph] .message--brand-expressive-blue-light-800{color:#105373 !important}.message [name=paragraph] .message--brand-expressive-blue-light-700{color:#14668C !important}.message [name=paragraph] .message--brand-expressive-blue-light-600{color:#1779A6 !important}.message [name=paragraph] .message--brand-expressive-blue-light-500{color:#1B8DC0 !important}.message [name=paragraph] .message--brand-expressive-blue-light-400{color:#1D9AD1 !important}.message [name=paragraph] .message--brand-expressive-blue-light-300{color:#2AAEEB !important}.message [name=paragraph] .message--brand-expressive-blue-light-200{color:#56BFF0 !important}.message [name=paragraph] .message--brand-expressive-blue-light-100{color:#7FCFF5 !important}.message [name=paragraph] .message--brand-expressive-blue-light-50{color:transparent !important}.message [name=paragraph] .message--brand-expressive-green-light-900{color:#224D37 !important}.message [name=paragraph] .message--brand-expressive-green-light-800{color:#2D6649 !important}.message [name=paragraph] .message--brand-expressive-green-light-700{color:#39805C !important}.message [name=paragraph] .message--brand-expressive-green-light-600{color:#43996E !important}.message [name=paragraph] .message--brand-expressive-green-light-500{color:#4FB482 !important}.message [name=paragraph] .message--brand-expressive-green-light-400{color:#55C28C !important}.message [name=paragraph] .message--brand-expressive-green-light-300{color:#60D199 !important}.message [name=paragraph] .message--brand-expressive-green-light-200{color:#69DBA2 !important}.message [name=paragraph] .message--brand-expressive-green-light-100{color:#85E6B5 !important}.message [name=paragraph] .message--brand-expressive-green-light-50{color:transparent !important}.message [name=paragraph] .message--brand-expressive-yellow-light-900{color:#6B550F !important}.message [name=paragraph] .message--brand-expressive-yellow-light-800{color:#8F7214 !important}.message [name=paragraph] .message--brand-expressive-yellow-light-700{color:#AD8B19 !important}.message [name=paragraph] .message--brand-expressive-yellow-light-600{color:#D1A71D !important}.message [name=paragraph] .message--brand-expressive-yellow-light-500{color:#F0BE21 !important}.message [name=paragraph] .message--brand-expressive-yellow-light-400{color:#FCCA23 !important}.message [name=paragraph] .message--brand-expressive-yellow-light-300{color:#FCD742 !important}.message [name=paragraph] .message--brand-expressive-yellow-light-200{color:#FCDD60 !important}.message [name=paragraph] .message--brand-expressive-yellow-light-100{color:#FCE483 !important}.message [name=paragraph] .message--brand-expressive-yellow-light-50{color:transparent !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-900{color:#52360B !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-800{color:#6B470E !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-700{color:#855811 !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-600{color:#9E6915 !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-500{color:#B77918 !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-400{color:#D18A1B !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-300{color:#EB9B1F !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-200{color:#FAAA2D !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-100{color:#FABA55 !important}.message [name=paragraph] .message--brand-expressive-yellow-dark-50{color:transparent !important}.message [name=paragraph] .message--white-opacity-50{color:rgba(255, 255, 255, 0.5) !important}.message [name=paragraph] .message--white{color:#FFFFFF !important}.message [name=paragraph] .message--black{color:#000000 !important}.message__wrapper{display:flex;align-items:center;justify-content:flex-start;width:100%}.message__icon{align-self:flex-start}.message__icon .message--primary{color:#F76700 !important}.message__icon .message--secondary{color:#5E5E5E !important}.message__icon .message--tertiary{color:#004885 !important}.message__icon .message--quaternary{color:#96C11F !important}.message__icon .message--quinary{color:#EF7B0B !important}.message__icon .message--senary{color:#CAA08D !important}.message__icon .message--septenary{color:#6C887A !important}.message__icon .message--grey{color:#757575 !important}.message__icon .message--primary-900{color:#F76700 !important}.message__icon .message--primary-800{color:#F76700 !important}.message__icon .message--primary-700{color:#D52B1E !important}.message__icon .message--primary-600{color:#C75300 !important}.message__icon .message--primary-500{color:#F76700 !important}.message__icon .message--primary-400{color:#FFA14C !important}.message__icon .message--primary-300{color:#FFB673 !important}.message__icon .message--primary-200{color:#FFDDBF !important}.message__icon .message--primary-100{color:#FFF1E5 !important}.message__icon .message--primary-50{color:#FFF1E5 !important}.message__icon .message--secondary-900{color:#5E5E5E !important}.message__icon .message--secondary-800{color:#5E5E5E !important}.message__icon .message--secondary-700{color:#5E5E5E !important}.message__icon .message--secondary-600{color:#5E5E5E !important}.message__icon .message--secondary-500{color:#5E5E5E !important}.message__icon .message--secondary-400{color:#8E8E8E !important}.message__icon .message--secondary-300{color:#A7A7A7 !important}.message__icon .message--secondary-200{color:#D7D7D7 !important}.message__icon .message--secondary-100{color:#EEEEEE !important}.message__icon .message--secondary-50{color:#EEEEEE !important}.message__icon .message--tertiary-900{color:#004885 !important}.message__icon .message--tertiary-800{color:#004885 !important}.message__icon .message--tertiary-700{color:#004885 !important}.message__icon .message--tertiary-600{color:#004885 !important}.message__icon .message--tertiary-500{color:#004885 !important}.message__icon .message--tertiary-400{color:#5C8AB1 !important}.message__icon .message--tertiary-300{color:#85A8C5 !important}.message__icon .message--tertiary-200{color:#C2D3E2 !important}.message__icon .message--tertiary-100{color:#EBF1F6 !important}.message__icon .message--tertiary-50{color:#EBF1F6 !important}.message__icon .message--quaternary-900{color:#5A8D00 !important}.message__icon .message--quaternary-800{color:#5A8D00 !important}.message__icon .message--quaternary-700{color:#5A8D00 !important}.message__icon .message--quaternary-600{color:#5A8D00 !important}.message__icon .message--quaternary-500{color:#96C11F !important}.message__icon .message--quaternary-400{color:#BCD870 !important}.message__icon .message--quaternary-300{color:#CDE294 !important}.message__icon .message--quaternary-200{color:#E6F0C9 !important}.message__icon .message--quaternary-100{color:#F7FAED !important}.message__icon .message--quaternary-50{color:#F7FAED !important}.message__icon .message--quinary-900{color:#C75300 !important}.message__icon .message--quinary-800{color:#C75300 !important}.message__icon .message--quinary-700{color:#C75300 !important}.message__icon .message--quinary-600{color:#C75300 !important}.message__icon .message--quinary-500{color:#EF7B0B !important}.message__icon .message--quinary-400{color:#FFA14C !important}.message__icon .message--quinary-300{color:#FFB673 !important}.message__icon .message--quinary-200{color:#FFDDBF !important}.message__icon .message--quinary-100{color:#FFF1E5 !important}.message__icon .message--quinary-50{color:#FFF1E5 !important}.message__icon .message--senary-900{color:#602A10 !important}.message__icon .message--senary-800{color:#95431D !important}.message__icon .message--senary-700{color:#B66E4D !important}.message__icon .message--senary-600{color:#B78670 !important}.message__icon .message--senary-500{color:#CAA08D !important}.message__icon .message--senary-400{color:#DEAE98 !important}.message__icon .message--senary-300{color:#EEC3AF !important}.message__icon .message--senary-200{color:#FAD5C5 !important}.message__icon .message--senary-100{color:#FFE9DF !important}.message__icon .message--senary-50{color:transparent !important}.message__icon .message--septenary-900{color:transparent !important}.message__icon .message--septenary-800{color:transparent !important}.message__icon .message--septenary-700{color:transparent !important}.message__icon .message--septenary-600{color:transparent !important}.message__icon .message--septenary-500{color:#6C887A !important}.message__icon .message--septenary-400{color:transparent !important}.message__icon .message--septenary-300{color:transparent !important}.message__icon .message--septenary-200{color:transparent !important}.message__icon .message--septenary-100{color:transparent !important}.message__icon .message--septenary-50{color:transparent !important}.message__icon .message--grey-900{color:#1D1D1D !important}.message__icon .message--grey-800{color:#333333 !important}.message__icon .message--grey-700{color:#4D4D4D !important}.message__icon .message--grey-600{color:#666666 !important}.message__icon .message--grey-500{color:#757575 !important}.message__icon .message--grey-400{color:#999999 !important}.message__icon .message--grey-300{color:#B3B3B3 !important}.message__icon .message--grey-200{color:#CCCCCC !important}.message__icon .message--grey-100{color:#E6E6E6 !important}.message__icon .message--grey-50{color:#F8F8F8 !important}.message__icon .message--contextual-success{color:#00856A !important}.message__icon .message--success{color:#00856A !important}.message__icon .message--contextual-success-light{color:#E5F2F0 !important}.message__icon .message--success-light{color:#E5F2F0 !important}.message__icon .message--contextual-info{color:#2899A8 !important}.message__icon .message--info{color:#2899A8 !important}.message__icon .message--contextual-info-light{color:#DBF6FF !important}.message__icon .message--info-light{color:#DBF6FF !important}.message__icon .message--contextual-warning{color:#F76700 !important}.message__icon .message--warning{color:#F76700 !important}.message__icon .message--contextual-warning-light{color:#FFF1E5 !important}.message__icon .message--warning-light{color:#FFF1E5 !important}.message__icon .message--contextual-error{color:#EB0000 !important}.message__icon .message--error{color:#EB0000 !important}.message__icon .message--contextual-error-light{color:#FDE5E5 !important}.message__icon .message--error-light{color:#FDE5E5 !important}.message__icon .message--pfm-blue{color:#55A1D3 !important}.message__icon .message--pfm-green{color:#8DDE54 !important}.message__icon .message--pfm-yellow{color:#FFC600 !important}.message__icon .message--pfm-orange{color:#FC912E !important}.message__icon .message--pfm-red{color:#DF5036 !important}.message__icon .message--external-bank-ing{color:#F58220 !important}.message__icon .message--external-bank-bil{color:#71308B !important}.message__icon .message--external-bank-bcee{color:#144093 !important}.message__icon .message--external-bank-post{color:#FABC0B !important}.message__icon .message--external-bank-raiffeisen{color:#112242 !important}.message__icon .message--external-bank-bnp-paribas{color:#00915A !important}.message__icon .message--white-15{color:rgba(255, 255, 255, 0.15) !important}.message__icon .message--white-25{color:rgba(255, 255, 255, 0.25) !important}.message__icon .message--white-50{color:rgba(255, 255, 255, 0.5) !important}.message__icon .message--brand-pfm-blue{color:#55A1D3 !important}.message__icon .message--brand-pfm-green{color:#8DDE54 !important}.message__icon .message--brand-pfm-yellow{color:#FFC600 !important}.message__icon .message--brand-pfm-orange{color:#FC912E !important}.message__icon .message--brand-pfm-red{color:#DF5036 !important}.message__icon .message--brand-expressive-green-light{color:#4FB482 !important}.message__icon .message--brand-expressive-green-dark{color:#133B2C !important}.message__icon .message--brand-expressive-blue-light{color:#1B8DC0 !important}.message__icon .message--brand-expressive-blue-dark{color:#0A324B !important}.message__icon .message--brand-expressive-yellow-light{color:#F0BE21 !important}.message__icon .message--brand-expressive-yellow-dark{color:#B77918 !important}.message__icon .message--brand-expressive-orange-light{color:#F3B969 !important}.message__icon .message--brand-expressive-orange-dark{color:#EF7D00 !important}.message__icon .message--brand-expressive-pink-light{color:#C03152 !important}.message__icon .message--brand-expressive-pink-dark{color:#4F0F15 !important}.message__icon .message--brand-expressive-red-light{color:#F7B7AF !important}.message__icon .message--brand-expressive-red-dark{color:#E62D32 !important}.message__icon .message--brand-expressive-orange-dark-900{color:#4D2800 !important}.message__icon .message--brand-expressive-orange-dark-800{color:#804200 !important}.message__icon .message--brand-expressive-orange-dark-700{color:#B35C00 !important}.message__icon .message--brand-expressive-orange-dark-600{color:#CC6A00 !important}.message__icon .message--brand-expressive-orange-dark-500{color:#EF7D00 !important}.message__icon .message--brand-expressive-orange-dark-400{color:#FC8823 !important}.message__icon .message--brand-expressive-orange-dark-300{color:#FC9E4C !important}.message__icon .message--brand-expressive-orange-dark-200{color:#FFB675 !important}.message__icon .message--brand-expressive-orange-dark-100{color:#FFD1A8 !important}.message__icon .message--brand-expressive-orange-dark-50{color:transparent !important}.message__icon .message--brand-expressive-blue-light-900{color:#0C4159 !important}.message__icon .message--brand-expressive-blue-light-800{color:#105373 !important}.message__icon .message--brand-expressive-blue-light-700{color:#14668C !important}.message__icon .message--brand-expressive-blue-light-600{color:#1779A6 !important}.message__icon .message--brand-expressive-blue-light-500{color:#1B8DC0 !important}.message__icon .message--brand-expressive-blue-light-400{color:#1D9AD1 !important}.message__icon .message--brand-expressive-blue-light-300{color:#2AAEEB !important}.message__icon .message--brand-expressive-blue-light-200{color:#56BFF0 !important}.message__icon .message--brand-expressive-blue-light-100{color:#7FCFF5 !important}.message__icon .message--brand-expressive-blue-light-50{color:transparent !important}.message__icon .message--brand-expressive-green-light-900{color:#224D37 !important}.message__icon .message--brand-expressive-green-light-800{color:#2D6649 !important}.message__icon .message--brand-expressive-green-light-700{color:#39805C !important}.message__icon .message--brand-expressive-green-light-600{color:#43996E !important}.message__icon .message--brand-expressive-green-light-500{color:#4FB482 !important}.message__icon .message--brand-expressive-green-light-400{color:#55C28C !important}.message__icon .message--brand-expressive-green-light-300{color:#60D199 !important}.message__icon .message--brand-expressive-green-light-200{color:#69DBA2 !important}.message__icon .message--brand-expressive-green-light-100{color:#85E6B5 !important}.message__icon .message--brand-expressive-green-light-50{color:transparent !important}.message__icon .message--brand-expressive-yellow-light-900{color:#6B550F !important}.message__icon .message--brand-expressive-yellow-light-800{color:#8F7214 !important}.message__icon .message--brand-expressive-yellow-light-700{color:#AD8B19 !important}.message__icon .message--brand-expressive-yellow-light-600{color:#D1A71D !important}.message__icon .message--brand-expressive-yellow-light-500{color:#F0BE21 !important}.message__icon .message--brand-expressive-yellow-light-400{color:#FCCA23 !important}.message__icon .message--brand-expressive-yellow-light-300{color:#FCD742 !important}.message__icon .message--brand-expressive-yellow-light-200{color:#FCDD60 !important}.message__icon .message--brand-expressive-yellow-light-100{color:#FCE483 !important}.message__icon .message--brand-expressive-yellow-light-50{color:transparent !important}.message__icon .message--brand-expressive-yellow-dark-900{color:#52360B !important}.message__icon .message--brand-expressive-yellow-dark-800{color:#6B470E !important}.message__icon .message--brand-expressive-yellow-dark-700{color:#855811 !important}.message__icon .message--brand-expressive-yellow-dark-600{color:#9E6915 !important}.message__icon .message--brand-expressive-yellow-dark-500{color:#B77918 !important}.message__icon .message--brand-expressive-yellow-dark-400{color:#D18A1B !important}.message__icon .message--brand-expressive-yellow-dark-300{color:#EB9B1F !important}.message__icon .message--brand-expressive-yellow-dark-200{color:#FAAA2D !important}.message__icon .message--brand-expressive-yellow-dark-100{color:#FABA55 !important}.message__icon .message--brand-expressive-yellow-dark-50{color:transparent !important}.message__icon .message--white-opacity-50{color:rgba(255, 255, 255, 0.5) !important}.message__icon .message--white{color:#FFFFFF !important}.message__icon .message--black{color:#000000 !important}.message__icon--leading{position:absolute}.message__text{flex:1 1 auto}.message__buttons{display:inline-flex;justify-content:flex-end;width:100%;margin-top:24px}.message__buttons>*:not(:last-child){margin-right:4px}.message__buttons>*:not(:first-child){margin-left:4px}.message .message__icon--cleaning{display:none}.message--with-cleaning-icon .message__icon--cleaning{z-index:2;display:block;align-self:flex-start;flex:0 0 auto;margin-top:1px;pointer-events:initial;cursor:pointer}.message--clickable:hover{cursor:pointer}.message.message{color:#5E5E5E;background-color:#FFFFFF}.message.message .message__icon{color:#5E5E5E}.message.message.message--with-cleaning-icon .message__icon--cleaning{color:#5E5E5E}.message.message [name=paragraph]{color:#5E5E5E !important}.message.message [name=paragraph]>*{color:#5E5E5E !important}.message.message:hover{background-color:#96C11F}.message.message--inline{background-color:transparent !important}.message.message--inline:hover{background-color:transparent}.message.message--success{color:#FFFFFF;background-color:#00856A}.message.message--success .message__icon{color:#FFFFFF}.message.message--success.message--with-cleaning-icon .message__icon--cleaning{color:#FFFFFF}.message.message--success [name=paragraph]{color:#FFFFFF !important}.message.message--success [name=paragraph]>*{color:#FFFFFF !important}.message.message--success:hover{background-color:#133B2C}.message.message--success--inline{background-color:transparent !important}.message.message--success--inline:hover{background-color:transparent}.message.message--info{color:#FFFFFF;background-color:#2899A8}.message.message--info .message__icon{color:#FFFFFF}.message.message--info.message--with-cleaning-icon .message__icon--cleaning{color:#FFFFFF}.message.message--info [name=paragraph]{color:#FFFFFF !important}.message.message--info [name=paragraph]>*{color:#FFFFFF !important}.message.message--info:hover{background-color:#0A324B}.message.message--info--inline{background-color:transparent !important}.message.message--info--inline:hover{background-color:transparent}.message.message--warning{color:#FFFFFF;background-color:#F76700}.message.message--warning .message__icon{color:#FFFFFF}.message.message--warning.message--with-cleaning-icon .message__icon--cleaning{color:#FFFFFF}.message.message--warning [name=paragraph]{color:#FFFFFF !important}.message.message--warning [name=paragraph]>*{color:#FFFFFF !important}.message.message--warning:hover{background-color:#EF7D00}.message.message--warning--inline{background-color:transparent !important}.message.message--warning--inline:hover{background-color:transparent}.message.message--error{color:#FFFFFF;background-color:#EB0000}.message.message--error .message__icon{color:#FFFFFF}.message.message--error.message--with-cleaning-icon .message__icon--cleaning{color:#FFFFFF}.message.message--error [name=paragraph]{color:#FFFFFF !important}.message.message--error [name=paragraph]>*{color:#FFFFFF !important}.message.message--error:hover{background-color:#E62D32}.message.message--error--inline{background-color:transparent !important}.message.message--error--inline:hover{background-color:transparent}.message.message{padding:12px 8px;border-radius:4px;font-family:\"Montserrat\", sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.message.message .message__icon{width:24px;font-size:24px}.message.message .message__icon--leading{top:8px;margin-right:8px}.message.message.message--with-leading-icon .message__text{padding-left:24px}.message.message.message--with-cleaning-icon .message__icon--cleaning{width:16px;margin-left:8px;font-size:16px}.message.message--inline{padding:4px 4px 4px 0px}.message.message--inline .message__icon--leading{top:0}.message--text{padding-right:0 !important;padding-left:0 !important}.message--text .message__text{font-weight:600}.message--text.message{color:#5E5E5E;background-color:transparent}.message--text.message .message__icon{color:#5E5E5E}.message--text.message.message--with-cleaning-icon .message__icon--cleaning{color:#5E5E5E}.message--text.message [name=paragraph]{color:#5E5E5E !important}.message--text.message [name=paragraph]>*{color:#5E5E5E !important}.message--text.message:hover{background-color:transparent}.message--text.message--inline{background-color:transparent !important}.message--text.message--inline:hover{background-color:transparent}.message--text.message--success{color:#00856A;background-color:transparent}.message--text.message--success .message__icon{color:#00856A}.message--text.message--success.message--with-cleaning-icon .message__icon--cleaning{color:#00856A}.message--text.message--success [name=paragraph]{color:#00856A !important}.message--text.message--success [name=paragraph]>*{color:#00856A !important}.message--text.message--success:hover{background-color:transparent}.message--text.message--success--inline{background-color:transparent !important}.message--text.message--success--inline:hover{background-color:transparent}.message--text.message--info{color:#2899A8;background-color:transparent}.message--text.message--info .message__icon{color:#2899A8}.message--text.message--info.message--with-cleaning-icon .message__icon--cleaning{color:#2899A8}.message--text.message--info [name=paragraph]{color:#2899A8 !important}.message--text.message--info [name=paragraph]>*{color:#2899A8 !important}.message--text.message--info:hover{background-color:transparent}.message--text.message--info--inline{background-color:transparent !important}.message--text.message--info--inline:hover{background-color:transparent}.message--text.message--warning{color:#F76700;background-color:transparent}.message--text.message--warning .message__icon{color:#F76700}.message--text.message--warning.message--with-cleaning-icon .message__icon--cleaning{color:#F76700}.message--text.message--warning [name=paragraph]{color:#F76700 !important}.message--text.message--warning [name=paragraph]>*{color:#F76700 !important}.message--text.message--warning:hover{background-color:transparent}.message--text.message--warning--inline{background-color:transparent !important}.message--text.message--warning--inline:hover{background-color:transparent}.message--text.message--error{color:#EB0000;background-color:transparent}.message--text.message--error .message__icon{color:#EB0000}.message--text.message--error.message--with-cleaning-icon .message__icon--cleaning{color:#EB0000}.message--text.message--error [name=paragraph]{color:#EB0000 !important}.message--text.message--error [name=paragraph]>*{color:#EB0000 !important}.message--text.message--error:hover{background-color:transparent}.message--text.message--error--inline{background-color:transparent !important}.message--text.message--error--inline:hover{background-color:transparent}";

const ENOVOSMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickButtonItem = createEvent(this, "clickButtonItem", 7);
    this.columnsFluid = false;
    this.fontSize = 'body-2';
    this.actionButtons = [];
    this.classNames = {
      EL: 'message',
      WRAPPER: '__wrapper',
      ICON: '__icon',
      TEXT: '__text',
      BUTTONS: '__buttons',
      ICON_LEADING: '--leading',
      ICON_CLEANING: '--cleaning',
    };
  }
  /** INJECT_ANCHOR */
  componentWillRender() {
    const classesToRemove = Array.from(this.el.classList).filter(className => {
      return String(className).match(/message--cols-((\d))?/) !== null;
    });
    classesToRemove.forEach(className => {
      this.el.classList.remove(className);
    });
    const columnSizes = this.getColumnsSize();
    if (columnSizes) {
      this.el.classList.add(columnSizes);
    }
  }
  /**
   * @description Add datalist to the component
   * @param {Object} data The data to be display
   */
  async setButtons(data) {
    const actionButtons = [];
    data.map(item => {
      const messageButton = new MessageButton(item);
      actionButtons.push(messageButton);
    });
    this.actionButtons = [...actionButtons];
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasIconLeading() {
    return (this.iconLeading && this.iconLeading !== 'undefined') ? true : false;
  }
  /**
   * @description Control if there are buttons for the message
   * @return {boolean}
   */
  hasButtons() {
    return this.actionButtons.length > 0;
  }
  /**
   * @description Get tooltip size
   */
  getColumnsSize() {
    const classNameCols = (this.columnsFluid) ? '--cols-fluid-' : '--cols-';
    return (this.columns !== undefined) ? `${this.classNames.EL}${classNameCols}${this.columns}` : '';
  }
  /** REMOVABLE START */
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return (h(Host, { name: this.classNames.EL }, h("div", { class: [
        this.classNames.EL,
        this.textOnly ? `${this.classNames.EL}--text` : '',
        this.inline ? `${this.classNames.EL}--inline` : '',
        this.clickable ? `${this.classNames.EL}--clickable` : '',
        this.hasIconLeading() ? `${this.classNames.EL}--with-leading-icon` : '',
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        this.getColumnsSize(),
      ].join(' ') }, h("div", { class: `${this.classNames.EL}${this.classNames.WRAPPER}` }, this.hasIconLeading()
      ? h("eds-icon", { class: [
          this.classNames.EL + this.classNames.ICON,
          this.classNames.EL + this.classNames.ICON + this.classNames.ICON_LEADING,
        ].join(' '), styles: this.iconStyles, icon: this.iconLeading })
      : '', h("div", { class: this.classNames.EL + this.classNames.TEXT }, h("eds-paragraph", { type: this.fontSize, fontWeight: this.fontWeight, styles: this.inline ? this.styles : '' }, h("slot", null))), h("div", { class: [
        this.classNames.EL + this.classNames.ICON,
        this.classNames.EL + this.classNames.ICON + this.classNames.ICON_CLEANING,
      ].join(' ') }, h("slot", { name: "message-close-btn" }))), this.hasButtons()
      ? h("div", { class: `${this.classNames.EL}${this.classNames.BUTTONS}` }, this.actionButtons.map((item) => {
        return h("eds-button", { "data-id": `${item.getProp('id')}`, content: item.getProp('content'), "text-only": true, size: "md", onClickButton: e => {
            e.stopPropagation();
            this.clickButtonItem.emit(item);
          }, "icon-position": "right" }, item.hasProp('iconTrailing')
          ? h("eds-icon", { slot: "icon", icon: item.getProp('iconTrailing') })
          : '');
      }))
      : '')));
  }
  get el() { return getElement(this); }
};
ENOVOSMessage.style = messageCss;

const paginationCss = ".pagination{display:flex;justify-content:center}.pagination>*:not(:last-child){margin-right:8px}.pagination--not-available{display:none !important}";

const ENOVOSPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickPaginationItem = createEvent(this, "clickPaginationItem", 7);
    this.current = 1;
    this.buttonActiveStyle = 'primary';
    this.pages = [];
    this.visiblePages = [];
    this.classNames = {
      EL: 'pagination',
      NOT_AVAILABLE: '--not-available',
    };
    this._clickItemHandler = [];
    this.totalPages = 0;
  }
  /**
   * @description Set the default active item
   */
  async setConfig(config) {
    this.config = config;
  }
  async setCurrent(currentPage) {
    this.current = currentPage;
  }
  watchConfigHandler(newConfig, oldConfig) {
    if (newConfig !== oldConfig) {
      if (isFinite(Math.ceil(this.config.total / this.config.items))) {
        this.pages = Array.from(new Array(Math.ceil(this.config.total / this.config.items)), (_val, index) => index);
        this.setPagination();
      }
    }
  }
  watchCurrentHandler(newCurrent, oldCurrent) {
    if (newCurrent !== oldCurrent) {
      this.setPagination();
    }
  }
  setPagination() {
    if (isFinite(Math.ceil(this.config.total / this.config.items))) {
      this.totalPages = Math.ceil(this.config.total / this.config.items);
      if (this.totalPages <= (2 * this.config.step) + 5) {
        // too few pages, so display them all
        this.startPage = 1;
        this.endPage = this.totalPages;
      }
      else if (this.current <= this.config.step + 3) {
        // current is too close to the beginning
        this.startPage = 1;
        this.endPage = (2 * this.config.step) + 3;
      }
      else if (this.current >= this.totalPages - (this.config.step + 2)) {
        // current is too close to the end
        this.startPage = this.totalPages - (2 * this.config.step) - 2;
        this.endPage = this.totalPages;
      }
      else {
        // regular case
        this.startPage = this.current - this.config.step;
        this.endPage = this.current + this.config.step;
      }
      // create an array of pages to ng-repeat in the pager control
      this.visiblePages = Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(i => this.startPage + i);
    }
  }
  /**
   * @description Update event on items once they have been set
   * initEvents avoid to attach multiple event to items
   */
  componentDidRender() {
    this.el.querySelectorAll(`[data-value]`).forEach((el, index) => {
      el.removeEventListener('clickButton', this._clickItemHandler[index]);
      el.addEventListener('clickButton', this._clickItemHandler[index] = () => {
        this.current = parseInt(el.dataset.value, 10);
        this.clickItemHandler({ value: this.current - 1, items: this.config.items });
      });
    });
  }
  /**
   * @description Define the event on items
   */
  clickItemHandler(item) {
    this.clickPaginationItem.emit(item);
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  /**
   * @description Get pagination size
   */
  getButtonSize() {
    return (this.size !== undefined) ? this.size : '';
  }
  render() {
    if (this.pages.length > 0) {
      const lastPage = Math.ceil(this.config.total / this.config.items);
      const btnSize = this.getButtonSize();
      return (h("div", { class: [
          this.classNames.EL,
        ].join(' ') }, h("eds-button", { key: "start", size: btnSize, outlined: this.outlined, rounded: true, styles: this.styles, "data-value": 1, disabled: this.current <= 1 }, h("eds-icon", { slot: "icon", icon: "chevron-double-left" })), h("eds-button", { key: "previous", size: btnSize, outlined: this.outlined, rounded: true, "data-value": this.current - 1, disabled: this.current <= 1, styles: this.styles }, h("eds-icon", { slot: "icon", icon: "chevron-left" })), this.startPage > 1 &&
        h("eds-button", { key: "1", size: btnSize, content: '1', "data-value": 1, rounded: true, outlined: this.outlined, class: this.classNames.EL, styles: (this.current === 1) ? this.buttonActiveStyle : this.styles }), this.startPage > 2 &&
        h("eds-button", { key: "startEllipsis", size: btnSize, content: "...", disabled: true, rounded: true, outlined: this.outlined, styles: this.styles }), this.visiblePages.map(item => h("eds-button", { key: item.toString(), size: btnSize, content: item, "data-value": item, rounded: true, outlined: this.outlined, class: [
          this.classNames.EL,
          (!this.visiblePages.includes(item)) ? `${this.classNames.EL}${this.classNames.NOT_AVAILABLE}` : '',
        ].join(' '), styles: (this.current === item) ? this.buttonActiveStyle : this.styles })), this.endPage < this.totalPages - 1 &&
        h("eds-button", { key: "rightEllipsis", size: btnSize, content: "...", disabled: true, rounded: true, outlined: this.outlined, styles: this.styles }), this.endPage < this.totalPages &&
        h("eds-button", { key: this.totalPages.toString(), size: btnSize, content: this.totalPages.toString(), "data-value": this.totalPages, rounded: true, outlined: this.outlined, class: this.classNames.EL, styles: (this.current === this.totalPages) ? this.buttonActiveStyle : this.styles }), h("eds-button", { key: "next", size: btnSize, outlined: this.outlined, rounded: true, styles: this.styles, "data-value": this.current + 1, disabled: this.current >= lastPage }, h("eds-icon", { slot: "icon", icon: "chevron-right" })), h("eds-button", { key: "end", size: btnSize, outlined: this.outlined, rounded: true, styles: this.styles, "data-value": lastPage, disabled: this.current >= lastPage }, h("eds-icon", { slot: "icon", icon: "chevron-double-right" }))));
    }
    else {
      return (h("span", null));
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "config": ["watchConfigHandler"],
    "current": ["watchCurrentHandler"]
  }; }
};
ENOVOSPagination.style = paginationCss;

export { ENOVOSDataTableCell as eds_data_table_cell, ENOVOSDataTableHeader as eds_data_table_header, ENOVOSDataTableHeading as eds_data_table_heading, ENOVOSDataTableRow as eds_data_table_row, ENOVOSDescriptionList as eds_description_list, ENOVOSMessage as eds_message, ENOVOSPagination as eds_pagination };
