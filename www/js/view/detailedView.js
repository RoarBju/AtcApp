atc.view = atc.view || {};

(function() {
   atc.view.detailedView = Backbone.View.extend({
         /*
         TODO
         */
         initialize: function() {
             this.render();
         },

        render: function() {
            var template = _.template($("#testesttest").html(), {
                  code: this.model.getCode(),
                  name: this.model.getName()
             });
             this.$el.html(template);
             return this;
        }
   });
})();