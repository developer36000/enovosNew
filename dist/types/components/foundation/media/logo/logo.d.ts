/**
 * @name Logo
 * @description Logo
 * @path foundation/media
 * @documented false
 */
export declare class ENOVOSLogo {
  el: HTMLElement;
  variations: any[];
  classNames: {
    LOGO: string;
  };
  viewBox?: string;
  width?: string;
  height?: string;
  /** INJECT_ANCHOR */
  getVariations(): string;
  getHeight(): string;
  getWidth(): string;
  getViewBox(): string;
  handleTheme(): void;
  componentDidLoad(): void;
  /** REMOVABLE START */
  render(): any;
}
