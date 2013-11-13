atc.view = atc.view || {};

(function() {
     atc.view.listElement = Backbone.View.extend({
         tagName: 'li',
         className: "list",
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
                new atc.view.detailedView({el: $("#detailedView"), model: this.model});
                atc.slider($("#searchView"),$("#detailedView"), "right");
         }
     });
})();