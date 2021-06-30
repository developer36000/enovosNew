import { createStore } from '@stencil/store';
const store = createStore({
  page: undefined,
  step: undefined,
  state: undefined,
});
export const dispose = store.dispose;
export const state = store.state;
export const reset = store.reset;
