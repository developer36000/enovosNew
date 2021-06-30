export class FormBSaveAmountValue {
  constructor(obj) {
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
export class FormBSaveAmount {
  constructor(obj) {
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
export class FormBSaveOrientation {
  constructor(obj) {
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
export class FormBSave {
  constructor(obj) {
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
export class RessourcesBSave {
  constructor(obj) {
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
