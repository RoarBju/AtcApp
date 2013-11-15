define([
    'jquery',
    'underscore',
    'backbone',
    'router/router',
    'view/listElement',
    'helpers/pageSlider',
    'collection/atc_collection'
], function($, _, Backbone,Router,ListElement,PageSlider,AtcCollection){

    var SearchView = Backbone.View.extend({

        events: {
            "touchstart #viewList": "populateList" ,
            "touchstart #listBack": "back"
        },

        initialize: function() {
            this.collection =  new AtcCollection();
            this.collection.fetch();
        },

        render: function() {
            var template = _.template($("#search_template").html(),{});
            this.$el.html(template);
            return this;
        },

        populateList: function() {
            this.detatchButton()
            this.$el.find("ul").empty();
            var fragment = document.createDocumentFragment();
            this.collection.each(function(model) {
                var element = new ListElement({model: model});
                fragment.appendChild(element.render().el);
            },this);
            this.$el.find("ul").append(fragment);
        },

        detatchButton: function() {
            $("#viewList").prop("disabled","true");
            this.detachEvent("touchstart #viewList");
        },

        back: function() {
            Router.getRouter.navigate("", {trigger: true});
            PageSlider.slider(this.$el,$("#app"), "left");
        }
    })

    return SearchView;
});