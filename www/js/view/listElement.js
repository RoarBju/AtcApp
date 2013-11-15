define([
    'jquery',
    'underscore',
    'backbone',
    'view/detailedView',
    'helpers/pageSlider',
], function($, _, Backbone,DetailedView,PageSlider){
    var ListElement = Backbone.View.extend({
        tagName: 'li',

        className: "list",

        events: {
            "touchstart": "viewDetailed"
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
            new DetailedView({el: $("#detailedView"), model: this.model});
            PageSlider.slider($("#searchView"),$("#detailedView"), "right");
        }
    });

    return ListElement;
});