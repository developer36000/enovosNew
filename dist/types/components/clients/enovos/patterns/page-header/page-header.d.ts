/**
 * @name Page header
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSPageHeader {
  el: HTMLElement;
  pageTitle?: string;
  centered?: boolean;
  private classNames;
  hasBeforeTitle: boolean;
  hasAfterTitle: boolean;
  hasActions: boolean;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  getComponentClassName: () => string;
  render(): any;
}
