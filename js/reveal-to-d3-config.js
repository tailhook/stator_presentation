/* global d3 */

var pt = pt || {};



pt.slideIdToFunctions = {
  'graph1': {
    '0': function() {
      'use strict';
      // Hello world
      var data = {
        stator: 36482.09,
        uwsgi: 43833.15,
        tornado: 2901.44,
      };
      render(data);
    },
    1: function() {
      'use strict';
      // Hello world + async things
      var data = {
        stator: 36482.09,
        "stator-asyncio": 30566.94,
        uwsgi: 43833.15,
        "uwsgi-gevent": 15520.09,
        tornado: 2901.44,
      };
      render(data);
    },
    2: function() {
      'use strict';
      // Redis
      var data = {
        stator: 16439.26,
        "stator-aio-redis": 17200.96,
        "stator-redis": 13477.33,
        uwsgi: 15806.68,
        "uwsgi-gevent": 6782.57,
      };
      render(data);
    },
    3: function() {
      'use strict';
      // Redis + 10 ms sleep
      var data = {
        stator: 1753.80,
        "stator-aio-redis": 14825.91,
        "stator-redis": 12759.67,
        uwsgi: 1665.79,
        "uwsgi-gevent": 6967.74,
      };
      render(data);
    },
    4: function() {
      'use strict';
      // Redis + 10 ms busy
      var data = {
        stator: 1769.15,
        "stator-aio-redis": 912.20,
        "stator-redis": 931.20,
        uwsgi: 1748.15,
        "uwsgi-gevent": 1482.26,
      };
      render(data);
    },
  },
};
