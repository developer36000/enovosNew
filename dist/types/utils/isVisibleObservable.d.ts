export declare class IsVisibleObservable {
  element: Element;
  observer: IntersectionObserver;
  callback: (isIntersecting: boolean, entry: IntersectionObserverEntry) => any;
  options: IntersectionObserverInit;
  /**
   * @description Create the observable
   * @param element The item on which the event should be attached
   * @param callback The callback function to be executed when conditions are complete
   */
  constructor(element: Element, callback: (isIntersecting: boolean, entry: IntersectionObserverEntry) => any, options: IntersectionObserverInit);
  /**
   * @description Init observation and set callback
   */
  initIntersectionObserver(): void;
  /**
   * @description disconnect current observer
   */
  disconnectObserver(): void;
}
