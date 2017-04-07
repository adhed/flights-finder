const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack-vendor-chunk-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, '..', 'src')) === -1;
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['ng-annotate','babel-loader'], exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  devtool: 'source-map',
  resolve: {
    // add alias for application code directory
    // alias: {
    //   '~': path.resolve(__dirname, '..', 'src')
    // },
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, '..', 'src/scss')],
    sourceMap: true
  },

  postcss: function() {
    return [autoprefixer];
  }
};
