import { ILegendItem } from '../../../../models/chart-legend';
/**
 * @name Chart Legend
 * @description Used to display a legend above charts
 * @path components/chart
 * @documented false
 */
export declare class ENOVOSChartLegend {
  el: HTMLElement;
  items: ILegendItem[];
  classNames: {
    EL: string;
  };
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
