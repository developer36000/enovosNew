import { Component, Element, h, Host, Listen, Method } from '@stencil/core';
import { Subject } from 'rxjs';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Viewport
 * @description Tools to listen viewport changes
 * @path layout
 * @documented false
 */
export class ENOVOSViewport {
  constructor() {
    this.viewport = 'xxs';
    this.breakpoints = ['xxs', 'xs', 'sm', 'md', 'lg', 'xlg'];
    this.subject = new Subject;
    this.classNames = {
      EL: 'viewport'
    };
  }
  connectedCallback() {
    this.subject = new Subject();
  }
  async subscribe(callback) {
    return this.subject.subscribe(callback);
  }
  async getViewport() {
    return window.getComputedStyle(this.el, '::before').content.replace(/"(.*)"/, '$1');
  }
  async isBiggerThan(viewport) {
    const current = await this.getViewport();
    if (this.breakpoints.includes(viewport)) {
      return (this.breakpoints.indexOf(viewport) < this.breakpoints.indexOf(current));
    }
    else {
      console.warn('This viewport not exist in this.breakpoints.');
      return false;
    }
  }
  async isEqualTo(viewport) {
    const current = await this.getViewport();
    if (this.breakpoints.includes(viewport)) {
      return (this.breakpoints.indexOf(viewport) === this.breakpoints.indexOf(current));
    }
    else {
      console.warn('This viewport not exist in this.breakpoints .');
      return false;
    }
  }
  async isSmallerThan(viewport) {
    const current = await this.getViewport();
    if (this.breakpoints.includes(viewport)) {
      return (this.breakpoints.indexOf(viewport) > this.breakpoints.indexOf(current));
    }
    else {
      console.warn('This viewport not exist in this.breakpoints .');
      return false;
    }
  }
  async handleResize() {
    const current = await this.getViewport();
    if (current !== this.viewport) {
      this.subject.next({ prev: this.viewport, current });
      this.viewport = current;
    }
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
    return (h(Host, { name: this.classNames.EL }));
  }
  static get is() { return "eds-viewport"; }
  static get originalStyleUrls() { return {
    "$": ["viewport.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["viewport.css"]
  }; }
  static get methods() { return {
    "subscribe": {
      "complexType": {
        "signature": "(callback: (value: { prev: string; current: string; }) => any) => Promise<Subscription>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Subscription": {
            "location": "import",
            "path": "rxjs"
          }
        },
        "return": "Promise<Subscription>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "getViewport": {
      "complexType": {
        "signature": "() => Promise<string>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<string>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "isBiggerThan": {
      "complexType": {
        "signature": "(viewport: string) => Promise<boolean>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "isEqualTo": {
      "complexType": {
        "signature": "(viewport: string) => Promise<boolean>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "isSmallerThan": {
      "complexType": {
        "signature": "(viewport: string) => Promise<boolean>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
