import { EventEmitter } from '../../../stencil-public-runtime';
import { DropdownItem } from '../../../models/dropdown-item';
import { SelectionControls } from '../../../models/selection-controls';
/**
 * @name Dropdown
 * @description A dropdown menu is a compact way of displaying multiple choices, one of which can be selected at a time.
 * @path components
 * @documented true
 * @prop --styles_[#{$color-name}]: Apply variations on dropdown items (Available styles: brand-expressive-orange-dark)
 */
export declare class ENOVOSDropdown {
  el: HTMLElement;
  clickDropdownItem: EventEmitter;
  activeSelectorItem: EventEmitter;
  data: any[];
  selectionControls: SelectionControls;
  activeItem?: string;
  styles?: string;
  elevationLevel?: string;
  elevationStyles?: string;
  elevationReverse?: boolean;
  indented?: boolean;
  visibleItems?: number;
  autocompleteMinChars: number;
  autocompleteOnFocus: boolean;
  alignRight: boolean;
  placement?: string;
  subItemHorizontalPlacement?: string;
  subItemVerticalPlacement?: string;
  hasSubItems?: boolean;
  readOnly?: boolean;
  font: string;
  size?: string;
  parent?: DropdownItem;
  dropdownItems: DropdownItem[];
  controlItems: SelectionControls;
  controlItemsData: any[];
  autocompleteValue: string;
  classNames: {
    EL: string;
    MAIN: string;
    CONTAINER: string;
    ITEM: string;
    ICON: string;
    TEXT: string;
    AVATAR: string;
    HEADER: string;
    FOOTER: string;
    SELECTOR: string;
    SEPARATOR: string;
    SLOT: string;
    LEADING: string;
    TRAILING: string;
    EXPANDABLE: string;
    ELEVATION: string;
    SUBITEMS: string;
    CASCADING: string;
    INDENTED: string;
    LIMITED: string;
    AUTOCOMPLETE: string;
    VISIBLE: string;
    ACTIVE: string;
    WITH_AVATAR: string;
    AVATAR_ONLY: string;
    ON_TOP: string;
    ALIGN_RIGHT: string;
    HOVER: string;
    DISABLED: string;
    IS_HEADING: string;
    HAS_PARENT: string;
  };
  timeout: any;
  timeoutValue: number;
  activeDropdown: boolean;
  selectorAttachment: boolean;
  availableType: string[];
  _clickSlotSelectorHandler: any;
  _onInputHandler: any;
  _onFocusInputHandler: any[];
  _onClickIconTrailingHandler: any;
  _onClickOutsideHandler: any;
  _onClickInputHandler: any;
  _observable: any;
  closeClickIcon: boolean;
  width: number;
  space: number;
  foundItems: any;
  avatarOnly: boolean;
  dropdownRect: {
    width: number;
    height: number;
  };
  attachmentMap: {
    TOP: string;
    RIGHT: string;
    BOTTOM: string;
    LEFT: string;
  };
  /**
   * @description Set the default active item
   */
  setActiveItem(key: any): Promise<void>;
  /**
   * @description Init the menu from an array of item
   */
  setData(data: DropdownItem[]): Promise<void>;
  setDataSelectionControls(data: SelectionControls): Promise<void>;
  clearData(): Promise<void>;
  /**
   * @description Init the dropdown from an array of item
   */
  private setDropdownItems;
  private setSelectionControls;
  /**
   * Set uniq active item on nested elements
   */
  clickDropdownItemCatch(event: any): void;
  watchHandler(newData: [], oldData: []): void;
  watchSelectionControlsHandler(newData: SelectionControls, oldData: SelectionControls): void;
  /**
   * @description Init component variables
   */
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  initClickOutsideHandler(): void;
  initEventsAutocompleteListener(autocomplete: any): void;
  filterData(data: any, request: any): unknown[];
  showDropdown(visible: any): void;
  /**
   * @description Define the event on dropdown items
   */
  clickDropdownItemHandler(item: DropdownItem): boolean;
  /**
   * @description Set the active item class depending the activeItem property
   * @return {string}
   */
  isActiveItemClass(item: DropdownItem): string;
  isAvatarOnly(): string;
  private getNbItems;
  private setMainElementClasses;
  private setMainContainerClasses;
  private setItemContainerClasses;
  private displayLeadingTrailingElement;
  /**
   * @description Get component size
   */
  private getSize;
  /**
   * @description On mouseenter/mouseleave, apply the hover class to item.
   * Mainly used for cascading items
   */
  onMouseEventHandle(e: any, uid: any, hover: any): void;
  /**
   * @description Check if the position of the target is visible in the view port
   * Check on the extrem point of the target for each direction. For example, if the
   * position of the target is right, check if the right corner of the target is visible
   * or not
   */
  checkInViewPort(target: any): {
    left: boolean;
    top: boolean;
  };
  /**
   * @description Control the viewport and check if cascading children are
   * visible or not. If not visible, change the direction, display on left/right
   */
  setSubItemPlacement(element: any): void;
  /**
   * @description Control the viewport and check if cascading children are
   * visible or not. If not visible, change the direction, display on left/right
   */
  removeSubItemPlacement(element: any): void;
  render(): any;
}
