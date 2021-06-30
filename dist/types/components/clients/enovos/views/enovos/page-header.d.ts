import { FunctionalComponent } from '../../../../../stencil-public-runtime';
export interface Action {
  title?: string;
  icon?: string;
}
export interface NavigationItem {
  id: string;
  text: string;
}
interface Props {
  activeNavigationItem?: string;
  baseClassName: string;
  navigationItems?: NavigationItem[];
  pageHeaderCentered?: boolean;
  pageHeaderElevated?: boolean;
  pageTitle?: string;
  primaryActions?: Action[];
  secondaryActions?: Action[];
  smallContentWidth?: boolean;
  tertiaryActions?: Action[];
}
export declare const PageHeader: FunctionalComponent<Props>;
export {};
