import { EventEmitter } from '../../../stencil-public-runtime';
import { SelectionControlsItem } from '../../../models/selection-controls';
/**
 * @name Selection Controls
 * @description Selection controls allow the user to select options. The pattern can be configured with checkboxes/radio buttons/switches.<br />The selection control can be associated with the input-chip component in checkbox version.
 * @path patterns
 * @documented true
 */
export declare class ENOVOSSelectionControls {
  el: HTMLElement;
  clickSelectionControlItem: EventEmitter;
  clickSelectionControls: EventEmitter;
  activeItem?: string;
  data: SelectionControlsItem[];
  type: string;
  indented?: boolean;
  refresh?: number;
  items: SelectionControlsItem[];
  classNames: {
    EL: string;
    ITEM: string;
    SWITCH: string;
    INDENTED: string;
    SELECTED: string;
    INDETERMINATE: string;
  };
  prefixId: string;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  componentWillLoad(): void;
  clickSelectionControlItemCatch(event: any): void;
  /**
   * @description Listen the event on checkbox
   */
  clickCheckboxHandler(e: any): void;
  /**
   * @description Listen the event on radio button
   */
  clickRadioButtonHandler(e: any): void;
  /**
   * @description Listen the event on radio button
   */
  clickSwitchHandler(e: any): void;
  setData(data: SelectionControlsItem[]): Promise<void>;
  clearData(): Promise<void>;
  watchHandler(newData: SelectionControlsItem[], oldData: SelectionControlsItem[]): void;
  /**
   * Found recursively top parent based on an item id
   */
  private foundParentItem;
  /**
   * Alternative version to foundOriginalItem which create an instance and don't allows to
   * correctly update this.items through different identation
   */
  private foundCurrentItem;
  /**
   * Found item throught all available items. Return an instance.
   */
  private foundOriginalItem;
  private getSelectedItems;
  /**
   * @description Init the dropdown from an array of item
   */
  private setItems;
  /**
   * @description Check the total number of children checked and set state of parent
   * If all children are checked, parent should be checked
   * If some children are checked, parent should be indeterminate
   * If all children are unchecked, parent should be unchecked
   */
  private setIndeterminateState;
  private setMainElementClasses;
  render(): any;
}
