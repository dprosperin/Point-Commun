var HTMLPlugin =  require("html-webpack-plugin"),
    path       = require('path')
module.exports = {
  devServer: {
      contentBase: path.join(__dirname, '../../dist/template1'),
      compress: true,
      writeToDisk: true,
      port: 8080
  },
  // optimization :{
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  entry: {
       template1: './src/template1/index.js'
  },
  output:{
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: 'dist/template1',
    path: path.resolve(__dirname, '../../dist/template1'),
  },
  module: {
        rules: [
        {
            test: /\.less$/,
            loader: 'less-loader'
          },
        {
          test: /\.scss/,
          use: [
                 { loader: 'style-loader', options: { sourceMap: process.env.ENV === 'development' } },
                 { loader: 'css-loader', options: { sourceMap: process.env.ENV === 'development' } },
                 { loader: 'postcss-loader', options: { sourceMap: process.env.ENV === 'development' } },
                 { loader: 'sass-loader', options: { sourceMap: process.env.ENV === 'development' } }
         ]
        },
          {
            test: /\.txt$/, use: 'raw-loader' 
          },
        {
            test: /\.css$/,
            use: [
                  { loader: 'style-loader', options: { sourceMap: process.env.ENV === 'development' } },
                  { loader: 'css-loader', options: { sourceMap: process.env.ENV === 'development' } },
                  { loader: 'postcss-loader', options: { sourceMap: process.env.ENV === 'development' } },
            ]
          },
          {
          test: /\.(png|jpe?g|gif)$/,
          use: {
          loader: 'file-loader',
          options: {
          name: '[name].[md5:hash:hex:8].[ext]',
                outputPath: 'assets/img'
          }
           }
         },
        ]
  },
  plugins: [
     new HTMLPlugin({
          filename: 'template1.html',
          template: 'src/template1/index.ejs',
          favicon: 'src/template1/images/logo.png',
          title: 'Point Commun - template 1',
          meta: {
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            'theme-color': '#4285f4',
            'og:type' : 'website',
            'og:site_name' : 'Point Commun',
            'og:description' : '<description>',
            'description' : '<description>',
            'og:image' : 'logoPointCommun.png',
            'og:image:type' : 'image/png',
            'og:url' : '<url>',
            'og:locale' : '<local>'
         },
         minify: {
          collapseWhitespace: true,
          removeComments: process.env.ENV === 'production',
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
         },
         hash: true,
         showErrors: process.env.ENV === 'development',
     })
  ] 
}