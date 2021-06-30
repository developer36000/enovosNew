export interface IDropdownUserItem {
  id: string;
  text: string;
  active?: boolean;
}
export declare class DropdownUserItem implements IDropdownUserItem {
  id: string;
  text: string;
  active: boolean;
  constructor(obj: IDropdownUserItem);
}
