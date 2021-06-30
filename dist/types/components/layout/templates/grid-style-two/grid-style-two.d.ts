/**
 * @name Grid Style Two
 * @description Grid Template Header & Navigation - Body - Footer.
 * @path layout/templates
 * @documented false
 * @prop --slots_header-area: The header line fixed on top of the application. Can be used to set a title, logo... When the user's scrolling down the application, the header line is hidden.
 * @prop --slots_navigation-area: The navigation line sticky on top of the application, beside the header area. When the user's scrolling the application, the navigation line is sticky on top.
 * @prop --slots_main-area: The main container of the application
 * @prop --slots_footer-area: The footer of the application, always at the bottom of the application.
 */
export declare class ENOVOSGridStyleTwo {
  el: HTMLElement;
  debug?: boolean;
  header?: boolean;
  navigation?: boolean;
  main?: boolean;
  bodyAlignCenter?: boolean;
  mainFooter?: boolean;
  footer?: boolean;
  backgroundHeader?: string;
  backgroundNavigation?: string;
  backgroundBody?: string;
  backgroundImageBody?: string;
  backgroundMainFooter?: string;
  backgroundFooter?: string;
  borderColorFooter?: string;
  classNames: {
    EL: string;
    HEADER: string;
    NAVIGATION: string;
    BODY: string;
    FOOTER: string;
    CONTAINER: string;
    SLOT: string;
    HIDDEN: string;
    CENTERED: string;
  };
  clientRectHeader: any;
  hasNavigationArea: boolean;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  getBodyStyle: () => {};
  getFooterStyle: () => {};
  render(): any[];
}
