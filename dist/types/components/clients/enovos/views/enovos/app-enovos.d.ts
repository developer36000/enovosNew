/**
 * @name Enovos app
 * @description Enovos app - view page
 * @path views
 * @view true
 */
export declare class ENOVOSViewAppEnovosView {
  el: HTMLElement;
  step?: string;
  variation?: string;
  logoOnly?: boolean;
  brand?: string;
  private classNames;
  profileMenu: {
    label: string;
  }[];
  navigationItems: {
    id: string;
    text: string;
  }[];
  myAccountNavigationItems: {
    id: string;
    text: string;
  }[];
  items: {
    customerId: string;
    customerName: string;
    contractId: string;
    contractAddress: string;
    type: string;
    status: string;
    searchableText: string;
  }[];
  componentWillLoad(): void;
  componentDidRender(): void;
  showContractDialog(value: any): void;
  getCurrentNavigationItem(): string;
  hasNavigation(): boolean;
  showBtnBackOnly(): boolean;
  getPageTitle(): "000800148000 - Naturstroum Home Mono" | "My account";
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any[];
}
