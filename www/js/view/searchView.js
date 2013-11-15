atc.view = atc.view || {};

(function() {
    atc.view.searchView = Backbone.View.extend({

        events: {
            "touchstart #viewList": "populateList" ,
            "touchstart #listBack": "back"
        },

        initialize: function() {
            atc.populate();
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
            atc.datacontainer.each(function(model) {
                    var element = new atc.view.listElement({model: model});
                    fragment.appendChild(element.render().el);
            },this);
            this.$el.find("ul").append(fragment);
        },

        detatchButton: function() {
            $("#viewList").prop("disabled","true");
            /*
            this.undelegateEvents();
            this.events = _.clone(this.events);
            delete this.events["touchstart #viewList"];
            this.delegateEvents();*/
            this.detachEvent("touchstart #viewList");
        },

        back: function() {
            atc.routes.navigate("", {trigger: true});
            atc.slider(this.$el,$("#app"), "left");
        }
    })
})();