const path = require("path");

module.exports = {
  lintOnSave: false,
  publicPath: '.',
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      // template: "public/index.html",
      // output as dist/index.html
      // filename: "index.html"
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
  // 這段是設定開發人員工具中，可以找的到編譯後的CSS規則來源寫在哪
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