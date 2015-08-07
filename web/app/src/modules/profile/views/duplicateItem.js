define([
    'src/app',
    'marionette'
], function (App, Marionette) {
    'use strict';

    App.module('Profile.Views', function (Views) {
        Views.DuplicateItem = Marionette.ItemView.extend({
            tagName: 'tr',

            template: JST['profile/duplicateItem'],

            events: {
                'click @ui.removeButton': 'onClickRemoveButton'
            },

            ui: {
                removeButton: '[data-button="remove"]'
            },

            onClickRemoveButton: function () {
                if (window.confirm('Are you sure you want you remove this item?')) {
                    this.view.model.destroy()
                        .fail(function() {
                            alert('Could not remove the profile. Try again later');
                        });
                }
            }
        });
    });

    return App.Profile.Views.DuplicateItem;
});
