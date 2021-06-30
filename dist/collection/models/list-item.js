import { get, has } from 'lodash-es';
export class ListItem {
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
    const output = get(this, key);
    return output ? output : '';
  }
  hasProp(key) {
    return has(this, key);
  }
}
