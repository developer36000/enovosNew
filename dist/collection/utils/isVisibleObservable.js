import IntersectionObserverPolyfill from './classes/intersection-observer/IntersectionObserver';
export class IsVisibleObservable {
  /**
   * @description Create the observable
   * @param element The item on which the event should be attached
   * @param callback The callback function to be executed when conditions are complete
   */
  constructor(element, callback, options) {
    this.element = element;
    this.options = options;
    this.callback = callback;
    this.initIntersectionObserver();
  }
  /**
   * @description Init observation and set callback
   */
  initIntersectionObserver() {
    if (this.element) {
      this.observer = new IntersectionObserverPolyfill((entries) => {
        entries.forEach(entry => {
          const { isIntersecting, intersectionRatio } = entry;
          if (isIntersecting === true || intersectionRatio > 0) {
            this.callback(true, entry);
          }
          else {
            this.callback(false, entry);
          }
        });
      }, this.options);
      this.observer.observe(this.element);
    }
  }
  /**
   * @description disconnect current observer
   */
  disconnectObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
}
