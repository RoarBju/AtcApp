define([
    'jquery',
    'underscore',
    'backbone',
    'helpers/pageSlider',
], function($, _, Backbone,PageSlider){
    var Main = Backbone.View.extend({
        events: {
            "touchstart button": "search"
        },

        render: function() {
            var temp = _.template( $("#main_template").html(),{});
            this.$el.html(temp);
            return this;
        },

        search: function() {
            Backbone.history.navigate("list", {trigger: true});
            PageSlider.slider(this.$el,$("#searchView"), "right");
            $("#detailedView").attr("class", "page right");
        }
    });

    return Main;

});