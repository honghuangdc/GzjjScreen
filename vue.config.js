const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  
  publicPath: './',  // 基本路径
  outputDir: 'dist',  // 输出文件目录
  lintOnSave: true,  // eslint-loader 是否在保存的时候检查
  
  // webpack配置
  chainWebpack: (config) => { 
    config.resolve.alias.set('@$', resolve('src'))
   },
  configureWebpack: () => { },

  productionSourceMap: false,  // 生产环境是否生成 sourceMap 文件
  devServer: {
    hot: true,  //开发环境热更新
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
}