export interface IFooterItem {
  id: string;
  text: string;
  url ?: string;
}

export class FooterItem implements IFooterItem {

  id: string;
  text: string;
  url: string;

  constructor(obj: IFooterItem) {
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
