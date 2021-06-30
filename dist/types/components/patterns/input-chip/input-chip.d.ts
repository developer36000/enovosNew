import { InputChipItem } from '../../../models/input-chip-item';
/**
 * @name Input chip
 * @description Input chip is a specific pattern used to display chips inside a text field. Chips can be added from a dropdown. The text field can be scrollable to display the different selected chip or display as stacked.
 * @path patterns
 * @documented true
 */
export declare class ENOVOSInputChip {
  el: HTMLElement;
  data: any[];
  size?: string;
  readOnly: boolean;
  stacked?: boolean;
  trailingType?: string;
  trailingValue?: string;
  iconLeading?: string;
  iconTrailing?: string;
  styles?: string;
  sizeAvatar?: string;
  selectionControlType: any;
  inputChipItems: InputChipItem[];
  classNames: {
    EL: string;
    DROPDOWN: string;
    ITEM: string;
    STACKED: string;
  };
  availableItems: any[];
  selectionControls: any;
  /** INJECT_ANCHOR */
  /**
   * @description Init component variables
   */
  componentWillLoad(): void;
  /**
   * @description Init the host element and set dropdown data items
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Remove chip from input when catch click on trailing icon (cross)
   */
  clickTrailingHandler(event: any): void;
  /**
   * @description Add chip in input when catch click dropdown item
   */
  clickDropdownItemHandler(event: any): void;
  clickSelectionControlsItemHandler(event: any): void;
  setItems(data: InputChipItem[]): Promise<void>;
  /**
   * @description If there's a change on available chip item,  refresh input/dropdown
   */
  watchHandler(newData: InputChipItem[], oldData: InputChipItem[]): void;
  /**
   * @description Set the chip parameters.
   * One for the chip display in input this.inputChipItems
   * One for the chip display in dropdown this.availableItems
   * The configuration is a little bit different in the 2 components like the size or trailing icon
   */
  private selectChip;
  setCheckboxSelectedChip(availableItem: any): void;
  updateAvailableItems(uid: any, value: any): void;
  setSelectedChip(availableItem: any, value: any): void;
  removeCheckboxSelectedChip(uid: any, value: any, availableItem: any): void;
  removeSelectedChip(uid: any, value: any): void;
  /**
   * @description Init the dropdown item (this.availableItems) from an array of item
   * and set array of chip to be display in input (this.availableItems) if prop selected is true
   */
  private setChipItems;
  private setAvailableItems;
  /**
   * @description Define specific and default proprieties to chip display in input
   */
  private formatChipItem;
  /**
   * @description Set the available data in dropdown
   */
  private setDropdownData;
  /** REMOVABLE START */
  render(): any;
}
