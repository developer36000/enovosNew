import { h } from '@stencil/core';
export const MobileDataTable = ({ baseClassName, className, columns, data }) => {
  const groups = data.map(dataItem => {
    const groupItems = dataItem.values.map((value, index) => {
      return {
        title: columns[index],
        value,
      };
    });
    return groupItems;
  });
  const getItemClassName = value => {
    let itemClassName = `${baseClassName}__mobile-data-table-item`;
    if (value.props) {
      itemClassName += ` ${baseClassName}__mobile-data-table-item--${value.props.type}`;
    }
    return itemClassName;
  };
  const renderValue = value => {
    if (value.props) {
      switch (value.props.type) {
        case 'button':
          return (h("eds-button", { styles: "secondary", "text-only": true },
            h("eds-icon", { icon: value.props.icon, slot: "icon" })));
        default:
          return h("eds-heading", { type: "h6", content: value.data, styles: "secondary" });
      }
    }
    return h("eds-heading", { type: "h6", content: value.data, styles: "secondary" });
  };
  return (h("div", { class: `${className} ${baseClassName}__mobile-data-table` },
    h("eds-dropdown", { id: "mobile-data-table-filters-dropdown" },
      h("div", { slot: "selector" },
        h("div", { class: `${baseClassName}__mobile-data-table-filters-dropdown` },
          h("eds-paragraph", { type: "body-2", "font-weight": "semi-bold", styles: "primary" }, "Order by: Billing period"),
          h("eds-icon", { size: "16px", slot: "icon", icon: "chevron-down", styles: "secondary" })))),
    groups.map(group => h("div", { class: `${baseClassName}__mobile-data-table-group` }, group.map(item => h("span", { class: getItemClassName(item.value) },
      h("eds-paragraph", { "font-weight": "bold", type: "body-2" }, item.title),
      renderValue(item.value)))))));
};
