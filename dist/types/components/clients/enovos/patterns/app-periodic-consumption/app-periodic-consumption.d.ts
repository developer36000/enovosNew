/**
 * @name App Periodic Consumption
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSAppPeriodicConsumption {
  el: HTMLElement;
  firstItemTitle?: string;
  firstItemValue?: string;
  firstItemCaptionIcon?: string;
  firstItemCaptionStyles?: string;
  firstItemCaptionText?: string;
  secondItemTitle?: string;
  secondItemValue?: string;
  secondItemCaptionIcon?: string;
  secondItemCaptionStyles?: string;
  secondItemCaptionText?: string;
  chartMinValue?: number;
  chartMaxValue?: number;
  chartValue?: number;
  styles?: string;
  private classNames;
  /**
   * @description (Re-)calculate charts' width
   */
  calculateChartsWidth(): Promise<void>;
  componentWillLoad(): void;
  renderCaption: (itemTitle?: string, itemValue?: string, itemCaptionIcon?: string, itemCaptionStyles?: string, itemCaptionText?: string) => any;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
