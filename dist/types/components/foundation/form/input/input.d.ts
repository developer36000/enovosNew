import { EventEmitter } from '../../../../stencil-public-runtime';
/**
 * @name Input
 * @description Input and textarea elements
 * @path foundation/form
 * @documented false
 */
export declare class ENOVOSInput {
  el: HTMLElement;
  focusInput: EventEmitter;
  blurInput: EventEmitter;
  changeInput: EventEmitter;
  inputInput: EventEmitter;
  changeFileInput: EventEmitter;
  type: string;
  placeholder: string;
  dataName?: string;
  dataValue: string;
  styles: string;
  debounce: number;
  disabled: boolean;
  readOnly: boolean;
  step: string;
  size?: string;
  ellipsis: boolean;
  classNames: {
    EL: string;
    HAS_ELLIPSIS: string;
  };
  /** INJECT_ANCHOR */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  componentWillRender(): void;
  /**
   * @description Debounce onIpunt event, waiting user is typing
   */
  typing: any;
  private handleEvent;
  private onChangeFiles;
  /**
   * @description Display the link on white in case of transparent version of field
   * otherwise in tertiary color
   * @return {string}
   */
  isActive(): string;
  /**
   * @description Get size
   */
  private getSize;
  /** REMOVABLE START */
  render(): any;
}
