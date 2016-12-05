let express = require('express'),
  webpackDevServer = require('webpack-dev-server'),
  webpack = require('webpack');

const app = express();
const port = 7070;
const devPort = 3001;

if(process.env.NODE_ENV == 'development') {
  console.log('Server is running on development');

  const config = require('../webpack.dev.config');
  let compiler = webpack(config);
  let devServer = new webpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}

let router = express.Router();

app.use(express.static(__dirname + '/../public'));

app.get('/hello', (req,res) => {
  res.send('Can you hear me? ');
});

let _router = require('./routes/posts')(router);
app.use(_router);


const server = app.listen(port, () => {
  console.log('Express server is running on port 7070');
})
