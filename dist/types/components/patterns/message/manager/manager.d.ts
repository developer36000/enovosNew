import { EventEmitter } from '../../../../stencil-public-runtime';
import { Message, MessageOptions } from '../../../../models/message';
/**
 * @name Message Manager
 * @description Message Manager
 * @path patterns/message
 * @documented false
 */
export declare class ENOVOSMessageManager {
  el: HTMLElement;
  clickMessageButtonItem: EventEmitter;
  position: string;
  columns?: number;
  columnsFluid: boolean;
  verticalOffset?: string;
  messagesQueue: Message[];
  animationDuration: number;
  classNames: {
    EL: string;
    ITEM: string;
    ICON_CLEANING: string;
    MARGIN: string;
  };
  /**
   * @description Listen button click from a message
   */
  clickButtonItemHandler(event: CustomEvent): void;
  /**
   * @description Add new message to the queue and display it in the view
   * @param {Object} options The different options to be used for the message (postion, showDuration,...)
   * @param {Object} message The message to be display
   */
  setMessage(options: MessageOptions, message: Message): Promise<void>;
  /**
   * @description Empty the message queue
   * @param {Object} options The different options to be used for the message (position, showDuration,...)
   */
  removeMessages(options: MessageOptions): Promise<void>;
  watchColumnsFluidHandler(value: boolean): void;
  /**
   * @description Check if the message queue is empty or not.
   * If not empty, create the message container node
   * else remove it from the page
   * @return {boolean}
   */
  watchHandler(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  /**
   * @description Add the new message in the container node
   * @param {Object} message The message object to be display
   */
  addMessage(message: Message, options: MessageOptions): void;
  /**
   * @description Remove the specific message from the list
   * @param {number} uid ID of the message
   * @param {string} position Position of the message in view, targeting the right container
   */
  deleteMessage(uid: number, position: string): void;
  /**
   * @description Generate the HTML node which should contain all messages
   * @return {string} The html node
   */
  setMessageContainerHTML(): string;
  /**
   * @description Generate the HTML node of a uniq message
   * @param {Object} message The message object to be display
   * @return {string} The html node
   */
  getMessageHTML(message: Message): string;
  render(): any;
}
