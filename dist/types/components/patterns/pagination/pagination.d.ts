import { EventEmitter } from '../../../stencil-public-runtime';
import { Pagination } from '../../../models/patterns/pagination';
/**
 * @name Pagination
 * @description Pagination allows user to select a specific page from a range of pages.
 * @path patterns
 * @documented true
 * @prop --buttonActiveStyle_[#{$color-name}]: Color of the pagination buttons (Default is primary. Available colors: brand-expressive-orange-dark)
 */
export declare class ENOVOSPagination {
  el: HTMLElement;
  clickPaginationItem: EventEmitter;
  config: Pagination;
  current: number;
  size?: string;
  buttonActiveStyle?: string;
  styles: string;
  outlined: boolean;
  pages: any[];
  visiblePages: any[];
  classNames: {
    EL: string;
    NOT_AVAILABLE: string;
  };
  _clickItemHandler: any[];
  totalPages: number;
  startPage: number;
  endPage: number;
  /**
   * @description Set the default active item
   */
  setConfig(config: Pagination): Promise<void>;
  setCurrent(currentPage: number): Promise<void>;
  watchConfigHandler(newConfig: any, oldConfig: any): void;
  watchCurrentHandler(newCurrent: any, oldCurrent: any): void;
  private setPagination;
  /**
   * @description Update event on items once they have been set
   * initEvents avoid to attach multiple event to items
   */
  componentDidRender(): void;
  /**
   * @description Define the event on items
   */
  clickItemHandler(item: any): void;
  /**
   * @description Init component variables
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Get pagination size
   */
  private getButtonSize;
  render(): any;
}
