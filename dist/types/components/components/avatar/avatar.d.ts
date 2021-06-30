/**
 * @name Avatar
 * @description The Avatar, primarly used for profile images, displays an optional image with rounded border and elevation. In case there's no image, it display a predefined icon. Elevation configuration and icon specification can be configured. Declined in 4 sizes (extra small, small, medium and large).
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-avatar.html
 */
export declare class ENOVOSAvatar {
  el: HTMLElement;
  src?: string;
  size?: string;
  elevationStyle?: string;
  elevationLevel?: string;
  icon?: string;
  iconStyle?: string;
  classNames: {
    EL: string;
    IMG: string;
    CONTAINER: string;
    ICON: string;
  };
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Get component size
   */
  private getSize;
  /** REMOVABLE START */
  render(): any;
}
