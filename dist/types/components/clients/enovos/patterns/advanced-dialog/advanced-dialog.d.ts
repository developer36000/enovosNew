import { EventEmitter } from '../../../../../stencil-public-runtime';
/**
 * @name Advanced dialog
 * @description
 * @path patterns
 * @documented true
 */
export declare class ENOVOSAdvancedDialog {
  el: HTMLElement;
  close: EventEmitter;
  headerTitle?: string;
  headerIconUrl?: string;
  headerSubtitle?: string;
  headerWithShadow?: boolean;
  bodyScrollDisabled?: boolean;
  verticalAlignment?: string;
  footerWithShadow?: boolean;
  private classNames;
  hasHeaderContent: boolean;
  hasFooter: boolean;
  hasFooterLeft: boolean;
  hasFooterRight: boolean;
  displayDialog(value: any): Promise<void>;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  getComponentClassName: () => string;
  getHeaderClassName: () => string;
  render(): any[];
}
