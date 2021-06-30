export const parentAwait = async (el) => {
  const firstElement = el;
  try {
    while (el.parentElement !== null) {
      await el.parentElement.componentOnReady();
      el = el.parentElement;
    }
  }
  catch (e) { /* L😮L */ }
  return firstElement;
};
export const forceUpdate = async (el) => {
  return new Promise(resolve => {
    Array.from(el.children).forEach((child) => {
      child.forceUpdate();
    });
    resolve(true);
  });
};
