import { EventEmitter } from '../../../stencil-public-runtime';
import { EditableBlockConfig, EditableBlockData } from '../../../models/components/editable-block';
import { ListItem } from '../../../models/list-item';
/**
 * @name Editable block
 * @description TBD
 * @path components
 * @documented false
 */
export declare class ENOVOSEditableBlock {
  el: HTMLElement;
  color?: string;
  data: EditableBlockData;
  componentConfig: EditableBlockConfig[];
  changeBlock: EventEmitter;
  clickAction: EventEmitter;
  componentTag: any;
  configData: EditableBlockData;
  listItems: ListItem[];
  classNames: {
    EL: string;
    HEADER: string;
    CONTAINER: string;
    EDITOR: string;
    COMPONENTS: string;
    ACTIONS: string;
    CARD: string;
    ICON: string;
    ICONS: string;
    IMAGE: string;
    PARAGRAPH: string;
    LABEL: string;
    LIST: string;
    CAPTION: string;
    UNDEFINED: string;
    LEADING: string;
    TRAILING: string;
    VISIBLE: string;
    COLUMNS: string;
    TOP: string;
    ACTIVE: string;
  };
  availableComponents: {};
  defaultComponents: {
    heading: {
      icon: string;
      label: string;
      placeholder: string;
      config: {
        type: {
          h1: {
            icon: string;
            label: string;
          };
          h2: {
            icon: string;
            label: string;
          };
          h3: {
            icon: string;
            label: string;
          };
          h4: {
            icon: string;
            label: string;
          };
          h5: {
            icon: string;
            label: string;
          };
          h6: {
            icon: string;
            label: string;
          };
        };
      };
    };
    paragraph: {
      icon: string;
      label: string;
      placeholder: string;
      config: {
        type: {
          'body-1': {
            icon: string;
            label: string;
          };
          'body-2': {
            icon: string;
            label: string;
          };
          'body-3': {
            icon: string;
            label: string;
          };
        };
      };
    };
    image: {
      icon: string;
      label: string;
      placeholder: string;
    };
    list: {
      icon: string;
      label: string;
      placeholder: string;
      config: {
        type: {
          'body-1': {
            icon: string;
            label: string;
          };
          'body-2': {
            icon: string;
            label: string;
          };
          'body-3': {
            icon: string;
            label: string;
          };
        };
        align: {
          left: {
            icon: string;
            label: string;
          };
          right: {
            icon: string;
            label: string;
          };
        };
      };
    };
  };
  componentActions: {
    action: string;
    icon: string;
    label: string;
  }[];
  filledData: {};
  ignoreChange: boolean;
  _onClickOutsideHandler: any;
  _currentTargetCard: any;
  forceFocus: boolean;
  inputContent: any;
  inputContentSecondary: any;
  uuid: any;
  tmpContent: any;
  /**
   * @description: Debounce typing in input
   * Set the specific prop depending the inputName. It's possible to have
   * multiple input field like image with url and caption input.
   */
  saveInput: any;
  /**
   * @description: Method to get formatted object containing the content
   */
  getFilledData(): Promise<{}>;
  /**
   * @description: Method to set data to be display in component
   */
  setData(data: any): Promise<void>;
  /**
   * @description: Method to set config and filter available component and
   * there config.
   */
  setComponentConfig(data: any): Promise<void>;
  /**
   * @description: Watch data changes if component is updated
   */
  watchDataHandler(newData: [], oldData: []): void;
  /**
   * @description: Watch component config changes if component is updated
   */
  watchComponentConfigHandler(newData: [], oldData: []): void;
  /**
   * @description: Init component before rendering
   */
  componentWillLoad(): void;
  /**
   * @description Init the host element
   */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  /**
   * @description Init component data
   */
  private initData;
  /**
   * @description Specific initialization of list component
   * First init should set list items or set with an empty item content
   */
  private initListContent;
  /**
   * @description Init the config as EditableBlockConfig items
   */
  private initComponentConfig;
  /**
   * @description Click event on available component items (heading, img, list,...)
   */
  private clickAvailableComponentsHandle;
  /**
   * @description Click event on available component config items (h1, body-1,...)
   */
  private clickAvailableConfigurationHandle;
  /**
   * @description Click event on available actions (up, down, remove,...)
   */
  private clickActionsHandle;
  /**
   * @description Typing on input field
   */
  private inputHandle;
  /**
   * @description Filter the available component and types by config
   */
  private filterComponentConfig;
  /**
   * @description Manage copy/paste event
   */
  private pasteHandle;
  /**
   * @description Set filled data to be display by the event
   */
  private setFilledData;
  /**
   * @description Display the image src if an url has been set
   */
  private displayImage;
  private setContentToList;
  private openPopup;
  private showPopup;
  private initClickOutsideHandler;
  render(): any[];
}
