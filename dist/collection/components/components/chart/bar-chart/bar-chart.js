import { Component, Element, Listen, Method, Prop, h } from '@stencil/core';
import * as d3 from 'd3';
import { uniqueId } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
const defaultMargin = {
  top: 8,
  right: 0,
  bottom: 40,
  left: 72,
};
/**
 * @name Bar Chart
 * @description Used to display a bar chart
 * @path components/chart
 * @documented true
 * @urlDesign design-guide-components-component-bar-chart.html
 */
export class ENOVOSBarChart {
  constructor() {
    this.barRadius = 12;
    this.minWidth = 500;
    this.renderDelay = 500;
    this.showHorizontalGridLines = true;
    this.showVerticalGridLines = false;
    this.barPadding = 0.2;
    this.classNames = {
      EL: 'bar-chart',
    };
    this.margin = defaultMargin;
    this.getWidth = () => {
      const width = this.el.getBoundingClientRect().width;
      return this.minWidth && width < this.minWidth ? this.minWidth : width;
    };
    this.onResizeEnd = () => {
      const width = this.getWidth();
      if (width !== this.width) {
        this.width = width;
        this.buildChart();
      }
    };
    this.buildBars = (svgContent, x, y) => {
      const bars = svgContent.selectAll('bar')
        .data(this.computedData.items)
        .enter()
        .append('g').attr('class', `${this.classNames.EL}__bar-container`)
        .attr('x', (_d, i) => x(this.computedXValues[i]))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => this.height - y(d.value) + this.barRadius);
      bars.append('rect')
        .attr('x', (_d, i) => x(this.computedXValues[i]))
        .attr('y', d => y(d.value))
        .attr('id', d => d.id)
        .attr('width', x.bandwidth())
        .attr('height', d => this.height - y(d.value) + this.barRadius)
        .attr('fill', 'black')
        .attr('rx', this.barRadius)
        .attr('ry', this.barRadius)
        .attr('clip-path', `url(#${this.idPrefix}-clip-path)`)
        .attr('class', `${this.classNames.EL}__bar ${this.classNames.EL}__bar--${this.computedData.style || 'default'}`);
      this.refreshTooltips();
    };
    this.buildChart = () => {
      const svgWrapper = d3.select(this.el.querySelector(`.${this.classNames.EL}`))
        .attr('style', `height: ${this.height}px;`);
      const svg = svgWrapper.select('svg')
        .attr('width', this.width)
        .attr('height', this.height);
      // set dimensions of the clip-path used to make bar chart with border-top-radius only
      svg.select(`#${this.idPrefix}-clip-path rect`)
        .attr('width', this.width - this.margin.right - this.margin.left)
        .attr('height', this.height - this.margin.top - this.margin.bottom);
      const x = d3.scaleBand()
        .domain(this.computedXValues)
        .range([this.margin.left, this.width - this.margin.right])
        .padding(this.barPadding);
      const y = d3.scaleLinear()
        .domain([this.yMaxValue, this.yMinValue])
        .range([this.margin.top, this.height - this.margin.bottom]);
      const svgContent = svg.select(`.${this.classNames.EL}__svg-content`);
      svgContent.selectAll('*').remove();
      this.appendAxisBottom(svgContent, x);
      this.appendAxisLeft(svgContent, y);
      this.buildBars(svgContent, x, y);
    };
    this.refreshTooltips = () => {
      const tooltips = this.el.querySelectorAll(`.${this.classNames.EL}__tooltip > *`);
      if (tooltips) {
        tooltips.forEach((tooltip) => {
          tooltip.init();
        });
      }
    };
  }
  handleResize() {
    clearTimeout(this.resizeTimout);
    this.resizeTimout = setTimeout(this.onResizeEnd, 100);
  }
  /**
   * @description (Re-)calculate chart's width
   */
  async calculateWidth() {
    this.onResizeEnd();
  }
  handleTheme() {
    const handleThemeChange = theme => {
      Array.from(this.el.classList).filter(className => {
        return className.startsWith('theme--');
      }).forEach(themeClassName => {
        this.el.classList.remove(themeClassName);
      });
      // Add new theme class
      this.el.classList.add(`theme--${theme}`);
    };
    themeOnChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    this.onResizeEnd();
  }
  componentWillRender() {
    this.idPrefix = this.el.getAttribute('id');
    if (this.data) {
      this.computedData = Object.assign(Object.assign({}, this.data), { items: this.data.items.map((item) => {
          return Object.assign(Object.assign({}, item), { id: uniqueId(`${this.idPrefix}-`) });
        }) });
      this.computedXValues = !this.xValues ? this.data.items.map(() => '') : this.xValues;
      if (!this.xValues) {
        this.margin = Object.assign(Object.assign({}, this.margin), { bottom: 8 });
      }
    }
  }
  componentDidRender() {
    if (this.computedData) {
      setTimeout(() => {
        this.width = this.getWidth();
        this.buildChart();
      }, this.renderDelay);
    }
  }
  disconnectedCallback() {
    clearTimeout(this.resizeTimout);
  }
  appendAxisBottom(container, x) {
    const tick = container.append('g')
      .attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
      .attr('class', `${this.classNames.EL}__axis ${this.classNames.EL}__axis--bottom`)
      .call(d3.axisBottom(x).tickSize(24));
    if (this.showVerticalGridLines) {
      tick.selectAll('line')
        .attr('y2', -this.height + this.margin.top + this.margin.bottom)
        .attr('class', `${this.classNames.EL}__grid-line ${this.classNames.EL}__grid-line--y`);
    }
    else {
      tick.selectAll('line').remove();
    }
    tick.select('.domain').remove();
  }
  appendAxisLeft(container, y) {
    const tick = container.append('g')
      .attr('transform', `translate(${this.margin.left}, 0)`)
      .attr('class', `${this.classNames.EL}__axis ${this.classNames.EL}__axis--left`)
      .call(d3.axisLeft(y).ticks(5).tickSize(8).tickFormat(d3.format('.2~s')));
    if (this.showHorizontalGridLines) {
      tick.selectAll('line')
        .attr('x2', this.width - this.margin.right - this.margin.left)
        .attr('class', `${this.classNames.EL}__grid-line ${this.classNames.EL}__grid-line--x`);
    }
    else {
      tick.selectAll('line').remove();
    }
    tick.select('.domain').remove();
  }
  render() {
    return (h("div", { class: this.classNames.EL },
      h("svg", null,
        h("defs", null,
          h("clipPath", { id: `${this.idPrefix}-clip-path` },
            h("rect", { x: this.margin.left, y: this.margin.top })),
          h("filter", { id: `${this.idPrefix}-tooltip-shadow`, width: "200%", height: "200%" },
            h("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "8" }),
            h("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
            h("feComponentTransfer", null,
              h("feFuncA", { type: "linear", slope: "0.1" })),
            h("feMerge", null,
              h("feMergeNode", null),
              h("feMergeNode", { in: "SourceGraphic" })))),
        h("g", { class: `${this.classNames.EL}__svg-content` })),
      this.computedData && this.computedData.items && this.computedData.items.length > 0 && this.computedData.items.map((item) => {
        if (item.text) {
          return (h("span", { class: `${this.classNames.EL}__tooltip` },
            h("eds-tooltip", { "auto-init": false, selector: `${item.id}`, size: "lg", text: item.text })));
        }
      })));
  }
  static get is() { return "eds-bar-chart"; }
  static get originalStyleUrls() { return {
    "$": ["bar-chart.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["bar-chart.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IDataset",
        "resolved": "IDataset",
        "references": {
          "IDataset": {
            "location": "import",
            "path": "../../../../models/bar-chart"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "barRadius": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "bar-radius",
      "reflect": false,
      "defaultValue": "12"
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "height",
      "reflect": false
    },
    "minWidth": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "min-width",
      "reflect": false,
      "defaultValue": "500"
    },
    "renderDelay": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "render-delay",
      "reflect": false,
      "defaultValue": "500"
    },
    "showHorizontalGridLines": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "show-horizontal-grid-lines",
      "reflect": false,
      "defaultValue": "true"
    },
    "showVerticalGridLines": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "show-vertical-grid-lines",
      "reflect": false,
      "defaultValue": "false"
    },
    "xValues": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "yMaxValue": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "y-max-value",
      "reflect": false
    },
    "yMinValue": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "y-min-value",
      "reflect": false
    }
  }; }
  static get methods() { return {
    "calculateWidth": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "(Re-)calculate chart's width"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
