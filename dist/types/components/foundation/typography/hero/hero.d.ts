/**
 * @name Hero
 * @description Additional heading typographies with higher sizes.
 * @path foundation/typography
 * @documented true
 * @urlDesign design-foundation-typography.html
 * @prop --font-family_font-family-<N>: Sets the font family names for the element where 1 <= N <= 2
 * @prop --font-weight_[thin, extra-light, light, regular, medium, semi-bold, bold, extra-bold, black]: Weight variables that are available for use
 * @prop --super_super: Sets the element as superhero
 * @prop --styles_[black, white, #{$color-name}-#{'' + $variation}]: Color of the text
 * @prop --styles_[italic]: Font in italic style
 * @prop --styles_[left, center, right]: Alignment options of the text
 * @prop --styles_[capitalize, uppercase, lowercase]: Transform options of the text
 * @prop --text_*: The text to be displayed
 */
export declare class ENOVOSHero {
  el: HTMLElement;
  fontWeight: string;
  font: string;
  styles: string;
  content: string;
  super: any;
  classNames: {
    EL: string;
  };
  /** INJECT_ANCHOR */
  componentWillUpdate(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  updateContent(): void;
  private getStylesAttributes;
  /** REMOVABLE START */
  render(): any;
}
