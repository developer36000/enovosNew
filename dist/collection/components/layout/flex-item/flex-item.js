import { Component, Element, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Flex
 * @description Main grid. 12 columns in xlg, lg and md screens. 8 columns in small screens. 4 columns un extra and extra-extra small screens.
 * @path layout/flex
 * @documented false
 */
export class ENOVOSFlexItem {
  // Get size of column
  getColumnSize() {
    const attributeIndexes = Object.keys(this.el.attributes);
    const regex = new RegExp('^(offset-)?(xlg|lg|md|sm|xs|xxs)-[1-9]{1}[1-2]?');
    const layoutAttributes = attributeIndexes.map(attributeIndex => {
      return this.el.attributes[attributeIndex].name.match(regex) !== null ? 'flex-' + this.el.attributes[attributeIndex].name : '';
    });
    return layoutAttributes.join(' ');
  }
  getAlignSelf() {
    if (this.el.hasAttribute('align-self-auto')) {
      return 'align-self-auto';
    } // default
    if (this.el.hasAttribute('align-self-start')) {
      return 'align-self-start';
    }
    if (this.el.hasAttribute('align-self-end')) {
      return 'align-self-end';
    }
    if (this.el.hasAttribute('align-self-center')) {
      return 'align-self-center';
    }
    if (this.el.hasAttribute('align-self-baseline')) {
      return 'align-self-baseline';
    }
    if (this.el.hasAttribute('align-self-stretch')) {
      return 'align-self-stretch';
    }
    return '';
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
    return (h("div", { class: 'flex-item ' + this.getColumnSize() + ' '
        + this.getAlignSelf() },
      h("slot", null)));
  }
  static get is() { return "eds-flex-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["flex-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["flex-item.css"]
  }; }
  static get elementRef() { return "el"; }
}
