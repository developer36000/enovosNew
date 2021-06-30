/**
 * @name Mobile data table
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSMobileDataTable {
  el: HTMLElement;
  columns?: string[];
  data?: any[];
  columnsCountXs?: number;
  columnsCountSm?: number;
  columnsCountMd?: number;
  columnsCountLg?: number;
  columnsCountXlg?: number;
  private classNames;
  private groups;
  componentWillRender(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  getItemClassName: (value: any) => string;
  getComponentClassName: () => string;
  renderValue: (value: any) => any;
  render(): any;
}
