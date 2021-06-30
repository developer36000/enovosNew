import { r as registerInstance } from './index-c1ef9624.js';
import { s as storeTheme } from './themes-9daeeb3d.js';

const ENOVOSThemesManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async set(theme) {
    storeTheme.set('theme', theme);
  }
  async get() {
    return storeTheme.get('theme');
  }
  render() {
    return;
  }
};

export { ENOVOSThemesManager as eds_themes_manager };
