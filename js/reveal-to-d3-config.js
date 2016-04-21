/* global d3 */

var pt = pt || {};



pt.slideIdToFunctions = {
  'graph1': {
    'init': function() {
      'use strict';
      render(data);
  console.log("IN")
    },
    '-1': function() {
      'use strict';
      var data = [44, 28, 15, 16, 23, 5];
  console.log("SHIT")
      render(data);
      //d3.select('.chart').selectAll('g').data(data)
    },
    0: function() {
      'use strict';
  console.log("zer")
      var data = [10, 17, 15, 16, 23, 5];
      render(data);
      //d3.select('.chart').selectAll('g').data(data)
    }
  },
};
