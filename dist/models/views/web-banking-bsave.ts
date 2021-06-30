export interface IFormBSaveAmountValue {
  placement: number;
  investment: number;
}

export class FormBSaveAmountValue implements IFormBSaveAmountValue {

  placement: number;
  investment: number;

  constructor(obj: IFormBSaveAmountValue) {
    // make DatalistItemData idempotent
    if (obj instanceof FormBSaveAmountValue) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

}

export interface IFormBSaveAmount {
  value: FormBSaveAmountValue;
}

export class FormBSaveAmount implements IFormBSaveAmount {

  value: FormBSaveAmountValue;

  constructor(obj: IFormBSaveAmount) {
    // make DatalistItemData idempotent
    if (obj instanceof FormBSaveAmount) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

}

export interface IFormBSaveOrientation {
  value: string;
}

export class FormBSaveOrientation implements IFormBSaveOrientation {

  value: string;

  constructor(obj: IFormBSaveOrientation) {
    // make DatalistItemData idempotent
    if (obj instanceof FormBSaveOrientation) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

}

export interface IFormBSave {
  orientation: FormBSaveOrientation;
  amount: FormBSaveAmount;
}

export class FormBSave implements IFormBSave {

  orientation: FormBSaveOrientation;
  amount: FormBSaveAmount;

  constructor(obj: IFormBSave) {
    // make DatalistItemData idempotent
    if (obj instanceof FormBSave) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

}

export interface IRessourcesBSave {
  homeLogo: string;
  homeMotion: string;
  conservative: string;
  balanced: string;
  dynamic: string;
  growth: string;
}

export class RessourcesBSave implements IRessourcesBSave {

  homeLogo: string;
  homeMotion: string;
  conservative: string;
  balanced: string;
  dynamic: string;
  growth: string;

  constructor(obj: IRessourcesBSave) {
    // make DatalistItemData idempotent
    if (obj instanceof RessourcesBSave) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

}
