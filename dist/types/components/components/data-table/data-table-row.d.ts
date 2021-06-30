import { EventEmitter } from '../../../stencil-public-runtime';
import { CellItem } from '../../../models/cell-item';
/**
 * @name Data Table Row
 * @description TBD
 * @path components
 * @documented false
 */
export declare class ENOVOSDataTableRow {
  el: HTMLElement;
  clickExpand: EventEmitter;
  clickRowCheckbox: EventEmitter;
  data?: {
    id: any;
    values: any[];
    children: any[];
    selected: boolean;
  };
  columnSizes?: any[];
  columnRenderers?: ((value: any) => any)[];
  checkable?: boolean;
  expandable?: boolean;
  maxHeight?: string;
  hasIndentedColumn?: boolean;
  size?: string;
  isExpand?: boolean;
  isChecked?: boolean;
  classNames: {
    EL: string;
    CELL: string;
    ICON: string;
    CHECKBOX: string;
    HAS_CHECKBOX: string;
    STICKY: string;
    IS_EXPANDABLE: string;
    INTERACTIVE: string;
    IS_OPEN: string;
    IS_CHECKED: string;
    FIXED_SIZE: string;
    FITTED: string;
    IS_ACTION: string;
    IS_ICON: string;
  };
  dataItems: CellItem[];
  _clickCheckboxHandler: any;
  /**
   * @description Call this method to select the header row checkbox
   */
  activeCheckbox(value: boolean): Promise<void>;
  /**
   * @description Call to specific function before each render
   * Define the data as CellItem object to generate each row cell.
   */
  componentWillRender(): void;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Call to specific function when a prop/state is changed.
   */
  componentDidUpdate(): void;
  /**
   * @description Event attached on expand button
   */
  clickExpandHandler(e: any): void;
  /**
   * @description Attach events the row.
   * Attach event on checkbox
   */
  private attachEvents;
  /**
   * @description Catch the event when click on row checkbox.
   */
  private clickCheckboxHandler;
  /**
   * @description Set specific class to the component.
   */
  private setElementClass;
  private isActionButton;
  private isIcon;
  private setIndentedRowClasses;
  private setCheckableRowClasses;
  private setExpandableRowClasses;
  private setCellRowClasses;
  private getCellRenderer;
  render(): any;
}
