import { FunctionalComponent } from '../../../../../stencil-public-runtime';
export declare type IconColor = 'primary' | 'red' | 'blue' | 'dark-blue';
export declare type IconType = 'dot' | 'line';
export interface LegendItem {
  iconColor: IconColor;
  iconType: IconType;
  title: string;
}
interface Props {
  baseClassName: string;
  items: LegendItem[];
}
export declare const Legend: FunctionalComponent<Props>;
export {};
