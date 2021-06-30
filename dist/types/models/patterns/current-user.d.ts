export interface ICurrentUser {
  'first-name': string;
  'last-name': string;
  'title': string;
}
export declare class CurrentUser implements ICurrentUser {
  'first-name': string;
  'last-name': string;
  'title': string;
  constructor(obj: ICurrentUser);
}
