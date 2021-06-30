import { get, has } from 'lodash-es';

export class ListItem {

  props = {
    content: 'string',
    styles: 'object',
  };

  constructor(obj) {
    // Add props
    for (const name in this.props) {
      if (this.props.hasOwnProperty(name) && obj[name] && typeof obj[name] === this.props[name]) {
        this[name] = obj[name];
      }
    }
  }

  getProp(key): any {
    const output = get(this, key);
    return output ? output : '';
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}
