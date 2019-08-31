var HTMLPlugin =  require("html-webpack-plugin"),
    path       = require('path'),
    exportModule = {
      entry: {
        theme1: './src/theme1/index.js'
      }, 
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        writeToDisk: true,
        port: 9000
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
      plugins: []
    };
global['themes'] = {};
global['themes']['theme1'] = {
        HTMLPlugin: {
          filename: 'theme1.html',
          template: 'src/theme1/index.ejs',
          favicon: 'src/theme1/images/logo.png',
          title: 'Point Commun - theme 1',
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
     }
};
global['themes']['theme2'] = {
      HTMLPlugin: {
        title: 'Point Commun - theme 2',
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
        filename: 'theme2.html',
        template: 'src/theme2/index.ejs',
        //favicon: 'src/theme1/images/logo.png',
    }
};

if(process.env.THEME != undefined) {
    exportModule
       .plugins
       .push(
         new HTMLPlugin(global['themes'][process.env.THEME]['HTMLPlugin']));
} else {
    for (var prop in global['themes']) {
        exportModule
          .plugins
          .push(
            new HTMLPlugin(global['themes'][prop]['HTMLPlugin']));
    }
}
module.exports = exportModule;