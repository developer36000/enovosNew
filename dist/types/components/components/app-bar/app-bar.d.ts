/**
 * @name App Bar
 * @description App Bar is a container for items like title, navigation icons and/or action items. Content can be easily managed using the specific section slots.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-app-bar-top.html
 */
export declare class ENOVOSAppBar {
  el: HTMLElement;
  position?: string;
  fluid?: boolean;
  classNames: {
    EL: string;
    MAIN: string;
    LEADING: string;
    TRAILING: string;
    SLOT: string;
    FLUID: string;
  };
  hasLeadingSection: boolean;
  hasTrailingSection: boolean;
  hasMainSection: boolean;
  handleTheme(): void;
  componentDidLoad(): void;
  componentWillLoad(): void;
  render(): any;
}
