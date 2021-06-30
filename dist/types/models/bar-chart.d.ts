export interface IDataset {
  items: IDatasetItem[];
  style?: string;
}
export interface IDatasetItem {
  value: number;
  id?: string;
  text?: string;
}
