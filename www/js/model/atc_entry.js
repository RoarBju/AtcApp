atc.model = atc.model || {};

(function() {
    atc.model.atcEntry = Backbone.Model.extend({
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
})();