import { EventEmitter } from '../../../stencil-public-runtime';
import { MessageButton } from '../../../models/message';
/**
 * @name Message
 * @description A Message highlights contextual information or gives feedback on actions.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-message.html
 */
export declare class ENOVOSMessage {
  el: HTMLElement;
  clickButtonItem: EventEmitter;
  iconLeading: string;
  styles: string;
  textOnly: boolean;
  columns?: number;
  columnsFluid: boolean;
  inline: boolean;
  clickable: boolean;
  iconStyles: string;
  fontWeight: string;
  fontSize?: string;
  actionButtons: MessageButton[];
  classNames: {
    EL: string;
    WRAPPER: string;
    ICON: string;
    TEXT: string;
    BUTTONS: string;
    ICON_LEADING: string;
    ICON_CLEANING: string;
  };
  /** INJECT_ANCHOR */
  componentWillRender(): void;
  /**
   * @description Add datalist to the component
   * @param {Object} data The data to be display
   */
  setButtons(data: MessageButton[]): Promise<void>;
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasIconLeading(): boolean;
  /**
   * @description Control if there are buttons for the message
   * @return {boolean}
   */
  hasButtons(): boolean;
  /**
   * @description Get tooltip size
   */
  private getColumnsSize;
  /** REMOVABLE START */
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
