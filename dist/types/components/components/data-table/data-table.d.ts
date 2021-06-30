import { EventEmitter } from '../../../stencil-public-runtime';
import { DataTableValues } from '../../../models/components/datatable';
import { Pagination } from '../../../models/patterns/pagination';
/**
 * @name Data Table
 * @description Data table allows to display data inside rows and columns with multiple possibilities to manipulate information like sort, filter or actions...
 * @path components
 * @documented true
 */
export declare class ENOVOSDataTable {
  el: HTMLElement;
  didRender: EventEmitter;
  activeHeaderDropdown: EventEmitter;
  activeRowDropdown: EventEmitter;
  clickRowCellButton: EventEmitter;
  columns?: string[];
  columnSizes?: string[];
  columnRenderers?: ((value: any) => any)[];
  data?: DataTableValues[];
  sort?: boolean[];
  checkable?: boolean;
  maxHeight?: string;
  stickyElevation?: string;
  hasIndentedColumn?: boolean;
  pagination: Pagination;
  styles?: string;
  size?: string;
  hideIndentedHeader: boolean;
  formattedData?: any[];
  checkedRows: number;
  classNames: {
    EL: string;
    ROW: string;
    CONTAINER: string;
    HEADER: string;
    HEADING: string;
    FOOTER: string;
    SLOT: string;
    ELEVATION: string;
    CHECKBOXES: string;
    ACTIONS: string;
    CANCEL: string;
    OVERFLOW: string;
    INDENTED: string;
    HIDE_INDENTED_HEADER: string;
    EXPANDABLE: string;
    EXPANDED: string;
    COLLAPSE: string;
    HIDDEN: string;
    VISIBLE: string;
    FIXED_SIZE: string;
    EMPTY: string;
    PAGINATION_ONLY: string;
  };
  headerColumns: any[];
  expandable: boolean;
  _id: any;
  _clickCheckboxCancelHandler: any;
  hasSlotHeading: any;
  hasSlotFooter: any;
  hasSlotCheckboxActions: any;
  sortDirection: 'asc' | 'desc';
  sortIndex: number;
  currentPage: number;
  visibleItemsCount: number;
  /**
   * @description Catch the click on sort event from header row
   * if the table is autonomous, manage the table data in order values based
   * on column index.
   */
  clickSortColumnHandler(event: CustomEvent): void;
  /**
   * @description Catch the click on pagination event
   * if the table is autonomous, manage the table data
   */
  clickPaginationItemHandler(event: CustomEvent): void;
  clickHeaderCheckboxHandler(event: CustomEvent): void;
  clickHeaderDropdownHandler(event: CustomEvent): void;
  clickRowDropdownHandler(event: CustomEvent): void;
  clickCheckboxHandler(): void;
  clickRowButtonHandler(event: any): void;
  clickRowCheckboxHandler(event: CustomEvent): void;
  clickExpandHandler(event: CustomEvent): void;
  watchDataHandler(newValue: DataTableValues[], oldValue: DataTableValues[]): void;
  watchPaginationHandler(newValue: Pagination, oldValue: Pagination): void;
  /**
   * @description Set the default active item
   */
  setPagination(data: Pagination): Promise<void>;
  /**
   * @description Set the default active item
   */
  setData(data: DataTableValues[]): Promise<void>;
  componentWillLoad(): void;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  private checkFormattedData;
  private setTableCheckboxes;
  private getSelected;
  private computeFormattedData;
  clickCheckboxCancelHandler(): void;
  private hasScrollingContentClass;
  private hasExpandable;
  private getColspan;
  private hasFixedColumnsClass;
  private hasPagination;
  private setTableClasses;
  render(): any[];
}
