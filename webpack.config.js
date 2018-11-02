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
                'theme-color': '#4285f4'
            },
            hash: true,
            showErrors: true,
            
        })
    ]
} 