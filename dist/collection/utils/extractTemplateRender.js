import { find } from 'lodash-es';
import { state } from '../store/views';
export class ExtractTemplateRender {
  static setEvent(viewData = [], templateName = '') {
    const existView = find(state.views, v => v.templateName === templateName);
    if (existView) {
      existView.template = Array.isArray(viewData) ? viewData : [viewData];
      state.views = [...state.views];
    }
    else {
      if (!Array.isArray(state.views) || !state.views) {
        state.views = [];
      }
      state.views.push({
        template: Array.isArray(viewData) ? viewData : [viewData],
        templateName,
      });
    }
    document.removeEventListener('keyup', (e) => this.displayTemplate(e), false);
    document.addEventListener('keyup', (e) => this.displayTemplate(e), false);
  }
  static displayTemplate(e) {
    if (e.ctrlKey && e.key === 'm' && state.print === undefined) {
      state.print = Date.now();
    }
  }
}
