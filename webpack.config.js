const path = require("path"),
      webpack = require("webpack");

// permet de savoir si l'on est en mode production
let production = process.argv.indexOf("--prod") > -1;

module.exports = {
    // points d'entrée de l'application
    // string|object|array
    entry: {
        // nom de la clé [name]: liste des fichiers
        index: [
            // files
            './src/index.jsx',
        ],
    },

    // sorties
    output: {
        // ./dist
        path: path.join(__dirname, "dist"),
        // ./dist/[entry_name].js
        filename: '[name].js',
        // public path => base_url
        publicPath: '/',
    },

    // résolution des requires
    resolve: {
        // par modules
        modules: [
            'node_modules',
            path.resolve(__dirname, "src")
        ],

        // on autorise que ces extensions dans les requires
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx'
        ],
    },

    module: {
        // définition des règles
        rules: [
            // typescript (js + jsx)
            {
                // on prend tous les fichiers js et jsx
                test: /\.jsx?$/,
                // on exclu le répertoire node_modules
                exclude: /node_modules/,

                // loader faisant la liaison entre typescript et webpack
                loader: 'babel-loader',

                // on rajoute les presets qui vont bien
                query: {
                    presets: ['es2015', 'react']
                },
            },

            // on rajoute un preprocessor sur le js compilé pour gérer les sourcemaps
            {
                // c'est un preprocessor
                enforce: "pre",
                // qu'on exécute que sur les fichiers .js
                test: /\.js$/,
                // avec le loader gérant les sourcemaps
                loader: "source-map-loader",
            },
        ],
    },

    // on précise que les librairies de react sont des externals
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};