export class BtnPropsHelper {
  static filterStyles(styles) {
    const stylesList = styles.split(' ');
    // Colors
    const colorStyles = ['default', 'primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary', 'grey', 'grey-50', 'grey-.*', 'success', 'error', 'warning', 'contextual-.*', 'pfm-.*', 'external-bank-.*', 'brand-.*', 'white', 'black'];
    const baseClasses = colorStyles;
    const variationStyles = ['text', 'outlined', 'expand', 'rounded', 'squared', 'no-radius', 'no-radius-left', 'no-radius-right', 'narrow'];
    const stateStyles = ['hover', 'focus', 'active', 'disabled'];
    // Generate regex, including *brand-* support
    const regex = new RegExp(`^(brand-.*)$|(${baseClasses.join('|')}|${variationStyles.join('|')}|${stateStyles.join('|')})`);
    const classNames = [];
    const variationClassNames = [];
    const stateClassNames = [];
    stylesList.forEach((style) => {
      if (regex.test(style)) {
        if (variationStyles.includes(style)) {
          variationClassNames.push(style);
        }
        else if (stateStyles.includes(style)) {
          stateClassNames.push(style);
        }
        else {
          classNames.push(style);
        }
      }
    });
    return variationClassNames.concat(classNames).concat(stateClassNames);
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
