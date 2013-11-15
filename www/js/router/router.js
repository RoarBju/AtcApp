define([
    'jquery',
    'underscore',
    'backbone',
    'view/searchView',
    'view/mainView',
], function($, _, Backbone, SearchView, MainView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            'list': "list",
            '': 'def'
        }
    });

    var app_router = null;
    var initialize = function() {
        var mainview = null;
        var listView = null;

        app_router = new AppRouter();

        app_router.on('route:list', function(){
            if(listView == null) {
                listView =  new SearchView({el: $("#searchView")});
                listView.render();
            }
        });

        app_router.on('route:def', function() {
            if(mainview == null) {
                mainview = new MainView({el: $("#app")});
                mainview.render();
            }
        });
        Backbone.history.start();
    };

    return {
        initialize: initialize,
        getRouter: app_router
    };
});



