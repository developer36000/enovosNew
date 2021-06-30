import { createStore } from '@stencil/store';
const getCurrentTheme = () => {
  if (localStorage.getItem('currentTheme')) {
    return localStorage.getItem('currentTheme');
  }
  return 'default';
};
const store = createStore({
  theme: getCurrentTheme(),
});
store.onChange('theme', async () => {
  localStorage.setItem('currentTheme', store.get('theme'));
  window.localStorage.setItem('currentTheme', store.get('theme'));
});
export const dispose = store.dispose;
export const state = store.state;
export const reset = store.reset;
export const onChange = store.onChange;
export const storeTheme = store;
