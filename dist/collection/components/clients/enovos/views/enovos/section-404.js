import { Component, Element, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Enovos app
 * @description Enovos app - section 404
 * @path views
 * @view true
 */
export class ENOVOSViewAppEnovosSection404 {
  constructor() {
    this.classNames = {
      EL: 'view-app-enovos-section-404',
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
      h("eds-panel", null,
        h("div", { slot: "body-content" },
          h("div", { class: `${this.classNames.EL}__wrapper` },
            h("eds-no-results", { "main-title": "Sorry, page not found", subtitle: "It seems that we can't find the page you are looking for", "image-url": "https://storage.googleapis.com/lu-ds-enovos/img/404.svg" },
              h("div", { slot: "actions" },
                h("eds-button", { content: "Go to overview" })))))),
    ];
  }
  static get is() { return "eds-view-app-enovos-section-404"; }
  static get originalStyleUrls() { return {
    "$": ["section-404.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["section-404.css"]
  }; }
  static get elementRef() { return "el"; }
}
