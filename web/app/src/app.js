define([
    'marionette',
    'jquery.spin',
    'src/extensions/backbone.sync'
], function (Marionette) {
    'use strict';

    var App = new Marionette.Application();

    App.addRegions({
        layout: '.layout'
    });

    App.on('start', function () {
        $('#spinner').spin({
            lines:     13, // The number of lines to draw
            length:    20, // The length of each line
            width:     10, // The line thickness
            radius:    30, // The radius of the inner circle
            corners:   1, // Corner roundness (0..1)
            rotate:    0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color:     '#000', // #rgb or #rrggbb or array of colors
            speed:     1, // Rounds per second
            trail:     60, // Afterglow percentage
            shadow:    false, // Whether to render a shadow
            hwaccel:   false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex:    2e9, // The z-index (defaults to 2000000000)
            top:       '50%', // Top position relative to parent
            left:      '50%' // Left position relative to parent
        }).hide();

        $(document).ajaxStart(function () {
            $('#spinner').fadeIn();
        });
        $(document).ajaxComplete(function () {
            $('#spinner').fadeOut();
        });

        if (Backbone.history) {
            require([
                'src/router',
                'src/modules/profile/module'
            ], function () {
                Backbone.history.start();
            });
        }
    });

    App.showBody = function (view) {
        App.layout.currentView.body.show(view);
    };

    App.navigate = function (route, options) {
        options = options || {};

        Backbone.history.navigate(route, options);
    };

    window.App = App;

    return App;
});
