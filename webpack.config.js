var HTMLPlugin =  require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HTMLPlugin({
            title: 'Point Commun',
            filename: 'index.html',
            template: 'src/index.ejs',
            favicon: 'src/images/logoPointCommun.png',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'theme-color': '#4285f4',
                'og:type' : 'website',
                'og:site_name' : 'Point Commun',
                'og:description' : '<description>',
                'description' : '<description>',
                'og:image' : 'logoPointCommun.png',
                'og:image:type' : 'image/png',
                'og:url' : '<url>'
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
            showErrors: process.env.ENV === 'production',

        }),

    ]
}
