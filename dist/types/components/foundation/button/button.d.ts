import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Button
 * @description A button initiates an action, allowing interactions with the system, either by clicking or by tapping.
 * @path foundation
 * @urlDesign design-guide-components-component-button.html
 *
 * @prop --variations-attributes_outlined: Outlined button without any background
 * @prop --variations-attributes_text-only: Text only button without outline and background
 * @prop --variations-attributes_expand: Full width button used for mobile layout
 * @prop --variations-attributes_disabled: Button in inactive state
 * @prop --styles_[#{$color-name}]: Color of the button (Ex. primary, secondary, tertiary, quaternary, ...)
 * @prop --styles_no-radius-left: No border radius on left side
 * @prop --styles_no-radius-right: No border radius on right side
 * @prop --icon-position_left: Icon positioned to the left of the text
 * @prop --icon-position_right: Icon positioned to the right of the text
 */
export declare class ENOVOSButton {
  el: HTMLElement;
  clickButton: EventEmitter;
  size?: string;
  textOnly?: boolean;
  outlined?: boolean;
  expand?: boolean;
  disabled?: boolean;
  narrow?: boolean;
  grouped?: boolean;
  rounded?: boolean;
  squared?: boolean;
  content?: string;
  styles?: string;
  iconPosition?: string;
  iconStyles?: string;
  type?: string;
  isHover?: boolean;
  classNames: {
    EL: string;
    ICON: string;
    GROUPED: string;
  };
  _clickButtonHandler: any;
  _keypressHandler: any;
  /** INJECT_ANCHOR */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  componentDidRender(): void;
  private attachEvent;
  clickButtonHandler(e: any): boolean;
  private getFontFamily;
  private getSize;
  private getIconPlacement;
  private setIconSize;
  private getImageClass;
  private getMotionClass;
  private getVariantStyles;
  /** REMOVABLE START */
  private getContent;
  render(): any;
}
