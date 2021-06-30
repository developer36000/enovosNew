import { EventEmitter } from '../../../stencil-public-runtime';
import { CellItem } from '../../../models/cell-item';
/**
 * @name Data Table Cell
 * @description TBD
 * @path components
 * @documented false
 */
export declare class ENOVOSDataTableCell {
  el: HTMLElement;
  rowId?: string;
  data: CellItem;
  index: number;
  fitted: boolean;
  styles: string;
  size?: string;
  contentSize?: string;
  renderer?: (value: any) => any;
  clickRowButton: EventEmitter;
  clickRowDropdown: EventEmitter;
  clickRowIcon: EventEmitter;
  classNames: {
    EL: string;
    ICON: string;
    TOOLTIP: string;
    CONTENT: string;
    DROPDOWN: string;
    NUMERICAL: string;
    FIRST: string;
    IS_ELLIPSIS: string;
    IS_ACTION: string;
    IS_ICON: string;
  };
  _tooltipID: any;
  _cellID: any;
  _mouseEnterHandler: any;
  _mouseLeaveHandler: any;
  _clickDropdownItemHandler: any;
  _activeSelectorItemHandler: any;
  _observable: any;
  clickCellButtonHandler(event: CustomEvent): void;
  clickCellIconHandler(event: any): void;
  componentWillLoad(): void;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  private attachEvents;
  mouseEnterHandler(): void;
  private isNumericalValue;
  private isActionButton;
  private isIcon;
  private setMainElementClasses;
  private displayComponentType;
  getInnerHTMLValue(data: any, renderer?: (value: any) => any): any;
  render(): any[];
}
