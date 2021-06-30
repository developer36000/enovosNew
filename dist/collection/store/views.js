import { createStore } from '@stencil/store';
import { find } from 'lodash-es';
import * as pretty from 'pretty';
const store = createStore({
  views: [],
  print: undefined,
  lastScrollPosition: 0,
  scrollDirection: undefined,
  isHiddenSectionBar: true,
});
/**
 * @description When print is set not undefined (mainly set with a Date,
 * try to launch printTemplate)
 */
store.onChange('print', async (value) => {
  if (value !== undefined) {
    printTemplate();
  }
});
/**
 * @description Execute parsing templates and restore print to undefined after
 * a few time (due to bubble event multiple catch keyboard events
 * from nested views)
 */
const printTemplate = () => {
  displayTemplate();
  setTimeout(() => {
    state.print = undefined;
  }, 500);
};
/**
 * @description Main function, for each available views to extract, split all
 * template and convert tags (simple tag or format view tags)
 */
const displayTemplate = () => {
  // Get latest registered view. corresponding to root view
  state.views.forEach(view => {
    let formatted = '';
    view.template.forEach(viewDataItem => {
      if (viewDataItem) {
        // Control if the tag corresponds to another view to extract.
        const getViewTag = find(state.views, v => v.templateName === (viewDataItem.$tag$ || viewDataItem.k));
        formatted += (getViewTag) ? convertViewTag(getViewTag) : convertTag(view, viewDataItem);
      }
    });
    view.formatted = formatted;
  });
  // Display the output in console
  const output = find(state.views, v => v.root !== false).formatted;
  console.clear();
  console.info(`%cTemplate Extract`, 'background: #C2A57F; color: #3C3C3C; font-size: 22px; margin: 16px 0;');
  console.info(`%c${pretty.default(output)}`, 'color: #3C3C3C; font-size: 10px;');
};
/**
 * @description Set view attributes
 */
const getViewItemAttributes = attributes => {
  if (attributes) {
    return Object.keys(attributes).map(attributeItem => {
      if (typeof attributes[attributeItem] === 'boolean' && attributes[attributeItem] === true) {
        return attributeItem;
      }
      else if (typeof attributes[attributeItem] === 'string') {
        return `${attributeItem}="${attributes[attributeItem]}"`;
      }
    }).filter(Boolean).join(' ');
  }
  return '';
};
/**
 * @description Retrieve and extract children tags. If child is tag view,
 * extract the corresponding one
 */
const getViewItems = (view, viewItem) => {
  if (viewItem.$children$ || viewItem.h) {
    return (viewItem.$children$ || viewItem.h).map(child => {
      const tag = child.$tag$ || child.k;
      const getViewTag = find(state.views, v => v.templateName === tag);
      if (getViewTag) {
        return convertViewTag(getViewTag);
      }
      else {
        const attributes = child.$attrs$ || child['m'];
        const children = getViewItems(view, child);
        return `<${tag} ${getViewItemAttributes(attributes)}>${children}</${tag}>`;
      }
    }).filter(Boolean).join('\n');
  }
  return '';
};
/**
 * @description Convert tag view to div container
 */
const convertViewTag = view => {
  let output = '';
  view.root = false;
  if (Array.isArray(view.template)) {
    output = '<div>';
    view.template.forEach(viewData => {
      const getViewTag = find(state.views, v => v.templateName === (viewData.$tag$ || viewData.k));
      output += (getViewTag) ? convertViewTag(getViewTag) : convertTag(view, viewData);
    });
    output += '</div>';
  }
  return output;
};
/**
 * @description Convert not view tag
 */
const convertTag = (view, viewData) => {
  let output = `<${viewData.$tag$ || viewData.k} ${getViewItemAttributes(viewData.$attrs$ || viewData['$'])}>`;
  output += getViewItems(view, viewData);
  output += `</${viewData.$tag$ || viewData.k}>`;
  return output;
};
export const dispose = store.dispose;
export const state = store.state;
export const reset = store.reset;
export const storeView = store;
