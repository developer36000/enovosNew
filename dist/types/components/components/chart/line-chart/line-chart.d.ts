import { ILegendItem } from '../../../../models/chart-legend';
import { IComputedDataset, IDataset } from '../../../../models/line-chart';
/**
 * @name Line Chart
 * @description Used to display a line chart
 * @path components/chart
 * @documented true
 * @urlDesign design-guide-components-component-line-chart.html
 */
export declare class ENOVOSLineChart {
  el: HTMLElement;
  datasets: IDataset[];
  height: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  minWidth?: number;
  renderDelay?: number;
  showYAverageLine?: false;
  showHorizontalGridLines?: boolean;
  showVerticalGridLines?: boolean;
  smallDots?: boolean;
  xAxisTicks?: number;
  xAxisTitle?: string;
  xValues: string[];
  yAverageLegend?: string;
  yAxisTitle?: string;
  yMaxValue: number;
  yMinValue: number;
  handleResize(): void;
  classNames: {
    EL: string;
  };
  computedDatasets: IComputedDataset[];
  idPrefix: string;
  legendItems: ILegendItem[];
  resizeTimout: ReturnType<typeof setTimeout>;
  tooltip: {
    width: number;
    height: number;
    yOffset: number;
    xOffset: number;
  };
  usedStyles: string[];
  width: number;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentWillRender(): void;
  componentDidRender(): void;
  renderChart: () => void;
  getWidth: () => number;
  disconnectedCallback(): void;
  onResizeEnd: () => void;
  setComputedDatasets: () => void;
  getYAverageValue: () => number;
  appendAxisBottom(container: any, x: any): void;
  appendAxisLeft(container: any, y: any): void;
  appendAxisBottomTitle(container: any): void;
  appendAxisLeftTitle(container: any): void;
  buildDatasetLine: (computedDatasetItems: any, svgContent: any, x: any, y: any, style: any) => void;
  buildDatasetDots: (computedDatasetItems: any, svgContent: any, x: any, y: any, style: any) => void;
  buildDatasetTooltips: (computedDatasetItems: any, svgContent: any, x: any, y: any) => void;
  buildYAverageLine: (svgContent: any, y: any) => void;
  buildChart: () => void;
  getLegendItems: () => any[];
  render(): any[];
}
