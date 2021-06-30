import { EventEmitter } from '../../../../stencil-public-runtime';
/**
 * @name Bottom Sheet
 * @description The sheet is a view that comes up from a specific direction (currently bottom) elevated over the main content and can be dragged by the user to expose more or less of their content.
 * @path layout/sheet
 * @documented true
 * @urlDesign design-guide-components-component-sheet-bottom.html
 */
export declare class ENOVOSBottomSheet {
  el: HTMLElement;
  swipe: EventEmitter;
  backdrop: boolean;
  moveTo: string;
  steps: number[];
  position?: string;
  backdropEl: any;
  hasBackdrop: boolean;
  hasHeaderSlot: boolean;
  hasFooterSlot: boolean;
  sheet: any;
  sheetBar: any;
  allowedTouch: boolean;
  isSwiping: boolean;
  pointerPosition: any;
  componentPosition: any;
  swipePosition: any;
  availableAnchors: number[];
  windowAnchors: number;
  windowAnchorHeight: number;
  minHeightAvailable: string;
  animationDuration: number;
  defaultZindex: any;
  eventStart: string;
  eventMove: string;
  eventEnd: string;
  _moveSwipingHandler: any;
  _endSwipingHandler: any;
  eventOptions: AddEventListenerOptions;
  classNames: {
    EL: string;
    WRAPPER: string;
    BAR: string;
    HEADER: string;
    CONTENT: string;
    FOOTER: string;
    ON_TOP: string;
    ON_BOTTOM: string;
    IS_SWIPING: string;
    BACKDROP: string;
    FADE_IN: string;
    OPEN: string;
  };
  /** INJECT_ANCHOR */
  /**
   * @description Open swipe sheet from bottom
   * @param position {string} The anchor position of the page
   */
  open(position: string, animation?: boolean): Promise<void>;
  handleTheme(): void;
  componentDidLoad(): void;
  componentWillLoad(): void;
  /**
   * @description Create a backdrop element under the sheet
   */
  createBackdrop(): void;
  /**
   * @description Delete the backdropEl element under the sheet
   */
  private deleteBackdrop;
  /**
   * @description Init HTMLElement variables and define the "indentation" of the page
   */
  initComponentConstants(): void;
  /**
   * @description Attache events depending if we are on mobile or not
   */
  initComponentEvents(): void;
  /**
   * @description When user click on the sheetbar and start the swipe
   * @param event The current event mouse/touch
   * @param clientY The vertical position of the event
   */
  startSwiping(event: any): any;
  /**
   * @description During the swipe of the sheet, set the position of the sheet on the page
   * @param event The current event mouse/touch
   * @param clientY The vertical position of the event
   */
  moveSwiping(event: any): any;
  /**
   * @description When the user stop to swipe the sheet. The sheet is automatically
   * moved to the closest anchor of the page depending the direction of the swipe
   * @param event The current event mouse/touch
   */
  endSwiping(event: any): any;
  /**
   * @description Kill attached events
   */
  private killEventListener;
  /**
   * @description Set position class of the main container (top/bottom)
   * @param topPosition {string} The final top position value of the sheet
   */
  private setPositionClasses;
  private setIndexSheet;
  private removeIndexSheet;
  /** REMOVABLE START */
  render(): any[];
}
