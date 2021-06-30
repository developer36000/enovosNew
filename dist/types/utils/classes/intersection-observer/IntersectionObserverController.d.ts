/**
 * Controller class that is used to handle updates of registered IntersectionObservers.
 * It controls when and for how long it's necessary to run updates of observations
 * by listening to various events on window along with DOM mutations
 * (nodes removal, changes of attributes, etc.).
 *
 * CSS transitions and animations are handled by running the update cycle
 * until position of DOM elements, added to connected observers, keeps changing
 * or until the idle timeout is reached (default timeout is 50 milliseconds).
 * Timeout value can be manually increased if transitions have a delay.
 *
 * Tracking of changes made by ":hover" class is optional and can be
 * enabled by invoking the "enableHover" method.
 *
 * Infinite update cycle along with a listener of "click" event will be used in case when
 * MutatioObserver is not supported.
 */
export default class IntersectionObserverController {
  _idleTimeout: any;
  _trackHovers: any;
  _cycleStartTime: any;
  _isUpdateScheduled: any;
  _repeatCycle: any;
  _hoverInitiated: any;
  _mutationsObserver: any;
  _isListening: any;
  _observers: any;
  _repeatHandler: any;
  _onMouseOver: any;
  /**
   * Creates new IntersectionObserverController instance.
   *
   * @param {Number} [idleTimeout = 50]
   * @pram {Boolean} [trackHovers = false] - Whether to track "mouseover"
   *      events or not. Disabled be default.
   */
  constructor(idleTimeout?: number, trackHovers?: boolean);
  /**
   * Returns current idle timeout value.
   *
   * @returns {Number}
   */
  get idleTimeout(): any;
  /**
   * Sets up new idle timeout value.
   *
   * @param {Number} value - New timeout value.
   */
  set idleTimeout(value: any);
  /**
   * Adds observer to observers list.
   *
   * @param {IntersectionObserver} observer - Observer to be added.
   */
  connect(observer: any): void;
  /**
   * Removes observer from observers list.
   *
   * @param {IntersectionObserver} observer - Observer to be removed.
   */
  disconnect(observer: any): void;
  /**
   * Tells whether provided observer is connected to controller.
   *
   * @param {IntersectionObserver} observer - Observer to be checked.
   * @returns {Boolean}
   */
  isConnected(observer: any): boolean;
  /**
   * Updates every observer from observers list and
   * notifies them of queued entries.
   *
   * @private
   * @returns {Boolean} Returns "true" if any observer
   *      has detected changes in position of its elements.
   */
  _updateObservers(): boolean;
  /**
   * Schedules new update cycle.
   */
  startUpdateCycle(): void;
  /**
   * Controls invocation of "_updateObservers" method.
   * It will re-invoke itself in the following cases:
   *      - Update of observers detected changes in elements position.
   *        In this case we need to postpone cycle end time in order to ensure
   *        that we won't miss next iteration of animations.
   *
   *      - Idle timeout wasn't reached yet.
   *        In this case we need to schedule new single update
   *        because changes may be delayed.
   *
   * @param {Number} [timestamp] - Internal parameter
   *      that is used to define whether method was invoked
   *      as a callback of requestAnimationFrame.
   */
  scheduleUpdate(timestamp?: any): void;
  /**
   * Tells whether cycle has reached its idle timeout.
   *
   * @private
   * @returns {Boolean}
   */
  _hasIdleTimeEnded(): boolean;
  /**
   * Tells whether the update cycle is currently running.
   *
   * @private
   * @returns {Boolean}
   */
  _wasCycleStarted(): boolean;
  /**
   * Callback that will be invoked after the update cycle is finished.
   *
   * @private
   */
  _onCycleEnded(): void;
  /**
   * Initializes DOM listeners.
   *
   * @private
   */
  _initListeners(): void;
  /**
   * Removes all DOM listeners.
   *
   * @private
   */
  _removeListeners(): void;
  /**
   * Enables hover listener.
   */
  enableHover(): void;
  /**
   * Disables hover listener.
   */
  disableHover(): void;
  /**
   * Tells whether hover listener is enabled.
   *
   * @returns {Boolean}
   */
  isHoverEnabled(): any;
  /**
   * Adds "mouseover" listener if it wasn't already added.
   *
   * @private
   */
  _addHoverListener(): void;
  /**
   * Removes "mouseover" listener if it was added previously.
   *
   * @private
   */
  _removeHoverListener(): void;
  /**
   * DOM mutations handler.
   *
   * @private
   * @param {Array<MutationRecord>} entries
   */
  _onMutation(entries: any): void;
}
