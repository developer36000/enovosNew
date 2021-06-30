/**
 * @name Enovos app
 * @description Enovos app - section I am moving (single contract)
 * @path views
 * @view true
 */
export declare class ENOVOSViewAppEnovosSectionIAmMovingSingleContract {
  el: HTMLElement;
  brand?: string;
  activeStepId: string;
  selectedProductId: string;
  private classNames;
  componentWillLoad(): void;
  showProductsComparisonDialog: () => void;
  renderCurrentStep: () => any;
  renderAddressStep: () => any;
  renderDatesAndEnergyStep: () => any[];
  renderDescriptionListItem: (title: string, value: any) => any[];
  renderConfirmationStep: () => any[];
  renderPreviousAction: () => any;
  renderNextAction: () => any;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any[];
}
