import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section my account multiple
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionMyAccountMultiple {
  constructor() {
    this.variation = '';
    this.classNames = {
      EL: 'view-app-enovos-section-my-account-multiple',
      CARD: '__card',
      DIALOG: '__dialog',
      HEADER: '__header',
      FOOTER: '__footer',
      BUTTONS: '__buttons',
      BILLING: '--billing',
      CHANGE_PASSWORD: '--change-password',
    };
    this.blockData = [
      {
        id: 'field1',
        label: 'Name',
        value: 'Enovos Luxembourg S.A.',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field2',
        label: 'Username',
        value: 'gilles.hermes@enovos.lu',
        tooltip: 'Lorem ipsum',
      },
      {
        id: 'change-password',
        label: 'Password',
        type: 'password',
        value: 'sdfsdfsdqfsdqfsdq',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Reset',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Language',
        value: 'English',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
    ];
    this.blockData2 = [
      {
        id: 'field1',
        label: 'Customer ID',
        value: '0000000000',
      },
      {
        id: 'field2',
        label: 'Name',
        value: 'Enovos Luxembourg S.A.',
        tooltip: 'Lorem ipsum',
        button: {
          content: 'Request change',
          icon: 'pen',
        },
      },
      {
        id: 'field3',
        label: 'Birthday',
        value: '01.01.2020',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Contact email',
        value: 'gilles.hermes@enovos.lu',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Phone number',
        value: '000 000 000',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
      {
        id: 'field4',
        label: 'Address',
        value: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette',
        button: {
          content: 'Edit',
          icon: 'pen',
        },
      },
    ];
    this.connectedCustomerIdsData = [
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
      {
        values: [
          { data: '0001352124' },
          { data: 'Enovos Luxembourg' },
          { data: '2 Domaine du Schlassgoard, 4327, Esch-sur-Alzette' },
          { data: '', props: {
              type: 'button',
              icon: 'chevron-right',
              styles: 'secondary',
              textOnly: true,
            } },
        ],
      },
    ];
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    if (this.variation === 'change-password') {
      this.openDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`);
    }
    const table = this.el.querySelector('#connected-customer-ids-data-table');
    const mobileTable = this.el.querySelector('#connected-customer-ids-mobile-data-table');
    if (table) {
      table.columns = [
        'Customer ID',
        'Name',
        'Address',
        '',
      ];
      table.data = this.connectedCustomerIdsData;
      table.columnSizes = [undefined, undefined, undefined, 'fitted'];
      table.sort = [true, true, true, false];
    }
    if (mobileTable) {
      mobileTable.columns = [
        'Customer ID',
        'Name',
        'Address',
        '',
      ];
      mobileTable.data = this.connectedCustomerIdsData;
    }
  }
  clickDataBlockHander(e) {
    switch (e.detail.id) {
      case 'change-password':
        this.openDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`);
        break;
    }
  }
  openDialog(elClass) {
    const dialogItem = this.el.querySelector(elClass);
    if (dialogItem) {
      dialogItem.open();
    }
  }
  closeDialog(elClass) {
    const dialogItem = this.el.querySelector(elClass);
    if (dialogItem) {
      dialogItem.close();
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
  }
  render() {
    if (this.variation === 'detail') {
      return [
        h("eds-page-header", { "page-title": "Enovos Luxembourg S.A." },
          h("div", { slot: "before-title" },
            h("a", null,
              h("eds-icon", { styles: "secondary", slot: "icon", icon: "arrow-left", size: "6x" })))),
        h("eds-grid-layout", null,
          h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-6": true, "xlg-6": true },
            h("eds-elevation", { level: "5" },
              h("eds-card", { "no-border": true },
                h("div", { slot: "card-content" },
                  h("eds-card", { styles: this.brand || 'primary' },
                    h("div", { slot: "card-content" },
                      h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.BILLING}` },
                        h("eds-heading", { type: "h6", fontWeight: "bold", "margin-bottom-2": true, content: "This address is used for your billing only", styles: "secondary" }),
                        h("eds-paragraph", { type: "body-2", "margin-bottom-2": true, content: "Changing this address does not mean that we will move your contract.<br />If you want to change where contract will be used, please click the button below.", styles: "secondary-500" }),
                        h("eds-button", { outlined: true, size: "md", content: "I'm moving" })))),
                  h("div", null,
                    h("eds-heading", { type: "h5", fontWeight: "bold", "margin-top-2": true, "margin-bottom-2": true, content: "Billing data", styles: "secondary" }),
                    this.blockData2.map(data => h("eds-app-data-block", { onClickDataBlock: e => this.clickDataBlockHander(e), data: data })))))))),
        h("eds-dialog", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`, columns: 6 },
          h("div", { slot: "dialog-header" },
            h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.HEADER}` },
              h("eds-heading", { type: "h5", "font-weight": "bold", styles: "left secondary-500", content: "Please check your email" }),
              h("eds-button", { size: "sm", textOnly: true, styles: "secondary", onClickButton: () => this.closeDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`) },
                h("eds-icon", { slot: "icon", icon: "times" })))),
          h("div", { slot: "dialog-body" },
            h("eds-paragraph", { type: "body-1", styles: "left secondary-500" }, "You should receive link to reset your password on your email address gilles.hermes@enovos.lu. For further steps, follow email instructions.")),
          h("div", { slot: "dialog-footer" },
            h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}` },
              h("eds-button", { content: "Done", onClickButton: () => this.closeDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`), styles: "primary" })))),
      ];
    }
    return [
      h("eds-panel", { headerTitle: "Connected Customer IDs", headerNoMinHeight: true, headerPaddingBottom: "0" },
        h("div", { slot: "header-actions" },
          h("div", null,
            h("eds-button", { content: "Connect new", "icon-position": "right", outlined: true, size: "md", styles: "secondary" },
              h("eds-icon", { slot: "icon", icon: "plus" }))),
          h("div", null,
            h("eds-text-field", { placeholder: 'Search', "icon-leading": "search", size: "sm", type: "text" }))),
        h("div", { slot: "body-content" },
          h("eds-data-table", { id: "connected-customer-ids-data-table" }),
          h("eds-mobile-data-table", { id: "connected-customer-ids-mobile-data-table" }))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-my-account-multiple"; }
  static get originalStyleUrls() { return {
    "$": ["section-my-account-multiple.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-my-account-multiple.css"]
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
    },
    "variation": {
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
      "attribute": "variation",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get elementRef() { return "el"; }
}
