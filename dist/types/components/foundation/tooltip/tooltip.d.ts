/**
 * @name Tooltip
 * @description Tooltips are short, informative messages that are displayed when a cursor is positioned on a target element.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-tooltip.html
 *
 * @prop --styles_[#{$color-name}]: Color of the tooltip (Ex. white, tertiary-800,...)
 * @prop --size_[md/sm/xs]: Size of the tooltip. Default is md.
 * @prop --placement_[top/bottom/left/right]: Placement of the tooltip. Default is top. It can be a combination of horizontal/vertifcal placement.
 */
export declare class ENOVOSTooltip {
  el: HTMLElement;
  autoInit?: boolean;
  size?: string;
  selector: string;
  styles?: string;
  text: string;
  placement?: string;
  timeoutValue?: number;
  notimeout?: boolean;
  pointer: boolean;
  elevationStyle?: string;
  elevationLevel?: string;
  availableVerticalPosition: string[];
  availableHorizontalPosition: string[];
  finalPlacement: any[];
  revertPlacement: any[];
  classNames: {
    EL: string;
    CONTENT: string;
    TEXT: string;
    POINTER: string;
    ACTIVE: string;
  };
  tooltip: any;
  tooltipRect: {
    width: number;
    height: number;
  };
  space: number;
  timeout: any;
  eventStart: string;
  eventEnd: string;
  attachmentMap: {
    TOP: string;
    RIGHT: string;
    BOTTOM: string;
    LEFT: string;
    CENTER: string;
  };
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  init(): Promise<void>;
  closeTooltip(): Promise<void>;
  /**
   * @description Add event listener on targer element
   */
  initEventsListener(el: any): void;
  /**
   * @description Trigger mouse over element on target element
   */
  showTooltip(): void;
  /**
   * @description Hide the tooltip, removing the active class
   */
  hideTooltip(): void;
  /**
   * @description Hide the tooltip, removing the active class
   * @param el {HTMLElement} The target element on which the tooltip is attached
   * @param placement {string} The position of the tooltip compared to target element
   */
  setPosition(el: any, placement: any): {
    left: number;
    top: number;
  };
  /**
   * @description Check if the position of the tooltip is visible in the view port
   * Check on the extrem point of the tooltip for each direction. For example, if the
   * position of the tooltip is right, check if the right corner of the tooltip is visible
   * or not
   */
  isInViewPort(): any;
  private getSize;
  /** REMOVABLE START */
  render(): any;
}
