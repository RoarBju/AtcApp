atc.view = atc.view || {};

(function() {
   atc.view.detailedView = Backbone.View.extend({
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
        }
   });
})();