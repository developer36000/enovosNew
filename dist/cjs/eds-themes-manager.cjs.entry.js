'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const themes = require('./themes-bd258a0a.js');

const ENOVOSThemesManager = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async set(theme) {
    themes.storeTheme.set('theme', theme);
  }
  async get() {
    return themes.storeTheme.get('theme');
  }
  render() {
    return;
  }
};

exports.eds_themes_manager = ENOVOSThemesManager;
