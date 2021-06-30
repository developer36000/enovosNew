'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');
const tapEvent = require('./tapEvent-39dbfe4f.js');

const sideSheetCss = "body.side-sheet--open{overflow:hidden}[name=side-sheet]{position:fixed;top:0;bottom:0;z-index:6002;display:block;width:50%;height:100%;opacity:0;visibility:hidden;transition:all 0.3s ease-in-out}[name=side-sheet].side-sheet--open{opacity:1;visibility:visible}[name=side-sheet].side-sheet--on-right{right:-100%}[name=side-sheet].side-sheet--on-right.side-sheet--open{right:0}[name=side-sheet].side-sheet--on-right.side-sheet--on-bottom{right:0;top:inherit;bottom:-100%}[name=side-sheet].side-sheet--on-right.side-sheet--on-bottom.side-sheet--open{bottom:0}[name=side-sheet].side-sheet--on-left{left:-100%}[name=side-sheet].side-sheet--on-left.side-sheet--open{left:0}[name=side-sheet] .side-sheet__wrapper{position:relative;z-index:2;display:flex;flex-direction:column;width:100%;height:100%;line-height:initial}[name=side-sheet] .side-sheet__content{height:100%;overflow-x:hidden;overflow-y:auto;opacity:1;visibility:visible;transition:all 0.3s ease-in-out;-ms-scroll-chaining:none;overscroll-behavior:none;-webkit-overflow-scrolling:touch}[name=side-sheet] .side-sheet__backdrop{position:fixed;left:0;top:0;z-index:1;width:100vw;height:100vh;opacity:0;transition:opacity 0.3s linear}[name=side-sheet] .side-sheet__backdrop.fade-in{opacity:0.5}[name=side-sheet].side-sheet:after{background-color:#FFFFFF}[name=side-sheet].side-sheet .side-sheet__wrapper{background-color:#FFFFFF}[name=side-sheet].side-sheet .side-sheet__backdrop{background-color:#6D7278}[name=side-sheet].theme--dark.side-sheet:after{background-color:#FFFFFF}[name=side-sheet].theme--dark.side-sheet .side-sheet__wrapper{background-color:#FFFFFF}[name=side-sheet].theme--dark.side-sheet .side-sheet__backdrop{background-color:#6D7278}";

const ENOVOSSideSheet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closeSideSheetHandler = index.createEvent(this, "closeSideSheetHandler", 7);
    this.ignoreBackdropClick = false;
    this.backdrop = true;
    this.position = 'right';
    this.elevationStyle = 'dark';
    this.elevationLevel = '4';
    this.backdropEl = undefined;
    this.availablePosition = ['left', 'right', 'bottom right'];
    this.animationDuration = 250;
    this._clickBackdropHandler = undefined;
    this.classNames = {
      EL: 'side-sheet',
      WRAPPER: '__wrapper',
      CONTENT: '__content',
      ON: '--on-',
      BACKDROP: '__backdrop',
      FADE_IN: 'fade-in',
      OPEN: '--open',
    };
  }
  /** INJECT_ANCHOR */
  async open() {
    this.el.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
    this.createBackdrop();
  }
  async close() {
    this.el.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`);
    this.deleteBackdrop();
    this.closeSideSheetHandler.emit();
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
    this.el.classList.add(`${this.classNames.EL}`);
  }
  componentWillRender() {
    this.availablePosition.map(item => {
      const availablePositionClasses = item.split(' ');
      availablePositionClasses.map(availablePositionClasse => {
        this.el.classList.remove(`${this.classNames.EL}${this.classNames.ON}${availablePositionClasse}`);
      });
    });
    if (this.availablePosition.includes(this.position)) {
      const availablePositionClasses = this.position.split(' ');
      availablePositionClasses.map(availablePositionClasse => {
        this.el.classList.add(`${this.classNames.EL}${this.classNames.ON}${availablePositionClasse}`);
      });
    }
    const regexSize = /\d+(%|px\b)/g;
    if (this.size !== undefined && regexSize.exec(this.size) !== null) {
      this.el.style.width = this.size;
    }
  }
  /**
   * @description Create a backdrop element under the sheet
   */
  createBackdrop() {
    if (this.backdrop === true) {
      if (!this.backdropEl) {
        this.backdropEl = document.createElement('div');
        this.backdropEl.className = `${this.classNames.EL}${this.classNames.BACKDROP}`;
        document.body.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
        this.el.querySelector(`.${this.classNames.EL}`).appendChild(this.backdropEl);
        this.handleEvent();
      }
      setTimeout(() => {
        this.backdropEl.classList.add(`${this.classNames.FADE_IN}`);
      }, 1);
    }
  }
  /**
   * @description Delete the backdrop element under the dialog
   */
  deleteBackdrop() {
    if (this.backdrop === true) {
      this.backdropEl.classList.remove(`${this.classNames.FADE_IN}`);
      setTimeout(() => {
        if (this.backdropEl) {
          this.el.querySelector(`.${this.classNames.EL}`).removeChild(this.backdropEl);
          this.backdropEl = undefined;
          document.body.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`);
        }
      }, this.animationDuration);
    }
  }
  /**
   * @description Event closing the dialog by clicking on the backdrop
   */
  handleEvent() {
    const backdropItem = this.el.querySelector(`.${this.classNames.EL}${this.classNames.BACKDROP}`);
    if (this.ignoreBackdropClick === false && backdropItem) {
      if (this._clickBackdropHandler && typeof this._clickBackdropHandler === 'object') {
        this._clickBackdropHandler.removeEvent();
      }
      this._clickBackdropHandler = new tapEvent.TapEvent(backdropItem, () => {
        this.close();
      });
    }
  }
  /** REMOVABLE START */
  render() {
    return (index.h("eds-elevation", { styles: this.elevationStyle, level: this.elevationLevel, class: this.classNames.EL }, index.h("div", { class: `${this.classNames.EL}${this.classNames.WRAPPER}` }, index.h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}` }, index.h("slot", null)))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSSideSheet.style = sideSheetCss;

exports.eds_side_sheet = ENOVOSSideSheet;
