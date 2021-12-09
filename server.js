const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack/webpack.dev');

const port = 3001;
const app = express();

if (process.ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!\n`);
});
