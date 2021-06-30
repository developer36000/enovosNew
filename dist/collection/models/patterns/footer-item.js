export class FooterItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof FooterItem) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
}
