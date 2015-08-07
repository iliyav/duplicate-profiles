define([
    'src/app',
    'backbone',
], function (App, Backbone) {
    'use strict';

    App.module('Profile', function (Profile) {
        Profile.Model = Backbone.Model.extend({
            urlRoot: 'profiles',

            defaults: function () {
                return {
                    email:     '',
                    firstName: '',
                    lastName:  '',
                    phone:     ''
                };
            },

            validation: {
                email:     {
                    required: true
                },
                firstName: {
                    required: true
                },
                lastName:  {
                    required: true
                },
                phone:  {
                    required: true
                }
            }
        });
    });

    return App.Profile.Model;
});

