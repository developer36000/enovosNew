'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');
const anime_es = require('./anime.es-f0c8bd08.js');

const bottomSheetCss = "body.sheet--open{overflow:hidden}[name=sheet]{position:fixed;left:0;right:0;top:100%;z-index:6000;display:block;width:100%;height:100%;transition:all 0.1s ease}[name=sheet]:after{position:absolute;left:0;right:0;top:100%;z-index:2;display:none;width:100%;height:100vh;content:\"\"}[name=sheet].sheet--open:after{display:block}[name=sheet].sheet--on-top .sheet__content{overflow:scroll;pointer-events:inherit}[name=sheet].sheet--on-bottom{background-color:transparent}[name=sheet].sheet--on-bottom .sheet__bar{opacity:0;visibility:hidden}[name=sheet].sheet--on-bottom .sheet__content{opacity:0;visibility:hidden}[name=sheet].sheet--fit-content{height:auto}[name=sheet].sheet--is-swiping{transition:none}[name=sheet].sheet--is-swiping:after{display:block}[name=sheet].sheet--is-swiping .sheet__content{height:100vh !important}[name=sheet] .sheet__bar{position:absolute;left:0;right:0;top:0;z-index:3;width:100%;opacity:1;visibility:visible;transition:all 0.1s ease;cursor:pointer}[name=sheet] .sheet__bar:before{position:absolute;left:0;right:0;top:0;border:none;content:\"\";outline:none}[name=sheet] .sheet__wrapper{position:relative;z-index:2;display:flex;flex-direction:column;width:100%;height:100%}[name=sheet] .sheet__content{height:100%;overflow:hidden;pointer-events:none;opacity:1;visibility:visible;transition:all 0.1s ease;-ms-scroll-chaining:none;overscroll-behavior:none;-webkit-overflow-scrolling:touch}[name=sheet] .sheet__backdrop{position:fixed;left:0;top:0;z-index:1;width:100vw;height:100vh;opacity:0;transition:opacity 0.1s linear}[name=sheet] .sheet__backdrop.fade-in{opacity:0.5}@media (min-width : 1440px){[name=sheet] .sheet__header{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0}[name=sheet] .sheet__content{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0}}@media (max-width : 1439px){[name=sheet] .sheet__header{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0}[name=sheet] .sheet__content{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0}}@media (max-width : 1151px){[name=sheet] .sheet__header{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0}[name=sheet] .sheet__content{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0}}@media (max-width : 863px){[name=sheet] .sheet__header{padding-left:12px;padding-right:12px;padding-top:0;padding-bottom:0}[name=sheet] .sheet__content{padding-left:12px;padding-right:12px;padding-top:0;padding-bottom:0}}@media (max-width : 639px){[name=sheet] .sheet__header{padding-left:24px;padding-right:24px;padding-top:0;padding-bottom:0}[name=sheet] .sheet__content{padding-left:24px;padding-right:24px;padding-top:0;padding-bottom:0}}@media (max-width : 320px){[name=sheet] .sheet__header{padding-left:24px;padding-right:24px;padding-top:0;padding-bottom:0}[name=sheet] .sheet__content{padding-left:24px;padding-right:24px;padding-top:0;padding-bottom:0}}[name=sheet].sheet{border-radius:24px 24px 0 0}[name=sheet].sheet .sheet__bar{height:4px;border-radius:24px 24px 0 0}[name=sheet].sheet .sheet__bar:before{width:64px;height:4px;margin:14px auto 16px;border-radius:2px}[name=sheet].sheet .sheet__wrapper{padding:32px 0 0 0}[name=sheet].sheet:after{background-color:#FFFFFF}[name=sheet].sheet .sheet__bar{background-color:#FFFFFF}[name=sheet].sheet .sheet__bar:before{background-color:#5A8D00}[name=sheet].sheet .sheet__wrapper{background-color:#FFFFFF}[name=sheet].sheet .sheet__backdrop{background-color:#5E5E5E}";

