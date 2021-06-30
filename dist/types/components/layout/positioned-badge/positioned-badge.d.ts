/**
 * @name Positioned Badge
 * @description A positioned badge renders a badge on a precisely defined position in relation to a target element.
 * @path layout
 * @documented true
 */
export declare class ENOVOSPositionedBadge {
  el: HTMLElement;
  text?: string;
  styles?: string;
  size?: string;
  rounded: boolean;
  position?: string;
  alignment?: string;
  additionalMargin?: string;
  corner?: boolean;
  availableVerticalPosition: string[];
  availableHorizontalPosition: string[];
  availableAlignment: string[];
  classNames: {
    EL: string;
    BADGE: string;
    ON: string;
    MARGIN: string;
  };
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  render(): any;
}
