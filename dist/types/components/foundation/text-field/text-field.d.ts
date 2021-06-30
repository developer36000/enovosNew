import { EventEmitter } from '../../../stencil-public-runtime';
import { TabsItem } from '../../../models/foundation/tabs';
import { InputChipItem } from '../../../models/input-chip-item';
/**
 * @name Text Field
 * @description Text fields and text areas are used to display, enter, and edit data.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-text-field.html
 */
export declare class ENOVOSFormItem {
  el: HTMLElement;
  clickIconTrailing: EventEmitter;
  clickIconLeading: EventEmitter;
  clickButtonTrailing: EventEmitter;
  clickForgetPassword: EventEmitter;
  cleaningField: EventEmitter;
  typingField: EventEmitter;
  changeFiles: EventEmitter;
  disabled: boolean;
  readOnly: boolean;
  ellipsis: boolean;
  labelInside: string;
  iconLeading: string;
  iconTrailing: string;
  clearButton: boolean;
  label: string;
  labelStyles: string;
  type: string;
  step?: string;
  assistiveText: string;
  dataName?: string;
  dataValue: string;
  styles: string;
  placeholder?: string;
  forgetLink?: boolean;
  forgetLinkText?: string;
  debounce?: number;
  iconAssistiveText?: string;
  options?: string[];
  tabItems: TabsItem[];
  stacked?: boolean;
  chips?: InputChipItem[];
  rounded: boolean;
  trailingButton: any;
  size?: string;
  infoText?: string;
  infoStyles?: string;
  infoTooltipText?: string;
  infoTooltipStyles?: string;
  infoTooltipIcon?: string;
  infoTooltipSize?: string;
  infoTooltipPointer?: boolean;
  infoTooltipTimeoutValue?: number;
  infoTooltipNotimeout?: boolean;
  isFocused: boolean;
  isFilled: boolean;
  isRequired: boolean;
  isDirty: boolean;
  hasError: boolean;
  assistiveTextMessage: any;
  classNames: {
    EL: string;
    INLINE: string;
    LABEL: string;
    INFO: string;
    FIELD: string;
    TEXTAREA: string;
    COMPONENT: string;
    CONTAINER: string;
    ASSISTIVE_TEXT: string;
    LINK: string;
    ICON: string;
    TABS: string;
    CHIP: string;
    BUTTON: string;
    SLOT: string;
    WITH_CHIPS: string;
    ICON_LEADING: string;
    ICON_TRAILING: string;
    ICON_CLEANING: string;
    ICON_SHOW_HIDE: string;
    STACKED: string;
    MULTILINE: string;
    DISABLED: string;
    READONLY: string;
    TRAILING: string;
  };
  _clickShowHideButtonHandler: any;
  showPassword: boolean;
  inputType: string;
  refreshTabs: boolean;
  activeTab: string;
  icons: {
    SHOW: string;
    HIDE: string;
  };
  contextualMessages: {
    required: {
      message: string;
      code: string;
      type: string;
    };
  };
  tabFields: any[];
  /** INJECT_ANCHOR */
  watchAssistiveTextHandler(newValue: string, oldValue: string): void;
  /**
   * @description Add items to the component
   * @param {Object} data The data to be display
   */
  setTabItems(data: TabsItem[]): Promise<void>;
  watchTabItemsHandler(newValue: TabsItem[], oldValue: TabsItem[]): void;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  componentWillRender(): void;
  componentDidRender(): void;
  /**
   * @description Get size
   */
  private getSize;
  setTabsField(): void;
  /**
   * @description Init required state
   */
  setRequired(): void;
  /**
   * @description Init the component classes
   */
  initComponentClasses(): void;
  /**
   * @description Get the available icon classes
   * @return {array}
   */
  getVariationClasses(): any[];
  /**
   * @description Set the states classes (hover, activated, blur...)
   * Updated each time there's an action on input field
   * @return {string}
   */
  getStateClasses(): string;
  /**
   * @description Validator of text field
   */
  validTextField(): void;
  /**
   * @description Control if an error message should be shown or not
   * @return {boolean}
   */
  setAssistiveTextMessage(): void;
  /**
   * @description Control if an error message should be shown or not
   * @return {boolean}
   */
  displayError(): boolean;
  /**
   * @description Set the contextual classes (success, error, warning...)
   * Updated each time there's a change on input fiel
   * @return {string}
   */
  getContextualClasses(): string;
  /**
   * @description Display the link on white in case of transparent version of field
   * otherwise in tertiary color
   * @return {string}
   */
  getLinkColor(): "" | "white";
  /**
   * @description Emit a specific event on clicking forget password
   */
  onClickForgetPasswordHandler(ev: any): void;
  onClickIconLeadingHandler(ev: any): void;
  onClickLabelInsideHandler(ev: any): void;
  onClickIconTrailingHandler(ev: any): void;
  onClickButtonTrailingHandler(ev: any): void;
  /**
   * @description Update tmp tabs configs. Save values for each tabs.
   */
  clickTabsItemHandler(event: any): void;
  setTabConfig(id: any, value: any): void;
  /**
   * @description Catch the focus event on field
   */
  onFocusHander(): void;
  /**
   * @description Catch the blur event on field
   */
  onBlurHander(): void;
  /**
   * @description Catch the change event on field
   */
  onChangeHander(ev: any): void;
  /**
   * @description Catch the typing event on field
   */
  onInputHander(ev: any): void;
  /**
   * @description Catch the change file event
   */
  onChangeFileInputHander(ev: any): void;
  /**
   * @description Empty the field, remove focus and send input event
   */
  cleanFieldHandler(ev: any): void;
  showHidePasswordHandler(): void;
  /**
   * @description Update type of password field to make it visible
   * and change icon show-hode
   * @return {boolean}
   */
  updatePasswordField(): void;
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasLabel(): boolean;
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasLabelInside(): boolean;
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasIconLeading(): boolean;
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasIconTrailing(): boolean;
  /**
   * @description Check if the icon show/hide for password should be display
   * @return {boolean}
   */
  hasIconShowHide(): boolean;
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasTabs(): boolean;
  /**
   * @description Check if the input is type textarea
   * @return {boolean}
   */
  isTextarea(): boolean;
  /**
   * @description Control if the clear button should be display or not
   * @return {boolean}
   */
  hasClearButton(): boolean;
  hasInfoText(): boolean;
  hasTooltip(): boolean;
  getStylesAttributes(): string;
  /** REMOVABLE START */
  render(): any;
}
