import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Radio button
 * @description A radio button allows to choose one item from a list of multiple available options.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-radio-button.html
 */
export declare class ENOVOSRadioButton {
  el: HTMLElement;
  clickRadioButton: EventEmitter;
  selected?: boolean;
  disabled?: boolean;
  inputName: string;
  size?: string;
  styles?: string;
  label?: string;
  value?: string;
  icon?: string;
  classNames: {
    EL: string;
    SHAPE: string;
    ICON: string;
  };
  inputEl: HTMLInputElement;
  _clickHandler: any;
  /** INJECT_ANCHOR */
  /**
   * @description Init the dataitem
   */
  activeRadioButton(): Promise<void>;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  componentWillRender(): void;
  clickHandler(e: any): void;
  /**
   * @description Get size
   */
  private getSize;
  private setStyles;
  /** REMOVABLE START */
  private hasIconClass;
  render(): any;
}
