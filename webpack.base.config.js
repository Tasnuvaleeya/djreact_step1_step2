var path = require("path")
var webpack = require('webpack')

module.exports={
    context : __dirname,

    entry : {
        App1: './reactjs/App1',
        vendors : ['react'],

    },

    output:{
        path: path.resolve('./djreact/static/bundles/local/'),
        filrname: "[name]-[hash].js"

    },
    externals:[

    ],
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('vendors','vendor.js'),

    ],
    module:{
        loaders: []
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },

}