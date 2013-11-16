define([
    'jquery',
    'underscore',
    'backbone',
    'helpers/pageSlider',
], function($, _, Backbone, PageSlider){
    var DetailedView = Backbone.View.extend({
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
            Backbone.history.navigate("list", {trigger: true});
            PageSlider.slider(this.$el,$("#searchView"), "left");
            var that = this;
            this.$el.one('webkitTransitionEnd', function(e) {
                that.close();
            });
        }
    });

    return DetailedView;

});