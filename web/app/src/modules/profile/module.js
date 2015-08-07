define([
    'src/app',
    './controller',
    './router'
], function (App) {
    'use strict';

    App.module('Profile', function (Profile) {
        App.addInitializer(function () {
            Profile.router = new Profile.Router({
                controller: new Profile.Controller()
            });
        });
    });

    return App.Profile;
});
