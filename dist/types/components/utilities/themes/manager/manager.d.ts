/**
 * @name Themes Manager
 * @description The themes-manager layout is a component allowing to modify the visual aspect of the design system components according to a particular theme. Themes are defined by designers and each component can have a visual alternate version.<br />Methods called on this pattern allow the setting of a specific theme to all the components available for the current design system.
 * @path layout/themes
 * @documented true
 * @codeOnly true
 * @prop --theme_available-themes: default | dark
 */
export declare class ENOVOSThemesManager {
  set(theme: string): Promise<void>;
  get(): Promise<string>;
  render(): void;
}
