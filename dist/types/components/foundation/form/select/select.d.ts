import { EventEmitter } from '../../../../stencil-public-runtime';
/**
 * @name Select
 * @description Select element
 * @path foundation/form
 * @documented false
 */
export declare class ENOVOSSelect {
  el: HTMLElement;
  changeInput: EventEmitter;
  dataValue?: string;
  styles?: string;
  dataName?: string;
  required?: boolean;
  disabled?: boolean;
  options: string[];
  classNames: {
    EL: string;
  };
  /** INJECT_ANCHOR */
  handleTheme(): void;
  componentDidLoad(): void;
  private handleEvent;
  /** REMOVABLE START */
  render(): any;
}
