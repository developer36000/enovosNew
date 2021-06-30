export interface IMosaicText {
  id?: string;
  content?: string;
  styles?: string;
  type?: string;
  fontWeight?: string;
  clampLines?: number;
  super?: boolean;
  shapeColor?: string;
}
export declare class MosaicText implements IMosaicText {
  id: string;
  content: string;
  styles: string;
  type: string;
  fontWeight: string;
  clampLines: number;
  super: boolean;
  shapeColor: string;
  constructor(obj: IMosaicText);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
