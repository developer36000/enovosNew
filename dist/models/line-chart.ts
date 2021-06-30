export interface IDataset {
  style?: string;
  legend?: string;
  items: IDatasetItem[];
}

export interface IDatasetItem {
  text?: string;
  secondaryText?: string;
  value: number;
}

export interface IComputedDataset {
  style?: string;
  legend?: string;
  items: IComputedDatasetItem[];
}

export type IComputedDatasetItem = IDatasetItem & {
  id: string;
}
