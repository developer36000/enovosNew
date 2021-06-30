/**
 * @name Enovos app
 * @description Enovos app - section my account multiple
 * @path views
 * @view true
 */
export declare class ENOVOSViewAppEnovosSectionMyAccountMultiple {
  el: HTMLElement;
  brand?: string;
  variation?: string;
  private classNames;
  blockData: ({
    id: string;
    label: string;
    value: string;
    button: {
      content: string;
      icon: string;
    };
    tooltip?: undefined;
    type?: undefined;
  } | {
    id: string;
    label: string;
    value: string;
    tooltip: string;
    button?: undefined;
    type?: undefined;
  } | {
    id: string;
    label: string;
    type: string;
    value: string;
    tooltip: string;
    button: {
      content: string;
      icon: string;
    };
  } | {
    id: string;
    label: string;
    value: string;
    tooltip: string;
    button: {
      content: string;
      icon: string;
    };
    type?: undefined;
  })[];
  blockData2: ({
    id: string;
    label: string;
    value: string;
    tooltip?: undefined;
    button?: undefined;
  } | {
    id: string;
    label: string;
    value: string;
    tooltip: string;
    button: {
      content: string;
      icon: string;
    };
  } | {
    id: string;
    label: string;
    value: string;
    button: {
      content: string;
      icon: string;
    };
    tooltip?: undefined;
  })[];
  connectedCustomerIdsData: {
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
  componentWillLoad(): void;
  componentDidRender(): void;
  clickDataBlockHander(e: any): void;
  openDialog(elClass: any): void;
  closeDialog(elClass: any): void;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any[];
}
