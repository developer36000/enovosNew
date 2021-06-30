/**
 * @name Elevation
 * @description Shadows provide important visual cues about objects’ depth and directional movement.
 * @path foundation
 * @urlDesign design-foundation-elevation.html
 * @prop --level_<N>: Sets the elevation to the (N)dp, where 1 <= N <=
 * @prop --styles_light: Light opacity of the shadow (default)
 * @prop --styles_dark: Dark opacity of the shadow
 * @documented true
 */
export declare class ENOVOSElevation {
  el: HTMLElement;
  level?: string;
  styles?: string;
  reverse?: boolean;
  classNames: {
    EL: string;
    LEVEL: string;
    REVERSE: string;
  };
  /** INJECT_ANCHOR */
  handleTheme(): void;
  componentDidLoad(): void;
  getStyles(): string[];
  componentDidRender(): void;
  /** REMOVABLE START */
  render(): any;
}
