/**
 * @name Paragraph
 * @description Paragraph elements
 * @path foundation/typography
 * @documented true
 * @urlDesign design-foundation-typography.html
 */
export declare class ENOVOSParagraph {
  el: HTMLElement;
  clampLines?: number;
  clampVisibility?: number;
  font: string;
  fontWeight?: string;
  fontStyle?: string;
  type: string;
  styles?: string;
  content?: string;
  observer: any;
  classNames: {
    EL: string;
  };
  /** INJECT_ANCHOR */
  handleTheme(): void;
  componentDidLoad(): void;
  componentWillUpdate(): void;
  initComponentIntersectionObserver(): void;
  clampElement(): void;
  private getStylesAttributes;
  private getBody;
  /** REMOVABLE START */
  render(): any;
}
