atc.view = atc.view || {};

(function() {
   atc.view.main = Backbone.View.extend({

       events: {
           "touchstart button": "search"
       },

       initialize: function(options) {
           this.render();
       },
       render: function() {
           var temp = _.template( $("#main_template").html(),{});
           this.$el.html(temp);
           return this;
       },

       search: function() {
           this.$el.hide();
           var search = new atc.view.searchView({el: $("#searchView"), collection: this.collection});
       }
   });
})();