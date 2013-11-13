atc.view = atc.view || {};

(function() {
    atc.view.searchView = Backbone.View.extend({

        events: {
            "touchstart button": "populateList" ,
        },
        initialize: function(options) {
            this.render();
            atc.populate();
        },

        render: function() {
            var template = _.template($("#search_template").html(),{});
            this.$el.html(template);
            return this;
        },
        populateList: function() {
            this.$el.find("ul").empty();
            var fragment = document.createDocumentFragment();
            atc.datacontainer.each(function(model) {
                    var element = new atc.view.listElement({model: model});
                    fragment.appendChild(element.render().el);
            },this);
            this.$el.find("ul").append(fragment);
        }

    })
})();