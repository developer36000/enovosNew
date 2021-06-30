import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section my account single
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionMyAccountSingle {
  constructor() {
    this.variation = '';
    this.classNames = {
      EL: 'view-app-enovos-section-my-account-single',
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
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    if (this.variation === 'change-password') {
      this.openDialog(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CHANGE_PASSWORD}`);
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
    return [
      h("eds-page-header", { "page-title": "My account" },
        h("div", { slot: "actions" },
          h("eds-button", { outlined: true, size: "md", iconPosition: "right", content: "Connect new Customer ID" },
            h("eds-icon", { slot: "icon", icon: "plus" })))),
      h("eds-grid-layout", null,
        h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
          h("eds-elevation", { level: "5" },
            h("eds-card", { "no-border": true },
              h("div", { slot: "card-content" },
                h("div", null,
                  h("eds-heading", { type: "h5", fontWeight: "bold", "margin-bottom-2": true, content: "Account information", styles: "secondary" }),
                  this.blockData.map(data => h("eds-app-data-block", { onClickDataBlock: e => this.clickDataBlockHander(e), data: data })),
                  h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.BUTTONS}` },
                    h("eds-button", { outlined: true, size: "md", content: "Disable this account" }))))))),
        h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
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
  static get is() { return "eds-view-app-enovos-section-my-account-single"; }
  static get originalStyleUrls() { return {
    "$": ["section-my-account-single.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-my-account-single.css"]
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
