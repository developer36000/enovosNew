/**
 * @name Video
 * @description Video element
 * @path foundation/media
 * @urlDesign design-ressources-videos-generic.html
 * @documented true
 */
export declare class ENOVOSVideo {
  el: HTMLElement;
  path: string;
  type: string;
  height?: string;
  width?: string;
  posterPath?: string;
  preload?: string;
  fitted?: boolean;
  cover?: boolean;
  playOnClick?: boolean;
  videoFullWidth?: boolean;
  videoMuted?: boolean;
  videoLoop?: boolean;
  videoControls?: boolean;
  videoAutoplay?: boolean;
  classNames: {
    EL: string;
  };
  video: any;
  _videoObservable: any;
  _clickHandler: any;
  /** INJECT_ANCHOR */
  /**
   * Init the host element, move the dialog inside DOM to the body
   * The dialog is natively hidden
   */
  handleTheme(): void;
  componentDidLoad(): Promise<void>;
  componentDidUpdate(): void;
  componentDidRender(): Promise<void>;
  /**
   * @description Play the animation
   */
  play(): Promise<void>;
  /**
   * @description Pause the animation
   */
  pause(): Promise<void>;
  /**
   * @description Stop the animation
   */
  stop(): Promise<void>;
  setVideoAttributes(): void;
  private getFullWidth;
  private getFitted;
  private getCover;
  getType(): string;
  getClasses(): string;
  /** REMOVABLE START */
  render(): any;
}
