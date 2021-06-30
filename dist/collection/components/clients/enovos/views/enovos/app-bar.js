import { h } from '@stencil/core';
export const AppBar = ({ baseClassName, logoOnly }) => h("div", { class: `${baseClassName}__app-bar` },
  h("eds-container", { size: "xlg" },
    h("eds-app-bar", { position: "top" },
      h("div", { slot: "leading-section" },
        h("div", { class: `${baseClassName}__logo` },
          h("a", { href: "#" },
            h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "135", height: "56", viewBox: "0 0 243 100" },
              h("g", { fill: "none", "fill-rule": "evenodd", stroke: "none", "stroke-width": "1" },
                h("g", { fill: "#FFF", "fill-rule": "nonzero" },
                  h("g", null,
                    h("path", { d: "M229.916 64.732c3.222 0 6.443.536 9.514 1.09l.288.05.418.08.518.105v6.56l-.095-.014-.213-.037-.812-.16-1.02-.176-1.146-.18-.847-.122-1.01-.137c-1.763-.23-3.879-.45-5.578-.465-3.084-.014-3.965.74-4.182 1.651l-.034.178-.012.09-.013.172-.004.174c0 .77.557 1.703 2.638 3.007l.488.296.263.153 5.94 3.272c5.067 2.92 7.13 5.738 7.097 9.798 0 3.239-1.191 5.89-3.557 7.534-2.097 1.46-5.05 2.198-8.775 2.198-1.082 0-2.369-.1-3.678-.249l-.836-.1-1.085-.146-1.054-.156-1.235-.198-1.496-.26-1.757-.334v-6.661l2.115.371 1.381.227 1.824.28.816.115.949.126.765.094.744.082c.973.1 1.86.165 2.547.165 3.724 0 4.67-1.23 4.786-2.668l.011-.223.002-.113c0-.055-.002-.111-.007-.167l-.02-.17c-.138-.828-.859-1.768-3.384-3.297l-.55-.325-6.04-3.34c-2.114-1.258-3.657-2.516-4.731-3.875-1.258-1.61-1.913-3.44-1.913-5.42 0-3.238 1.225-5.62 3.641-7.097 1.963-1.191 4.681-1.778 8.34-1.778zm-28.624-.084c4.195 0 7.903 1.594 10.436 4.48 2.265 2.583 3.524 6.526 3.524 11.09v4.094c0 4.648-1.275 8.54-3.692 11.275-2.466 2.769-6.023 4.245-10.268 4.245-4.279 0-7.886-1.527-10.403-4.43-2.248-2.583-3.49-6.526-3.49-11.09v-4.094c0-4.564 1.242-8.507 3.49-11.09 2.55-2.937 6.158-4.48 10.403-4.48zm-37.097.637l7.617 27.618 7.618-27.618h7.516l-8.926 30.487c-.47 1.61-1.392 2.751-2.752 3.406-.962.461-1.986.602-2.82.64l-.436.013h-.397l-.431-.012c-.831-.04-1.866-.18-2.828-.641-1.28-.616-2.172-1.663-2.664-3.127l-.088-.28-8.926-30.486h7.517zm-21.963-.654c4.194 0 7.902 1.594 10.436 4.48 2.265 2.584 3.523 6.527 3.523 11.09v4.094c0 4.648-1.275 8.54-3.691 11.275-2.466 2.786-6.007 4.245-10.268 4.245-4.279 0-7.886-1.526-10.403-4.43-2.248-2.583-3.49-6.526-3.49-11.09v-4.094c0-4.563 1.242-8.506 3.49-11.09 2.55-2.937 6.158-4.48 10.403-4.48zm-63.02 0c2.231 0 4.328.554 5.687 1.158 1.712.755 3.289 1.946 4.279 3.02 2.663 2.906 3.534 7.07 3.588 10.59l.002.35h-.016v2.03a3.582 3.582 0 01-3.299 3.563l-.191.01H72.349c.034 2.97.856 4.665 1.93 5.906 1.04 1.225 3.44 1.779 5.889 1.779 2.357 0 4.705-.284 6.733-.587l1.455-.227.889-.142 1.812-.302v6.543l-1.812.403-1.833.345-1.17.206c-1.928.323-3.792.54-6.074.54-4.111 0-8.104-1.074-10.554-3.205-2.899-2.508-4.327-6.36-4.409-11.462l-.004-.468v-5.033c.168-4.564 1.276-8.239 3.759-10.906 2.45-2.635 5.872-4.111 10.251-4.111zm31.308 0c4.195 0 7.903 1.594 10.436 4.48 2.19 2.498 3.439 6.265 3.52 10.636l.004.454.017 18.96h-7.232v-18.96c0-2.97-.604-5.134-1.728-6.594-.99-1.275-2.819-2.097-5.017-2.08-2.198.017-3.876.705-4.966 2.114-1.073 1.377-1.642 3.458-1.691 6.169l-.004.391v18.96h-7.231v-18.96c0-4.563 1.241-8.506 3.49-11.09 2.55-2.937 6.157-4.48 10.402-4.48zm31.712 6.896c-2.198 0-3.876.721-4.967 2.114-1.124 1.443-1.695 3.658-1.695 6.56v4.094c0 2.903.57 5.101 1.695 6.527 1.09 1.393 2.769 2.097 4.983 2.097 1.896 0 4.094-.52 5.42-2.751.855-1.443 1.309-3.423 1.309-5.873v-4.094c-.017-4.261-1.326-6.761-3.323-7.902-.94-.52-2.097-.772-3.422-.772zm59.06 0c-2.198 0-3.876.721-4.966 2.114-1.125 1.443-1.695 3.658-1.695 6.56v4.094c0 2.903.57 5.101 1.695 6.527 1.09 1.393 2.768 2.097 4.983 2.097 1.896 0 4.094-.52 5.42-2.751.855-1.443 1.308-3.423 1.308-5.873v-4.094c-.017-4.261-1.326-6.761-3.322-7.902-.94-.504-2.098-.772-3.423-.772zm-122.08-.017c-1.16 0-2.07.083-2.83.313l-.224.073c-.604.168-1.242.52-1.812 1.023a5.34 5.34 0 00-.939 1.067l-.135.225c-.592.924-.75 1.99-.82 3.245l-.03.644-.04 1.028 13.34-.017-.04-.876c-.098-1.893-.298-3.452-1.538-4.896-.822-.94-2.433-1.829-4.933-1.829zM38.288 54.715l.355.007c.57.023 1.29.116 1.977.446.973.47 1.627 1.275 1.946 2.4l5.554 19.026h-5.738l-1.89-7.555-.92-3.617-.763-2.94-.538-2.012-4.11 16.124H28.44l5.57-19.027c.336-1.124.99-1.946 1.946-2.4.7-.329 1.423-.422 1.984-.445l.349-.007zm-13.557-6.141c.785.287 1.393.791 1.813 1.195l.133.13c.42.42 1.023 1.09 1.325 1.963.353 1.007.252 2.047-.318 3.088l-9.53 17.382-4.044-4.043 3.844-6.402 2.718-4.573 1.391-2.375.553-.962-14.312 8.506-4.043-4.043 17.382-9.547c1.024-.57 2.064-.672 3.088-.32zm30.218.319l17.382 9.53-4.043 4.043-5.145-3.092-5.023-2.993-2.763-1.624-1.381-.797 8.506 14.312-4.043 4.043-9.53-17.399c-.571-1.023-.672-2.064-.32-3.087.303-.84.89-1.493 1.31-1.93.419-.42 1.09-1.023 1.962-1.325 1.007-.353 2.047-.252 3.088.319zm21.644-20.437v5.739l-7.555 1.89-3.936 1.002-2.746.713-1.887.505 16.124 4.111v5.738l-19.027-5.57c-1.124-.336-1.946-.99-2.4-1.946-.329-.7-.422-1.423-.445-1.984l-.007-.349.007-.355c.023-.57.116-1.29.446-1.977.47-.973 1.275-1.627 2.4-1.963l19.026-5.554zM0 28.473l19.027 5.57c1.124.336 1.946.99 2.4 1.947.419.822.452 1.711.452 2.315l-.007.356c-.023.57-.116 1.29-.446 1.977-.47.973-1.275 1.627-2.4 1.946L0 48.138v-5.739l7.555-1.89 4.635-1.182 1.986-.517 1.948-.521L0 34.195v-5.722zM18.171 4.262l9.53 17.382c.57 1.024.671 2.064.32 3.088-.288.785-.792 1.407-1.196 1.83l-.13.133c-.42.42-1.091 1.023-1.963 1.325-1.007.352-2.047.252-3.088-.319l-17.382-9.53 4.06-4.043 7.262 4.358 3.793 2.251 2.419 1.415.838.482-8.506-14.329 4.043-4.043zm40.252 0l4.06 4.06-4.358 7.262-1.794 3.019-1.105 1.876-.938 1.612-.311.543 14.312-8.506 4.043 4.043-17.4 9.53c-1.023.57-2.063.671-3.086.32-.77-.273-1.391-.79-1.813-1.195l-.134-.131c-.42-.42-1.023-1.091-1.325-1.963-.353-1.007-.252-2.047.319-3.088l9.53-17.382zM34.195 0l1.89 7.555.92 3.617.762 2.94.538 2.012L42.4 0h5.722l-5.554 19.027c-.335 1.124-.99 1.946-1.946 2.4-.84.419-1.728.452-2.332.452l-.356-.007c-.57-.023-1.29-.116-1.977-.446-.973-.47-1.627-1.275-1.946-2.4L28.456 0h5.739z" }))))))),
        !logoOnly && [
          h("div", { class: `${baseClassName}__select-contract-text-field` },
            h("eds-text-field", { "data-value": "000800148000 - Naturstroum Home Mono", "icon-trailing": "chevron-down", id: "select-contract-text-field", "label-inside": "Select a contract", "read-only": true, type: "text" })),
          h("div", { class: `${baseClassName}__all-contracts-btn` },
            h("eds-button", { content: "All contracts", styles: "white", "text-only": true },
              h("eds-icon", { slot: "icon", icon: "list" }))),
        ]),
      !logoOnly && [
        h("div", { slot: "main-section" }),
        h("div", { slot: "trailing-section" },
          h("eds-dropdown", { id: "user-menu" },
            h("div", { slot: "selector" },
              h("div", { class: `${baseClassName}__user-menu-btn` },
                h("eds-heading", { type: "h6", "font-weight": "semi-bold", content: `<div class="${baseClassName}__user-menu-btn__title">Hello,</div> Gilles Hermes`, styles: "white" }),
                h("eds-icon", { size: "24px", slot: "icon", icon: "chevron-down", styles: "white" })))),
          h("div", { class: `${baseClassName}__mobile-menu-btn-open` },
            h("eds-button", { id: "mobile-menu-btn-open", styles: "white", "text-only": true },
              h("eds-icon", { slot: "icon", icon: "bars" })))),
      ])));
