import { Component, Element, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section contract list
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSectionContractListEmpty {
  constructor() {
    this.classNames = {
      EL: 'view-app-enovos-section-contract-list-empty',
    };
    this.contractsData = [];
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
      h("eds-page-header", { pageTitle: "All contracts" },
        h("div", { slot: "actions" },
          h("eds-button", { content: "Download consumption", styles: "secondary", outlined: true, "icon-position": "right", size: "md" },
            h("eds-icon", { slot: "icon", icon: "download" })),
          h("eds-button", { content: "Connect new", styles: "secondary", outlined: true, "icon-position": "right", size: "md" },
            h("eds-icon", { slot: "icon", icon: "plus" })))),
      h("eds-panel", { headerTitle: "Contracts in detail", headerPaddingTop: "2", headerPaddingBottom: "2", headerWithShadow: true },
        h("div", { slot: "header-actions" },
          h("div", { class: `${this.classNames.EL}__search-field` },
            h("eds-text-field", { placeholder: 'Search', "icon-leading": "search", type: "text" })),
          h("div", { class: `${this.classNames.EL}__filter` },
            h("eds-dropdown", { id: "status-filter", "autocomplete-on-focus": true, onClickDropdownItem: () => alert('onClickDropdownItem'), data: [
                { label: 'item 1' },
                { label: 'item 2' },
              ] },
              h("div", { slot: "selector" },
                h("eds-text-field", { "data-value": 'Active', "icon-trailing": "chevron-down", "label-inside": 'Status', type: "text", "read-only": true })))),
          h("div", { class: `${this.classNames.EL}__filter` },
            h("eds-dropdown", { id: "type-filter", "autocomplete-on-focus": true, onClickDropdownItem: () => alert('onClickDropdownItem'), data: [
                { label: 'item 1' },
                { label: 'item 2' },
              ] },
              h("div", { slot: "selector" },
                h("eds-text-field", { "data-value": 'All', "icon-trailing": "chevron-down", "label-inside": 'Type', type: "text", "read-only": true }))))),
        h("div", { slot: "body-content" },
          h("div", { class: `${this.classNames.EL}__no-results` },
            h("eds-no-results", { "main-title": "Sorry, no results found", subtitle: "Unfortunately no contract is matching your selected criteria", "image-url": "https://storage.googleapis.com/lu-ds-enovos/img/no-results.svg" },
              h("div", { slot: "actions" },
                h("eds-button", { content: "Start over", styles: "primary" })))))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-contract-list-empty"; }
  static get originalStyleUrls() { return {
    "$": ["section-contract-list-empty.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-contract-list-empty.css"]
  }; }
  static get elementRef() { return "el"; }
}
