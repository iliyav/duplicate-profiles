define([
    'src/app',
    'marionette',
    'backbone.stickit',
    'src/extensions/backbone.validation.callbacks'
], function (App, Marionette) {
    'use strict';

    App.module('Profile.Views', function (Views) {
        Views.Form = Marionette.LayoutView.extend({
            template: JST['profile/form'],

            bindings: {
                '[name="email"]':            {
                    observe: 'email'
                },
                '[name="first-name"]': {
                    observe: 'firstName'
                },
                '[name="last-name"]':  {
                    observe: 'lastName'
                },
                '[name="phone"]': {
                    observe: 'phone'
                }
            },

            onRender: function () {
                this.stickit();
                Backbone.Validation.bind(this);
            },

            onDestroy: function () {
                this.unstickit();
                Backbone.Validation.unbind(this);
            },

            validate: function () {
                return this.model.validate();
            }
        });
    });

    return App.Profile.Views.Form;
});
