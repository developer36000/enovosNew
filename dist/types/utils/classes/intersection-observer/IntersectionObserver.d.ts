/**
 * IntersectionObservers' "Proxy" class which is meant to hide private
 * properties and methods from IntersectionObserver instances.
 *
 * Additionally it implements "idleTimeout" and "trackHovers" static property
 * accessors to give a control over the behavior of IntersectionObserverController
 * instance. Changes made to these properties will affect both future and
 * existing instances of IntersectionObserver.
 */
declare class IntersectionObserver {
  /**
   * Creates instance of public IntersectionObserver.
   *
   * @param {Function} callback
   * @param {Object} options
   */
  constructor(callback: any, options: any);
  /**
   * Extracts controllers' idle timeout value.
   *
   * @returns {Number}
   */
  static get idleTimeout(): any;
  /**
   * Sets up new idle timeout.
   *
   * @param {Number} value - New timeout value.
   */
  static set idleTimeout(value: any);
  /**
   * Tells whether controller tracks "hover" events.
   *
   * @returns {Boolean}
   */
  static get trackHovers(): any;
  /**
   * Enables or disables tracking of "hover" event.
   *
   * @param {Boolean} value - Whether to disable or enable tracking.
   */
  static set trackHovers(value: any);
}
export default IntersectionObserver;
