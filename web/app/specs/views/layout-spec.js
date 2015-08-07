define([
    'src/app',
    'src/views/layout'
], function (App, Layout) {
    'use strict';

    describe('App.Views.Layout', function () {
        var layout;

        beforeEach(function () {
            layout = new Layout();
            layout.$el.appendTo('body');
        });

        afterEach(function () {
            layout = undefined;
        });

        it('should exported', function () {
            expect(Layout).toBeDefined();
            expect(new Layout() instanceof App.Views.Layout).toBeTruthy();
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Views).toBeDefined();
            expect(App.Views.Layout).toBeDefined();
        });

        it('the `body` region should be defined', function () {
            expect(layout.body).toBeDefined();
        });
    });
});
