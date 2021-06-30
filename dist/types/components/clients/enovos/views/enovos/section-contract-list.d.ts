/**
 * @name Enovos app
 * @description Enovos app - section contract list
 * @path views
 * @view true
 */
export declare class ENOVOSViewAppEnovosSectionContractList {
  el: HTMLElement;
  brand?: string;
  consumptionDownloadItems?: any[];
  private classNames;
  contractsData: any[];
  componentWillLoad(): void;
  getStatusIcon: (index: number) => "<eds-status-icon status=\"open\" />" | "<eds-status-icon status=\"closed\" />";
  getContractType: (index: number) => "<eds-contract-type-icon type=\"electricity\" />" | "<eds-contract-type-icon type=\"producer\" />" | "<eds-contract-type-icon type=\"gas\" />";
  componentDidRender(): void;
  private manageClickRowButton;
  showConsumptionDownloadDialog: () => void;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any[];
}
