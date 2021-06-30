import { EventEmitter } from '../../../../../stencil-public-runtime';
/**
 * @name Expandable card
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSExpandableCard {
  el: HTMLElement;
  clickCheckbox: EventEmitter;
  isRadio?: boolean;
  isDisabled?: boolean;
  isDefaultChecked?: boolean;
  icon?: string;
  styles?: string;
  mainTitle?: string;
  subtitle?: string;
  inputName?: string;
  inputValue?: string;
  hideContentIfUnchecked?: boolean;
  hideCheckbox?: boolean;
  isChecked?: boolean;
  watchIsDefaultCheckedHandler(newValue: boolean, oldValue: boolean): void;
  private classNames;
  private hasExpandableContent;
  componentWillLoad(): void;
  componentWillRender(): void;
  renderCheckbox: () => any;
  getComponentClassName: () => string;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
