import { Component, Element, Host, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Loader Skeleton
 * @description Display a placeholder preview of the content before the data gets loaded to reduce load-time frustration. Loader Skeleton should remain positioned where content will load to avoid unexpected shifts in positionning.
 * @path foundation
 * @documented true
 */
export class ENOVOSLoaderSkeleton {
  constructor() {
    this.shimmer = false;
    this.classNames = {
      EL: 'loader-skeleton',
    };
  }
  /** REMOVABLE START */
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
    return h(Host, { name: this.classNames.EL, class: this.classNames.EL });
  }
  static get is() { return "eds-loader-skeleton"; }
  static get originalStyleUrls() { return {
    "$": ["loader-skeleton.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["loader-skeleton.css"]
  }; }
  static get properties() { return {
    "shape": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'circle' | 'card' | 'square'",
        "resolved": "\"card\" | \"circle\" | \"square\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "shape",
      "reflect": true
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
      "reflect": true
    },
    "stretch": {
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
      "attribute": "stretch",
      "reflect": true
    },
    "shimmer": {
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
      "attribute": "shimmer",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
