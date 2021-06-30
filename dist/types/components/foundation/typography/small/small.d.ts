/**
 * @name Small
 * @description Small element
 * @path foundation/typography
 * @documented true
 * @urlDesign design-foundation-typography.html
 */
export declare class ENOVOSSmall {
  el: HTMLElement;
  content: string;
  font: string;
  fontWeight: string;
  fontStyle: string;
  styles: string;
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
