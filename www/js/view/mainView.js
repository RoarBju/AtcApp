atc.view = atc.view || {};

(function() {
   atc.view.main = Backbone.View.extend({
       events: {
           "click button": "search",
           "swiperight": "search"
       },

       render: function() {
           var temp = _.template( $("#main_template").html(),{});
           this.$el.html(temp);
           return this;
       },

       search: function() {
            new atc.view.searchView({el: $("#searchView")});
            atc.slider(this.$el,$("#searchView"), "right");
           $("#detailedView").attr("class", "page right");

       }
   });
})();