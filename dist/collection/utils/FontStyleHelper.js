export class FontStyleHelper {
  static filterStyles(styles) {
    const stylesList = styles.split(' ');
    const fontStyles = ['font-family-1', 'font-family-2', 'font-family-3', 'font-family-mobile-1'];
    const regex = new RegExp(`(${fontStyles.join('|')})`);
    const classNames = [];
    stylesList.forEach((style) => {
      regex.test(style) ? classNames.push(style) : classNames.push('');
    });
    return [].concat(classNames).filter(Boolean);
  }
  static getStyles(styles) {
    if (styles) {
      return this.filterStyles(styles).map((filteredStyle) => {
        return `font-${filteredStyle}`;
      }).join(' ');
    }
    return '';
  }
}
