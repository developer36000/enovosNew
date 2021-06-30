/**
 * @name Icon
 * @description Icons represent tasks or types of content.
 * @path foundation/media
 * @urlDesign design-ressources-iconography.html
 * @prop --icon_*: The icon name is based on Icon collection names.
 * @prop --size_(n): The size of the icon can be defined by this parameter. It is a multiplier based on a specific ratio defined by the Design System. (Ex. 8x, x2, 18px)
 * @prop --styles_[black, white, #{$color-name}-#{'' + $variation}]: Color of the icon
 * @documented true
 */
export declare class ENOVOSIcon {
  el: HTMLElement;
  icon: string;
  size?: string;
  styles?: string;
  classNames: {
    EL: string;
  };
  /** INJECT_ANCHOR */
  handleTheme(): void;
  componentDidLoad(): void;
  private getSize;
  /** REMOVABLE START */
  render(): any;
}
