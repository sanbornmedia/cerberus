const path = require('path')
const merge = require('webpack-merge')

const config = require('../config/app')

module.exports = merge({
    /**
     * Project paths.
     *
     * @type {Object}
     */
    paths: {
        root: path.resolve(__dirname, '../'),
        public: path.resolve(__dirname, '../public'),
        sass: path.resolve(__dirname, '../resources/assets/sass'),
        fonts: path.resolve(__dirname, '../resources/assets/fonts'),
        images: path.resolve(__dirname, '../resources/assets/images'),
        javascript: path.resolve(__dirname, '../resources/assets/js'),
        relative: '../',
        external: /node_modules|bower_components/
    },

    /**
     * Collection of application front-end assets.
     *
     * @type {Array}
     */
    assets: [],

    /**
     * List of filename schemas for different
     * application assets.
     *
     * @type {Object}
     */
    outputs: {
        css: { filename: 'css/[name].css' },
        font: { filename: 'fonts/[name].[ext]' },
        image: { filename: 'images/[name].[ext]' },
        javascript: { filename: 'js/[name].js' }
    },

    /**
     * List of libraries which will be provided
     * within application scripts as external.
     *
     * @type {Object}
     */
    externals: {
        jquery: 'jQuery',
    },

    /**
     * Settings of other build features.
     *
     * @type {Object}
     */
    settings: {
        sourceMaps: true,
        styleLint: {},
        browserSync: {
            host: 'localhost',
            port: 3000,
            proxy: 'http://cerberus.dev/',
            open: false,
            reloadDelay: 500,
            files: [
                "*.php",
                "app/**/*.php",
                "resources/templates/**/*.php",
                "resources/assets/js/**/*.js",
                "resources/assets/sass/**/*.{sass,scss}",
                "resources/assets/images/**/*.{jpg,jpeg,png,gif,svg}",
                "resources/assets/fonts/**/*.{eot,ttf,woff,woff2,svg}"
            ]
        }
    }
}, config)
