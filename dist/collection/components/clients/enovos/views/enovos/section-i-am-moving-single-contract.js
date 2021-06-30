import { Component, Element, Prop, State, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section I am moving (single contract)
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionIAmMovingSingleContract {
  constructor() {
    this.activeStepId = 'address';
    this.selectedProductId = 'fix-naturstroum';
    this.classNames = {
      EL: 'view-app-enovos-section-i-am-moving-single-contract',
    };
    this.showProductsComparisonDialog = () => {
      const dialog = this.el.querySelector('#products-comparison');
      dialog.displayDialog(true);
    };
    this.renderCurrentStep = () => {
      switch (this.activeStepId) {
        case 'address':
          return this.renderAddressStep();
        case 'dates-and-energy':
          return this.renderDatesAndEnergyStep();
        case 'confirmation':
          return this.renderConfirmationStep();
        default:
          return undefined;
      }
    };
    this.renderAddressStep = () => (h("eds-panel", { "header-title": "New address", "header-padding-bottom": "0", "header-no-min-height": true },
      h("div", { slot: "body-content" },
        h("eds-fields-group", null,
          h("eds-checkbox", { styles: this.brand || 'primary', inputName: "closeContract", value: "1", label: "I am moving out of Luxembourg and I want to close my contract", size: "md" })),
        h("eds-fields-group", { "main-title": "Address details" },
          h("eds-grid-layout", { "margin-bottom-1": true },
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
              h("eds-text-field", { "label-inside": "Street*", "label-styles": this.brand || 'primary', type: "text" })),
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-3": true, "lg-3": true, "xlg-3": true },
              h("eds-text-field", { "label-inside": "Number*", "label-styles": this.brand || 'primary', type: "text" })),
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-3": true, "lg-3": true, "xlg-3": true },
              h("eds-text-field", { "label-inside": "Floor", "label-styles": this.brand || 'primary', type: "text" })),
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-2": true, "md-3": true, "lg-3": true, "xlg-3": true },
              h("eds-text-field", { "label-inside": "Zip code*", "label-styles": this.brand || 'primary', type: "text" })),
            h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-6": true, "md-9": true, "lg-9": true, "xlg-9": true },
              h("eds-text-field", { "label-inside": "City*", "label-styles": this.brand || 'primary', type: "text" })))),
        h("eds-fields-group", { "main-title": "Invoice address" },
          h("eds-checkbox", { styles: this.brand || 'primary', inputName: "sameInvoiceAddress", value: "1", label: "Invoice address remains the same", size: "md" })))));
    this.renderDatesAndEnergyStep = () => [
      h("eds-panel", { "header-title": "End of supply in current address", "header-subtitle": "Please choose energy sources available at your current address", "header-padding-bottom": "0", "header-no-min-height": true },
        h("div", { slot: "body-content" },
          h("eds-expandable-card", { isDefaultChecked: true, hideCheckbox: true, onClickCheckbox: () => { alert('onClickCheckbox'); }, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-electricity.svg`, mainTitle: "Electricity", styles: this.brand },
            h("div", { slot: "expandable-content" },
              h("eds-fields-group", null,
                h("eds-grid-layout", null,
                  h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                    h("eds-grid-layout", null,
                      h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true },
                        h("eds-date-picker", { onClickDatePicker: () => { alert('onClickDatePicker'); }, styles: this.brand || 'primary' },
                          h("div", { slot: "selector" },
                            h("eds-text-field", { "data-value": '', "label-inside": "End of supply date*", "label-styles": this.brand || 'primary', "icon-trailing": "calendar-alt", type: "text", "read-only": true })))),
                      h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true },
                        h("eds-text-field", { type: "text", "label-inside": "Meter number*", "label-styles": this.brand || 'primary' }))))),
                h("eds-grid-layout", null,
                  h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                    h("eds-text-field", { type: "text", "label-inside": "Index statement 1", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })),
                  h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                    h("eds-text-field", { type: "text", "label-inside": "Index statement 2", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })))),
              h("eds-fields-group", { "main-title": "Meter photos", "tooltip-content": "tooltip" },
                h("eds-grid-layout", null,
                  h("eds-grid-layout-item", { "xxs-2": true, "xs-2": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true },
                    h("eds-uploaded-image", { imageSrc: "https://storage.googleapis.com/lu-ds-enovos/img/example-meter.png", fileName: "example-meter.png", fileSize: "254 kb", height: "112px", onClickView: () => { alert('onClickView'); }, onClickRemove: () => { alert('onClickRemove'); } })),
                  h("eds-grid-layout-item", { "xxs-2": true, "xs-2": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true },
                    h("eds-upload-dragger", { styles: this.brand || 'primary', height: "112px" },
                      h("div", { slot: "text" },
                        "Drag files to upload ",
                        h("br", null),
                        "or ",
                        h("strong", null, "choose file")))))))),
          h("eds-expandable-card", { isDefaultChecked: false, onClickCheckbox: () => { alert('onClickCheckbox'); }, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-gas.svg`, mainTitle: "Gas", styles: this.brand }))),
      h("eds-panel", { "header-title": "Beginning of supply in new address", "header-subtitle": "Please choose energy sources available at you new address", "header-padding-bottom": "0", "header-no-min-height": true },
        h("div", { slot: "body-content" },
          h("eds-fields-group", null,
            h("eds-grid-layout", { alignCenter: true },
              h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("eds-dropdown", { id: "customers-filter", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => { alert('onClickDropdownItem'); }, data: [
                    {
                      label: 'Item 1',
                    },
                    {
                      label: 'Item 2',
                    },
                  ] },
                  h("div", { slot: "selector" },
                    h("eds-text-field", { "data-value": 'Naturstroum', placeholder: 'Recommended product', debounce: 300, "icon-trailing": "chevron-down", "label-inside": 'Recommended product', "label-styles": this.brand, type: "text", "read-only": true })))),
              h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("eds-button", { onClickButton: () => { this.showProductsComparisonDialog(); }, styles: "primary", "text-only": true, content: "Compare products", size: "md" }))),
            h("eds-grid-layout", null,
              h("eds-grid-layout-item", { "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("eds-grid-layout", null,
                  h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true },
                    h("eds-date-picker", { onClickDatePicker: () => { alert('onClickDatePicker'); }, styles: this.brand || 'primary' },
                      h("div", { slot: "selector" },
                        h("eds-text-field", { "data-value": '', "icon-trailing": "calendar-alt", "label-inside": "Beginning of supply date*", "label-styles": this.brand || 'primary', type: "text", "read-only": true })))),
                  h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-8": true, "md-12": true, "lg-12": true, "xlg-12": true },
                    h("eds-text-field", { type: "text", "label-inside": "Meter number*", "label-styles": this.brand || 'primary' }))))),
            h("eds-grid-layout", null,
              h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("eds-text-field", { type: "text", "label-inside": "Index statement 1", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })),
              h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true },
                h("eds-text-field", { type: "text", "label-inside": "Index statement 2", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })))),
          h("eds-fields-group", { "main-title": "Meter photos", "tooltip-content": "tooltip" },
            h("eds-grid-layout", null,
              h("eds-grid-layout-item", { "xxs-2": true, "xs-2": true, "sm-4": true, "md-4": true, "lg-4": true, "xlg-4": true },
                h("eds-upload-dragger", { styles: this.brand || 'primary', height: "112px" },
                  h("div", { slot: "text" },
                    "Drag files to upload ",
                    h("br", null),
                    "or ",
                    h("strong", null, "choose file")))))))),
      h("eds-panel", { "header-title": "Connect discount", "header-subtitle": "Save 30 euros in first year by activating paperless invoice and SEPA domiciliation", "header-padding-bottom": "0", "header-no-min-height": true },
        h("div", { slot: "body-content" },
          h("eds-expandable-card", { isDisabled: true, isRadio: true, onClickCheckbox: () => { alert('onClickCheckbox'); }, icon: `https://storage.googleapis.com/lu-ds-enovos/img/icons/discount-${this.brand || 'primary'}.svg`, mainTitle: "Activate Connect Discount", styles: this.brand },
            h("div", { slot: "expandable-content" },
              h("eds-paragraph", { type: "body-1", "font-weight": "bold" }, "To use Discount connect, SEPA domiciliation should be activated first"),
              h("div", { "margin-top-1": true },
                h("span", { class: `${this.classNames.EL}__icon-text` },
                  h("span", null,
                    h("eds-icon", { icon: "times", styles: "secondary" })),
                  h("span", null,
                    h("eds-paragraph", { styles: "secondary", type: "body-1" }, "SEPA domiciliation"))),
                h("span", { class: `${this.classNames.EL}__sepa-btn` },
                  h("eds-button", { styles: this.brand || 'primary', size: "sm", content: "Activate SEPA", "icon-position": "right" },
                    h("eds-icon", { slot: "icon", icon: "chevron-right" })))),
              h("div", { "margin-top-1": true },
                h("span", { class: `${this.classNames.EL}__icon-text` },
                  h("span", null,
                    h("eds-icon", { icon: "check", styles: this.brand || 'primary' })),
                  h("span", null,
                    h("eds-paragraph", { styles: this.brand || 'primary', type: "body-1" }, "Paperless invoice")))))))),
    ];
    this.renderDescriptionListItem = (title, value) => {
      return [
        h("eds-paragraph", { type: "body-2", "font-weight": "bold" }, title),
        typeof (value) === 'string' ? h("eds-heading", { type: "h6", content: value, styles: "secondary" }) : value,
      ];
    };
    this.renderConfirmationStep = () => [
      h("eds-panel", { "header-title": "Confirmation", "header-subtitle": "Please check if everything is correct", "header-padding-bottom": "0", "header-no-min-height": true },
        h("div", { slot: "body-content" },
          h("eds-fields-group", { "main-title": "Contact data" },
            h("eds-grid-layout", null, [
              {
                title: 'Customer ID',
                value: '00000000000',
              },
              {
                title: 'Name',
                value: 'Mr Gilles Hermes',
              },
              {
                title: 'Birth date',
                value: '05.06.2020',
              },
              {
                title: 'E-mail',
                value: 'gilles.hermes@enovos.lu',
              },
              {
                title: 'Phone number',
                value: '000 000 000',
              },
            ].map(item => h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, this.renderDescriptionListItem(item.title, item.value))))),
          h("eds-fields-group", { "main-title": "Current address" },
            h("div", null, this.renderDescriptionListItem('Address', '31 Domaine du Schlassgoard, 4327, Esch-sur-Alzette, LU'))),
          h("eds-fields-group", { "main-title": "New address" },
            h("div", null, this.renderDescriptionListItem('Address', '2 Place de Strasbourg, 4th floor, 1631, Luxembourg Ville, LU'))),
          h("eds-fields-group", { "main-title": "Contact data" },
            h("eds-grid-layout", null, [
              {
                title: 'Energy type',
                value: 'Electricity',
              },
              {
                title: 'End of supply date',
                value: '30.06.2020',
              },
              {
                title: 'Meter number',
                value: '000000000',
              },
              {
                title: 'Index statement 1',
                value: '123456789',
              },
              {
                title: 'Index statement 2',
                value: '-',
              },
            ].map(item => h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, this.renderDescriptionListItem(item.title, item.value)))),
            h("div", { "margin-top-1": true, "margin-bottom-1": true }, this.renderDescriptionListItem('Meter photos', h("div", { "margin-top-1": true },
              h("eds-uploaded-image", { imageSrc: "https://storage.googleapis.com/lu-ds-enovos/img/example-meter.png", fileName: "example-meter.png", fileSize: "254 kb", variation: "list-item" }),
              h("eds-uploaded-image", { imageSrc: "https://storage.googleapis.com/lu-ds-enovos/img/example-meter.png", fileName: "example-meter.png", fileSize: "254 kb", variation: "list-item" }))))),
          h("eds-fields-group", { "main-title": "Beginning of supply in new address" },
            h("eds-grid-layout", null, [
              {
                title: 'Energy type',
                value: 'Electricity',
              },
              {
                title: 'Beginning of supply date',
                value: '30.06.2020',
              },
              {
                title: 'Meter number',
                value: '000000000',
              },
              {
                title: 'Index statement 1',
                value: '123456789',
              },
              {
                title: 'Index statement 2',
                value: '-',
              },
            ].map(item => h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, this.renderDescriptionListItem(item.title, item.value))))),
          h("eds-fields-group", { "main-title": "Selected electricity offer for new address" },
            h("eds-grid-layout", null, [
              {
                title: 'Product name',
                value: 'FIX naturstroum',
              },
              {
                title: 'Fixed price duration',
                value: '3 years',
              },
              {
                title: 'Connect discount',
                value: '- € 30.00/year',
              },
            ].map(item => h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-2": true, "xs-2": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true }, this.renderDescriptionListItem(item.title, item.value))))))),
      h("div", { "margin-top-3": true, "margin-left-3": true },
        h("eds-checkbox", { styles: this.brand || 'primary', inputName: "closeContract", value: "1", label: "I have read and accept the privacy as well as the general conditions of use", size: "md" })),
    ];
    this.renderPreviousAction = () => {
      switch (this.activeStepId) {
        case 'address':
          return undefined;
        case 'dates-and-energy':
          return (h("eds-button", { content: "Previous step", styles: "secondary", outlined: true, onClickButton: () => { this.activeStepId = 'address'; } },
            h("eds-icon", { icon: "chevron-left", slot: "icon" })));
        case 'confirmation':
          return (h("eds-button", { content: "Previous step", styles: "secondary", outlined: true, onClickButton: () => { this.activeStepId = 'dates-and-energy'; } },
            h("eds-icon", { icon: "chevron-left", slot: "icon" })));
        default:
          return undefined;
      }
    };
    this.renderNextAction = () => {
      switch (this.activeStepId) {
        case 'address':
          return (h("eds-button", { content: "Next step", styles: this.brand || 'primary', onClickButton: () => { this.activeStepId = 'dates-and-energy'; } }));
        case 'dates-and-energy':
          return (h("eds-button", { content: "Next step", styles: this.brand || 'primary', onClickButton: () => { this.activeStepId = 'confirmation'; } }));
        case 'confirmation':
          return (h("eds-button", { content: "Send moving request", styles: this.brand || 'primary', onClickButton: () => { alert('Submit form'); } }));
        default:
          return undefined;
      }
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
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
      h("eds-page-header", { pageTitle: "I am moving", centered: true }),
      h("eds-container", { size: "sm" },
        h("eds-steps", { id: "steps", styles: this.brand || 'primary', activeItemId: this.activeStepId, items: [
            {
              id: 'address',
              title: 'Address',
              isValid: this.activeStepId === 'dates-and-energy' || this.activeStepId === 'confirmation',
            },
            {
              id: 'dates-and-energy',
              title: 'Dates and energy',
              isValid: this.activeStepId === 'confirmation',
            },
            {
              id: 'confirmation',
              title: 'Confirmation',
            },
          ] }),
        this.renderCurrentStep(),
        h("eds-grid-layout", { "margin-top-4": true },
          h("eds-grid-layout-item", { "xxs-2": true, "xs-2": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, this.renderPreviousAction()),
          h("eds-grid-layout-item", { alignContent: "right", "xxs-2": true, "xs-2": true, "sm-4": true, "md-6": true, "lg-6": true, "xlg-6": true }, this.renderNextAction()))),
      h("eds-advanced-dialog", { id: "products-comparison", headerTitle: "Electricity product selection", headerIconUrl: "https://storage.googleapis.com/lu-ds-enovos/img/icons/energy-electricity.svg", headerSubtitle: "Select a product and calculate the price" },
        h("eds-grid-layout", { "margin-bottom-2": true },
          h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-2": true, "md-4": true, "lg-4": true, "xlg-4": true },
            h("eds-dropdown", { id: "number-of-people", styles: this.brand, "autocomplete-on-focus": true, onClickDropdownItem: () => { alert('onClickDropdownItem'); }, data: [
                {
                  label: 'Item 1',
                },
                {
                  label: 'Item 2',
                },
              ] },
              h("div", { slot: "selector" },
                h("eds-text-field", { "data-value": '4', placeholder: 'Number of people', debounce: 300, "icon-trailing": "chevron-down", "label-inside": 'Number of people', "label-styles": this.brand, type: "text", "read-only": true })))),
          h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-3": true, "md-4": true, "lg-4": true, "xlg-4": true },
            h("eds-text-field", { type: "text", "label-inside": "Annual consumption", "label-styles": this.brand || 'primary', "info-tooltip-text": "tooltip", "info-tooltip-icon": "exclamation-circle", "info-tooltip-size": "3", "info-tooltip-styles": this.brand })),
          h("eds-grid-layout-item", { "margin-top-1": true, "margin-bottom-1": true, "xxs-4": true, "xs-4": true, "sm-3": true, "md-4": true, "lg-4": true, "xlg-4": true },
            h("eds-button", { styles: this.brand || 'primary', content: "Calculate", expand: true, outlined: true }))),
        h("eds-pricing-table", { styles: this.brand || 'primary', selectedItem: this.selectedProductId, recommendedItem: "naturstroum", inputName: "electricityProductSelection", onClickItem: e => { this.selectedProductId = e.detail; }, items: [
            {
              id: 'fix-naturstroum',
              title: 'FIX naturstroum',
              subtitle: 'Fixed price',
              description: [
                '100% green',
                'Produced in Europe',
                'From hydro sources',
              ],
              monthlyPrice: 64.88,
              yearlyPrice: 778.51,
            },
            {
              id: 'naturstroum',
              title: 'Naturstroum',
              subtitle: 'Flexible price',
              description: [
                '100% green',
                'Produced in Europe',
                'From hydro sources',
                'Certified by an independant institute',
              ],
              monthlyPrice: 69.09,
              yearlyPrice: 829.05,
            },
            {
              id: 'nova-naturstroum',
              title: 'Nova naturstroum',
              subtitle: 'Flexible price',
              description: [
                '100% green',
                'Invest in Luxembourg\'s renewable energy',
                '50% from regional production plants',
                'From solar, wind, hydro and biomass energy',
                'Certified by an independant institute',
              ],
              monthlyPrice: 70.35,
              yearlyPrice: 844.17,
            },
          ] }),
        h("eds-heading", { "margin-top-4": true, styles: "secondary", type: "h6", content: "*Price calculated with the connect discount for a household of 4 people consuming on average 4000 kWh/year." }),
        h("eds-paragraph", { "margin-top-2": true, type: "body-2", styles: "secondary" }, "Non-contractual tarifs valid for residential customers in the low voltage network (40A) on the basis of the values entered in the simulator. This price includes the price of energy, grid usage charges, monthly premium, fixed monthly charge for grid access, compensation fund, consumption tax and 8% VAT."),
        h("div", { slot: "footer-right" },
          h("eds-button", { styles: "secondary", content: "Cancel", "text-only": true }),
          h("eds-button", { styles: this.brand || 'primary', content: "Apply change" }))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-i-am-moving-single-contract"; }
  static get originalStyleUrls() { return {
    "$": ["section-i-am-moving-single-contract.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-i-am-moving-single-contract.css"]
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
    "activeStepId": {},
    "selectedProductId": {}
  }; }
  static get elementRef() { return "el"; }
}
