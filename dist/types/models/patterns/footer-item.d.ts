export interface IFooterItem {
  id: string;
  text: string;
  url?: string;
}
export declare class FooterItem implements IFooterItem {
  id: string;
  text: string;
  url: string;
  constructor(obj: IFooterItem);
}
