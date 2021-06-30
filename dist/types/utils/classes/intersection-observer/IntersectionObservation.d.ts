/**
 * This class is responsible for computing and keeping track of intersections
 * between target element and its container. It will create and queue for notification
 * new IntersectionObserverEntry when intersection ratio reaches new thresholded value.
 */
export default class IntersectionObservation {
  target: any;
  observer: any;
  prevTargetRect: any;
  prevThreshold: any;
  prevRatio: any;
  /**
   * Creates instance of IntersectionObservation.
   *
   * @param {Element} target - Element being observed.
   * @param {IntersectionObserver} observer - Associated IntersectionObserver.
   */
  constructor(target: any, observer: any);
  /**
   * Updates intersection data. Creates and queues new
   * IntersectionObserverEntry if intersection threshold has changed.
   *
   * @param {Object} root - Element for which to compute intersection.
   * @param {ClientRect} rootRect - Rectangle of root element.
   * @returns {Object} An object with information about detected changes:
   *  {
   *      ratioChanged: boolean,
   *      targetRectChanged: boolean,
   *      thresholdChanged: boolean
   *  }
   */
  updateIntersection(root: any, rootRect: any): {
    ratioChanged: boolean;
    thresholdChanged: any;
    targetRectChanged: boolean;
  };
  /**
   * Computes intersection data.
   *
   * @param {Element} container - Container element.
   * @param {ClientRect} [containterRect]
   * @param {ClientRect} [targetRect]
   * @returns {Object}
   */
  getIntersectionData(container: any, containterRect: any, targetRect: any): {
    rect: any;
    ratio: number;
    exists: boolean;
  };
}
