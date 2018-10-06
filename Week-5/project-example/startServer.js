const path = require('path');
const hotClient = require('webpack-hot-client');
const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');
const app = require('./stub');

const compiler = webpack(config);
const { publicPath } = config.output;
const options = { }; // webpack-hot-client options

// we recommend calling the client _before_ adding the dev middleware
const client = hotClient(compiler, options);
const { server } = client;
server.on('listening', () => {
  app.use(middleware(compiler, { publicPath }));

  // Fallback when no previous route was matched
  app.get('*', (req, res, next) => {
    const filename = path.resolve(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });
});