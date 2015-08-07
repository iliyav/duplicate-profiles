define([
    'src/app',
    'src/modules/profile/views/empty'
], function (App, Empty) {
    'use strict';

    describe('App.Profile.Views.Empty', function () {
        it('should exported', function () {
            expect(Empty).toBeDefined();
            expect(new Empty() instanceof App.Profile.Views.Empty).toBeTruthy();
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
            expect(App.Profile.Views).toBeDefined();
            expect(App.Profile.Views.Empty).toBeDefined();
        });
    });
});
