import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
/**
 * @name Image
 * @description Image element. src and alt parameters are available.
 * @path foundation/media
 * @urlDesign design-ressources-illustrations-generic.html
 * @documented true
 */
export class ENOVOSImage {
  constructor() {
    this.alt = '';
    this.notFitted = false;
    this.classNames = {
      EL: 'image',
    };
  }
  /** INJECT_ANCHOR */
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
    if (this.size !== undefined && this.size !== '' && this.notFitted === false) {
      this.el.classList.add(`${this.classNames.EL}--full`);
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}--full`);
    }
  }
  /**
   * TODO: found another method to do this... not very ok with this solution
   */
  notFittedClass() {
    if (this.notFitted === true) {
      return `${this.classNames.EL}--no-fitted`;
    }
  }
  setMainElementClasses() {
    return [
      this.classNames.EL,
      this.notFittedClass(),
      ComponentPropsHelper.getSize(this.size, this.classNames.EL),
    ].join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("img", { class: this.setMainElementClasses(), src: this.src, alt: this.alt }));
  }
  static get is() { return "eds-image"; }
  static get originalStyleUrls() { return {
    "$": ["image.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["image.css"]
  }; }
  static get properties() { return {
    "alt": {
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
      "attribute": "alt",
      "reflect": false,
      "defaultValue": "''"
    },
    "src": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "src",
      "reflect": false
    },
    "notFitted": {
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
      "attribute": "not-fitted",
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
    }
  }; }
  static get elementRef() { return "el"; }
}
