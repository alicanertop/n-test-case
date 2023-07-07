const cwd = process.cwd()
const path = require('path')
const webpack = require('webpack')
const { compilerOptions } = require('./tsconfig.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const port = process.env.PORT

const alias = Object.entries(compilerOptions.paths).reduce((prev, [key, value]) => {
  prev[key] = path.join(cwd, [compilerOptions.baseUrl, value.join('')].join('/'))
  return prev
}, {})

const defaultConfigs = {
  entry: ['./src/index.tsx'],
  stats: 'errors-warnings',
  resolve: {
    alias,
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.tsx'],
        baseUrl: path.join(cwd, 'src'),
        configFile: path.join(cwd, 'tsconfig.json')
      })
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({ ...process.env }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/512.png',
      inject: true
    }),
    new MiniCssExtractPlugin({
      experimentalUseImportModule: true,
      filename: '[name].[chunkhash].css',
      chunkFilename: '[name].[chunkhash].chunk.css'
    })
  ],
  module: {
    rules: [
      {
        // Typescript loader
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: { loader: 'ts-loader', options: { transpileOnly: true } }
      },
      {
        // CSS Loader
        test: /\.css$/,
        use: [
          { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: 'css-loader' }
        ]
      },
      // SCSS Loader
      {
        test: /\.scss$/,
        use: [
          { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'css-modules-typescript-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        // Less loader
        test: /\.less$/,
        use: [
          { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        // Images Loader
        test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { publicPath: '.src/assets/images', outputPath: 'assets/images' }
          }
        ]
      },
      {
        // Font & SVG loader
        test: /\.(woff(2)?|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: { publicPath: '.src/assets/fonts', outputPath: 'assets/fonts' }
          }
        ]
      }
    ]
  }
}

module.exports = { isDev, port, defaultConfigs, alias }
