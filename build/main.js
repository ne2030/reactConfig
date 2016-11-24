'use strict';

var express = require('express'),
    webpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack');

var app = express();
var port = 7070;
var devPort = 3001;

if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development');

  var config = require('../webpack.dev.config');
  var compiler = webpack(config);
  var devServer = new webpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, function () {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}

var router = express.Router();

app.use(express.static(__dirname + '/../public'));

app.get('hello', function (req, res) {
  res.send('Can you hear me? ');
});

var _router = require('./routes/posts')(router);
app.use(_router);

var server = app.listen(port, function () {
  console.log('Express server is running on port 7070');
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'server/main.js');

  __REACT_HOT_LOADER__.register(port, 'port', 'server/main.js');

  __REACT_HOT_LOADER__.register(devPort, 'devPort', 'server/main.js');

  __REACT_HOT_LOADER__.register(router, 'router', 'server/main.js');

  __REACT_HOT_LOADER__.register(_router, '_router', 'server/main.js');

  __REACT_HOT_LOADER__.register(server, 'server', 'server/main.js');
}();

;