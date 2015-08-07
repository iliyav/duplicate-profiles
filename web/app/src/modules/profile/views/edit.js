define([
    'src/app',
    'marionette',
    './form'
], function (App, Marionette) {
    'use strict';

    App.module('Profile.Views', function (Views) {
        Views.Edit = Marionette.LayoutView.extend({
            template: JST['profile/edit'],

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
                        .done(function() {
                            App.navigate('profiles', {trigger: true});
                        });
                }
            },

            onClickCancel: function () {
                App.navigate('profiles', {trigger: true});
            },

            onRender: function () {
                this.model.fetch()
                    .done(_.bind(function () {
                        this.form.show(new Views.Form({model: this.model}));
                    }, this));
            }
        });
    });

    return App.Profile.Views.Edit;
});
