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

type State = {
  type: 'warning' | 'info' | 'error' | 'disabled';
  message?: string;
  icon?: string;
}

type Badge = {
  text: string;
  color: string;
  size: string;
}

type ProgressBar = {
  max: number,
  value: number,
  text: string,
}

type Media = MediaImage | MediaIcon;

type MediaImage = {
  type: 'image'; // Discriminent type union
  uri: string;
}

type MediaIcon = {
  type: 'icon'; // Discriminent type union
  icon: string;
  styles?: string;
}

export { IAccountItemData }
