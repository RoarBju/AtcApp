(function(view){
    var mainview = null;
  //  var detailedView = null;
    var listView = null;
    var initialized = true;

    var Router = Backbone.Router.extend({
        routes: {
           'list': "list",
           '': 'def'
       },
       list: function() {
           if(listView == null) {
                listView =  new view.searchView({el: $("#searchView")});
               listView.render();
           }
       },
       def: function() {
           if(mainview == null) {
               mainview = new view.main({el: $("#app")});
               mainview.render();
           }
       }
    });
    atc.routes = new Router();
    Backbone.history.start();
})(atc.view);



