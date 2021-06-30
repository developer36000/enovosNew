export default class IntersectionObserver {
  root: any;
  rootMargin: any;
  thresholds: any;
  _root: any;
  _callback: any;
  _rootMargin: any;
  _targets: any;
  _quedEntries: any;
  _publicObserver: any;
  controller: any;
  /**
   * Creates new IntersectionObserver instance.
   *
   * @param {Function} callback - Callback function that will be invoked
   *      whenever one of the observed targets reaches new ratio value defined in "options.threshold".
   * @param {Object} [options = {}] - Optional configuration.
   * @param {IntersectionObserverController} controller - Associated controller instance.
   * @param {IntersectionObserver} publicObserver - This value will be used as
   *      a value of "this" binding for the callback function.
   */
  constructor(callback: any, options: {
    threshold: number;
    rootMargin: string;
    root: any;
  }, controller: any, publicObserver: any);
  /**
   * Adds provided target to observations list.
   *
   * @param {Element} target - DOM element to be observed.
   */
  observe(target: any): void;
  /**
   * Removes provided target from observations list.
   *
   * @param {Element} target - DOM element to stop observing.
   */
  unobserve(target: any): void;
  /**
   * Removes all targets from observations list
   * and disconnects observer from associated controller, i.e.
   * no updates will be invoked for it.
   */
  disconnect(): void;
  /**
   * Returns a list of queued observation entries and
   * clears the queue.
   *
   * @returns {Array}
   */
  takeRecords(): any;
  /**
   * Invokes callback function with a list
   * of queued entries if the last one is not empty.
   *
   * @private
   */
  notifySubscriber(): void;
  /**
   * Adds entry to the queue.
   *
   * @param {IntersectionObserverEntry} entry
   */
  queueEntry(entry: any): void;
  /**
   * Tells whether observer has queued entries.
   *
   * @returns {Boolean}
   */
  hasEntries(): boolean;
  /**
   * Updates intersection data of each observed target.
   *
   * @returns {Boolean} Returns "true" if intersection ratio or the rectangle of one of the
   *      observed targets has changed. This information is required for
   *      controller to decide whether to continue running the update cycle.
   */
  updateObservations(): boolean;
  /**
   * Finds index of the first threshold whose value is greater than provided ratio.
   * In case if there is no such value the amount of thresholds will be returned.
   *
   * @param {Number} ratio
   * @returns {Number}
   */
  getThresholdGreaterThan(ratio: any): number;
  /**
   * Calculates rectangle of root node with applied margins.
   *
   * @returns {ClientRect}
   */
  getRootRect(): {
    top: number;
    right: any;
    bottom: any;
    left: number;
    width: number;
    height: number;
  };
}
