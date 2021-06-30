import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Dialog
 * @description A dialog displays a container over the main content with/without a backdrop. Content can be easily managed using the specific section slots.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-dialog.html
 */
export declare class ENOVOSDialog {
  el: HTMLElement;
  clickBackdropHandler: EventEmitter;
  ignoreBackdropClick: boolean;
  size?: string;
  columns?: number;
  columnsFluid: boolean;
  disableScroll: boolean;
  verticalAlignment?: string;
  disableAnimations?: boolean;
  backdropRef: HTMLElement;
  contentRef: HTMLElement;
  animationDuration: number;
  classNames: {
    EL: string;
    DIALOG: string;
    CONTENT: string;
    HEADER: string;
    BODY: string;
    FOOTER: string;
    BACKDROP: string;
    FADE_IN: string;
    OPEN: string;
    EMPTY: string;
    NO_ANIMATIONS: string;
  };
  /** INJECT_ANCHOR */
  /**
   * Init the host element, move the dialog inside DOM to the body
   * The dialog is natively hidden
   */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  private backdropClickHandler;
  /**
   * @description Open dialog method
   */
  open(): Promise<any>;
  /**
   * @description Close dialog method
   */
  close(): Promise<any>;
  /**
   * @description Display backdrop (using CSS)
   */
  showBackdrop(): void;
  /**
   * @description Hide backdrop (using CSS)
   */
  hideBackdrop(): void;
  /**
   * @description Open/Hide the dialog depending the "open" variable with transitions
   */
  toggleDialog(open: any): any;
  /**
   * @description Get tooltip size
   */
  private getSize;
  /**
   * @description Get tooltip size
   */
  private getColumnsSize;
  /** REMOVABLE START */
  render(): any;
}
