define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var AtcEntry = Backbone.Model.extend({
        defaults:{
            atckodenavn:"",
            atckode:""
        },
        getName: function() {
            return this.get("atckodenavn");
        },
        getCode: function() {
            return this.get("atckode");
        }
    });

    return AtcEntry;

});