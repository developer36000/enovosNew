import { FunctionalComponent } from '../../../../../stencil-public-runtime';
interface Props {
  activeNavigationItem?: string;
  baseClassName: string;
  content?: any;
  headerActions?: Action[];
  headerShadowed?: boolean;
  headerTitle?: string;
  navigationId?: string;
  navigationItems?: NavigationItem[];
}
export interface NavigationItem {
  id: string;
  text: string;
}
export interface Action {
  title?: string;
  icon?: string;
}
export declare const Panel: FunctionalComponent<Props>;
export {};
