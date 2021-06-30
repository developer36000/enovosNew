'use strict';

class TapEvent {
  /**
   * @description Create the new custom event and assign variables
   * @param {HTMLElement} element The item on which the event should be attached
   * @param (function) callback The callback function to be executed when conditions are complete
   */
  constructor(element, callback, delay = 300) {
    this.touchstartX = 0;
    this.touchstartY = 0;
    this.touchendX = 0;
    this.touchendY = 0;
    this.treshold = 0;
    this.allowedTouch = false; // Mobile or not
    this.delay = 300;
    // Event names
    this.eventName = 'click';
    this.eventClick = 'click';
    this.eventTouchstart = 'touchstart';
    this.eventTouchend = 'touchend';
    // Event functions
    this._clickItemHandler = undefined;
    this._touchstartItemHandler = undefined;
    this._touchendItemHandler = undefined;
    this.element = element;
    this.callback = callback;
    this.delay = delay;
    // Is device version ?
    this.allowedTouch = 'ontouchstart' in window;
    if (this.allowedTouch) {
      this.eventName = 'touchstart';
    }
    switch (this.eventName) {
      // Kill and re-assign custom event on click for default click event
      case 'click':
        this.element.removeEventListener(this.eventClick, this._clickItemHandler, { passive: false });
        this.element.addEventListener(this.eventClick, this._clickItemHandler = event => {
          this.callback(event);
        }, { passive: false });
        break;
      // Kill and re-assign custom event on touch start/end for touch device event
      case 'touchstart':
        this.element.removeEventListener(this.eventTouchstart, this._touchstartItemHandler);
        this.element.addEventListener(this.eventTouchstart, this._touchstartItemHandler = event => {
          this.onTouchStart(event);
        }, { passive: true });
        this.element.removeEventListener(this.eventTouchend, this._touchendItemHandler);
        this.element.addEventListener(this.eventTouchend, this._touchendItemHandler = event => {
          this.onTouchEnd(event);
        }, { passive: true });
        break;
    }
  }
  /**
   * @description Save the screen coordinates of the touch
   * @param {event} event The event data
   */
  onTouchStart(event) {
    this.touchstartX = event.changedTouches[0].screenX;
    this.touchstartY = event.changedTouches[0].screenY;
  }
  /**
   * @description Control the touch position at start and end. This can define
   * if user swipe or tap on device.
   * @param {event} event The event data
   */
  onTouchEnd(event) {
    const pageWidth = window.innerWidth || document.body.clientWidth;
    this.treshold = Math.max(1, Math.floor(0.01 * (pageWidth)));
    this.touchendX = event.changedTouches[0].screenX;
    this.touchendY = event.changedTouches[0].screenY;
    const x = this.touchendX - this.touchstartX;
    const y = this.touchendY - this.touchstartY;
    if (Math.abs(x) < this.treshold && Math.abs(y) < this.treshold) {
      // Tap
      setTimeout(() => this.callback(event), this.delay);
    }
  }
  removeEvent() {
    switch (this.eventName) {
      // Kill and re-assign custom event on click for default click event
      case 'click':
        this.element.removeEventListener(this.eventClick, this._clickItemHandler, { passive: false });
        break;
      // Kill and re-assign custom event on touch start/end for touch device event
      case 'touchstart':
        this.element.removeEventListener(this.eventTouchstart, this._touchstartItemHandler);
        this.element.removeEventListener(this.eventTouchend, this._touchendItemHandler);
        break;
    }
  }
}

exports.TapEvent = TapEvent;
