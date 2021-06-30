import { get, has } from 'lodash-es';

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

export class AdvancedCardMetrics implements IAdvancedCardMetrics {
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

  constructor(obj: IAdvancedCardMetrics) {
    // make DatalistItemData idempotent
    if (obj instanceof AdvancedCardMetrics) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}

export interface IAdvancedCardImage {
  alt?: string;
  src: string;
  notFitted?: boolean;
  size?: string;
}

export class AdvancedCardImage implements IAdvancedCardImage {
  alt: string;
  src: string;
  notFitted: boolean;
  size: string;

  constructor(obj: IAdvancedCardImage) {
    // make DatalistItemData idempotent
    if (obj instanceof AdvancedCardImage) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}

export interface IAdvancedCardBadge {
  text?: string;
  styles?: string;
  size?: string;
}

export class AdvancedCardBadge implements IAdvancedCardBadge {
  text: string;
  styles: string;
  size: string;

  constructor(obj: IAdvancedCardBadge) {
    // make DatalistItemData idempotent
    if (obj instanceof AdvancedCardBadge) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}

export interface IAdvancedCardBlock {
  id ?: string;
  component: string;
  content ?: string;
  styles ?: string;
  type ?: string;
  fontWeight ?: string;
  outlined ?: boolean;
  textOnly ?: boolean;
  align ?: string;
  path ?: string;
  icon ?: string;
  actions ?: ActionListItem[];
  clampLines ?: number;
  iconPosition ?: string;
  alternate ?: boolean;
  clickable ?: boolean;
  alternateReverse ?: boolean;
  datalistItems ?: DatalistItem[];
  image ?: AdvancedCardImage;
  position?: string;
  badge ?: AdvancedCardBadge;
  metrics ?: AdvancedCardMetrics;
  blocks ?: AdvancedCardBlock[];
}

export class AdvancedCardBlock implements IAdvancedCardBlock {

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

  constructor(obj: IAdvancedCardBlock) {
    // make DatalistItemData idempotent
    if (obj instanceof AdvancedCardBlock) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}
