const webpack = require('webpack')
// const path = require('path')
const isDebug = process.env.NODE_ENV !== 'production'

const PROD_PUBLIC_PATH = 'https://rookiewan.github.io/tree-hole/'

// function resolve (...paths) {
//   return path.resolve(__dirname, ...paths)
// }

module.exports = {
  publicPath: isDebug ? './' : PROD_PUBLIC_PATH,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __ENV__: JSON.stringify(process.env.NODE_ENV)
      })
    ]
  }
}
