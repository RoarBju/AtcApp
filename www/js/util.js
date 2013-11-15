Backbone.View.prototype.close = function() {
    this.undelegateEvents();
    this.$el.empty();
};

Backbone.View.prototype.detachEvent = function(event) {
    this.undelegateEvents();
    this.events = _.clone(this.events);
    delete this.events[event];
    this.delegateEvents();
};