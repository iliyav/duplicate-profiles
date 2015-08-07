define([
    'src/app',
    'backbone',
    'marionette'
], function (App, Backbone, Marionette) {
    'use strict';

    App.module('Views', function (Views) {
        Views.Layout = Marionette.LayoutView.extend({
            template: JST['layout'],

            regions: {
                body:   '[data-region="body"]'
            }
        });
    });

    return App.Views.Layout;
});
