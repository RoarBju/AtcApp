define([
    'underscore',
    'backbone',
    'model/atc_entry'
], function(_, Backbone,AtcEntry){
    var AtcCollection =  Backbone.Collection.extend({
        model: AtcEntry,
        url: "http://hotell.difi.no/api/json/fhi/atc-kodenavn-virkestoff-norsk",

        parse: function(response) {
            return response.entries;
        }
    });

    return AtcCollection;

});