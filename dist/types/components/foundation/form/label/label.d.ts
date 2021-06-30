/**
 * @name Label
 * @description Label
 * @path foundation/form
 * @documented false
 */
export declare class ENOVOSLabel {
  el: HTMLElement;
  required: boolean;
  disabled: boolean;
  size: string;
  styles: string;
  classNames: {
    EL: string;
  };
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  getRequired(): string;
  getSize(): string;
  /** REMOVABLE START */
  render(): any;
}
