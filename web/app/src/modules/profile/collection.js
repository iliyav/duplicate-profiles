define([
    'src/app',
    'backbone',
    './model'
], function (App, Backbone) {
    'use strict';

    App.module('Profile', function (Profile) {
        Profile.Collection = Backbone.Collection.extend({
            model: Profile.Model,
            url: 'profiles'
        });
    });

    return App.Profile.Collection;
});
