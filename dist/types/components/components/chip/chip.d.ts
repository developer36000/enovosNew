import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Chip
 * @description The Chip component displays an element that looks similar to a button. It can be selected by the user when clicked on. The component structure supports a label and an optional leading/trailing element. The leading/trailing element can be setup to visualise as an avatar, a simple icon or a radio input.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-chip.html
 */
export declare class ENOVOSChip {
  el: HTMLElement;
  clickChip: EventEmitter;
  clickTrailing: EventEmitter;
  uid?: string;
  selected?: boolean;
  unselectable?: boolean;
  disabled?: boolean;
  motionless?: boolean;
  readOnly?: boolean;
  inputName?: string;
  label: string;
  value?: string;
  size?: string;
  styles?: string;
  leadingType?: string;
  leadingValue?: string;
  trailingType?: string;
  trailingValue?: string;
  trailingEvent?: boolean;
  sizeAvatar?: string;
  availableType: string[];
  classNames: {
    EL: string;
    ICON: string;
    BADGE: string;
    AVATAR: string;
    RADIO: string;
    ELEMENT: string;
    LEADING: string;
    TRAILING: string;
    UNSELECTABLE: string;
    DISABLED: string;
    MOTIONLESS: string;
    HAS_AVATAR: string;
    HAS_ICON: string;
    HAS_BADGE: string;
    READ_ONLY: string;
  };
  inputEl: HTMLInputElement;
  _clickHandler: any;
  _clickTrailingHandler: any;
  watchDataHandler(newValue: [], oldValue: []): void;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  /**
   * @description Control if a component is disabled
   * @return {boolean}
   */
  isDisabled(): boolean;
  /**
   * @description Control if a component is motionless
   * @return {boolean}
   */
  isMotionless(): boolean;
  /**
   * @description Control if a component is motionless
   * @return {boolean}
   */
  isReadOnly(): boolean;
  /**
   * @description Control if a icon/avatar/radio leading parameter should be display
   * @return {boolean}
   */
  hasLeading(): boolean;
  /**
   * @description Control if a icon/avatar/radio leading parameter should be display
   * @return {boolean}
   */
  hasTrailing(): boolean;
  /**
   * @description Get component size
   */
  private getSize;
  private getVariationClasses;
  /**
   * @description Attach event to component
   */
  private handleEvent;
  private clickHandler;
  render(): any[];
}
