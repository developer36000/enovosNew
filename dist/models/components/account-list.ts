import { IAccountItemData } from './account-item';

interface IAccountListData {
  parent: IAccountItemData;
  children?: IAccountItemData[];
}

interface IAccountListEvent {
  target: EventTarget | Element;
  data: IAccountItemData;
  parentData: IAccountItemData | undefined;
}

export { IAccountListData, IAccountListEvent }