const ENOVOSBottomSheet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.swipe = index.createEvent(this, "swipe", 7);
    this.position = 'bottom';
    this.backdropEl = undefined;
    this.hasBackdrop = false;
    this.allowedTouch = false; // Mobile or not
    this.isSwiping = false; // Is the sheet is sweep or not
    this.availableAnchors = [25, 50, 75, 100];
    this.windowAnchors = 4; // Number of step inside the page (default is 0, 25, 50 75, 100)
    this.windowAnchorHeight = 0; // The size of the step in the page depending the "indentation" of the page
    this.minHeightAvailable = '0';
    this.animationDuration = 250;
    // Event names
    this.eventStart = 'mousedown';
    this.eventMove = 'mousemove';
    this.eventEnd = 'mouseup';
    this._moveSwipingHandler = undefined;
    this._endSwipingHandler = undefined;
    this.eventOptions = {
      passive: false,
    };
    this.classNames = {
      EL: 'sheet',
      WRAPPER: '__wrapper',
      BAR: '__bar',
      HEADER: '__header',
      CONTENT: '__content',
      FOOTER: '__footer',
      ON_TOP: '--on-top',
      ON_BOTTOM: '--on-bottom',
      IS_SWIPING: '--is-swiping',
      BACKDROP: '__backdrop',
      FADE_IN: 'fade-in',
      OPEN: '--open',
    };
  }
  /** INJECT_ANCHOR */
  /**
   * @description Open swipe sheet from bottom
   * @param position {string} The anchor position of the page
   */
  async open(position, animation = true) {
    const intPosition = parseInt(position, 10);
    let openingAnchor = 0;
    let topPosition = this.minHeightAvailable;
    if (this.availableAnchors.includes(intPosition)) {
      openingAnchor = ((100 - intPosition) / (100 / this.windowAnchors));
    }
    if (this.moveTo !== 'content') {
      topPosition = '0';
      if (this.steps && this.steps.length > 0 && openingAnchor === 0) {
        topPosition = `${Math.min(...this.steps)}%`;
      }
      else if (openingAnchor < this.windowAnchors) {
        topPosition = (100 - (100 - (openingAnchor * (100 / this.windowAnchors)))) + '%';
      }
    }
    this.setIndexSheet();
    this.setPositionClasses(topPosition);
    setTimeout(() => {
      this.createBackdrop();
    }, 1);
    // Anime sheet to the final position
    if (animation) {
      anime_es.anime({
        targets: this.sheet,
        top: topPosition,
        duration: this.animationDuration,
        easing: 'easeInOutSine',
      });
    }
    else {
      this.sheet.style.top = topPosition;
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    this.el.classList.add(`${this.classNames.EL}`);
    if (this.moveTo === 'content') {
      this.el.classList.add(`${this.classNames.EL}--fit-content`);
    }
    if (this.steps && this.steps.length > 0) {
      this.windowAnchors = this.steps.length;
      const minStep = Math.min(...this.steps);
      this.minHeightAvailable = `${100 - minStep}%`;
      if (minStep === 0) { // 0 is not a anchor of the page
        this.windowAnchors -= 1;
      }
    }
    this.initComponentConstants();
    this.initComponentEvents();
  }
  componentWillLoad() {
    this.hasHeaderSlot = !!this.el.querySelector(`[slot="${this.classNames.EL}${this.classNames.HEADER}"]`);
    this.hasFooterSlot = !!this.el.querySelector(`[slot="${this.classNames.EL}${this.classNames.FOOTER}"]`);
    if (this.hasHeaderSlot) {
      const headerSlot = this.el.querySelector(`[slot="${this.classNames.EL}${this.classNames.HEADER}"]`);
      headerSlot.classList.add(`${this.classNames.EL}${this.classNames.HEADER}`);
    }
    if (this.hasFooterSlot) {
      const footerSlot = this.el.querySelector(`[slot="${this.classNames.EL}${this.classNames.FOOTER}"]`);
      footerSlot.classList.add(`${this.classNames.EL}${this.classNames.FOOTER}`);
    }
  }
  /**
   * @description Create a backdrop element under the sheet
   */
  createBackdrop() {
    if (!this.hasBackdrop && this.backdrop) {
      this.hasBackdrop = true;
      const backdropEl = document.createElement('div');
      backdropEl.className = `${this.classNames.EL}${this.classNames.BACKDROP}`;
      this.el.appendChild(backdropEl);
      this.backdropEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.BACKDROP}`);
      setTimeout(() => {
        this.backdropEl.classList.add(`${this.classNames.FADE_IN}`);
      }, 1);
    }
  }
  /**
   * @description Delete the backdropEl element under the sheet
   */
  deleteBackdrop() {
    if (this.backdrop) {
      this.backdropEl.classList.remove(`${this.classNames.FADE_IN}`);
      setTimeout(() => {
        if (this.backdropEl) {
          this.el.removeChild(this.backdropEl);
          this.backdropEl = undefined;
          this.hasBackdrop = false;
        }
      }, this.animationDuration);
    }
  }
  /**
   * @description Init HTMLElement variables and define the "indentation" of the page
   */
  initComponentConstants() {
    this.sheet = this.el;
    this.sheetBar = this.el.querySelector(`.${this.classNames.EL}${this.classNames.BAR}`);
    const heightWindow = window.innerHeight;
    const heightSheet = this.sheet.scrollHeight;
    const maxSwipeheight = (heightSheet > heightWindow) ? heightWindow : heightSheet;
    switch (this.moveTo) {
      case 'content':
        // In case the swipe shoud be done depending the height of the sheet
        // Consider there's only one anchor and the user can show/hide the sheet
        this.windowAnchors = 1;
        this.windowAnchorHeight = maxSwipeheight;
        this.minHeightAvailable = 'calc(100% - ' + maxSwipeheight + 'px )';
        this.sheet.style.height = maxSwipeheight + 'px';
        break;
      default:
        this.windowAnchorHeight = heightWindow / this.windowAnchors;
        break;
    }
    this.sheet.style.top = '100%';
    this.sheet.classList.add(`${this.classNames.EL}${this.classNames.ON_BOTTOM}`);
  }
  /**
   * @description Attache events depending if we are on mobile or not
   */
  initComponentEvents() {
    this.allowedTouch = 'ontouchstart' in window;
    if (this.allowedTouch) {
      this.eventStart = 'touchstart';
      this.eventMove = 'touchmove';
      this.eventEnd = 'touchend';
    }
    this.sheetBar.addEventListener(this.eventStart, e => this.startSwiping(e), this.eventOptions);
  }
  /**
   * @description When user click on the sheetbar and start the swipe
   * @param event The current event mouse/touch
   * @param clientY The vertical position of the event
   */
  startSwiping(event) {
    const clientY = (event['touches']) ? event.touches[0].clientY : event.clientY;
    event.preventDefault();
    // Kill attached events
    this.killEventListener();
    if (event.target.className === `${this.classNames.EL}${this.classNames.BAR}`) {
      // The swiping is moved by user
      this.isSwiping = true;
      // Init the starting position where user start
      this.pointerPosition = Math.round(clientY);
      // Set the component position on the page
      this.componentPosition = this.sheet.offsetTop * -1;
      // Restore background
      this.sheet.classList.remove(`${this.classNames.EL}${this.classNames.ON_BOTTOM}`);
      this.createBackdrop();
      // Attach event to document only after start swiping
      document.addEventListener(this.eventMove, this._moveSwipingHandler = e => this.moveSwiping(e), this.eventOptions);
      document.addEventListener(this.eventEnd, this._endSwipingHandler = e => this.endSwiping(e), this.eventOptions);
    }
  }
  /**
   * @description During the swipe of the sheet, set the position of the sheet on the page
   * @param event The current event mouse/touch
   * @param clientY The vertical position of the event
   */
  moveSwiping(event) {
    const clientY = (event['touches']) ? event.touches[0].clientY : event.clientY;
    this.sheet.classList.add(`${this.classNames.EL}${this.classNames.IS_SWIPING}`);
    event.preventDefault();
    if (this.isSwiping) {
      this.swipePosition = Math.round(clientY) - this.pointerPosition;
      this.sheet.style.top = (this.swipePosition - this.componentPosition) + 'px';
    }
  }
  /**
   * @description When the user stop to swipe the sheet. The sheet is automatically
   * moved to the closest anchor of the page depending the direction of the swipe
   * @param event The current event mouse/touch
   */
  endSwiping(event) {
    event.preventDefault();
    this.isSwiping = false;
    this.sheet.classList.remove(`${this.classNames.EL}${this.classNames.IS_SWIPING}`);
    const finalPosition = this.pointerPosition + this.swipePosition;
    const direction = (this.swipePosition > 0) ? 'bottom' : 'top';
    let topPosition = '100%';
    if (finalPosition < 0 || (direction === 'top'
      && this.windowAnchors === 1)) { // One step, display the sheet
      topPosition = (this.steps && this.steps.length > 0) ? '0' : this.minHeightAvailable;
    }
    else if (finalPosition > window.innerHeight ||
      (direction === 'bottom' && this.windowAnchors === 1)) { // One step, hide the sheet
      topPosition = (this.steps && this.steps.length > 0) ? this.minHeightAvailable : '100%';
    }
    else { // Multiple anchor, stick to the closest anchor depending the direction
      let stepNb = 0;
      let targetSection = stepNb;
      while (stepNb <= this.windowAnchors) {
        if ((finalPosition >= (stepNb * this.windowAnchorHeight)) &&
          (finalPosition <= ((stepNb + 1) * this.windowAnchorHeight))) {
          targetSection = (direction === 'bottom') ? stepNb + 1 : stepNb;
        }
        stepNb++;
      }
      if (direction === 'bottom' && targetSection === this.windowAnchors) {
        topPosition = (this.steps && this.steps.length > 0) ? this.minHeightAvailable : '100%';
      }
      else if (direction === 'top' && targetSection === 0) {
        topPosition = (this.steps && this.steps.length > 0) ? '0' : this.minHeightAvailable;
      }
      else {
        topPosition = (100 - (100 - (targetSection * (100 / this.windowAnchors)))) + '%';
      }
    }
    this.setPositionClasses(topPosition);
    // Set the final position of the sheet
    this.sheet.style.top = topPosition;
    // Kill attached events
    this.killEventListener();
  }
  /**
   * @description Kill attached events
   */
  killEventListener() {
    document.removeEventListener(this.eventMove, this._moveSwipingHandler, this.eventOptions);
    document.removeEventListener(this.eventEnd, this._endSwipingHandler, this.eventOptions);
    this._moveSwipingHandler = undefined;
    this._endSwipingHandler = undefined;
  }
  /**
   * @description Set position class of the main container (top/bottom)
   * @param topPosition {string} The final top position value of the sheet
   */
  setPositionClasses(topPosition) {
    const intTopPosition = parseInt(topPosition, 10);
    switch (intTopPosition) {
      case 100:
        this.sheet.classList.add(`${this.classNames.EL}${this.classNames.ON_BOTTOM}`);
        this.sheet.classList.remove(`${this.classNames.EL}${this.classNames.ON_TOP}`);
        this.el.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`);
        this.removeIndexSheet();
        this.deleteBackdrop();
        break;
      case 0:
      case parseInt(this.minHeightAvailable, 10):
        if (intTopPosition === 0) {
          this.sheet.classList.add(`${this.classNames.EL}${this.classNames.ON_TOP}`);
        }
        else {
          this.sheet.classList.remove(`${this.classNames.EL}${this.classNames.ON_TOP}`);
        }
        this.sheet.classList.remove(`${this.classNames.EL}${this.classNames.ON_BOTTOM}`);
        this.el.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
        document.body.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
        break;
      default:
        this.sheet.classList.remove(`${this.classNames.EL}${this.classNames.ON_TOP}`);
        this.sheet.classList.remove(`${this.classNames.EL}${this.classNames.ON_BOTTOM}`);
        this.el.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
        document.body.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`);
        break;
    }
    this.swipe.emit(intTopPosition);
  }
  setIndexSheet() {
    const existingSheets = document.querySelectorAll(`.${this.classNames.EL}${this.classNames.OPEN}[name="${this.classNames.EL}"]`);
    this.defaultZindex = parseInt(window.getComputedStyle(this.el).getPropertyValue('z-index'), 10);
    if (existingSheets.length > 0) {
      this.el.style.zIndex = this.defaultZindex + existingSheets.length;
    }
  }
  removeIndexSheet() {
    this.el.style.zIndex = this.defaultZindex;
    const existingSheets = document.querySelectorAll(`.${this.classNames.EL}${this.classNames.OPEN}[name="${this.classNames.EL}"]`);
    if (existingSheets.length <= 0) {
      document.body.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`);
    }
  }
  /** REMOVABLE START */
  render() {
    return [
      index.h("div", { class: `${this.classNames.EL}${this.classNames.BAR}` }),
      index.h("div", { class: `${this.classNames.EL}${this.classNames.WRAPPER}` }, this.hasHeaderSlot
        ? index.h("slot", { name: `${this.classNames.EL}${this.classNames.HEADER}` })
        : '', index.h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}` }, index.h("slot", null), this.hasFooterSlot
        ? index.h("slot", { name: `${this.classNames.EL}${this.classNames.FOOTER}` })
        : '')),
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSBottomSheet.style = bottomSheetCss;

exports.eds_bottom_sheet = ENOVOSBottomSheet;
