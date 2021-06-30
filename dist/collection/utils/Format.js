export class Format {
  static amount(value, separator = '.', interval = ' ', fixed = 0) {
    const formattedNumber = (typeof value === 'string') ? Number.parseFloat(value.replace(',', '.').replace(/ /g, '')) : value;
    const formattedString = (fixed > 0) ? formattedNumber.toFixed(fixed) : formattedNumber.toString();
    return formattedString
      .replace(',', separator)
      .replace('.', separator)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${interval}`);
  }
}
