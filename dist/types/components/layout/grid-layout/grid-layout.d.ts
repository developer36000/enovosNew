/**
 * @name Grid Layout
 * @description Grid Layout
 * @path layout/grid-layout
 * @documented false
 */
export declare class ENOVOSGridLayout {
  el: HTMLElement;
  fitHeight?: boolean;
  alignCenter?: boolean;
  alignVertical: 'top' | 'center' | 'bottom';
  recursive: boolean;
  styles: string;
  gridItemsArray: any[];
  gridSizes: any[];
  occupiedSpace: any[];
  gridLevel: number;
  nbUpdate: number;
  nbItems: number;
  defaultColumnSizes: any;
  classNames: {
    EL: string;
  };
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  updateGrid(): void;
  /**
   * @description Adapt the current grid sizes based on his parent item sizes
   * @param {HTMLElement} containerEl The parent element which contain the scope
   */
  fitGridToParentItem(containerEl: any): void;
  /**
   * @description Retrieve all grid items of the layout and recalculate size of each ones
   * corresponding to the new grid size
   */
  resizeGridItems(): void;
  /**
   * @description Set the grid attributes of grid item
   * @param {array} splittedAttributeItem The spplitted attribute we need to apply (Example: xs, 2)
   * @param {HTMLElement} gridItem The grid item we need to modify
   * @param {number} indexItem The number of the item
   * @param {string} itemAttribute the current item attribute
   */
  private setGridItemAttributes;
  /**
   * @description Calculate the new ratio of an item depending the size of the grid
   * @param {array} splittedAttributeItem The spplitted attribute we need to apply (Example: xs, 2)
   * @param {number} indexItem The number of the item
   * @return {string} The new attribute to apply to the element
   */
  calculateRatio(indexItem: number, attributePrefix: string, attributeMedia: string, attributeSize: number, pushAttributes: any[]): string;
  /**
   * @description Define the depth of recursive grids
   * @param {HTMLElement} element
   * @param {number} level
   * @return {object} The element and his depth level
   */
  getGridLevels(element: HTMLElement, level: number): any;
  /**
   * @description Retrieve all attributes corresponding to the specific defined layout sizes
   * @param {HTMLElement} element The html element for which we need to retrieve attributes
   */
  getLayoutAttributes(element: HTMLElement): any[];
  /**
   * @description Retrieve the push values to take care in calculation of item size
   * @param {HTMLElement} element The html element for which we need to retrieve attributes
   */
  getPushAttributes(element: HTMLElement): any[];
  private getAlignment;
  render(): any;
}
