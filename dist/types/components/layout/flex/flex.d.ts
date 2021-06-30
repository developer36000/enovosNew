/**
 * @name Flex
 * @description Main grid. 12 columns in xlg, lg and md screens. 8 columns in small screens. 4 columns un extra and extra-extra small screens.
 * @path layout/flex
 * @documented false
 */
export declare class ENOVOSFlex {
  el: HTMLElement;
  nested: boolean;
  handleNestedChange(newValue: boolean): void;
  flexItemsArray: any[];
  groupedFlexItems: any;
  orderedFlexItems: any;
  multipliers: any;
  breakpoints: {
    '0-863': string;
    '864-1151': string;
    '1152-9999': string;
  };
  handleResize(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  private reorderElements;
  private applyElementsOrder;
  private adjustFlexItems;
  private getFlexLevels;
  private getDisplay;
  private getDirection;
  private getWrap;
  private getJustifyContent;
  private getAlignItems;
  private getAlignContent;
  private getVisibility;
  render(): any;
}
