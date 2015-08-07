define([
    'src/app',
    'marionette',
    './views/list',
    './views/new',
    './views/edit',
    './views/duplicateList',
    './collection',
    './model'
], function (App, Marionette) {
    'use strict';

    App.module('Profile', function (Profile) {
        Profile.Controller = Marionette.Controller.extend({
            list: function () {
                App.showBody(new Profile.Views.List({collection: new Profile.Collection()}));
            },

            new: function () {
                App.showBody(new Profile.Views.New({model: new Profile.Model()}));
            },

            edit: function (id) {
                App.showBody(new Profile.Views.Edit({model: new Profile.Model({id: id})}));
            },

            duplicates: function (id) {
                var profileModel = new Profile.Model({id: id});
                var duplicatesCollection = new Profile.Collection();
                duplicatesCollection.url += '/' + profileModel.get('id') + '/duplicates';

                profileModel.fetch().done(function() {
                    App.showBody(new Profile.Views.DuplicateList({
                        collection: duplicatesCollection,
                        model: profileModel
                    }));
                });
            },
        });
    });

    return App.Profile.Controller;
});
