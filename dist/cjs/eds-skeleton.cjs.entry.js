'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');

const skeletonCss = "[name=skeleton]{display:block}.skeleton{position:relative;display:block;height:16px;border-radius:4px;overflow:hidden;background-color:#EEEEEE}.skeleton--rounded{border-radius:9999px}.skeleton:before{content:\"\";display:block;position:absolute;left:-100%;top:0;right:0;bottom:0;transform:translateX(-100%);-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:skeleton-animation;animation-name:skeleton-animation;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:linear-gradient(to right, #EEEEEE 10%, #D7D7D7 50%, #EEEEEE 90%)}@-webkit-keyframes skeleton-animation{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}@keyframes skeleton-animation{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";

const ENOVOSSkeleton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.rounded = false;
    this.classNames = {
      EL: 'skeleton',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.rounded) {
        className += ` ${this.classNames.EL}--rounded`;
      }
      return className;
    };
    this.getStyleAttributeValue = () => {
      let style = {};
      if (this.width) {
        style = Object.assign(Object.assign({}, style), { width: this.width });
      }
      if (this.height) {
        style = Object.assign(Object.assign({}, style), { height: this.height });
      }
      return style;
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (index.h("span", { class: this.getComponentClassName(), style: this.getStyleAttributeValue() }));
  }
  get el() { return index.getElement(this); }
};
ENOVOSSkeleton.style = skeletonCss;

exports.eds_skeleton = ENOVOSSkeleton;
