const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const { defaultConfigs, port, isDev } = require('./webpack.config.default')

const webpackDevConfig = {
  mode: 'development',
  performance: { hints: false },
  devtool: 'cheap-module-source-map',
  optimization: { splitChunks: { chunks: 'all' } },
  devServer: { historyApiFallback: true, open: true, hot: true, port },
  output: { filename: '[name].js', chunkFilename: '[name].chunk.js' }
}

const webpackProdConfig = {
  mode: 'production',
  output: {
    clean: true,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  optimization: {
    minimize: true,
    sideEffects: true,
    runtimeChunk: 'single',
    concatenateModules: true,
    splitChunks: {
      minSize: 0,
      chunks: 'all',
      maxInitialRequests: 10,
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  }
}

const config = { ...defaultConfigs, ...(isDev ? webpackDevConfig : webpackProdConfig) }
module.exports = isDev ? new SpeedMeasurePlugin().wrap(config) : config
