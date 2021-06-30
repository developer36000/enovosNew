export interface IDropdownUserItem {
  id: string;
  text: string;
  active ?: boolean;
}

export class DropdownUserItem implements IDropdownUserItem {

  id: string;
  text: string;
  active: boolean;

  constructor(obj: IDropdownUserItem) {
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
