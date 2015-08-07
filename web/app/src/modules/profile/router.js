define([
    'src/app',
    'marionette'
], function (App, Marionette) {
    'use strict';

    App.module('Profile', function (Profile) {
        Profile.Router = Marionette.AppRouter.extend({
            appRoutes: {
                'profiles':                'list',
                'profiles/new':            'new',
                'profiles/:id/edit':       'edit',
                'profiles/:id/duplicates': 'duplicates'
            }
        });
    });

    return App.Profile.Router;
});
