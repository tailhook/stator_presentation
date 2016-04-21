/* global d3 */

var pt = pt || {};



pt.slideIdToFunctions = {
  'graph1': {
    '0': function() {
      'use strict';
      var data = {
        stator: 36482.09,
        uwsgi: 43833.15,
        tornado: 2901.44,
      };
      render(data);
    },
    1: function() {
      'use strict';
      var data = {
        stator: 36482.09,
        "stator-asyncio": 30566.94,
        uwsgi: 43833.15,
        "uwsgi-gevent": 15520.09,
        tornado: 2901.44,
      };
      render(data);
    }
  },
};
