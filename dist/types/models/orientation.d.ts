export interface IOrientation {
  id: string;
  animation?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  progressValue?: number;
  color?: string;
  value?: string;
  subFund?: string;
  desc?: string;
  getProp(arg: string): any;
  hasProp(arg: string): boolean;
}
export declare class Orientation implements IOrientation {
  id: string;
  animation: string;
  image: string;
  title: string;
  subtitle: string;
  progressValue: number;
  color: string;
  value: string;
  subFund: string;
  desc: string;
  constructor(obj: IOrientation);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
