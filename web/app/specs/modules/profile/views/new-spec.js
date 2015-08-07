define([
    'src/app',
    'src/modules/profile/views/new',
    'src/modules/profile/model'
], function (App, New, Model) {
    'use strict';

    describe('App.Profile.Views.New', function () {
        var xhr, requests = [], view;

        beforeEach(function () {
            xhr = sinon.useFakeXMLHttpRequest();
            xhr.onCreate = function (xhr) {
                requests.push(xhr);

                xhr.respond(200, []);
            };

            view = new New({
                model: new Model()
            });
            view.render();
            view.$el.appendTo('body');
        });

        afterEach(function () {
            xhr.restore();

            view.$el.remove();
            view = undefined;
        });

        it('should exported', function () {
            expect(New).toBeDefined();
            expect(new New({model: new Model()}) instanceof App.Profile.Views.New).toBeTruthy();
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
            expect(App.Profile.Views).toBeDefined();
            expect(App.Profile.Views.New).toBeDefined();
        });
    });
});
