/**
 * @name Enovos app
 * @description Enovos app - section overview
 * @path views
 * @view true
 */
export declare class ENOVOSViewAppEnovosSectionOverviewWithSlider {
  el: HTMLElement;
  brand?: string;
  step?: string;
  logoOnly?: boolean;
  isSliderBeginning?: boolean;
  isSliderEnd?: boolean;
  private classNames;
  latestInvoicesData: {
    values: ({
      data: string;
      props?: undefined;
    } | {
      data: string;
      props: {
        type: string;
        icon: string;
        styles: string;
        textOnly: boolean;
      };
    })[];
  }[];
  quickActions: any;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  private addSlides;
  private slideNext;
  private slidePrev;
  private onSlideChange;
  render(): any[];
}
