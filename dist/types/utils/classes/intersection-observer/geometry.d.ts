/**
 * From provided rectangle creates a new one whose
 * properties are not enumerable, configurable or writable.
 *
 * @param {ClientRect} rect - Initial rectangle.
 * @returns {ClientRect}
 */
export declare function mapToClientRect(rect: any): any;
/**
 * Creates rectangle based on provided arguments.
 * If called without arguments then an empty rectangle
 * will be created.
 *
 * @param {Number} [left = 0] - Left position of rectangle.
 * @param {Number} [top = 0] - Top position of rectangle.
 * @param {Number} [width = 0] - Rectangles' width.
 * @param {Number} [height = 0] - Rectangles' height.
 * @returns {ClientRect}
 */
export declare function createRectangle(left?: number, top?: number, width?: number, height?: number): {
  left: number;
  top: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
};
/**
 * Returns client rectangle of provided element.
 * If element represents documentElement then returns
 * main viewport rectangle.
 *
 * @param {Element} target
 * @returns {ClientRect}
 */
export declare function getRectangle(target: any): any;
/**
 * Calculates area of rectangle.
 *
 * @param {ClientRect} rect - Rectangle whose area needs to be calculated.
 * @returns {Number} Rectangles' area.
 */
export declare function getArea(rect: any): number;
/**
 * Tells whether rectangle is empty.
 *
 * @param {ClientRect} rect - Rectangle to be checked.
 * @returns {Boolean}
 */
export declare function isEmpty(rect: any): boolean;
/**
 * Compares rectangles to each other.
 *
 * @param {ClientRect} first
 * @param {ClientRect} second
 * @returns {Boolean}
 */
export declare function isEqual(first: any, second: any): boolean;
