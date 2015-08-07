define([
    './app',
    'marionette',
    './views/layout'
], function (App, Marionette) {
    'use strict';

    App.Router = Marionette.AppRouter.extend({
        routes: {
            '': 'index'
        },

        index: function () {
            App.navigate('profiles', {trigger: true});
        }
    });

    App.addInitializer(function (options) {
        App.router = new App.Router();
        App.layout.show(new App.Views.Layout(options));
    });

    return App.Router;
});
