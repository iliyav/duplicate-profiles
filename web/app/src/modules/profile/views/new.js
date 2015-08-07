define([
    'src/app',
    'marionette',
    './form'
], function (App, Marionette) {
    'use strict';

    App.module('Profile.Views', function (Views) {
        Views.New = Marionette.LayoutView.extend({
            template: JST['profile/new'],

            events: {
                'click [data-action="submit"]': 'onClickSubmit',
                'click [data-action="cancel"]': 'onClickCancel'
            },

            regions: {
                form: '[data-region="form"]'
            },

            onClickSubmit: function () {
                if (this.form.currentView.validate() === undefined) {
                    this.model.save({}, {validate: false})
                        .fail(function() {
                            alert('Could not save the profile. Try again later');
                        })
                        .done(_.bind(function () {
                            App.navigate('profiles', {trigger: true});
                        }, this));
                }
            },

            onClickCancel: function () {
                App.navigate('profiles', {trigger: true});
            },

            onRender: function () {
                this.form.show(new Views.Form({model: this.model}));
            }
        });
    });

    return App.Profile.Views.New;
});
