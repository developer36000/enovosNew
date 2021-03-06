import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { C as ComponentPropsHelper } from './ComponentPropsHelper-9f5a3c88.js';

const imageCss = "[name=image]{display:block}[name=image] img{display:block;width:100%;height:inherit;max-height:inherit;border-radius:inherit;-o-object-fit:contain;object-fit:contain}[name=image].image--full{display:flex;align-items:center;width:100%;height:100%}[name=image] .image--no-fitted{width:inherit}[name=image] .image--0{height:0px !important}[name=image] .image--1{height:8px !important}[name=image] .image--2{height:16px !important}[name=image] .image--3{height:24px !important}[name=image] .image--4{height:32px !important}[name=image] .image--5{height:40px !important}[name=image] .image--6{height:48px !important}[name=image] .image--7{height:56px !important}[name=image] .image--8{height:64px !important}[name=image] .image--9{height:72px !important}[name=image] .image--10{height:80px !important}[name=image] .image--11{height:88px !important}[name=image] .image--12{height:96px !important}[name=image] .image--13{height:104px !important}[name=image] .image--14{height:112px !important}[name=image] .image--15{height:120px !important}[name=image] .image--16{height:128px !important}[name=image] .image--17{height:136px !important}[name=image] .image--18{height:144px !important}[name=image] .image--19{height:152px !important}[name=image] .image--20{height:160px !important}[name=image] .image--21{height:168px !important}[name=image] .image--22{height:176px !important}[name=image] .image--23{height:184px !important}[name=image] .image--24{height:192px !important}[name=image] .image--25{height:200px !important}[name=image] .image--26{height:208px !important}[name=image] .image--27{height:216px !important}[name=image] .image--28{height:224px !important}[name=image] .image--29{height:232px !important}[name=image] .image--30{height:240px !important}[name=image] .image--31{height:248px !important}[name=image] .image--32{height:256px !important}[name=image] .image--33{height:264px !important}[name=image] .image--34{height:272px !important}[name=image] .image--35{height:280px !important}[name=image] .image--36{height:288px !important}[name=image] .image--37{height:296px !important}[name=image] .image--38{height:304px !important}[name=image] .image--39{height:312px !important}[name=image] .image--40{height:320px !important}[name=image] .image--41{height:328px !important}[name=image] .image--42{height:336px !important}[name=image] .image--43{height:344px !important}[name=image] .image--44{height:352px !important}[name=image] .image--45{height:360px !important}[name=image] .image--46{height:368px !important}[name=image] .image--47{height:376px !important}[name=image] .image--48{height:384px !important}[name=image] .image--49{height:392px !important}[name=image] .image--50{height:400px !important}[name=image] .image--51{height:408px !important}[name=image] .image--52{height:416px !important}[name=image] .image--53{height:424px !important}[name=image] .image--54{height:432px !important}[name=image] .image--55{height:440px !important}[name=image] .image--56{height:448px !important}[name=image] .image--57{height:456px !important}[name=image] .image--58{height:464px !important}[name=image] .image--59{height:472px !important}[name=image] .image--60{height:480px !important}[name=image] .image--61{height:488px !important}[name=image] .image--62{height:496px !important}[name=image] .image--63{height:504px !important}[name=image] .image--64{height:512px !important}[name=image] .image--65{height:520px !important}[name=image] .image--66{height:528px !important}[name=image] .image--67{height:536px !important}[name=image] .image--68{height:544px !important}[name=image] .image--69{height:552px !important}[name=image] .image--70{height:560px !important}[name=image] .image--71{height:568px !important}[name=image] .image--72{height:576px !important}[name=image] .image--73{height:584px !important}[name=image] .image--74{height:592px !important}[name=image] .image--75{height:600px !important}[name=image] .image--76{height:608px !important}[name=image] .image--77{height:616px !important}[name=image] .image--78{height:624px !important}[name=image] .image--79{height:632px !important}[name=image] .image--80{height:640px !important}[name=image] .image--81{height:648px !important}[name=image] .image--82{height:656px !important}[name=image] .image--83{height:664px !important}[name=image] .image--84{height:672px !important}[name=image] .image--85{height:680px !important}[name=image] .image--86{height:688px !important}[name=image] .image--87{height:696px !important}[name=image] .image--88{height:704px !important}[name=image] .image--89{height:712px !important}[name=image] .image--90{height:720px !important}[name=image] .image--91{height:728px !important}[name=image] .image--92{height:736px !important}[name=image] .image--93{height:744px !important}[name=image] .image--94{height:752px !important}[name=image] .image--95{height:760px !important}[name=image] .image--96{height:768px !important}[name=image] .image--97{height:776px !important}[name=image] .image--98{height:784px !important}[name=image] .image--99{height:792px !important}[name=image] .image--100{height:800px !important}";

const ENOVOSImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.alt = '';
    this.notFitted = false;
    this.classNames = {
      EL: 'image',
    };
  }
  /** INJECT_ANCHOR */
  handleTheme() {
    const handleThemeChange = theme => {
      Array.from(this.el.classList).filter(className => {
        return className.startsWith('theme--');
      }).forEach(themeClassName => {
        this.el.classList.remove(themeClassName);
      });
      // Add new theme class
      this.el.classList.add(`theme--${theme}`);
    };
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    if (this.size !== undefined && this.size !== '' && this.notFitted === false) {
      this.el.classList.add(`${this.classNames.EL}--full`);
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}--full`);
    }
  }
  /**
   * TODO: found another method to do this... not very ok with this solution
   */
  notFittedClass() {
    if (this.notFitted === true) {
      return `${this.classNames.EL}--no-fitted`;
    }
  }
  setMainElementClasses() {
    return [
      this.classNames.EL,
      this.notFittedClass(),
      ComponentPropsHelper.getSize(this.size, this.classNames.EL),
    ].join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("img", { class: this.setMainElementClasses(), src: this.src, alt: this.alt }));
  }
  get el() { return getElement(this); }
};
ENOVOSImage.style = imageCss;

export { ENOVOSImage as eds_image };
