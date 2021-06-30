export class CurrentUser {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CurrentUser) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
}
