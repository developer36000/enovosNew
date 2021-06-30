import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Link
 * @description A link is a reference to information that can be accessed by clicking or tapping.
 * @path foundation
 * @documented true
 */
export declare class ENOVOSLink {
  el: HTMLElement;
  clickLink: EventEmitter;
  url: string;
  fontWeight?: string;
  size?: string;
  mailto: string;
  content: string;
  iconPosition: string;
  styles: string;
  underline: boolean;
  target?: string;
  hasIcon: boolean;
  hasButton: boolean;
  classNames: {
    EL: string;
    CONTENT: string;
    UNDERLINE: string;
  };
  _clickHandler: any;
  /** INJECT_ANCHOR */
  private getIconPlacement;
  getEmailClass(): string;
  private getSize;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  clickHandler(e: any): void;
  private getStylesAttributes;
  /** REMOVABLE START */
  render(): any;
}
