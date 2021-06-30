import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Elevation
 * @description Shadows provide important visual cues about objects’ depth and directional movement.
 * @path foundation
 * @urlDesign design-foundation-elevation.html
 * @prop --level_<N>: Sets the elevation to the (N)dp, where 1 <= N <=
 * @prop --styles_light: Light opacity of the shadow (default)
 * @prop --styles_dark: Dark opacity of the shadow
 * @documented true
 */
export class ENOVOSElevation {
  constructor() {
    this.level = '0';
    this.styles = '';
    this.classNames = {
      EL: 'elevation',
      LEVEL: '--level-',
      REVERSE: '--reverse',
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
  // Get elevation class
  getStyles() {
    const variationStyles = ['dark'];
    const regex = new RegExp(`(${variationStyles.join('|')})`);
    const maxLevels = 5;
    const stylesList = this.styles.split(' ');
    const variationClasses = [];
    let componentClasses = [];
    // Init level
    if (!this.level || (Number(this.level) < 0 && Number(this.level) > maxLevels)) {
      this.level = '0';
    }
    // Set variation classes
    stylesList.forEach((style) => {
      if (regex.test(style)) {
        variationClasses.push(style);
      }
    });
    if (variationClasses.length > 0) {
      componentClasses = componentClasses.concat(variationClasses.map((variationClassName) => `${this.classNames.EL}--${variationClassName}--${this.level}`));
    }
    else {
      componentClasses.push(`${this.classNames.EL}--${this.level}`);
    }
    if (this.reverse) {
      componentClasses.push(`${this.classNames.EL}${this.classNames.REVERSE}`);
    }
    return componentClasses;
  }
  componentDidRender() {
    const firstChild = this.el.firstElementChild;
    if (firstChild) {
      const classesToKeep = Array.from(firstChild.classList).filter(className => {
        return String(className).match(/elevation--(dark)?(--)?((\d))?/) === null;
      });
      firstChild.removeAttribute('class');
      classesToKeep.forEach(className => {
        firstChild.classList.remove(className);
      });
      firstChild.classList.add(this.classNames.EL);
      const classes = classesToKeep.concat(this.getStyles());
      if (firstChild && classes.length > 0) {
        classes.forEach((className) => {
          firstChild.classList.add(className);
        });
      }
    }
  }
  /** REMOVABLE START */
  render() {
    return (h("slot", null));
  }
  static get is() { return "eds-elevation"; }
  static get originalStyleUrls() { return {
    "$": ["elevation.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["elevation.css"]
  }; }
  static get properties() { return {
    "level": {
      "type": "string",
      "mutable": true,
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
      "attribute": "level",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "styles": {
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
      "attribute": "styles",
      "reflect": false,
      "defaultValue": "''"
    },
    "reverse": {
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
      "attribute": "reverse",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
