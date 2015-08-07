define([
    'src/app',
    'src/modules/profile/controller',
    'src/modules/profile/router'
], function (App, Controller, Router) {
    'use strict';

    describe('App.Profile.Router', function () {
        it('should exported', function () {
            expect(Router).toBeDefined();
            expect(new Router({controller: new Controller()}) instanceof App.Profile.Router).toBeTruthy();
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
            expect(App.Profile.Router).toBeDefined();
        });
    });
});
