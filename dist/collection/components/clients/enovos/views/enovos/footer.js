import { h } from '@stencil/core';
export const Footer = ({ baseClassName }) => (h("eds-container", { size: "xlg" },
  h("footer", { class: `${baseClassName}__footer` },
    h("div", { class: `${baseClassName}__footer-left` },
      h("eds-paragraph", { type: "body-1" }, "\u00A92021 Enovos - All right reserved")),
    h("div", { class: `${baseClassName}__footer-right` },
      h("eds-link", { content: "Enovos.lu" }),
      h("eds-link", { content: "Contact" }),
      h("eds-link", { content: "About us" }),
      h("eds-link", { content: "Privacy policy" }),
      h("eds-link", { content: "Terms and conditions" })))));
