import { EventEmitter } from '../../../../stencil-public-runtime';
/**
 * @name Side Sheet
 * @description A side sheet is a view containing additional content that slides in from a defined side and is elevated over the main content.
 * @path layout/sheet
 * @documented true
 */
export declare class ENOVOSSideSheet {
  el: HTMLElement;
  closeSideSheetHandler: EventEmitter;
  ignoreBackdropClick: boolean;
  backdrop: boolean;
  position?: string;
  size?: string;
  elevationStyle?: string;
  elevationLevel?: string;
  backdropEl: any;
  availablePosition: string[];
  sheet: any;
  animationDuration: number;
  _clickBackdropHandler: any;
  classNames: {
    EL: string;
    WRAPPER: string;
    CONTENT: string;
    ON: string;
    BACKDROP: string;
    FADE_IN: string;
    OPEN: string;
  };
  /** INJECT_ANCHOR */
  open(): Promise<void>;
  close(): Promise<void>;
  handleTheme(): void;
  componentDidLoad(): void;
  componentWillRender(): void;
  /**
   * @description Create a backdrop element under the sheet
   */
  createBackdrop(): void;
  /**
   * @description Delete the backdrop element under the dialog
   */
  private deleteBackdrop;
  /**
   * @description Event closing the dialog by clicking on the backdrop
   */
  private handleEvent;
  /** REMOVABLE START */
  render(): any;
}
