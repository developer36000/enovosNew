import { Component, Element, Listen, Prop, h } from '@stencil/core';
import * as d3 from 'd3';
import { uniq, uniqueId } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
const defaultMargin = {
  top: 8,
  right: 24,
  bottom: 56,
  left: 80,
};
const pathCurve = d3.curveCatmullRom.alpha(0.5);
/**
 * @name Line Chart
 * @description Used to display a line chart
 * @path components/chart
 * @documented true
 * @urlDesign design-guide-components-component-line-chart.html
 */
export class ENOVOSLineChart {
  constructor() {
    this.margin = defaultMargin;
    this.minWidth = 500;
    this.renderDelay = 500;
    this.showHorizontalGridLines = true;
    this.showVerticalGridLines = false;
    this.smallDots = false;
    this.xAxisTicks = 12;
    this.classNames = {
      EL: 'line-chart',
    };
    this.tooltip = {
      width: 120,
      height: 72,
      yOffset: 24,
      xOffset: 12,
    };
    this.usedStyles = ['default'];
    this.renderChart = () => {
      if (this.computedDatasets) {
        setTimeout(() => {
          this.width = this.getWidth();
          this.buildChart();
        }, this.renderDelay);
      }
    };
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
    this.setComputedDatasets = () => {
      if (this.datasets) {
        this.computedDatasets = this.datasets.map((dataset) => {
          return Object.assign(Object.assign({}, dataset), { items: dataset.items.map((item) => {
              return Object.assign(Object.assign({}, item), { id: uniqueId(`${this.idPrefix}-dot-`) });
            }) });
        });
        const usedStyles = this.datasets.map((dataset) => {
          if (dataset.style) {
            return dataset.style;
          }
        });
        this.usedStyles = uniq([...usedStyles, 'default']);
        this.legendItems = this.getLegendItems();
      }
    };
    this.getYAverageValue = () => {
      let sumValues = 0;
      let itemsLength = 0;
      this.computedDatasets.forEach((computedDataset) => {
        computedDataset.items.forEach((computedDatasetItem) => {
          if (computedDatasetItem.value) {
            sumValues += computedDatasetItem.value;
          }
          itemsLength++;
        });
      });
      if (itemsLength > 0) {
        return Math.floor(sumValues / itemsLength);
      }
      return undefined;
    };
    this.buildDatasetLine = (computedDatasetItems, svgContent, x, y, style) => {
      // Add the area below the data line (background gradient)
      svgContent.append('path')
        .attr('d', d3.area()
        .x((_d, i) => {
        return x(i);
      })
        .y0(this.height - this.margin.bottom)
        .y1(d => {
        return y(d.value || 0);
      })
        .curve(pathCurve)(computedDatasetItems))
        .attr('stroke', 'none')
        .attr('class', `${this.classNames.EL}__area`)
        .attr('fill', `url(#${this.idPrefix}-area-gradient--${style})`);
      // Add the data line shadow
      svgContent.append('path')
        .attr('d', d3.line()
        .x((_d, i) => {
        return x(i);
      })
        .y(d => {
        return y(d.value || 0);
      })
        .curve(pathCurve)(computedDatasetItems))
        .attr('stroke', 'black')
        .attr('stroke-width', '2')
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('class', `${this.classNames.EL}__line-shadow ${this.classNames.EL}__line-shadow--${style}`)
        .attr('filter', `url(#${this.idPrefix}-line-shadow)`);
      // Add the data line
      svgContent.append('path')
        .attr('d', d3.line()
        .x((_d, i) => {
        return x(i);
      })
        .y(d => {
        return y(d.value || 0);
      })
        .curve(pathCurve)(computedDatasetItems))
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('class', `${this.classNames.EL}__line ${this.classNames.EL}__line--${style}`);
    };
    this.buildDatasetDots = (computedDatasetItems, svgContent, x, y, style) => {
      // Add data dots
      const dots = svgContent.selectAll('dots')
        .data(computedDatasetItems)
        .enter()
        .append('g')
        .attr('transform', (d, i) => { return `translate(${x(i)} ${y(d.value || 0)})`; });
      // Add data dots' interactable area
      dots.append('circle')
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 6)
        .attr('class', `${this.classNames.EL}__dot-interactable-area`)
        .attr('id', d => { return d.id; })
        .on('mouseover', e => {
        this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}--has-dot-hovered`);
        document.getElementById(`${e.target.id}-tooltip`).classList.add(`${this.classNames.EL}__tooltip--visible`);
      })
        .on('mouseout', e => {
        this.el.querySelector(`.${this.classNames.EL}`).classList.remove(`${this.classNames.EL}--has-dot-hovered`);
        document.getElementById(`${e.target.id}-tooltip`).classList.remove(`${this.classNames.EL}__tooltip--visible`);
      });
      const dotsShapes = dots.append('g').attr('class', `${this.classNames.EL}__dot`);
      // Add data dots vertical line visible on hover
      dotsShapes.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', this.width - this.margin.left - this.margin.right)
        .attr('y2', 0)
        .attr('stroke', 'black')
        .attr('stroke-width', '1px')
        .attr('transform', (_d, i) => { return `translate(${-x(i) + this.margin.left} 0)`; })
        .attr('class', `${this.classNames.EL}__dot-line ${this.classNames.EL}__dot-line--x  ${this.classNames.EL}__dot-line--${style}`);
      // Add data dots horizontal line visible on hover
      dotsShapes.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', this.height - this.margin.top - this.margin.bottom)
        .attr('stroke', 'black')
        .attr('stroke-width', '1px')
        .attr('transform', d => { return `translate(0 ${-y(d.value || 0) + this.margin.top})`; })
        .attr('class', `${this.classNames.EL}__dot-line ${this.classNames.EL}__dot-line--y  ${this.classNames.EL}__dot-line--${style}`);
      // Add data dots shape
      dotsShapes.append('circle')
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', this.smallDots ? 2 : 6)
        .attr('class', `${this.classNames.EL}__dot-circle ${this.classNames.EL}__dot-circle--${style} ${this.smallDots ? `${this.classNames.EL}__dot-circle--small` : ''}`);
    };
    this.buildDatasetTooltips = (computedDatasetItems, svgContent, x, y) => {
      // Add tooltips
      const tooltips = svgContent.selectAll('tooltips')
        .data(computedDatasetItems)
        .enter()
        .append('g')
        .attr('class', `${this.classNames.EL}__tooltip`)
        .attr('id', d => { return `${d.id}-tooltip`; })
        .attr('transform', (d, i) => {
        const positionX = x(i);
        const positionY = y(d.value || 0);
        let translateX = positionX - this.tooltip.width / 2;
        let translateY = positionY - (this.tooltip.height + this.tooltip.yOffset);
        if (positionY < this.tooltip.height + this.tooltip.yOffset) {
          translateY = positionY + this.tooltip.yOffset;
        }
        if (positionX > this.width - this.tooltip.width) {
          translateX = positionX - this.tooltip.width + this.tooltip.xOffset;
        }
        else if (positionX < this.tooltip.width / 2 + this.margin.left) {
          translateX = positionX - this.tooltip.xOffset;
        }
        return `translate(${translateX},${translateY})`;
      });
      // Tooltip shape (rectangle)
      tooltips.append('rect')
        .attr('width', this.tooltip.width)
        .attr('height', this.tooltip.height)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('rx', '8')
        .attr('ry', '8')
        .attr('class', `${this.classNames.EL}__tooltip-shape`)
        .attr('filter', `url(#${this.idPrefix}-tooltip-shadow)`);
      // Tooltip text
      tooltips.append('text')
        .attr('x', `${this.tooltip.width / 2}`)
        .attr('y', d => d.secondaryText ? `${this.tooltip.height / 2 + 12}` : `${this.tooltip.height / 2}`)
        .text(d => { return d.text; })
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('class', `${this.classNames.EL}__tooltip-text`);
      // Tooltip text
      tooltips.append('text')
        .attr('x', `${this.tooltip.width / 2}`)
        .attr('y', `${this.tooltip.height / 2 - 12}`)
        .text(d => { return d.secondaryText; })
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('class', `${this.classNames.EL}__tooltip-secondary-text`);
    };
    this.buildYAverageLine = (svgContent, y) => {
      // Add average line on Y axis (position is automatically computed based on all Y values)
      svgContent.append('line')
        .attr('x1', this.margin.left)
        .attr('y1', 0)
        .attr('x2', this.width - this.margin.right)
        .attr('y2', 0)
        .attr('stroke', 'black')
        .attr('stroke-width', '1px')
        .attr('transform', `translate(0 ${y(this.getYAverageValue())})`)
        .attr('class', `${this.classNames.EL}__average-line`);
    };
    this.buildChart = () => {
      const svg = d3.select(this.el.querySelector('svg')).attr('width', this.width).attr('height', this.height);
      const svgContent = svg.select(`.${this.classNames.EL}__svg-content`);
      svgContent.selectAll('*').remove();
      const x = d3.scaleLinear()
        .domain([0, this.xValues.length - 1])
        .range([this.margin.left, this.width - this.margin.right]);
      const y = d3.scaleLinear()
        .domain([this.yMaxValue, this.yMinValue])
        .range([this.margin.top, this.height - this.margin.bottom]);
      this.appendAxisBottom(svgContent, x);
      this.appendAxisLeft(svgContent, y);
      if (this.xAxisTitle) {
        this.appendAxisBottomTitle(svgContent);
      }
      if (this.yAxisTitle) {
        this.appendAxisLeftTitle(svgContent);
      }
      // Clickable area used to hide tooltips showed on "mouseover". Required for touch devices.
      svgContent.append('rect')
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('fill-opacity', '0')
        .on('click', () => {
        this.el.querySelector(`.${this.classNames.EL}`).classList.remove(`${this.classNames.EL}--has-dot-hovered`);
      });
      this.computedDatasets.forEach((computedDataset) => {
        this.buildDatasetLine(computedDataset.items, svgContent, x, y, computedDataset.style || 'default');
      });
      if (this.showYAverageLine) {
        this.buildYAverageLine(svgContent, y);
      }
      this.computedDatasets.forEach((computedDataset) => {
        this.buildDatasetDots(computedDataset.items, svgContent, x, y, computedDataset.style || 'default');
      });
      this.computedDatasets.forEach((computedDataset) => {
        this.buildDatasetTooltips(computedDataset.items, svgContent, x, y);
      });
    };
    this.getLegendItems = () => {
      let legendItems = [];
      this.computedDatasets.forEach((computedDataset) => {
        if (computedDataset.legend) {
          legendItems = [...legendItems, {
              icon: h("span", { class: `${this.classNames.EL}__legend-icon ${this.classNames.EL}__legend-icon--dot  ${this.classNames.EL}__legend-icon--${computedDataset.style || 'default'}` }),
              text: computedDataset.legend,
            }];
        }
      });
      if (this.showYAverageLine && this.yAverageLegend) {
        legendItems = [...legendItems, {
            icon: h("span", { class: `${this.classNames.EL}__legend-icon ${this.classNames.EL}__legend-icon--line  ${this.classNames.EL}__legend-icon--average-line` }),
            text: this.yAverageLegend,
          }];
      }
      return legendItems;
    };
  }
  handleResize() {
    clearTimeout(this.resizeTimout);
    this.resizeTimout = setTimeout(this.onResizeEnd, 100);
  }
  componentWillLoad() {
    this.idPrefix = this.el.getAttribute('id');
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
  }
  componentWillRender() {
    this.setComputedDatasets();
  }
  componentDidRender() {
    this.renderChart();
  }
  disconnectedCallback() {
    clearTimeout(this.resizeTimout);
  }
  appendAxisBottom(container, x) {
    const tick = container.append('g')
      .attr('transform', `translate(0, ${this.height - this.margin.bottom - 8})`)
      .attr('class', `${this.classNames.EL}__axis ${this.classNames.EL}__axis--bottom`)
      .call(d3.axisBottom(x)
      .ticks(this.xAxisTicks)
      .tickFormat(d => this.xValues[d])
      .tickSize(24));
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
      .attr('transform', `translate(${this.margin.left + 16}, 0)`)
      .attr('class', `${this.classNames.EL}__axis ${this.classNames.EL}__axis--left`)
      .call(d3.axisLeft(y)
      .ticks(5)
      .tickSize(32)
      .tickFormat(d3.format('.2~s')));
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
  appendAxisBottomTitle(container) {
    container.append('text')
      .attr("text-anchor", "start")
      .attr("x", this.margin.left)
      .attr("y", this.height - 4)
      .attr('class', `${this.classNames.EL}__axis-title`)
      .text(this.xAxisTitle);
  }
  appendAxisLeftTitle(container) {
    container.append('text')
      .attr('text-anchor', 'start')
      .attr('transform', 'rotate(-90)')
      .attr('y', 20)
      .attr('x', -this.height + this.margin.bottom)
      .attr('class', `${this.classNames.EL}__axis-title`)
      .text(this.yAxisTitle);
  }
  render() {
    return [
      h("div", { class: this.classNames.EL },
        h("div", { class: `${this.classNames.EL}__svg-container` },
          h("svg", null,
            h("defs", null,
              this.usedStyles.map((style) => [
                h("linearGradient", { class: `${this.classNames.EL}__area-gradient ${this.classNames.EL}__area-gradient--${style}`, id: `${this.idPrefix}-area-gradient--${style}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                  h("stop", { offset: "0%", "stop-color": "black", "stop-opacity": "1" }),
                  h("stop", { offset: "100%", "stop-color": "black", "stop-opacity": "0" })),
                h("filter", { id: `${this.idPrefix}-line-shadow`, x: "0", y: "0", width: "200%", height: "200%" },
                  h("feOffset", { result: "offOut", in: "SourceGraphic", dx: "0", dy: "8" }),
                  h("feGaussianBlur", { stdDeviation: "8" }),
                  h("feBlend", { mode: "normal" })),
              ]),
              h("filter", { id: `${this.idPrefix}-tooltip-shadow`, width: "200%", height: "200%" },
                h("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "8" }),
                h("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                h("feComponentTransfer", null,
                  h("feFuncA", { type: "linear", slope: "0.1" })),
                h("feMerge", null,
                  h("feMergeNode", null),
                  h("feMergeNode", { in: "SourceGraphic" })))),
            h("g", { class: `${this.classNames.EL}__svg-content` }))),
        this.legendItems && this.legendItems.length > 0 && h("eds-chart-legend", { items: this.legendItems }))
    ];
  }
  static get is() { return "eds-line-chart"; }
  static get originalStyleUrls() { return {
    "$": ["line-chart.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["line-chart.css"]
  }; }
  static get properties() { return {
    "datasets": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IDataset[]",
        "resolved": "IDataset[]",
        "references": {
          "IDataset": {
            "location": "import",
            "path": "../../../../models/line-chart"
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
    "margin": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ top: number; right: number; bottom: number; left: number; }",
        "resolved": "{ top: number; right: number; bottom: number; left: number; }",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "defaultMargin"
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
    "showYAverageLine": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "false",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "show-y-average-line",
      "reflect": false
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
    "smallDots": {
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
      "attribute": "small-dots",
      "reflect": false,
      "defaultValue": "false"
    },
    "xAxisTicks": {
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
      "attribute": "x-axis-ticks",
      "reflect": false,
      "defaultValue": "12"
    },
    "xAxisTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "x-axis-title",
      "reflect": false
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "yAverageLegend": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "y-average-legend",
      "reflect": false
    },
    "yAxisTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "y-axis-title",
      "reflect": false
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
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
