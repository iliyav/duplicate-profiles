define([
    'src/app',
    'marionette',
    './empty',
    './item'
], function (App, Marionette) {
    'use strict';

    App.module('Profile.Views', function (Views) {
        Views.List = Marionette.CompositeView.extend({
            template: JST['profile/list'],

            emptyView: Views.Empty,

            childView: Views.Item,

            childViewContainer: 'tbody',

            initialize: function () {
                this.collection.fetch();
            }
        });
    });

    return App.Profile.Views.List;
});
