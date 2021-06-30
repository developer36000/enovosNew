import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const noResultsCss = ".no-results{text-align:center}.no-results__image{margin-bottom:24px}.no-results__image img{max-width:100%}.no-results__actions{margin-top:24px}";

const ENOVOSNoResults = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classNames = {
      EL: 'no-results',
    };
  }
  componentWillLoad() {
    this.hasActions = !!this.el.querySelector('[slot="actions"]');
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
    return (h("div", { class: `${this.classNames.EL}` }, this.imageUrl &&
      h("div", { class: `${this.classNames.EL}__image` }, h("img", { src: this.imageUrl, alt: "" })), this.mainTitle &&
      h("eds-heading", { "margin-bottom-1": true, type: "h6", "font-weight": "bold", content: this.mainTitle, styles: "secondary" }), this.subtitle &&
      h("eds-paragraph", { "margin-bottom-1": true, type: "body-2" }, this.subtitle), this.hasActions &&
      h("div", { class: `${this.classNames.EL}__actions` }, h("slot", { name: "actions" }))));
  }
  get el() { return getElement(this); }
};
ENOVOSNoResults.style = noResultsCss;

export { ENOVOSNoResults as eds_no_results };
