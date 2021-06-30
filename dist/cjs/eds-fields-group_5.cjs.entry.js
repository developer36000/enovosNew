'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
require('./_baseGetTag-1e305d19.js');
require('./isSymbol-04330316.js');
require('./toString-a99a8519.js');
const uniqueId = require('./uniqueId-e50b94aa.js');
const themes = require('./themes-bd258a0a.js');

const fieldsGroupCss = "[name=fields-group]{display:block}[name=fields-group]+[name=fields-group]{margin-top:16px}.fields-group__title{border-bottom:solid 1px #EEEEEE;margin-bottom:16px;display:flex;align-items:flex-start}.fields-group__tooltip{margin-left:4px}.fields-group__tooltip .icon{display:block}";

const ENOVOSFieldsGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'fields-group',
    };
    this.uniqueId = uniqueId.uniqueId('fields-group-');
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
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (index.h("fieldset", { class: this.classNames.EL }, (this.mainTitle || this.tooltipContent) &&
      index.h("div", { class: `${this.classNames.EL}__title` }, index.h("div", { class: `${this.classNames.EL}__title-text` }, index.h("eds-heading", { content: this.mainTitle, type: "h6", "font-weight": "bold", styles: "secondary" })), this.tooltipContent &&
        index.h("div", { class: `${this.classNames.EL}__tooltip` }, index.h("eds-icon", { id: this.uniqueId, icon: "question-circle", styles: "secondary-300", size: "x3" }), index.h("eds-tooltip", { selector: this.uniqueId, text: this.tooltipContent }))), index.h("div", { class: `${this.classNames.EL}__content` }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSFieldsGroup.style = fieldsGroupCss;

const pricingTableCss = "[name=pricing-table]{display:block}.pricing-table{display:flex;padding-top:44px;padding-bottom:8px}@media (max-width: 863px){.pricing-table{display:block;padding-top:8px}}.pricing-table__item{position:relative;display:flex;flex-direction:column;flex:1;border:solid 1px #D7D7D7;padding:0 8px 16px 8px;border-radius:8px;background-color:#FFFFFF}@media (max-width: 863px){.pricing-table__item+.pricing-table__item{margin-top:16px}}@media (min-width: 864px){.pricing-table__item--recommended{z-index:1;margin-top:-16px;margin-bottom:-8px;margin-left:-8px;margin-right:-8px}}@media (max-width: 863px){.pricing-table__item--recommended{margin-top:40px !important}}.pricing-table__item:first-child{padding-right:16px}.pricing-table__item:last-child{padding-left:16px}.pricing-table__item--selected{border-color:#5E5E5E}.pricing-table--primary .pricing-table__item--selected{border-color:#F76700}.pricing-table--tertiary .pricing-table__item--selected{border-color:#004885}.pricing-table--quaternary .pricing-table__item--selected{border-color:#96C11F}.pricing-table--quinary .pricing-table__item--selected{border-color:#EF7B0B}.pricing-table__badge{position:absolute;top:0;left:50%;transform:translate(-50%, -50%);width:calc(100% - 16px);height:48px;display:flex;justify-content:center;align-items:center;background-color:#5E5E5E;border-radius:8px;padding-left:8px;padding-right:8px}.pricing-table--primary .pricing-table__badge{background-color:#F76700}.pricing-table--tertiary .pricing-table__badge{background-color:#004885}.pricing-table--quaternary .pricing-table__badge{background-color:#96C11F}.pricing-table--quinary .pricing-table__badge{background-color:#EF7B0B}@media (max-width: 863px){.pricing-table__badge{width:auto;max-width:calc(100% - 16px)}}.pricing-table__header{display:flex;flex-direction:column;justify-content:center;align-items:center;border-bottom:solid 1px #D7D7D7;min-height:96px}.pricing-table__item--recommended .pricing-table__header{margin-top:16px}.pricing-table__item--selected .pricing-table__header{border-color:#5E5E5E}.pricing-table--primary .pricing-table__item--selected .pricing-table__header{border-color:#F76700}.pricing-table--tertiary .pricing-table__item--selected .pricing-table__header{border-color:#004885}.pricing-table--quaternary .pricing-table__item--selected .pricing-table__header{border-color:#96C11F}.pricing-table--quinary .pricing-table__item--selected .pricing-table__header{border-color:#EF7B0B}.pricing-table__description{flex:1;text-align:center;padding:32px 0}.pricing-table__prices{text-align:center}.pricing-table__price+.pricing-table__price{margin-top:8px}.pricing-table__price-suffix{margin-top:-8px}.pricing-table__currency{font-size:0.6em}.pricing-table__checkbox{display:flex;justify-content:center;align-items:center;height:48px}";

const ENOVOSPricingTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickItem = index.createEvent(this, "clickItem", 7);
    this.styles = 'primary';
    this.classNames = {
      EL: 'pricing-table',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.styles) {
        className += ` ${this.classNames.EL}--${this.styles}`;
      }
      return className;
    };
    this.getItemClassName = (item) => {
      let className = `${this.classNames.EL}__item`;
      if (this.recommendedItem && this.recommendedItem === item.id) {
        className += ` ${this.classNames.EL}__item--recommended`;
      }
      if (this.selectedItem && this.selectedItem === item.id) {
        className += ` ${this.classNames.EL}__item--selected`;
      }
      return className;
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (index.h("div", { class: this.getComponentClassName() }, this.items && this.items.map((item) => {
      var _a, _b, _c;
      return index.h("div", { key: item.id, class: this.getItemClassName(item) }, this.recommendedItem && this.recommendedItem === item.id &&
        index.h("div", { class: `${this.classNames.EL}__badge` }, index.h("eds-heading", { type: "h6", "font-weight": "bold", styles: "white", content: ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.recommended) || 'Recommended' })), index.h("div", { class: `${this.classNames.EL}__header` }, index.h("eds-heading", { styles: "secondary", type: "h5", content: item.title, "font-weight": "bold" }), index.h("eds-heading", { styles: "secondary", type: "h6", content: item.subtitle })), index.h("div", { class: `${this.classNames.EL}__description` }, item.description.map((descriptionItem) => index.h("eds-paragraph", { "margin-top-1": true, "margin-bottom-1": true, type: "body-1" }, descriptionItem))), index.h("div", { class: `${this.classNames.EL}__prices` }, index.h("div", { class: `${this.classNames.EL}__price` }, index.h("eds-heading", { type: "h4", styles: "secondary", content: `<span class="${this.classNames.EL}__currency">€ </span>${item.monthlyPrice}*`, "font-weight": "bold" }), index.h("div", { class: `${this.classNames.EL}__price-suffix` }, index.h("eds-heading", { styles: "secondary", type: "h6", content: ((_b = this.locale) === null || _b === void 0 ? void 0 : _b.perMonth) || 'per month' }))), index.h("div", { class: `${this.classNames.EL}__price` }, index.h("eds-heading", { type: "h5", styles: "secondary", content: `<span class="${this.classNames.EL}__currency">€ </span>${item.yearlyPrice}*`, "font-weight": "bold" }), index.h("div", { class: `${this.classNames.EL}__price-suffix` }, index.h("eds-heading", { styles: "secondary", type: "h6", content: ((_c = this.locale) === null || _c === void 0 ? void 0 : _c.perYear) || 'per year' })))), index.h("div", { class: `${this.classNames.EL}__checkbox` }, index.h("eds-radio-button", { selected: this.selectedItem && this.selectedItem === item.id, styles: this.styles, onClickRadioButton: () => {
          this.clickItem.emit(item.id);
        }, size: "md", inputName: `${this.inputName}`, icon: "check-circle" })));
    })));
  }
  get el() { return index.getElement(this); }
};
ENOVOSPricingTable.style = pricingTableCss;

