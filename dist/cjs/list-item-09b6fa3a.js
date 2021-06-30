'use strict';

const _hasPath = require('./_hasPath-fb5594fa.js');
const has = require('./has-c1d0fffa.js');

class ListItem {
  constructor(obj) {
    this.props = {
      content: 'string',
      styles: 'object',
    };
    // Add props
    for (const name in this.props) {
      if (this.props.hasOwnProperty(name) && obj[name] && typeof obj[name] === this.props[name]) {
        this[name] = obj[name];
      }
    }
  }
  getProp(key) {
    const output = _hasPath.get(this, key);
    return output ? output : '';
  }
  hasProp(key) {
    return has.has(this, key);
  }
}

exports.ListItem = ListItem;
