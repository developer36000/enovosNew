import { Component, Element, Prop, State, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section overview
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionOverviewWithSlider {
  constructor() {
    this.step = 'overview';
    this.logoOnly = false;
    this.isSliderBeginning = true;
    this.isSliderEnd = true;
    this.classNames = {
      EL: 'view-app-enovos-section-overview-with-slider',
      CARD: '__card',
      QUICK_ACTION: '__quick-action',
      CONTENT: '__content',
      IMAGE: '__image',
      TEXT: '__text',
    };
    this.latestInvoicesData = [
      {
        values: [
          { data: '234,00 €' },
          { data: '3515266101' },
          { data: 'Down payment' },
          { data: '15.05.2020' },
          { data: '05.2020' },
          { data: '', props: {
              type: 'button',
              icon: 'download',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '234,00 €' },
          { data: '3515266101' },
          { data: 'Down payment' },
          { data: '15.05.2020' },
          { data: '05.2020' },
          { data: '', props: {
              type: 'button',
              icon: 'download',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
    ];
    this.addSlides = () => {
      const slider = this.el.querySelector('#bar-chart-slider');
      slider.appendSlide(['chart1', 'chart2', 'chart3', 'chart4', 'chart5'].map(id => `<div>
        <eds-app-periodic-consumption
          id="${id}"
          styles="${this.brand || 'primary'}"
          first-item-title='Period'
          first-item-value='12.11.2028 - 12.11.2019'
          second-item-title='Total consumption'
          second-item-value='700 kWh'
          second-item-caption-icon='arrow-up'
          second-item-caption-styles='error'
          second-item-caption-text='52 kWh'
          chart-max-value="100000"
          chart-min-value="0"
          chart-value="70000"
        />
      </div>`));
    };
    this.slideNext = () => {
      const slider = this.el.querySelector('#bar-chart-slider');
      slider.slideNext();
    };
    this.slidePrev = () => {
      const slider = this.el.querySelector('#bar-chart-slider');
      slider.slidePrev();
    };
    this.onSlideChange = e => {
      this.isSliderBeginning = e.detail.isBeginning;
      this.isSliderEnd = e.detail.isEnd;
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.quickActions = [
      {
        'id': 'action1',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/new-contracts${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'Connect new contracts',
        'subtitle': 'Manage another Customer ID',
      },
      {
        'id': 'action2',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/SEPA${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'Activate automatic SEPA transfers',
        'subtitle': 'Don\'t worry about open amount anymore',
      },
      {
        'id': 'action3',
        'icon': `https://storage.googleapis.com/lu-ds-enovos/img/icons/house-electricty${this.brand && this.brand !== 'primary' ? `-${this.brand}` : ''}.svg`,
        'title': 'Switch to e-mail invoice',
        'subtitle': 'Paperless delivery to your inbox',
      },
    ];
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
    this.addSlides();
  }
  componentDidRender() {
    const table = this.el.querySelector('#latest-invoices-data-table');
    if (table) {
      table.columns = [
        'Amount',
        'Invoice ID',
        'Invoice type',
        'Due date',
        'Billing period',
        '',
      ];
      table.data = this.latestInvoicesData;
      table.sort = [true, true, true, true, true, false];
    }
  }
  render() {
    return [
      h("eds-panel", { headerTitle: "Consumption", "margin-bottom-4": true, "header-padding-bottom": "0", "header-no-min-height": true },
        h("div", { slot: "header-actions" },
          h("eds-button", { disabled: this.isSliderBeginning, outlined: true, size: "sm", styles: "secondary", onClickButton: this.slidePrev },
            h("eds-icon", { slot: "icon", icon: "chevron-left" })),
          h("eds-button", { disabled: this.isSliderEnd, outlined: true, size: "sm", styles: "secondary", onClickButton: this.slideNext },
            h("eds-icon", { slot: "icon", icon: "chevron-right" }))),
        h("div", { slot: "body-content" },
          h("eds-slider", { id: "bar-chart-slider", onSlideChange: this.onSlideChange }))),
      h("eds-grid-layout", null,
        h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-8": true, "lg-8": true, "xlg-8": true },
          h("eds-panel", { fullHeight: true, headerTitle: "Latest invoices", headerNoMinHeight: true, headerPaddingBottom: "0" },
            h("div", { slot: "header-actions" },
              h("eds-button", { content: "See all", "icon-position": "right", outlined: true, size: "sm", styles: "secondary" },
                h("eds-icon", { slot: "icon", icon: "chevron-right" }))),
            h("div", { slot: "body-content" },
              h("eds-data-table", { id: "latest-invoices-data-table" })))),
        h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true, alignContent: "right" },
          h("eds-panel", { fullHeight: true, headerTitle: "Quick actions", headerNoMinHeight: true, headerPaddingBottom: "0" },
            h("div", { slot: "body-content" }, this.quickActions.map(item => h("eds-quick-action", { id: item.id, onClickItem: (e) => alert(`onClickItem: ${e.detail}`), styles: this.brand, icon: item.icon, "main-title": item.title, subtitle: item.subtitle, "show-trailing-icon": true })))))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-overview-with-slider"; }
  static get originalStyleUrls() { return {
    "$": ["section-overview.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-overview.css"]
  }; }
  static get properties() { return {
    "brand": {
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
      "attribute": "brand",
      "reflect": false
    }
  }; }
  static get states() { return {
    "step": {},
    "logoOnly": {},
    "isSliderBeginning": {},
    "isSliderEnd": {}
  }; }
  static get elementRef() { return "el"; }
}
