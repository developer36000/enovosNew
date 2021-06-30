/**
 * @name Assistive Text
 * @description Assistive Text to be display beside the input field
 * @path foundation/form
 * @documented false
 */
export declare class ENOVOSFieldHelper {
  el: HTMLElement;
  message: string;
  code: string;
  styles: string;
  type: string;
  icon: string;
  classNames: {
    EL: string;
    ICON: string;
    ICON_LEADING: string;
  };
  /** INJECT_ANCHOR */
  /**
   * @description Set the contextual classes (success, error, warning...)
   * @return {string}
   */
  getContextualClass(): string;
  hasIcon(): boolean;
  /** REMOVABLE START */
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
