define([
    'src/app',
    'marionette',
    './empty',
    './duplicateItem'
], function (App, Marionette) {
    'use strict';

    App.module('Profile.Views', function (Views) {
        Views.DuplicateList = Marionette.CompositeView.extend({
            template: JST['profile/duplicateList'],

            emptyView: Views.Empty,

            childView: Views.DuplicateItem,

            childViewContainer: 'tbody',

            initialize: function () {
                this.collection.fetch();
            },

            serializeData: function() {
                return this.model.toJSON();
            }
        });
    });

    return App.Profile.Views.DuplicateList;
});
