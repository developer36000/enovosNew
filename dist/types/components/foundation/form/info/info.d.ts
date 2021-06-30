/**
 * @name Info Text
 * @description Info Text to be display on top right of the field
 * @path foundation/form
 * @documented false
 */
export declare class ENOVOSInfoText {
  el: HTMLElement;
  infoText?: string;
  infoStyles?: string;
  infoTooltipText?: string;
  infoTooltipIcon?: string;
  infoTooltipSize?: string;
  infoTooltipStyles?: string;
  infoTooltipPointer?: boolean;
  infoTooltipTimeoutValue?: number;
  infoTooltipNotimeout?: boolean;
  uuid: any;
  classNames: {
    EL: string;
    TOOLTIP: string;
    ICON: string;
  };
  componentWillLoad(): void;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
