define([
    'src/app',
    'src/modules/profile/collection',
    'src/modules/profile/model'
], function (App, Collection, Model) {
    'use strict';

    describe('App.Profile.Collection', function () {
        var collection;

        beforeEach(function () {
            collection = new Collection();
        });

        afterEach(function () {
            collection = undefined;
        });

        it('should exported', function () {
            expect(Collection).toBeDefined();
            expect(new Collection() instanceof App.Profile.Collection).toBeTruthy();
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
            expect(App.Profile.Collection).toBeDefined();
        });

        it('should have model defined', function () {
            expect(collection.model).toEqual(Model);
        });

        it('should have url defined', function () {
            expect(collection.url).toBe('profiles');
        });
    });
});
