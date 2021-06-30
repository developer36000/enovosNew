import { createStore } from '@stencil/store';
const store = createStore({
  apiUrl: undefined,
  data: undefined,
});
store.onChange('apiUrl', async () => {
  state.data = getData();
});
const getData = () => {
  return fetch(state.apiUrl)
    .then(res => {
    return res.json().then(json => {
      return json;
    })
      .catch(err => { throw err; });
  })
    .then(response => {
    return response;
  })
    .catch(err => { throw err; });
};
export const dispose = store.dispose;
export const state = store.state;
export const reset = store.reset;
