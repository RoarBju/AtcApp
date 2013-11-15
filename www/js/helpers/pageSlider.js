define(function(){
    var slider = function (current, page, from) {
        page.attr("class", "page " + from);
        page.attr("class", "page transition center");
        current.attr("class", "page transition " + (from === "left" ? "right" : "left"));
    }

    return {
        slider: slider
    };

});