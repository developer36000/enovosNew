import { Component, Element, Method, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Dialog Consumption Download
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSAppDialogConsumptionDownload {
  constructor() {
    this.classNames = {
      EL: 'app-dialog-consumption-download',
      DIALOG: '__dialog',
      HEADER: '__header',
      BODY: '__body',
      FOOTER: '__footer',
      FIELDS: '__fields',
      BUTTONS: '__buttons',
      BUTTON: '__button',
      TEXT: '__text',
    };
  }
  async displayDialog(value) {
    const dialogEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DIALOG}`);
    if (dialogEl) {
      value ? dialogEl.open() : dialogEl.close();
    }
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
  }
  componentDidRender() {
    const dropdownFrequency = this.el.querySelector(`#dropdown-frequency`);
    if (dropdownFrequency) {
      dropdownFrequency.setData([
        {
          'id': '4f321aba-6436-11ea-bc55-0242ac130001',
          'label': 'Every quarter hour',
        },
        {
          'id': '4f321aba-6436-11ea-bc55-0242ac130002',
          'label': 'Every quarter day',
        },
        {
          'id': '4f321aba-6436-11ea-bc55-0242ac130003',
          'label': 'Every quarter week',
        },
      ]);
    }
  }
  fillDatePicker(e) {
    const textFieldRangePicker = this.el.querySelector('#text-field-range-picker');
    if (textFieldRangePicker) {
      textFieldRangePicker.dataValue = `From ${e.detail.formatted}`;
    }
  }
  fillDateFrequency(e) {
    const textFieldDropdown = this.el.querySelector('#text-field-dropdown-frequency');
    textFieldDropdown.dataValue = e.detail.label;
  }
  render() {
    return (h("eds-dialog", { class: `${this.classNames.EL}${this.classNames.DIALOG}`, disableScroll: true },
      h("div", { slot: "dialog-header" },
        h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.HEADER}` },
          h("eds-heading", { type: "h5", "font-weight": "bold", styles: "left secondary-500", content: "Consumption download" }),
          h("eds-button", { size: "sm", textOnly: true, styles: "secondary", onClickButton: () => this.displayDialog(false) },
            h("eds-icon", { slot: "icon", icon: "times" }))),
        h("eds-paragraph", { type: "body-1", styles: "left secondary-500" }, "Download data from consumption chart and use it in software of your choice.")),
      h("div", { slot: "dialog-body" },
        h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.BODY}` },
          h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.BODY}${this.classNames.FIELDS}` },
            h("eds-date-picker", { id: "date-range-picker", "is-ranged": true, onClickDatePicker: e => this.fillDatePicker(e) },
              h("div", { slot: "selector" },
                h("eds-text-field", { id: "text-field-range-picker", iconTrailing: "calendar-alt", labelInside: "Data timeline", type: "text" }))),
            h("eds-dropdown", { "autocomplete-on-focus": true, id: "dropdown-frequency", onClickDropdownItem: e => this.fillDateFrequency(e) },
              h("div", { slot: "selector" },
                h("eds-text-field", { id: "text-field-dropdown-frequency", iconTrailing: "question-circle", debounce: 300, labelInside: "Data frequency", type: "text" })))),
          h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.BODY}${this.classNames.BUTTONS}` },
            h("eds-button", { content: "Download .csv", size: "md", styles: "primary" })))),
      h("div", { slot: "dialog-footer" },
        h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}` },
          h("eds-icon", { slot: "icon", size: "3x", styles: "secondary-500", icon: "info-circle" }),
          h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}${this.classNames.TEXT}` },
            h("eds-paragraph", { type: "body-1", fontWeight: "bold", styles: "left secondary-500" }, "Do you want to download consumption for more contracts at once?"),
            h("eds-paragraph", { type: "body-2", styles: "left secondary-500" }, "Save time and gather data you need in one click.")),
          h("eds-button", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}${this.classNames.BUTTON}`, content: "Choose contracts", iconPosition: "right", outlined: true, onClickButton: () => this.displayDialog(false), styles: "secondary", size: "sm" },
            h("eds-icon", { slot: "icon", icon: "chevron-right" }))))));
  }
  static get is() { return "eds-app-dialog-consumption-download"; }
  static get originalStyleUrls() { return {
    "$": ["app-dialog-consumption-download.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["app-dialog-consumption-download.css"]
  }; }
  static get methods() { return {
    "displayDialog": {
      "complexType": {
        "signature": "(value: any) => Promise<void>",
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
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
