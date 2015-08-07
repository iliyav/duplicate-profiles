define([
    'backbone'
], function (Backbone) {
    'use strict';

    var BackboneSync = Backbone.sync;

    Backbone.sync = function (method, model, options) {
        options = options || {};

        if (!options.url) {
            var urlError = function () {
                throw new Error('A "url" property or function must be specified');
            };

            options.url = _.result(model, 'url') || urlError();
        }

        options.url = '/api/' + options.url;

        return BackboneSync.call(this, method, model, options);
    };
});
