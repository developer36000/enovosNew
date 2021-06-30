export declare type PaddingSize = '0' | '1' | '2' | '3' | '4';
/**
 * @name Contract type icon
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSPanel {
  el: HTMLElement;
  fullHeight?: boolean;
  headerTitle?: string;
  headerSubtitle?: string;
  headerWithShadow?: boolean;
  headerNoMinHeight?: boolean;
  headerPaddingTop?: PaddingSize;
  headerPaddingRight?: PaddingSize;
  headerPaddingBottom?: PaddingSize;
  headerPaddingLeft?: PaddingSize;
  bodyPaddingTop?: PaddingSize;
  bodyPaddingRight?: PaddingSize;
  bodyPaddingBottom?: PaddingSize;
  bodyPaddingLeft?: PaddingSize;
  footerPaddingTop?: PaddingSize;
  footerPaddingRight?: PaddingSize;
  footerPaddingBottom?: PaddingSize;
  footerPaddingLeft?: PaddingSize;
  private classNames;
  private headerPadding;
  private bodyPadding;
  private footerPadding;
  hasHeaderActions: boolean;
  hasNavigation: boolean;
  hasBodyContent: boolean;
  hasFooterContent: boolean;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentWillRender(): void;
  getComponentClassName: () => string;
  getHeaderClassName: () => string;
  getBodyClassName: () => string;
  getFooterClassName: () => string;
  render(): any;
}
