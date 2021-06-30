export interface ICurrentUser {
  'first-name': string;
  'last-name': string;
  'title': string;
}

export class CurrentUser implements ICurrentUser {

  'first-name': string;
  'last-name': string;
  'title': string;

  constructor(obj: ICurrentUser) {
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
