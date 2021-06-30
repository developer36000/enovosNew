/**
 * @name Badge
 * @description A badge displays additional information attached to an element.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-badge.html
 */
export declare class ENOVOSBadge {
  el: HTMLElement;
  text?: string;
  styles?: string;
  size?: string;
  rounded: boolean;
  mediaLeading?: string;
  classNames: {
    EL: string;
    MEDIA: string;
    LEADING: string;
    TEXT: string;
  };
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Get tooltip size
   */
  private getSize;
  /**
   * @description Control if text is present in badge
   */
  private noText;
  /**
   * @description Control if badge is fully rounded
   */
  private isRounded;
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasMediaLeading(): boolean;
  setClasses(): string;
  /** REMOVABLE START */
  render(): any;
}
