define([
    'backbone-validation'
], function (Validation) {
    'use strict';

    Validation.callbacks.invalid = function (view, attr) {
        alert(attr + ' can not be blank');
    };
});
