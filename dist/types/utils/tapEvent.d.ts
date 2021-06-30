export declare class TapEvent {
  touchstartX: number;
  touchstartY: number;
  touchendX: number;
  touchendY: number;
  treshold: number;
  allowedTouch: boolean;
  callback: any;
  delay: number;
  element: any;
  eventName: string;
  eventClick: string;
  eventTouchstart: string;
  eventTouchend: string;
  _clickItemHandler: any;
  _touchstartItemHandler: any;
  _touchendItemHandler: any;
  /**
   * @description Create the new custom event and assign variables
   * @param {HTMLElement} element The item on which the event should be attached
   * @param (function) callback The callback function to be executed when conditions are complete
   */
  constructor(element: any, callback: any, delay?: number);
  /**
   * @description Save the screen coordinates of the touch
   * @param {event} event The event data
   */
  onTouchStart(event: any): void;
  /**
   * @description Control the touch position at start and end. This can define
   * if user swipe or tap on device.
   * @param {event} event The event data
   */
  onTouchEnd(event: any): void;
  removeEvent(): void;
}
