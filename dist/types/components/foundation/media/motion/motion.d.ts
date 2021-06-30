/**
 * @name Motion
 * @description The Motion component can display an SVG animation using the Lottie plugin. Animation can be provided via an URL or JSON.
 * @path foundation/media
 * @urlDesign design-ressources-animations-generic.html
 * @documented true
 */
export declare class ENOVOSMotion {
  el: HTMLElement;
  path: string;
  animationData: any;
  loop: boolean;
  autoplay: boolean;
  size?: string;
  classNames: {
    EL: string;
  };
  animation: any;
  _motionObservable: any;
  /** INJECT_ANCHOR */
  componentWillUpdate(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
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
  /**
   * @description Destroy the animation
   */
  destroy(): Promise<void>;
  setMainElementClasses(): string;
  /** REMOVABLE START */
  render(): any;
}
