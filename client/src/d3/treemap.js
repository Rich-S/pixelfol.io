import React from 'react';
import { Treemap } from "d3plus-react";

const methods = {
  groupBy: "id",
  size: d => d.value
};

const TreemapComponent = (props) => <Treemap config={Object.assign(props.data, methods)} />;

export default TreemapComponent;

/*import * as d3 from 'd3';

function treemap(element) {
  var data = {
    "name": "England",
    "children": [
      {
        "name": "North England",
        "children": [
          {
            "name": "Bradford City",
            "children": [
              {
                "name": "Cancer",
                "value": 1.18,
                "color": "#A8A7A7",
              },
              {
                "name": "CKD",
                "value": 3.21,
                "color": "#2F9599",
              },
              {
                "name": "CHD",
                "value": 2.57,
                "color": "#E8175D",
              },
              {
                "name": "Diabetes",
                "value": 11.92,
                "color": "#474747",
              },
              {
                "name": "Stroke",
                "value": 1.18,
                "color": "#CC527A",
              }
            ]
          },
          {
          "name": "Leeds",
          "children": [
            {
              "name": "Cancer",
              "value": 2.50,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 3.52,
              "color": "#2F9599",
            },
            {
              "name": "CHD",
              "value": 3.29,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 6.71,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 1.82,
              "color": "#CC527A",
            }
          ]
        },
        {
          "name": "Liverpool",
          "children": [
            {
              "name": "Cancer",
              "value": 2.50,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 5.90,
              "color": "#2F9599",
            },
            {
              "name": "CHD",
              "value": 3.71,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 6.70,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 1.88,
              "color": "#CC527A",
            }
          ]
        },
        {
          "name": "Manchester",
          "children": [
            {
              "name": "Cancer",
              "value": 1.78,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 2.95,
              "color": "#2F9599",
            },
            {
              "name": "CHD",
              "value": 2.61,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 7.05,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 2.13,
              "color": "#CC527A",
            }
          ]
        },
        {
          "name": "Sheffield",
          "children": [
            {
              "name": "Cancer",
              "value": 2.54,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 4.57,
              "color": "#2F9599",
            },
            {
              "name": "CHD",
              "value": 3.85,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 7.08,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 2.13,
              "color": "#CC527A",
            }
          ]
        },
      ]
    },
    {
      "name": "South England",
      "children": [
        {
          "name": "Brighton",
          "children": [
            {
              "name": "Cancer",
              "value": 1.18,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 3.21,
              "color": "#2F9599",
            },
            {
              "name": "CHD",
              "value": 2.57,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 11.92,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 1.18,
              "color": "#CC527A",
            }
          ]
        },
        {
          "name": "Bristol",
          "children": [
            {
              "name": "Cancer",
              "value": 1.18,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 3.21,
              "color": "#2F9599",
            },
            {
              "name": "CHD",
              "value": 2.57,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 11.92,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 1.18,
              "color": "#CC527A",
            }
          ]
        },
        {
          "name": "Luton",
          "children": [
            {
              "name": "Cancer",
              "value": 1.18,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 3.21,
              "color": "#2F9599",
            },
            {
              "name": "CHD",
              "value": 2.57,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 11.92,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 1.18,
              "color": "#CC527A",
            }
          ]
        },
        {
          "name": "Milton Keynes",
          "children": [
            {
              "name": "Cancer",
              "value": 1.18,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 3.21,
              "color":"#2F9599",
            },
            {
              "name": "CHD",
              "value": 2.57,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 11.92,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 1.18,
              "color": "#CC527A",
            }
          ]
        },
        {
          "name": "Southampton",
          "children": [
            {
              "name": "Cancer",
              "value": 1.18,
              "color": "#A8A7A7",
            },
            {
              "name": "CKD",
              "value": 3.21,
              "color": "#2F9599",
            },
            {
              "name": "CHD",
              "value": 2.57,
              "color": "#E8175D",
            },
            {
              "name": "Diabetes",
              "value": 11.92,
              "color": "#474747",
            },
            {
              "name": "Stroke",
              "value": 1.18,
              "color": "#CC527A",
            }
          ]
        },
        ]
      }
    ]
  };
  //  initialize chart Object
  var chartObj = drawChart();
  var svg = d3.select(element);
  var rect = svg.node().getBoundingClientRect();
  var Width = rect.width, Height = rect.height;
  //  call chart Object
  var chart = svg.datum(data).call(chartObj);
  function drawChart() {
    var margins = {
      top: Math.floor(Height * .05),
      right: Math.floor(Width * .05),
      bottom: Math.floor(height * .05),
      left: Math.floor(width * .05)
    };
    let width = Width - margins.left - margins.right,
      height = Height - margins.top - margins.bottom;
    function chart(selection) {
      selection.each(function(data) {
        var svg = d3
          .select(this)
          .append("svg")
          .attr("width", width)
          .attr("height", height);
        var treemapLayout = d3.treemap()
          .size([width, height])
          .paddingTop(20)
          .paddingInner(8);
        var rootNode = d3.hierarchy(data)
        rootNode.sum(function(d) {
          return d.value;
        });
        treemapLayout(rootNode);
        var nodes = svg
          .selectAll('g')
          .data(rootNode.descendants())
          .enter()
          .append('g')
          .attr('transform', function(d) {return 'translate(' + [d.x0, d.y0] + ')'});
        nodes
          .append('rect')
          .attr('width', function(d) { return d.x1 - d.x0; })
          .attr('height', function(d) { return d.y1 - d.y0; })
          .attr('opacity', function(d) { return 0.8 })//has to be like d.value / max or so })
          .attr('fill', function(d) {
            if (d.data.color) { return d.data.color }
            else { return "white" }
          });
        nodes
          .append('text')
          .attr('dx', 10)
          .attr('dy', 8)
          .text(function(d) {
            return d.data.value;
          });
      });
    }
    return chart;
  }
}

export default treemap;
/*
const data = [
  {
    "key": "Afghanistan",
    "region": "Asia",
    "subregion": "Southern Asia",
    "value": 25500100
  },
  {
    "key": "Åland Islands",
    "region": "Europe",
    "subregion": "Northern Europe",
    "value": 28502
  },
  {
    "key": "Albania",
    "region": "Europe",
    "subregion": "Southern Europe",
    "value": 2821977
  }
];

var treemapLayout = d3.treemap()
  .size([1000, 600])
  .paddingTop(20)
  .paddingInner(8);

var rootNode = d3.hierarchy(data)

rootNode.sum(function(d) {
  return d.value;
});

treemapLayout(rootNode);

var nodes = d3.select('svg g')
  .selectAll('g')
  .data(rootNode.descendants())
  .enter()
  .append('g')
  .attr('transform', function(d) {return 'translate(' + [d.x0, d.y0] + ')'})

  nodes
    .append('rect')
    .attr('width', function(d) { return d.x1 - d.x0; })
    .attr('height', function(d) { return d.y1 - d.y0; })
    .attr('opacity', function(d) { return 0.8 has to be like d.value / max or so })
    .attr('fill', function(d) { if (d.data.color) {
                                  return d.data.color
                                } else {
                                  return "white"
                                }});
  nodes
    .append('text')
    .attr('dx', 10)
    .attr('dy', 8)
		.text(function(d) {
      return d.data.value;
  });

*/
