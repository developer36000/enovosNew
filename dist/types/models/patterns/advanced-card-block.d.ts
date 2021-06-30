import { ActionListItem } from '../action-list-item';
import { DatalistItem } from '../components/datalist-item';
import { Icon } from '../foundation/icon';
export interface IAdvancedCardMetrics {
  header?: string;
  headerStyles?: string;
  headerType?: string;
  headerFontWeight?: string;
  top?: string;
  topStyles?: string;
  topType?: string;
  topFontWeight?: string;
  value: string;
  valueFitted?: boolean;
  valueStyles?: string;
  valueType?: string;
  valueFontWeight?: string;
  valueDirection?: string;
  valueSup?: string;
  valueSupStyles?: string;
  valueSupType?: string;
  valueSupFontWeight?: string;
  subValue?: string;
  subValueStyles?: string;
  subValueType?: string;
  subValueFontWeight?: string;
  subValueSup?: string;
  subValueSupStyles?: string;
  subValueSupType?: string;
  subValueSupFontWeight?: string;
  bottom?: string;
  bottomStyles?: string;
  bottomType?: string;
  bottomFontWeight?: string;
  bottomAdditional?: string;
  bottomAdditionalStyles?: string;
  bottomAdditionalType?: string;
  bottomAdditionalFontWeight?: string;
}
export declare class AdvancedCardMetrics implements IAdvancedCardMetrics {
  header: string;
  headerStyles: string;
  headerType: string;
  headerFontWeight: string;
  top: string;
  topStyles: string;
  topType: string;
  topFontWeight: string;
  value: string;
  valueFitted: boolean;
  valueStyles: string;
  valueType: string;
  valueFontWeight: string;
  valueDirection: string;
  valueSup: string;
  valueSupStyles: string;
  valueSupType: string;
  valueSupFontWeight: string;
  subValue: string;
  subValueStyles: string;
  subValueType: string;
  subValueFontWeight: string;
  subValueSup: string;
  subValueSupStyles: string;
  subValueSupType: string;
  subValueSupFontWeight: string;
  bottom: string;
  bottomStyles: string;
  bottomType: string;
  bottomFontWeight: string;
  bottomAdditional: string;
  bottomAdditionalStyles: string;
  bottomAdditionalType: string;
  bottomAdditionalFontWeight: string;
  constructor(obj: IAdvancedCardMetrics);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IAdvancedCardImage {
  alt?: string;
  src: string;
  notFitted?: boolean;
  size?: string;
}
export declare class AdvancedCardImage implements IAdvancedCardImage {
  alt: string;
  src: string;
  notFitted: boolean;
  size: string;
  constructor(obj: IAdvancedCardImage);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IAdvancedCardBadge {
  text?: string;
  styles?: string;
  size?: string;
}
export declare class AdvancedCardBadge implements IAdvancedCardBadge {
  text: string;
  styles: string;
  size: string;
  constructor(obj: IAdvancedCardBadge);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IAdvancedCardBlock {
  id?: string;
  component: string;
  content?: string;
  styles?: string;
  type?: string;
  fontWeight?: string;
  outlined?: boolean;
  textOnly?: boolean;
  align?: string;
  path?: string;
  icon?: string;
  actions?: ActionListItem[];
  clampLines?: number;
  iconPosition?: string;
  alternate?: boolean;
  clickable?: boolean;
  alternateReverse?: boolean;
  datalistItems?: DatalistItem[];
  image?: AdvancedCardImage;
  position?: string;
  badge?: AdvancedCardBadge;
  metrics?: AdvancedCardMetrics;
  blocks?: AdvancedCardBlock[];
}
export declare class AdvancedCardBlock implements IAdvancedCardBlock {
  id: string;
  component: string;
  content: string;
  styles: string;
  type: string;
  fontWeight: string;
  outlined: boolean;
  textOnly: boolean;
  align: string;
  path: string;
  icon: string;
  actions: ActionListItem[];
  clampLines: number;
  iconPosition: string;
  alternate: boolean;
  clickable: boolean;
  alternateReverse: boolean;
  datalistItems: DatalistItem[];
  image: AdvancedCardImage;
  position: string;
  badge: AdvancedCardBadge;
  metrics: AdvancedCardMetrics;
  blocks: AdvancedCardBlock[];
  leadingIcon: Icon[];
  trailingIcon: Icon[];
  constructor(obj: IAdvancedCardBlock);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
