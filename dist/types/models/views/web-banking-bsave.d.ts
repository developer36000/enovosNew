export interface IFormBSaveAmountValue {
  placement: number;
  investment: number;
}
export declare class FormBSaveAmountValue implements IFormBSaveAmountValue {
  placement: number;
  investment: number;
  constructor(obj: IFormBSaveAmountValue);
}
export interface IFormBSaveAmount {
  value: FormBSaveAmountValue;
}
export declare class FormBSaveAmount implements IFormBSaveAmount {
  value: FormBSaveAmountValue;
  constructor(obj: IFormBSaveAmount);
}
export interface IFormBSaveOrientation {
  value: string;
}
export declare class FormBSaveOrientation implements IFormBSaveOrientation {
  value: string;
  constructor(obj: IFormBSaveOrientation);
}
export interface IFormBSave {
  orientation: FormBSaveOrientation;
  amount: FormBSaveAmount;
}
export declare class FormBSave implements IFormBSave {
  orientation: FormBSaveOrientation;
  amount: FormBSaveAmount;
  constructor(obj: IFormBSave);
}
export interface IRessourcesBSave {
  homeLogo: string;
  homeMotion: string;
  conservative: string;
  balanced: string;
  dynamic: string;
  growth: string;
}
export declare class RessourcesBSave implements IRessourcesBSave {
  homeLogo: string;
  homeMotion: string;
  conservative: string;
  balanced: string;
  dynamic: string;
  growth: string;
  constructor(obj: IRessourcesBSave);
}
