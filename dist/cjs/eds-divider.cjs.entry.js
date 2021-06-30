'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');
const LayoutPropsHelper = require('./LayoutPropsHelper-7b6ecab0.js');

const dividerCss = "[name=divider]{position:relative;display:block;width:100%;height:inherit}.divider{position:relative;display:flex;align-items:center;justify-content:space-around;width:70%;height:calc((8px * 6) + 1px);min-width:50%;margin:auto;border:none;overflow:visible;font-family:\"Montserrat\", sans-serif;font-size:14px;font-style:normal;font-weight:400}.divider__text{flex:1 0 auto;padding:0 8px;color:#FFFFFF;font-family:\"Montserrat\", sans-serif;font-size:14px;font-style:normal;font-weight:700}.divider:before,.divider:after{display:block;flex:0 1 100%;height:1px;background-color:rgba(255, 255, 255, 0.5);content:\"\"}";

const ENOVOSLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'divider',
      TEXT: '__text',
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  /** REMOVABLE START */
  render() {
    return (index.h("div", { class: [
        this.classNames.EL,
        LayoutPropsHelper.LayoutPropsHelper.getStyles(this.styles, ''),
      ].join(' ') }, index.h("span", { class: `${this.classNames.EL}${this.classNames.TEXT}` }, this.content)));
  }
  get el() { return index.getElement(this); }
};
ENOVOSLink.style = dividerCss;

exports.eds_divider = ENOVOSLink;
