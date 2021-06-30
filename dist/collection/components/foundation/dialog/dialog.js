import { Component, Element, Event, Method, Prop, h } from '@stencil/core';
import anime from 'animejs/lib/anime.es.js';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
/**
 * @name Dialog
 * @description A dialog displays a container over the main content with/without a backdrop. Content can be easily managed using the specific section slots.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-dialog.html
 */
export class ENOVOSDialog {
  constructor() {
    this.ignoreBackdropClick = false;
    this.columnsFluid = false;
    this.disableScroll = false;
    this.verticalAlignment = 'center';
    this.disableAnimations = false;
    this.animationDuration = 250; // ms
    this.classNames = {
      EL: 'dialog',
      DIALOG: '__dialog',
      CONTENT: '__content',
      HEADER: '__header',
      BODY: '__body',
      FOOTER: '__footer',
      BACKDROP: '__backdrop',
      FADE_IN: 'fade-in',
      OPEN: '--open',
      EMPTY: '--empty',
      NO_ANIMATIONS: '--no-animations',
    };
    this.backdropClickHandler = () => {
      if (this.ignoreBackdropClick === false) {
        this.clickBackdropHandler.emit();
      }
    };
  }
  /** INJECT_ANCHOR */
  /**
   * Init the host element, move the dialog inside DOM to the body
   * The dialog is natively hidden
   */
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
    const hasSlotFooter = !!this.el.querySelector(`[slot="dialog-footer"]`);
    const footerContainerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTENT}${this.classNames.FOOTER}`);
    if (hasSlotFooter) {
      footerContainerElement.classList.remove(`${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTENT}${this.classNames.FOOTER}${this.classNames.EMPTY}`);
    }
    else {
      footerContainerElement.classList.add(`${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTENT}${this.classNames.FOOTER}${this.classNames.EMPTY}`);
    }
  }
  /**
   * @description Open dialog method
   */
  async open() {
    return this.toggleDialog(true);
  }
  /**
   * @description Close dialog method
   */
  async close() {
    return this.toggleDialog(false);
  }
  /**
   * @description Display backdrop (using CSS)
   */
  showBackdrop() {
    setTimeout(() => {
      this.backdropRef.classList.add(this.classNames.FADE_IN);
    }, 1);
  }
  /**
   * @description Hide backdrop (using CSS)
   */
  hideBackdrop() {
    this.backdropRef.classList.remove(this.classNames.FADE_IN);
  }
  /**
   * @description Open/Hide the dialog depending the "open" variable with transitions
   */
  toggleDialog(open) {
    if (this.disableScroll === true) {
      if (open === true) {
        document.body.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
      }
      else {
        document.body.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`);
      }
    }
    if (this.disableAnimations) {
      this.contentRef.setAttribute('style', `opacity: ${!open ? 0 : 1}; top: ${!open ? -100 : 0}`);
      if (open) {
        this.el.classList.add(this.classNames.FADE_IN);
        this.showBackdrop();
      }
      else {
        this.el.classList.remove(this.classNames.FADE_IN);
        this.hideBackdrop();
      }
    }
    else {
      const animation = anime({
        targets: this.contentRef,
        opacity: (!open) ? 0 : 1,
        top: (!open) ? -100 : 0,
        duration: this.animationDuration,
        easing: 'easeInOutSine',
        begin: () => {
          // Create the backdrop and display the component
          if (open) {
            this.el.classList.add(this.classNames.FADE_IN);
            this.showBackdrop();
          }
          else {
            this.hideBackdrop();
          }
        },
        complete: () => {
          // Remove the backdrop and hide the component
          if (!open) {
            this.el.classList.remove(this.classNames.FADE_IN);
          }
        },
      });
      return animation.finished.then(() => {
        return true;
      });
    }
  }
  /**
   * @description Get tooltip size
   */
  getSize() {
    return (this.size !== undefined && ['xs', 'sm', 'md', 'lg', 'xlg', 'default'].includes(this.size)) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /**
   * @description Get tooltip size
   */
  getColumnsSize() {
    const classNameCols = (this.columnsFluid) ? '--cols-fluid-' : '--cols-';
    return (this.columns !== undefined) ? `${this.classNames.EL}${classNameCols}${this.columns}` : '';
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.classNames.FADE_IN,
        this.disableAnimations ? `${this.classNames.EL}${this.classNames.NO_ANIMATIONS}` : '',
        this.getSize(),
        ComponentPropsHelper.getSize(this.size, this.classNames.EL),
        this.getColumnsSize(),
      ].join(' '), tabindex: "-1", role: "dialog", "aria-hidden": "true" },
      h("div", { class: [
          `${this.classNames.EL}${this.classNames.DIALOG}`,
          (this.verticalAlignment === 'center') ? `${this.classNames.EL}${this.classNames.DIALOG}--centered` : '',
          (this.verticalAlignment === 'top') ? `${this.classNames.EL}${this.classNames.DIALOG}--top` : '',
          (this.verticalAlignment === 'bottom') ? `${this.classNames.EL}${this.classNames.DIALOG}--bottom` : '',
        ].join(' ') },
        h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTENT}`, ref: el => this.contentRef = el },
          h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTENT}${this.classNames.HEADER}` },
            h("slot", { name: "dialog-header" })),
          h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTENT}${this.classNames.BODY}` },
            h("slot", { name: "dialog-body" })),
          h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.CONTENT}${this.classNames.FOOTER}` },
            h("slot", { name: "dialog-footer" })))),
      h("div", { class: `${this.classNames.EL}${this.classNames.BACKDROP}`, ref: el => this.backdropRef = el, onClick: this.backdropClickHandler })));
  }
  static get is() { return "eds-dialog"; }
  static get originalStyleUrls() { return {
    "$": ["dialog.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dialog.css"]
  }; }
  static get properties() { return {
    "ignoreBackdropClick": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "ignore-backdrop-click",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
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
      "attribute": "size",
      "reflect": false
    },
    "columns": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns",
      "reflect": false
    },
    "columnsFluid": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns-fluid",
      "reflect": false,
      "defaultValue": "false"
    },
    "disableScroll": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disable-scroll",
      "reflect": false,
      "defaultValue": "false"
    },
    "verticalAlignment": {
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
      "attribute": "vertical-alignment",
      "reflect": false,
      "defaultValue": "'center'"
    },
    "disableAnimations": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disable-animations",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "clickBackdropHandler",
      "name": "clickBackdropHandler",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "open": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Open dialog method"
          }]
      }
    },
    "close": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Close dialog method"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
