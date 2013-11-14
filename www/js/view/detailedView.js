atc.view = atc.view || {};

(function() {
   atc.view.detailedView = Backbone.View.extend({
        events: {
        "touchstart button": "back"
        },

         initialize: function() {
             this.render();
         },

        render: function() {
            var template = _.template($("#detailedView_template").html(), {
                  code: this.model.getCode(),
                  name: this.model.getName()
             });
             this.$el.html(template);
             return this;
        },

       back: function() {
           atc.routes.navigate("list", {trigger: true});
           atc.slider(this.$el,$("#searchView"), "left");
           var that = this;
           this.$el.one('webkitTransitionEnd', function(e) {
               that.close();
           });
       },
       close: function() {
           this.undelegateEvents();
           this.$el.empty();
       }

   });
})();