/* eslint quotes: [2, "double", "avoid-escape"] */

// AUTOGENERATED.
// Sun Dec 20 2015 19:33:40 GMT-0600 (CST)

"use strict";

var path = require("path");

var PROJECT_DIR = process.env.WEBPACK_OUTPUT_PATH || process.cwd();

module.exports = {
  "devtool": "cheap-module-eval-source-map",

  "entry": {
    "main": [
      "webpack-hot-middleware/client",
      "./src/index.js"
    ]
  },

  "output": {
    "path": path.join(PROJECT_DIR, "build", "assets"),
    "publicPath": "/assets/",
    "filename": "[name].js",
    "chunkFilename": "[id].chunk.[hash].js",
    "sourceMapFilename": "debug/[file].map",
    "pathInfo": "true"
  },

  "debug": true,

  "resolve": {
    "root": path.join(PROJECT_DIR, "src"),
    "extensions": ["", ".js", ".jsx"],
    "alias": {
      "app": path.join(PROJECT_DIR, "src")
    }
  },

  "resolveLoader": {
    "root": path.join(PROJECT_DIR, "node_modules")
  },

  "module": {
    "preLoaders": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "loader": "eslint-loader"
      }
    ],

    "loaders": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "loader": "babel"
      },
      {
        "test": /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        "loader": "url?limit=10000&mimetype=application/font-woff&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        "loader": "url?limit=10000&mimetype=application/font-woff&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        "loader": "url?limit=10000&mimetype=application/octet-stream&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=[name]-[hash].[ext]"
      },
      {
        "test": /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        "loader": "url?limit=10000&mimetype=image/svg+xml&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.(png|jpg|jpeg|gif)$/,
        "loader": "url?limit=10000&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.json$/,
        "loader": "json"
      },
      {
        "test": /\.(wav|mp3|mp4)$/,
        "loader": "file?name=[name]-[hash].[ext]"
      },
      {
        "test": /\.html$/,
        "loader": "html"
      },
      {
        "test": /\.txt$/,
        "loader": "raw"
      }
    ],

    "eslint": {
      "emitError": false,
      "emitWarning": false,
      "failOnWarning": false,
      "failOnError": false,
      "configFile": ".eslintrc.dev"
    }
  }
};
