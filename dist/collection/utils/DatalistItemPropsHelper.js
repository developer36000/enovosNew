export class DatalistItemPropsHelper {
  static filterStyles(styles) {
    const stylesList = styles.split(' ');
    const layoutStyles = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary', 'primary-.*', 'secondary-.*', 'tertiary-.*', 'quaternary-.*', 'quinary-.*', 'senary-.*', 'septenary-.*', 'grey-.*', 'black', 'white', 'white-opacity-15', 'white-opacity-50', 'contextual-.*', 'expressive-.*', 'pfm-.*', 'external-bank-.*', 'brand-.*', 'success', 'info', 'warning', 'error'];
    const regex = new RegExp(`(${layoutStyles.join('|')})`);
    const classNames = [];
    stylesList.forEach((style) => {
      regex.test(style) ? classNames.push(style) : classNames.push('');
    });
    return [].concat(classNames).filter(Boolean);
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
