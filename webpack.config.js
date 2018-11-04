var HTMLPlugin =  require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HTMLPlugin({
            title: 'Point Commun',
            filename: 'index.html',
            template: 'src/index.html',
            favicon: 'src/images/logoPointCommun.png',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'theme-color': '#4285f4',
                'og:type' : 'website',
                'og:site_name' : 'Point Commun',
                //'og:image': 'logoPointCommun.png',
                'og:description' : '<description>',
                'description' : '<description>',
                'og:image' : '<image.png>',
                'og:image:type' : 'image/png',
                'og:url' : '<url>'
            },
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            hash: true,
            showErrors: true,
            
        }),
        
    ]
} 