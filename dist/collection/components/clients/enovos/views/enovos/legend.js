import { h } from '@stencil/core';
export const Legend = ({ baseClassName, items }) => (h("div", { class: `${baseClassName}__legend` }, items.map((item) => h("span", { class: `${baseClassName}__legend-item` },
  h("span", { class: `${baseClassName}__legend-icon ${baseClassName}__legend-icon--${item.iconType} ${baseClassName}__legend-icon--color-${item.iconColor}` }),
  h("eds-paragraph", { type: "body-2" }, item.title)))));
