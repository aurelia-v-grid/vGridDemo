var build = function () {

    // most of my src code is not ts... so I dont want this running atm
    //const TypeCheckPlugin = require('fuse-box-typechecker').TypeCheckPlugin // kinda buggy on the 1.4.1 preview-.-.
    
    const {
        FuseBox,
        HTMLPlugin,
        RawPlugin,
        TypeScriptHelpers
    } = require("fuse-box");


    const fuse = FuseBox.init({
        homeDir: "src",
        output: "dist/$name.js",
        plugins: [
           //TypeCheckPlugin({bundles:['app']}),
            HTMLPlugin(), 
            [".css", RawPlugin({extensions: ['.css']})], 
            TypeScriptHelpers()
            
            ]
    });

    fuse.register('aurelia-v-grid', {
        homeDir: 'node_modules/aurelia-v-grid/dist/commonjs',
        main: 'index.js',
        instructions: '**/*.{html,css,js}',
    });

    fuse.bundle("vendor")
        .cache(true)
        .instructions(` 
            + aurelia-bootstrapper
            + fuse-box-aurelia-loader
            + aurelia-framework
            + aurelia-pal
            + aurelia-metadata
            + aurelia-v-grid
            + aurelia-loader-default
            + aurelia-polyfills
            + aurelia-fetch-client
            + aurelia-pal-browser
            + aurelia-animator-css
            + aurelia-logging-console 
            + aurelia-templating-binding 
            + aurelia-templating-resources 
            + aurelia-event-aggregator 
            + aurelia-history-browser 
            + aurelia-templating-router`) 


    fuse.bundle("app")
        .watch().cache(false)
        .sourceMaps(true)
        .instructions(` 
            > [main.ts]
            + [**/*.{ts,html,css}]`)      

    // don't change the port (know issue with hmr)
    fuse.dev({ port: 4445, httpServer: true, root:'.' });
    fuse.run();
 }

build();
