/**
 * @name Positioned Icon
 * @description A positioned icon renders an icon on a precisely defined position in relation to a target element.
 * @path layout
 * @documented true
 */
export declare class ENOVOSPositionedIcon {
  el: HTMLElement;
  icon?: string;
  styles?: string;
  size?: string;
  rounded: boolean;
  position?: string;
  alignment?: string;
  additionalMargin?: string;
  corner?: boolean;
  backgroundColor?: string;
  bgColor?: string;
  availableVerticalPosition: string[];
  availableHorizontalPosition: string[];
  availableAlignment: string[];
  classNames: {
    EL: string;
    ICON: string;
    ON: string;
    MARGIN: string;
  };
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  render(): any;
}
