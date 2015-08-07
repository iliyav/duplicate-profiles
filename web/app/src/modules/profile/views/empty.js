define([
    'src/app',
    'marionette'
], function (App, Marionette) {
    'use strict';

    App.module('Profile.Views', function (Views) {
        Views.Empty = Marionette.ItemView.extend({
            tagName: 'tr',

            template: JST['profile/empty']
        });
    });

    return App.Profile.Views.Empty;
});
