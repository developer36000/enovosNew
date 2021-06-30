'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');

const expandableCardCss = "[name=expandable-card]{display:block}[name=expandable-card]+[name=expandable-card]{margin-top:16px}.expandable-card__card{position:relative}.expandable-card__card [name=checkbox]:after,.expandable-card__card [name=radio-button]:after{content:\"\";display:block;position:absolute;left:0;top:0;right:0;bottom:0;cursor:pointer}.expandable-card__checkbox{margin:0 0 0 8px}.expandable-card--disabled .expandable-card__checkbox{opacity:0.5}.expandable-card__main-content{display:flex;align-items:center;justify-content:space-between;line-height:normal}.expandable-card--disabled .expandable-card__main-content{opacity:0.5}.expandable-card__leading-icon{width:48px !important;margin-left:8px}.expandable-card--disabled .expandable-card__leading-icon{opacity:0.5}.expandable-card__text{flex:1;text-align:left;padding-left:16px}.expandable-card__expandable-content{border-top:solid 1px #D7D7D7;margin-top:16px;padding-top:16px;line-height:normal}.expandable-card--content-hidden .expandable-card__expandable-content{display:none}";

const ENOVOSExpandableCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickCheckbox = index.createEvent(this, "clickCheckbox", 7);
    this.isRadio = false;
    this.isDisabled = false;
    this.isDefaultChecked = false;
    this.styles = 'primary';
    this.hideContentIfUnchecked = false;
    this.hideCheckbox = false;
    this.isChecked = false;
    this.classNames = {
      EL: 'expandable-card',
    };
    this.renderCheckbox = () => {
      if (this.isRadio) {
        return (index.h("eds-radio-button", { disabled: this.isDisabled, selected: !!this.isChecked, styles: this.styles, onClickRadioButton: e => {
            this.isChecked = e.detail.checked;
            this.clickCheckbox.emit(this.inputValue || undefined);
          }, size: "md", inputName: this.inputName || undefined, icon: "check-circle" }));
      }
      return (index.h("eds-checkbox", { disabled: this.isDisabled, selected: !!this.isChecked, styles: this.styles, onClickCheckbox: e => {
          this.isChecked = e.detail.selected;
          this.clickCheckbox.emit(this.inputValue || undefined);
        }, size: "md", inputName: this.inputName || undefined }));
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.isDisabled) {
        className += ` ${this.classNames.EL}--disabled`;
      }
      if (this.hideContentIfUnchecked && !this.isChecked) {
        className += ` ${this.classNames.EL}--content-hidden`;
      }
      return className;
    };
  }
  watchIsDefaultCheckedHandler(newValue, oldValue) {
    if (newValue !== oldValue && newValue !== this.isChecked) {
      this.isChecked = newValue;
    }
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.isChecked = this.isDefaultChecked;
  }
  componentWillRender() {
    const expandableContent = this.el.querySelector('[slot="expandable-content"]');
    this.hasExpandableContent = !!expandableContent && !!expandableContent.innerHTML.trim();
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return (index.h("div", { class: this.getComponentClassName() }, index.h("eds-card", { class: `${this.classNames.EL}__card`, size: "sm", styles: this.isChecked ? this.styles || 'primary' : undefined }, index.h("div", { slot: "card-content" }, index.h("div", { class: `${this.classNames.EL}__main-content` }, !this.hideCheckbox &&
      index.h("div", { class: `${this.classNames.EL}__checkbox` }, this.renderCheckbox()), this.icon &&
      index.h("eds-image", { class: `${this.classNames.EL}__leading-icon`, size: "6x", src: this.icon }), index.h("div", { class: `${this.classNames.EL}__text` }, this.mainTitle &&
      index.h("eds-paragraph", { type: "h6", styles: `secondary-500`, "font-weight": "bold" }, this.mainTitle), this.subtitle &&
      index.h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, this.subtitle))), this.hasExpandableContent &&
      index.h("div", { class: `${this.classNames.EL}__expandable-content` }, index.h("slot", { name: "expandable-content" }))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isDefaultChecked": ["watchIsDefaultCheckedHandler"]
  }; }
};
ENOVOSExpandableCard.style = expandableCardCss;

exports.eds_expandable_card = ENOVOSExpandableCard;
