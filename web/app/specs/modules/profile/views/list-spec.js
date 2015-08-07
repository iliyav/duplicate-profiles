define([
    'src/app',
    'src/modules/profile/views/list',
    'src/modules/profile/collection',
], function (App, List, Collection) {
    'use strict';

    describe('App.Profile.Views.List', function () {
        var xhr, req = [], view;

        beforeEach(function () {
            xhr = sinon.useFakeXMLHttpRequest();
            xhr.onCreate = function (xhr) {
                req.push(xhr);

                xhr.respond(200, []);
            };

            view = new List({collection: new Collection()});
            view.render();
            view.$el.appendTo('body');
        });

        afterEach(function () {
            xhr.restore();

            view.$el.remove();
            view = undefined;
        });

        it('should exported', function () {
            expect(List).toBeDefined();
            expect(new List({collection: new Collection()}) instanceof App.Profile.Views.List).toBeTruthy();
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
            expect(App.Profile.Views).toBeDefined();
            expect(App.Profile.Views.List).toBeDefined();
        });
    });
});
