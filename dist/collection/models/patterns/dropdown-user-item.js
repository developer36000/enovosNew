export class DropdownUserItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DropdownUserItem) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
}
