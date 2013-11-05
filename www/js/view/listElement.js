atc.view = atc.view || {};

(function() {
     atc.view.listElement = Backbone.View.extend({
         tagName: 'li',
         events: {
             "touchstart": "viewDetailed"
         },
         initialize: function() {

         },
         render: function() {
             var template = _.template($("#listelement_template").html(), {
                  code: this.model.getCode(),
                  name: this.model.getName()
             });
             this.$el.html(template);
             return this;
         },

         viewDetailed: function() {
             console.log(this.model.getName());
         }
     });
})();