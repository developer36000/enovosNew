import { h } from '@stencil/core';
const renderCardItems = baseClassName => {
  let items = [];
  for (let i = 0; i < 30; i++) {
    let className = `${baseClassName}__select-contract-dialog-item`;
    if (i === 4) {
      className += ` ${baseClassName}__select-contract-dialog-item--active`;
    }
    items = [...items, (h("div", { class: className },
        h("eds-card", null,
          h("div", { slot: "card-content" },
            h("div", { class: `${baseClassName}__select-contract-dialog-item-content` },
              h("div", null,
                h("eds-paragraph", { type: "h6", styles: "secondary-500", "font-weight": "bold" }, "0001434000 - Ivan Deschamps")),
              h("div", null,
                h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, "000800148000 - Naturstroum Home Mono")))))))];
  }
  return items;
};
export const SelectContractDialog = ({ baseClassName, id }) => h("eds-dialog", { id: id, class: `${baseClassName}__select-contract-dialog` },
  h("div", { slot: "dialog-header" },
    h("div", { class: `${baseClassName}__select-contract-dialog-header` },
      h("div", { class: `${baseClassName}__select-contract-dialog-title` },
        h("eds-heading", { content: "Select a contract", "font-weight": "bold", type: "h2", styles: "secondary" })),
      h("div", { class: `${baseClassName}__select-contract-dialog-filter` },
        h("eds-text-field", { "data-value": "All customers", "icon-trailing": "chevron-down", "label-inside": "Filter by customers", "read-only": true, type: "text" })),
      h("div", { class: `${baseClassName}__select-contract-dialog-close-btn` },
        h("eds-button", { id: `${id}-close-btn`, styles: "secondary", "text-only": true },
          h("eds-icon", { slot: "icon", icon: "times" }))))),
  h("div", { slot: "dialog-body" }, renderCardItems(baseClassName)));
