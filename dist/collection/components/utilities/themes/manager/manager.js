import { Component, Method } from '@stencil/core';
import { storeTheme } from '../../../../store/themes';
/**
 * @name Themes Manager
 * @description The themes-manager layout is a component allowing to modify the visual aspect of the design system components according to a particular theme. Themes are defined by designers and each component can have a visual alternate version.<br />Methods called on this pattern allow the setting of a specific theme to all the components available for the current design system.
 * @path layout/themes
 * @documented true
 * @codeOnly true
 * @prop --theme_available-themes: default | dark
 */
export class ENOVOSThemesManager {
  async set(theme) {
    storeTheme.set('theme', theme);
  }
  async get() {
    return storeTheme.get('theme');
  }
  render() {
    return;
  }
  static get is() { return "eds-themes-manager"; }
  static get methods() { return {
    "set": {
      "complexType": {
        "signature": "(theme: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "get": {
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
    }
  }; }
}
