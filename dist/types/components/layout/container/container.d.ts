/**
 * @name Container
 * @description Container
 * @path layout/container
 * @documented false
 */
export declare class ENOVOSContainer {
  el: HTMLElement;
  fluid: boolean;
  fullHeight: boolean;
  noPadding: boolean;
  center: boolean;
  size?: string;
  fluidForce?: string;
  classNames: {
    EL: string;
  };
  /**
   * @description Init component variables
   */
  handleTheme(): void;
  componentDidLoad(): void;
  private getCenter;
  private getFullHeight;
  private getFluid;
  private getNoPadding;
  /**
   * @description Force container size
   */
  private getSize;
  /**
   * @description Force container size
   */
  private getFluidForce;
  render(): any;
}
