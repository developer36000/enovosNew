interface IAccountItemData {
  [key: string]: any;
  id?: string;
  type?: string;
  media?: Media;
  text?: string;
  caption?: string;
  amount?: string;
  amountStyles?: string;
  currency?: string;
  originalAmount?: string;
  originalCurrency?: string;
  state?: State;
  progressBar?: ProgressBar;
  badge?: Badge;
  styles?: string;
}
declare type State = {
  type: 'warning' | 'info' | 'error' | 'disabled';
  message?: string;
  icon?: string;
};
declare type Badge = {
  text: string;
  color: string;
  size: string;
};
declare type ProgressBar = {
  max: number;
  value: number;
  text: string;
};
declare type Media = MediaImage | MediaIcon;
declare type MediaImage = {
  type: 'image';
  uri: string;
};
declare type MediaIcon = {
  type: 'icon';
  icon: string;
  styles?: string;
};
export { IAccountItemData };
