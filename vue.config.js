const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/_vars.scss";'
      }
    }
  },
  chainWebpack: config => {
    config.plugin('copy')
      .tap(args => {
        args[0].push({
          from: path.resolve(__dirname, 'src/assets/img'),
          to: path.resolve(__dirname, 'dist/img'),
          toType: 'dir'
        },
        {
          from: path.resolve(__dirname, 'public/fonts'),
          to: path.resolve(__dirname, 'dist/public/fonts'),
          toType: 'dir'
        })
        return args
      })
  }
}
