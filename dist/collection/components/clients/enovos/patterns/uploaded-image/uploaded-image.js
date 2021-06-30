import { Component, Element, Event, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Uploaded image
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSUploadedImage {
  constructor() {
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
    themeOnChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (h("div", { class: this.getComponentClassName(), style: this.getStyleAttributeValue() },
      h("div", { class: `${this.classNames.EL}__image` },
        h("img", { src: this.imageSrc, alt: "" })),
      this.variation === 'list-item' ?
        h("div", { class: `${this.classNames.EL}__file-info` },
          this.fileName &&
            h("eds-paragraph", { type: "body-2", styles: "secondary" }, this.fileName),
          this.fileSize &&
            h("eds-paragraph", { type: "body-3", styles: "secondary" }, this.fileSize))
        :
          !this.overlayDisabled && (h("div", { class: `${this.classNames.EL}__overlay` },
            h("div", { class: `${this.classNames.EL}__actions` },
              h("div", { class: `${this.classNames.EL}__action` },
                h("eds-button", { "text-only": true, styles: "white", size: "sm", onClickButton: this.handleClickView },
                  h("eds-icon", { slot: "icon", icon: "search", styles: "white", size: "2" }))),
              h("div", { class: `${this.classNames.EL}__action` },
                h("eds-button", { "text-only": true, styles: "white", size: "sm", onClickButton: this.handleClickRemove },
                  h("eds-icon", { slot: "icon", icon: "trash-alt", styles: "white", size: "2" })))),
            h("div", { class: `${this.classNames.EL}__file-info` },
              this.fileName &&
                h("eds-paragraph", { type: "body-2", styles: "white" }, this.fileName),
              this.fileSize &&
                h("eds-paragraph", { type: "body-3", styles: "white" }, this.fileSize))))));
  }
  static get is() { return "eds-uploaded-image"; }
  static get originalStyleUrls() { return {
    "$": ["uploaded-image.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["uploaded-image.css"]
  }; }
  static get properties() { return {
    "imageSrc": {
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
      "attribute": "image-src",
      "reflect": false
    },
    "fileName": {
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
      "attribute": "file-name",
      "reflect": false
    },
    "fileSize": {
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
      "attribute": "file-size",
      "reflect": false
    },
    "overlayDisabled": {
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
      "attribute": "overlay-disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "width": {
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
      "attribute": "width",
      "reflect": false
    },
    "height": {
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
      "attribute": "height",
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
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "clickView",
      "name": "clickView",
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
    }, {
      "method": "clickRemove",
      "name": "clickRemove",
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
  static get elementRef() { return "el"; }
}
