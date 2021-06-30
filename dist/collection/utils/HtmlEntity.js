export class HtmlEntity {
  static decode(str) {
    return str.replace(/&#(\d+);/gi, (entity, charCode) => {
      entity.toString();
      return String.fromCharCode(charCode);
    });
  }
}
