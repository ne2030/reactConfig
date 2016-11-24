'use strict';

// const controller = controller

module.exports = function (router) {
  router.route('/').get(controller.getMain);

  router.route('/read/:id').get(controller.readFile);

  return router;
};

var controller = {
  getMain: function getMain(req, res) {
    res.send('hello');
  },
  readFile: function readFile(req, res) {
    res.send('You are reading posts' + req.params.id);
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(controller, 'controller', 'server/routes/posts.js');
}();

;