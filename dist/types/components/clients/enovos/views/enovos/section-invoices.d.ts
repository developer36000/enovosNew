/**
 * @name Enovos app
 * @description Enovos app - section invoices
 * @path views
 * @view true
 */
export declare class ENOVOSViewAppEnovosSectionInvoices {
  el: HTMLElement;
  brand?: string;
  consumptionCalculationMethod?: string;
  private classNames;
  invoicesData: any[];
  quickActions: any;
  componentWillLoad(): void;
  componentDidRender(): void;
  showConsumptionCalculationDialog: () => void;
  manageQuickActionClick: (id: string) => any;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any[];
}
