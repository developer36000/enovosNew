import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Switch
 * @description A switch allows to choose between two opposite states.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-switch.html
 * @prop --size_[md/sm]: Size of the switch. Default is md.
 * @prop --styles_[#{$color-name}]: Color of the switch (Ex. default, contextual-success)
 */
export declare class ENOVOSSwitch {
  el: HTMLElement;
  clickSwitch: EventEmitter;
  elevationLevel?: string;
  checked?: boolean;
  disabled?: boolean;
  inputName: string;
  size?: string;
  value?: string;
  styles?: string;
  label?: string;
  classNames: {
    EL: string;
    TRACK: string;
    THUMB: string;
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
  private getSize;
  /** REMOVABLE START */
  render(): any[];
}
