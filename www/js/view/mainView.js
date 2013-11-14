atc.view = atc.view || {};

(function(view) {
   view.main = Backbone.View.extend({
       events: {
           "touchstart button": "search"
       },

       render: function() {
           var temp = _.template( $("#main_template").html(),{});
           this.$el.html(temp);
           return this;
       },

       search: function() {
           atc.routes.navigate("list", {trigger: true});
           atc.slider(this.$el,$("#searchView"), "right");
           $("#detailedView").attr("class", "page right");

       }
   });
})(atc.view);