const stepsCss = ".steps{display:flex;justify-content:space-between;width:100%;position:relative;margin-bottom:64px}@media (max-width: 639px){.steps{display:block;margin-bottom:32px}}.steps:before{content:\"\";display:block;width:100%;height:2px;position:absolute;left:0;top:21px}@media (max-width: 639px){.steps:before{left:16px;top:0;height:100%;width:2px}}.steps__item{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.steps--items-clickable .steps__item{cursor:pointer}@media (max-width: 639px){.steps__item{flex-direction:row;justify-content:flex-start}.steps__item+.steps__item{margin-top:16px}}.steps__icon{position:relative;display:block;width:44px;height:44px;border-radius:9999px}@media (max-width: 639px){.steps__icon{width:32px;height:32px;margin-right:8px}}.steps__icon .icon{display:block}.steps__icon:before{content:\"\";display:block;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:calc(100% - 4px);height:calc(100% - 4px);background-color:#FFFFFF;border-radius:9999px;transition:transform 0.2s, opacity 0.2s}.steps__item--is-valid .steps__icon:before,.steps__item--active .steps__icon:before{transform:translate(-50%, -50%) scale(0);opacity:0}.steps__icon-text{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);font-family:\"Montserrat\", sans-serif;font-size:32px;font-weight:400;line-height:normal;transition:color 0.2s}@media (max-width: 639px){.steps__icon-text{font-size:24px}}.steps__title{display:block}@media (min-width: 640px){.steps__title{position:absolute;left:50%;top:44px;transform:translate(-50%, 0);margin-top:12px;white-space:nowrap}}.steps:before{background-color:#F76700}.steps .steps__icon{background-color:#F76700;background-image:linear-gradient(#F76700, #D52B1E)}.steps .steps__icon-text{color:#F76700}.steps .steps__item--active .steps__icon-text{color:#FFFFFF}.steps--primary:before{background-color:#F76700}.steps--primary .steps__icon{background-color:#F76700;background-image:linear-gradient(#F76700, #D52B1E)}.steps--primary .steps__icon-text{color:#F76700}.steps--primary .steps__item--active .steps__icon-text{color:#FFFFFF}.steps--tertiary:before{background-color:#004885}.steps--tertiary .steps__icon{background-color:#004885;background-image:linear-gradient(#004885, #004885)}.steps--tertiary .steps__icon-text{color:#004885}.steps--tertiary .steps__item--active .steps__icon-text{color:#FFFFFF}.steps--quaternary:before{background-color:#96C11F}.steps--quaternary .steps__icon{background-color:#96C11F;background-image:linear-gradient(#96C11F, #5A8D00)}.steps--quaternary .steps__icon-text{color:#96C11F}.steps--quaternary .steps__item--active .steps__icon-text{color:#FFFFFF}.steps--quinary:before{background-color:#EF7B0B}.steps--quinary .steps__icon{background-color:#EF7B0B;background-image:linear-gradient(#EF7B0B, #C75300)}.steps--quinary .steps__icon-text{color:#EF7B0B}.steps--quinary .steps__item--active .steps__icon-text{color:#FFFFFF}";

