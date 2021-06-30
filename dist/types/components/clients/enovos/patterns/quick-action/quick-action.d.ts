import { EventEmitter } from '../../../../../stencil-public-runtime';
/**
 * @name Quick Action
 * @description
 * @path patterns
 * @documented true
 */
export declare class ENOVOSQuickAction {
  el: HTMLElement;
  clickItem: EventEmitter;
  icon?: string;
  styles?: string;
  mainTitle?: string;
  subtitle?: string;
  showTrailingIcon?: boolean;
  private classNames;
  private id;
  private hasAfterTitles;
  componentWillLoad(): void;
  onClickItem: () => void;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
