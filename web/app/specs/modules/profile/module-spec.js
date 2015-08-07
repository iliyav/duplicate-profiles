define([
    'src/app',
    'src/modules/profile/module'
], function (App, Profile) {
    'use strict';

    describe('App.Profile', function () {
        it('should exported', function () {
            expect(Profile).toBeDefined();
            expect(typeof Profile === 'object').toBeTruthy();
            expect(Profile.moduleName).toBeDefined();
            expect(Profile.moduleName).toBe('Profile');
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
        });
    });
});