const ENOVOSSteps = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickStep = index.createEvent(this, "clickStep", 7);
    this.styles = 'primary';
    this.itemsClickable = false;
    this.classNames = {
      EL: 'steps',
      ITEM: '__item',
      ICON: '__icon',
      ICON_TEXT: '__icon-text',
      TITLE: '__title',
      ACTIVE: '--active',
      IS_VALID: '--is-valid',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.styles) {
        className += ` ${className} ${className}--${this.styles}`;
      }
      if (this.itemsClickable) {
        className += ` ${className} ${className}--items-clickable`;
      }
      return className;
    };
    this.getItemClassName = (item) => {
      let className = this.classNames.EL + this.classNames.ITEM;
      if (this.activeItemId === item.id) {
        className += ` ${className} ${className}${this.classNames.ACTIVE}`;
      }
      if (item.isValid) {
        className += ` ${className} ${className}${this.classNames.IS_VALID}`;
      }
      return className;
    };
    this.onClickItem = (id) => {
      if (this.itemsClickable) {
        this.clickStep.emit(id);
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return (index.h("ol", { class: this.getComponentClassName() }, this.items && this.items.length > 0 && this.items.map((item, index$1) => index.h("li", { class: this.getItemClassName(item), key: item.id, onClick: () => this.onClickItem(item.id) }, index.h("span", { class: this.classNames.EL + this.classNames.ICON }, item.isValid
      ?
        index.h("span", { class: this.classNames.EL + this.classNames.ICON_TEXT }, index.h("eds-icon", { icon: "check", styles: "white" }))
      : index.h("span", { class: this.classNames.EL + this.classNames.ICON_TEXT }, index$1 + 1)), index.h("span", { class: this.classNames.EL + this.classNames.TITLE }, index.h("eds-paragraph", { type: "body-1", "font-weight": "bold", styles: "secondary-500" }, item.title))))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSSteps.style = stepsCss;

const uploadDraggerCss = "[name=upload-dragger]{display:block}.upload-dragger{text-align:center;border:dashed 1px #D7D7D7;border-radius:8px;padding:16px 32px;cursor:pointer}.upload-dragger__content{font-family:\"Montserrat\", sans-serif;font-size:12px}.upload-dragger__content strong{font-weight:700;text-decoration:underline}.upload-dragger--primary .upload-dragger__content strong{color:#F76700}.upload-dragger--tertiary .upload-dragger__content strong{color:#004885}.upload-dragger--quaternary .upload-dragger__content strong{color:#96C11F}.upload-dragger--quinary .upload-dragger__content strong{color:#EF7B0B}";

const ENOVOSUploadDragger = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.styles = 'primary';
    this.classNames = {
      EL: 'upload-dragger',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.styles) {
        className += ` ${this.classNames.EL}--${this.styles}`;
      }
      return className;
    };
    this.getStyleAttributeValue = () => {
      return {
        width: this.width || '100%',
        height: this.height || 'auto',
      };
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (index.h("div", { class: this.getComponentClassName(), style: this.getStyleAttributeValue() }, index.h("div", { class: `${this.classNames.EL}__icon` }, index.h("eds-icon", { icon: "plus", styles: this.styles })), index.h("div", { class: `${this.classNames.EL}__content` }, index.h("slot", { name: "text" }))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSUploadDragger.style = uploadDraggerCss;

const uploadedImageCss = "[name=uploaded-image]{display:block}[name=uploaded-image]+[name=uploaded-image]{margin-top:8px}.uploaded-image{position:relative;overflow:hidden;border-radius:8px;display:inline-block}.uploaded-image--list-item{border-radius:0}.uploaded-image--list-item{display:flex}.uploaded-image--list-item .uploaded-image__image{overflow:hidden;border-radius:8px}.uploaded-image__image img{display:block}.uploaded-image--list-item .uploaded-image__image img{max-height:40px}.uploaded-image__overlay{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);opacity:0;width:100%;height:100%;background-color:rgba(109, 114, 120, 0.9);display:flex;align-items:center;justify-content:center;flex-direction:column;transition:opacity 0.2s, transform 0.2s}.uploaded-image:hover .uploaded-image__overlay{opacity:1}.uploaded-image__actions{display:flex}.uploaded-image__action{padding:0 8px}.uploaded-image__action+.uploaded-image__action{border-left:solid 1px #FFFFFF}.uploaded-image__file-info{text-align:center;margin-top:8px}.uploaded-image--list-item .uploaded-image__file-info{display:flex;align-items:center;margin:0 0 0 8px}.uploaded-image--list-item .uploaded-image__file-info>*+*{margin-left:8px}";

const ENOVOSUploadedImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickView = index.createEvent(this, "clickView", 7);
    this.clickRemove = index.createEvent(this, "clickRemove", 7);
    this.overlayDisabled = false;
    this.classNames = {
      EL: 'uploaded-image',
    };
    this.handleClickView = () => {
      this.clickView.emit();
    };
    this.handleClickRemove = () => {
      this.clickRemove.emit();
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.variation) {
        className += ` ${this.classNames.EL}--${this.variation}`;
      }
      return className;
    };
    this.getStyleAttributeValue = () => {
      return {
        width: this.width || 'auto',
        height: this.height || 'auto',
      };
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (index.h("div", { class: this.getComponentClassName(), style: this.getStyleAttributeValue() }, index.h("div", { class: `${this.classNames.EL}__image` }, index.h("img", { src: this.imageSrc, alt: "" })), this.variation === 'list-item' ?
      index.h("div", { class: `${this.classNames.EL}__file-info` }, this.fileName &&
        index.h("eds-paragraph", { type: "body-2", styles: "secondary" }, this.fileName), this.fileSize &&
        index.h("eds-paragraph", { type: "body-3", styles: "secondary" }, this.fileSize))
      :
        !this.overlayDisabled && (index.h("div", { class: `${this.classNames.EL}__overlay` }, index.h("div", { class: `${this.classNames.EL}__actions` }, index.h("div", { class: `${this.classNames.EL}__action` }, index.h("eds-button", { "text-only": true, styles: "white", size: "sm", onClickButton: this.handleClickView }, index.h("eds-icon", { slot: "icon", icon: "search", styles: "white", size: "2" }))), index.h("div", { class: `${this.classNames.EL}__action` }, index.h("eds-button", { "text-only": true, styles: "white", size: "sm", onClickButton: this.handleClickRemove }, index.h("eds-icon", { slot: "icon", icon: "trash-alt", styles: "white", size: "2" })))), index.h("div", { class: `${this.classNames.EL}__file-info` }, this.fileName &&
          index.h("eds-paragraph", { type: "body-2", styles: "white" }, this.fileName), this.fileSize &&
          index.h("eds-paragraph", { type: "body-3", styles: "white" }, this.fileSize))))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSUploadedImage.style = uploadedImageCss;

exports.eds_fields_group = ENOVOSFieldsGroup;
exports.eds_pricing_table = ENOVOSPricingTable;
exports.eds_steps = ENOVOSSteps;
exports.eds_upload_dragger = ENOVOSUploadDragger;
exports.eds_uploaded_image = ENOVOSUploadedImage;
