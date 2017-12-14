# webpack-source-map-minify-bug
reproduce webpack/minify source-map bug

    git clone git@github.com:ericprud/webpack-source-map-minify-bug &&
    cd webpack-source-map-minify-bug && npm install &&
    npm run build:browser

Commenting out either of
```
devtool: 'source-map',
plugins: [ new MinifyPlugin({ deadcode: false }) ],
```
in [webpack.config.js](webpack.config.js#L10-L11) results in a successful build.

TODO: delete repo when [webpack/webpack#6131](https://github.com/webpack/webpack/issues/6131) is resolved.
