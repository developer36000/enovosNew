import { h } from '@stencil/core';
const getHeaderClass = (baseClassName, headerShadowed = false, navigationItems) => {
  let className = `${baseClassName}__panel-header`;
  if (headerShadowed) {
    className += ` ${baseClassName}__panel-header--with-shadow`;
  }
  if (navigationItems && navigationItems.length > 0) {
    className += ` ${baseClassName}__panel-header--with-navigation`;
  }
  return className;
};
export const Panel = ({ activeNavigationItem, baseClassName, content, headerActions, headerShadowed, headerTitle, navigationId, navigationItems }) => h("eds-elevation", { class: `${baseClassName}__panel-elevation`, level: "5" },
  h("div", { class: `${baseClassName}__panel` },
    headerTitle &&
      h("div", { class: getHeaderClass(baseClassName, headerShadowed, navigationItems) },
        h("span", { class: `${baseClassName}__panel-header-title` },
          h("eds-heading", { content: headerTitle, "font-weight": "bold", type: "h2", styles: "secondary" })),
        headerActions && headerActions.length > 0 &&
          h("span", { class: `${baseClassName}__panel-header-actions` }, headerActions.map((action) => h("span", { class: `${baseClassName}__panel-header-actions-item` },
            h("eds-button", { content: action.title, "icon-position": "right", outlined: true, size: "sm", styles: "primary" },
              h("eds-icon", { slot: "icon", icon: action.icon }))))),
        h("div", { class: `${baseClassName}__panel-header-navigation` },
          h("eds-navigation", { activeItem: activeNavigationItem, id: navigationId, items: navigationItems, position: "top", shrink: true, "text-only": true }))),
    h("div", { class: `${baseClassName}__panel-body` }, content)));
