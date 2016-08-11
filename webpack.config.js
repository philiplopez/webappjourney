const {resolve} = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = env => {
  return {
    entry: './client.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015-webpack', 'react', 'stage-1']
          }
        },
        {
          test: /\.css$/, 
          loader: ExtractTextPlugin.extract({
            // fallbackLoader: "style-loader",
            loader: "css-loader?modules&localIdentName=[name]_[local]__[hash:base64:5]"
          })
        }
      ],
    },
    plugins: [
      new ExtractTextPlugin("styles.css")
    ]
  }
}
