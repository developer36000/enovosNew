import { IDataset } from '../../../../models/bar-chart';
/**
 * @name Bar Chart
 * @description Used to display a bar chart
 * @path components/chart
 * @documented true
 * @urlDesign design-guide-components-component-bar-chart.html
 */
export declare class ENOVOSBarChart {
  el: HTMLElement;
  data: IDataset;
  barRadius?: number;
  height: number;
  minWidth?: number;
  renderDelay?: number;
  showHorizontalGridLines?: boolean;
  showVerticalGridLines?: boolean;
  xValues?: string[];
  yMaxValue: number;
  yMinValue: number;
  handleResize(): void;
  /**
   * @description (Re-)calculate chart's width
   */
  calculateWidth(): Promise<void>;
  barPadding: number;
  classNames: {
    EL: string;
  };
  computedData: IDataset;
  computedXValues: string[];
  idPrefix: string;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  resizeTimout: ReturnType<typeof setTimeout>;
  width: number;
  handleTheme(): void;
  componentDidLoad(): void;
  componentWillRender(): void;
  componentDidRender(): void;
  getWidth: () => number;
  disconnectedCallback(): void;
  onResizeEnd: () => void;
  appendAxisBottom(container: any, x: any): void;
  appendAxisLeft(container: any, y: any): void;
  buildBars: (svgContent: any, x: any, y: any) => void;
  buildChart: () => void;
  refreshTooltips: () => void;
  render(): any;
}
