import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Card
 * @description A card groups information into a logical group, with or without an action attached to it.
 * @path foundation
 * @documented true
 */
export declare class ENOVOSCard {
  el: HTMLElement;
  clickCard: EventEmitter;
  columns: number;
  columnsMedia: number;
  trailingMedia?: boolean;
  backgroundMedia?: string;
  overlayMedia?: string;
  backgroundContent?: string;
  backgroundImage?: string;
  noBorder?: boolean;
  overlay?: boolean;
  video?: string;
  videoPlay: boolean;
  videoAutoplay: boolean;
  videoLoop: boolean;
  clickable?: boolean;
  size?: string;
  styles?: string;
  verticalAlignment?: 'top' | 'center' | 'bottom';
  direction: string;
  classNames: {
    EL: string;
    MEDIA: string;
    CONTENT: string;
    VIDEO: string;
    CONTAINER: string;
    TRAILING_MEDIA: string;
    MEDIA_ONLY: string;
    MEDIA_CONTENT_ONLY: string;
    NO_BORDER: string;
    OVERLAY: string;
    OVERLAY_MEDIA: string;
    CLICKABLE: string;
    HORIZONTAL: string;
    VERTICAL: string;
    TOP: string;
    BOTTOM: string;
    LEFT: string;
    RIGHT: string;
  };
  /** INJECT_ANCHOR */
  componentDidRender(): Promise<void>;
  /**
   * Init the host element, move the dialog inside DOM to the body
   * The dialog is natively hidden
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Get card size
   */
  private getSize;
  /** REMOVABLE START */
  render(): any;
}
