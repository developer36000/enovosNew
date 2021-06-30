import { h } from '@stencil/core';
export const PageHeader = ({ activeNavigationItem, baseClassName, navigationItems, pageHeaderCentered, pageHeaderElevated, pageTitle, primaryActions, secondaryActions, smallContentWidth, tertiaryActions }) => {
  const getPageHeaderClasses = () => {
    let className = `${baseClassName}__page-header`;
    if (pageHeaderElevated) {
      className += `${className} ${baseClassName}__page-header--elevated`;
    }
    if (pageHeaderCentered) {
      className += `${className} ${baseClassName}__page-header--centered`;
    }
    return className;
  };
  const renderAction = (action, styles) => {
    if (action.title) {
      return (h("eds-button", { content: action.title, "icon-position": "right", outlined: true, size: "md", styles: styles }, action.icon &&
        h("eds-icon", { slot: "icon", icon: action.icon })));
    }
    return (h("eds-button", { styles: styles, "text-only": !action.title }, action.icon &&
      h("eds-icon", { slot: "icon", icon: action.icon })));
  };
  if (pageTitle || navigationItems) {
    return (h("div", { class: getPageHeaderClasses() },
      h("eds-container", { size: smallContentWidth ? 'md' : 'xlg' },
        h("div", { class: `${baseClassName}__page-header-container-1` },
          h("div", { class: `${baseClassName}__page-title` },
            h("eds-heading", { type: "h1", content: pageTitle, styles: "secondary" })),
          primaryActions && primaryActions.length > 0 &&
            h("div", { class: `${baseClassName}__primary-actions` }, primaryActions.map((action) => renderAction(action, 'secondary'))),
          secondaryActions && secondaryActions.length > 0 &&
            h("div", { class: `${baseClassName}__secondary-actions` }, secondaryActions.map((action) => renderAction(action, 'secondary'))))),
      (navigationItems || tertiaryActions) &&
        h("eds-container", { size: smallContentWidth ? 'md' : 'xlg' },
          h("div", { class: `${baseClassName}__page-header-container-2` },
            navigationItems && navigationItems.length > 0 &&
              h("div", { class: `${baseClassName}__tabs` },
                h("div", { class: `${baseClassName}__tabs-inner` },
                  h("eds-navigation", { activeItem: activeNavigationItem, id: "navigation", items: navigationItems, position: "top", shrink: true, "text-only": true }))),
            tertiaryActions && tertiaryActions.length > 0 &&
              h("div", { class: `${baseClassName}__tertiary-actions` }, tertiaryActions.map((action) => renderAction(action)))))));
  }
};
