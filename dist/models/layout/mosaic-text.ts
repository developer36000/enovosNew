import { get, has } from 'lodash-es';

export interface IMosaicText {

  id ?: string;
  content ?: string;
  styles ?: string;
  type ?: string;
  fontWeight ?: string;
  clampLines ?: number;
  super ?: boolean;
  shapeColor ?: string;
}

export class MosaicText implements IMosaicText {

  id: string;
  content: string;
  styles: string;
  type: string;
  fontWeight: string;
  clampLines: number;
  super: boolean;
  shapeColor: string;

  constructor(obj: IMosaicText) {

    if (obj instanceof MosaicText) {
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
