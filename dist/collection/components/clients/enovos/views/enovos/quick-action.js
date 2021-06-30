import { h } from '@stencil/core';
export const QuickAction = ({ baseClassName, iconUrl, subtitle, title }) => h("div", { class: `${baseClassName}__quick-action` },
  h("eds-card", null,
    h("div", { slot: "card-media" },
      h("div", { class: `${baseClassName}__quick-action-leading-icon` },
        h("img", { src: iconUrl, alt: "" }))),
    h("div", { slot: "card-content" },
      h("div", { class: `${baseClassName}__quick-action-content` },
        h("eds-paragraph", { type: "h6", styles: "primary-500", "font-weight": "bold" }, title),
        h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, subtitle)),
      h("div", { class: `${baseClassName}__quick-action-trailing-icon` },
        h("eds-icon", { size: "24px", styles: "secondary-500", icon: "chevron-right" })))));
