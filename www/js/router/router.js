(function(){
    var mainview = null;
    var detailedView = null;
    var listView = null;
    var Router = Backbone.Router.extend({
        routes: {
           'list': "list",
           '': 'def'
       },
       list: function() {
           console.log(listView);
           if(listView == null) {
                listView =  new atc.view.searchView({el: $("#searchView")});
               listView.render();
           }
       },
       def: function() {
           console.log("def");
           if(mainview == null) {
               mainview = new atc.view.main({el: $("#app"), className: "page"});
               mainview.render();
           }
       }
    });
    new Router();
    Backbone.history.start();
})();



