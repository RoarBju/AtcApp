/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var atc = atc || {};
var app = {
    // Application Constructor
    initialize: function() {
        var mainview = new atc.view.main({el: $("#app"), className: "page"});
        mainview.render();
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

atc.populate = function() {
    atc.datacontainer = new atc.collection.elementList();
    atc.datacontainer.fetch({
            success: function() {
                console.log("fetch sucess");
            }
        });
}

atc.slider = function (current, page, from) {
    console.log(current);
    console.log(page);
    console.log(from);
       // Position the page at the starting position of the animation
        page.attr("class", "page " + from);

        current.one('webkitTransitionEnd', function(e) {
            $(e.target).remove();
        });

        // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
        page.attr("class", "page transition center");
        current.attr("class", "page transition " + (from === "left" ? "right" : "left"));
}
