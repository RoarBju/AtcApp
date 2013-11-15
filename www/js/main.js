require.config({
    paths: {
        jquery: 'lib/jquery-1.10.2.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
    },
    shim: {
        backbone: {
            //These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

require([
    // Load our app module and pass it to our definition function
    'index',

], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});