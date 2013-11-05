atc.collection = atc.collection || {};

(function(){
    atc.collection.elementList = Backbone.Collection.extend({
        model: atc.model.atcEntry,
        url: "http://hotell.difi.no/api/json/fhi/atc-kodenavn-virkestoff-norsk",

        parse: function(response) {
            return response.entries;
        }

    });
})();