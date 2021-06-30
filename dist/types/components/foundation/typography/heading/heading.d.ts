/**
 * @name Heading
 * @description HTML headings provide valuable information by highlighting important topics and the structure of the document.
 * @path foundation/typography
 * @documented true
 * @urlDesign design-foundation-typography.html
 * @prop --font-weight_[thin, extra-light, light, regular, medium, semi-bold, bold, extra-bold, black]: Weight variables that are available for use
 * @prop --styles_[black, white, #{$color-name}-#{'' + $variation}]: Color of the text
 * @prop --styles_[italic]: Font in italic style
 * @prop --styles_[left, center, right]: Alignment options of the text
 * @prop --styles_[capitalize, uppercase, lowercase]: Transform options of the text
 * @prop --text_*: The text to be displayed
 * @prop --type_h<N>: The name of the header tag where 1 <= N <= 6
 */
export declare class ENOVOSHeading {
  el: HTMLElement;
  font: string;
  content: string;
  fontWeight: string;
  type: string;
  styles: string;
  size: string;
  classNames: {
    EL: string;
  };
  /** INJECT_ANCHOR */
  componentWillRender(): void;
  componentDidRender(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  private getStylesAttributes;
  updateContent(): void;
  /** REMOVABLE START */
  render(): any;
}
