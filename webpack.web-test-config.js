//Webpack configuration JUST FOR TEST
var Path=require('path');
/** The resolve path list to find modules and loaders */
var MODULE_DIRS=[process.cwd(), Path.join(process.cwd(),'src'), Path.join(process.cwd(),'node_modules')];

module.exports = {
    devtool: "source-map",  //Force create source map file
    entry: './web-test/test.js',
    output: {
        path: __dirname,
        filename: 'test-bundle.js'
    },
    resolve: {
        root: MODULE_DIRS,
        alias: {},
        extensions: ['', '.js', '.css', '.html', '.png', '.jpg']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // inline base64 URLs for <=256bytes images, direct URLs for the rest
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=256' },
            // loader for html templates
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    resolveLoader: {
        modulesDirectories: MODULE_DIRS
    }
}
