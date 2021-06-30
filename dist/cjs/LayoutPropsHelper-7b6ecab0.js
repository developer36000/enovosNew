'use strict';

class LayoutPropsHelper {
  static filterStyles(styles) {
    const stylesList = styles.split(' ');
    const layoutStyles = ['(margin-.*)'];
    // Generate regex, including *brand-* support
    const regex = new RegExp(`${layoutStyles.join('|')}`);
    const classNames = [];
    stylesList.forEach((style) => {
      if (regex.test(style)) {
        classNames.push(style);
      }
    });
    return classNames;
  }
  static getStyles(styles, prefix) {
    return this.filterStyles('' + styles).map((filteredStyle) => {
      if (prefix) {
        return `${prefix}--${filteredStyle}`;
      }
      return `${filteredStyle}`;
    }).join(' ');
  }
}

exports.LayoutPropsHelper = LayoutPropsHelper;
