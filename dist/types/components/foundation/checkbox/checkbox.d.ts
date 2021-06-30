import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Checkbox
 * @description A checkbox allows to choose between two opposite states or values, always to be confirmed by a click/tap.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-checkbox.html
 */
export declare class ENOVOSCheckbox {
  el: HTMLElement;
  clickCheckbox: EventEmitter;
  selected?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  inputName: string;
  size?: string;
  styles?: string;
  label?: string;
  value?: string;
  classNames: {
    EL: string;
    SHAPE: string;
  };
  inputEl: HTMLInputElement;
  _clickHandler: any;
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  clickHandler(e: any): void;
  /**
   * @description Get tooltip size
   */
  private getSize;
  private getStyles;
  /** REMOVABLE START */
  render(): any;
}
