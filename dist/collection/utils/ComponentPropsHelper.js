export class ComponentPropsHelper {
  static filterStyles(styles) {
    const stylesList = styles.split(' ');
    const variationStyles = ['reverse'];
    const sizeStyles = ['xs', 'sm', 'md', 'lg'];
    // Generate regex, including *brand-* support
    const regex = new RegExp(`^(brand-.*)$|(${variationStyles.join('|')}|${sizeStyles.join('|')})`);
    const classNames = [];
    const variationClassNames = [];
    const sizeClassNames = [];
    stylesList.forEach((style) => {
      if (regex.test(style)) {
        if (variationStyles.includes(style)) {
          variationClassNames.push(style);
        }
        else if (sizeStyles.includes(style)) {
          sizeClassNames.push(style);
        }
        else {
          classNames.push(style);
        }
      }
    });
    return classNames.concat(variationClassNames).concat(sizeClassNames);
  }
  static getStyles(styles, prefix) {
    return this.filterStyles('' + styles).map((filteredStyle) => {
      if (prefix) {
        return `${prefix}--${filteredStyle}`;
      }
      return `${filteredStyle}`;
    }).join(' ');
  }
  static setAttributes(el, attrs) {
    Object.entries(attrs).forEach(args => el.setAttribute(...args));
  }
  static getDynamicAttributes(attribute, value) {
    const opts = {};
    if (typeof value !== 'undefined' && value !== null) {
      opts[attribute] = value;
      return opts;
    }
    return false;
  }
  static setGlobalStyles(styles, prefix) {
    if (!styles) {
      return '';
    }
    const stylesList = styles.split(' ');
    // Colors
    const colorStyles = ['primary', 'secondary', 'tertiary', 'quaternary-*', 'quinary', 'senary', 'septenary', 'primary-.*', 'secondary-.*', 'tertiary-.*', 'quaternary-.*', 'quinary-.*', 'senary-.*', 'septenary-.*', 'grey-.*', 'text', 'black', 'white', 'white-opacity-15', 'white-opacity-50', 'contextual-.*', 'expressive-.*', 'pfm-.*', 'external-bank-.*', 'brand-.*'];
    const stateStyles = ['success', 'info', 'warning', 'error'];
    // Font styles
    const fontStyles = ['weight-.*', 'no-weight', 'style-italic', 'style-oblique', 'style-normal', 'left', 'center', 'right', 'lowercase', 'uppercase', 'capitalize', 'underline', 'superhero', 'italic', 'size', 'with-leading-icon', 'with-cleaning-icon', 'line-height-body-.*'];
    const fontFamilies = ['font-family-.*', 'font-family-mobile-.*'];
    const baseClasses = colorStyles.concat(stateStyles).concat(fontStyles).concat(fontFamilies);
    // Gradient styles
    const gradientStyles = ['bg--gradient-.*', 'gradient'].concat(['light', 'medium', 'dark'].map((gradientStyle) => `gradient-${gradientStyle}`));
    const specialStyles = ['outlined', 'bordered', 'transparent', 'disabled', 'indeterminate'];
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
    return variationClassNames.concat(classNames).concat(additionnalClassNames).map((filteredStyle) => {
      if (prefix) {
        return `${prefix}--${filteredStyle}`;
      }
      return `${filteredStyle}`;
    }).join(' ');
  }
  // Get size
  static getSize(sizeValue, className) {
    if (sizeValue !== undefined) {
      const regex = /(px|x)?(\d*\.?\d+)(px|x)?/gi;
      const regexMatch = regex.exec(sizeValue);
      if (regexMatch && regexMatch.length === 4) {
        const ratio = (regexMatch[1] !== undefined) ? regexMatch[1] : regexMatch[3];
        let size = parseInt(regexMatch[2], 10);
        if (ratio !== undefined && ratio.toLowerCase() === 'px') {
          size = Math.round(size / 8);
        }
        if (size > 0) {
          return `${className}--${size}`;
        }
      }
    }
    return '';
  }
}
