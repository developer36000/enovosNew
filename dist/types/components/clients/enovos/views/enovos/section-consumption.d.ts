/**
 * @name Enovos app
 * @description Enovos app - section consumption
 * @path views
 * @view true
 */
export declare class ENOVOSViewAppEnovosSectionConsumption {
  el: HTMLElement;
  brand?: string;
  step?: string;
  activeChart?: 'all' | 'activeReactive' | 'dayNight';
  logoOnly?: boolean;
  private classNames;
  dataListMonths: string[];
  dataListYears: string[];
  dataListRows: string[];
  collapsedDatalist: boolean;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  setChartData(): void;
  collapseComparisonProfile(): void;
  showConsumptionDownloadDialog(value: any): void;
  showConsumptionGraphDisplaySettingsDialog: () => void;
  renderChart(): any[];
  render(): any[];
}
