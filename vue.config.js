const path = require("path");

module.exports = {
  lintOnSave: false,
  publicPath: '.',
  pages: {
    index: {
      entry: "src/main.js",
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'src': path.resolve('src'),
        'utils': path.resolve('src/utils'),
        'assets': path.resolve('src/assets'),
        'components': path.resolve('src/components'),
      }
    }
  },

  css: {
    sourceMap: true,
    loaderOptions: {
      // pass options to sass-loader
    }
  },
  devServer: {
    disableHostCheck: true
  }
};
