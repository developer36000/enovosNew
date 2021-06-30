import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { L as LayoutPropsHelper } from './LayoutPropsHelper-9f96c6ed.js';

const dividerCss = "[name=divider]{position:relative;display:block;width:100%;height:inherit}.divider{position:relative;display:flex;align-items:center;justify-content:space-around;width:70%;height:calc((8px * 6) + 1px);min-width:50%;margin:auto;border:none;overflow:visible;font-family:\"Montserrat\", sans-serif;font-size:14px;font-style:normal;font-weight:400}.divider__text{flex:1 0 auto;padding:0 8px;color:#FFFFFF;font-family:\"Montserrat\", sans-serif;font-size:14px;font-style:normal;font-weight:700}.divider:before,.divider:after{display:block;flex:0 1 100%;height:1px;background-color:rgba(255, 255, 255, 0.5);content:\"\"}";

const ENOVOSLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        LayoutPropsHelper.getStyles(this.styles, ''),
      ].join(' ') }, h("span", { class: `${this.classNames.EL}${this.classNames.TEXT}` }, this.content)));
  }
  get el() { return getElement(this); }
};
ENOVOSLink.style = dividerCss;

export { ENOVOSLink as eds_divider };
