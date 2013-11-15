define([
    'jquery',
    'underscore',
    'backbone',
    'router/router',
    'helpers/pageSlider',
], function($, _, Backbone,Router,PageSlider){
    console.log(Router);
    console.log(PageSlider);
    var Main = Backbone.View.extend({
        events: {
            "touchstart button": "search"
        },

        render: function() {
            console.log(Router);
            console.log(PageSlider);
            var temp = _.template( $("#main_template").html(),{});
            this.$el.html(temp);
            return this;
        },

        search: function() {
            Router.getRouter.navigate("list", {trigger: true});
            PageSlider.slider(this.$el,$("#searchView"), "right");
            $("#detailedView").attr("class", "page right");
        }
    });

    return Main;

});