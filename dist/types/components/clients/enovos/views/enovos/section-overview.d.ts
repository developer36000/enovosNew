/**
 * @name Enovos app
 * @description Enovos app - section overview
 * @path views
 * @view true
 */
export declare class ENOVOSViewAppEnovosSectionOverview {
  el: HTMLElement;
  brand?: string;
  step?: string;
  logoOnly?: boolean;
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
  componentDidRender(): void;
  addChartData: () => void;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any[];
}
