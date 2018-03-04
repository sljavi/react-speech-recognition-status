//thanks to -> https://webpack.js.org/guides/author-libraries/

const path = require('path');

module.exports = {
  entry: {
    script: path.resolve(__dirname, './src/index.js')
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'domElementTypes',
    libraryTarget: 'umd'
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    }
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      __dirname,
      path.resolve(__dirname, './node_modules')
    ]
  }
};
