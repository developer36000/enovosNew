import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @name Data Table Header
 * @description TBD
 * @path components
 * @documented false
 */
export declare class ENOVOSDataTableHeader {
  el: HTMLElement;
  clickSortColumn: EventEmitter;
  clickHeaderCheckbox: EventEmitter;
  clickHeaderDropdown: EventEmitter;
  columns?: string[];
  columnSizes?: string[];
  sort?: boolean[];
  checkable?: boolean;
  expandable?: boolean;
  hasIndentedColumn?: boolean;
  maxHeight?: string;
  size?: string;
  styles?: string;
  selected?: boolean;
  classNames: {
    EL: string;
    CELL: string;
    CHECKBOX: string;
    SWITCH: string;
    DROPDOWN: string;
    TEXT: string;
    ICON: string;
    SORTING_ICON: string;
    HAS_CHECKBOX: string;
    INTERACTIVE: string;
    STICKY: string;
    IS_EXPANDABLE: string;
    INDENTED: string;
    FITTED: string;
    SORTED: string;
  };
  sortingStates: {
    ASC: string;
    DESC: string;
  };
  _clickItemHandler: any[];
  _clickCheckboxHandler: any;
  _clickDropdownItemHandler: any[];
  _activeSelectorItemHandler: any[];
  _sorting: any[];
  /**
   * @description Call this method to select the header row checkbox
   */
  activeCheckbox(value: boolean): Promise<void>;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Call to specific function before each render
   */
  componentWillRender(): void;
  /**
   * @description Call to specific function when a prop/state is changed.
   */
  componentDidUpdate(): void;
  /**
   * @description Set the sorting array, use to define the configuration of
   * each header column.
   */
  private initHeaderSorting;
  /**
   * @description Catch the event when click on header row checkbox.
   */
  private clickCheckboxHandler;
  /**
   * @description Catch the event when click on header row sorting.
   */
  private clickSortColumnHandler;
  /**
   * @description Return the interactive class if the cell is sortable (css styles)
   */
  private getIsInteractiveClass;
  /**
   * @description Attach events the header row.
   * Each sorted row can be clicked.
   * Attach event on checkbox
   */
  private attachEvents;
  /**
   * @description Set specific class to the component.
   */
  private setElementClass;
  private setSortingIcon;
  private setCellClasses;
  private displayComponentType;
  render(): any;
}
