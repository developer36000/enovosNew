export class StylePropsHelper {
  static filterStyles(styles) {
    const stylesList = styles.split(' ');
    // Colors
    const colorStyles = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary', 'text', 'black', 'white', 'white-opacity-15', 'white-opacity-50', 'contextual-.*', 'pfm-.*', 'external-bank-.*', 'brand-.*'];
    const stateStyles = ['success', 'info', 'warning', 'error'];
    const otherColorStyles = ['contextual', 'pfm'];
    // Font styles
    const fontStyles = ['weight-100', 'weight-200', 'weight-300', 'weight-400', 'weight-500', 'weight-600', 'weight-700', 'weight-800', 'weight-900', 'no-weight', 'style-italic', 'style-oblique', 'style-normal', 'left', 'center', 'right', 'lowercase', 'uppercase', 'capitalize', 'italic', 'size', 'with-leading-icon', 'with-cleaning-icon', 'line-height-body-2'];
    const baseClasses = colorStyles.concat(stateStyles).concat(otherColorStyles).concat(fontStyles);
    // Gradient styles
    const gradientStyles = ['gradient'].concat(['light', 'medium', 'dark'].map((gradientStyle) => `gradient-${gradientStyle}`));
    const specialStyles = ['outlined', 'bordered', 'transparent', 'disabled', 'readonly', 'indeterminate', 'checked'];
    const extensionClasses = gradientStyles.concat(specialStyles);
    const variationStyles = ['full', 'round', 'expand'];
    // Generate regex, including *brand-* support
    const regex = new RegExp(`^(brand-.*)$|(${baseClasses.join('|')}|${extensionClasses.join('|')}|${variationStyles.join('|')})`);
    const classNames = [];
    const extensionClassNames = [];
    const variationClassNames = [];
    stylesList.forEach((style) => {
      if (regex.test(style)) {
        if (extensionClasses.includes(style)) {
          extensionClassNames.push(style.replace('-', '--'));
        }
        else if (variationStyles.includes(style)) {
          variationClassNames.push(style);
        }
        else {
          classNames.push(style);
        }
      }
    });
    let additionnalClassNames = [];
    if (extensionClassNames.length > 0) {
      additionnalClassNames = (classNames.length === 0)
        ? additionnalClassNames.concat(extensionClassNames)
        : additionnalClassNames.concat(classNames.map((className) => `${className}--${extensionClassNames.join(` ${className}--`)}`));
    }
    return variationClassNames.concat(classNames).concat(additionnalClassNames);
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
