/**
 * @name Data Table Heading
 * @description TBD
 * @path components
 * @documented false
 */
export declare class ENOVOSDataTableHeading {
  el: HTMLElement;
  styles: string;
  size: string;
  columns?: any[];
  columnSizes?: any[];
  checkable?: boolean;
  hasIndentedColumn?: boolean;
  checkedRows: number;
  classNames: {
    EL: string;
    CHECKBOXES: string;
    ACTIONS: string;
    CANCEL: string;
    VISIBLE: string;
  };
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  setClasses(): string;
  render(): any;
}
