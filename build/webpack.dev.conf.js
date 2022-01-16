'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const axios = require('axios')
const menus = require('../static/api_shop_menu.json')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const proxyHeaders = {
  'Host': 'h5.ele.me',
};


const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before (app) {
      app.get('/api/entries', (req, res, next) => {

        axios.get('https://h5.ele.me/restapi/shopping/openapi/entries?latitude=23.1268311&longitude=113.3418504&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template', {
          headers: proxyHeaders,
        }).then(response => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        });
      }),
        app.get('/api/restaurants', (req, res, next) => {
          var offset = req.query.offset || 0;
          var reqUrl = 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=23.12908&longitude=113.264359&offset=' + offset + '&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5';
          axios.get(reqUrl, {
            headers: proxyHeaders,
          }).then(response => {
            res.json(response.data)
          }).catch((e) => {
            console.log(e)
          });
        }),
        app.get('/api/shop', (req, res, next) => {
          var shopId = req.query.id;
          var reqUrl = 'https://h5.ele.me/restapi/shopping/restaurant/' + shopId + '?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=23.134326&longitude=113.365086'
          axios.get(reqUrl, {
            headers: proxyHeaders,
          }).then(response => {
            res.json(response.data)
          }).catch((e) => {
            console.log(e)
          });
        }),
        app.get('/api/shop_menu', (req, res, next) => {
          var shopId = req.query.id;
          var reqUrl = 'https://h5.ele.me/restapi/shopping/v2/menu?restaurant_id=' + shopId
          axios.get(reqUrl, {
            headers: proxyHeaders,
          }).then(response => {
            let data = response.data
            if(data.length === 0){
              data = menus
            }
            res.json(data)
          }).catch((e) => {
            console.log(e)
          });
        })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
