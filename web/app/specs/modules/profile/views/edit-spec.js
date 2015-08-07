define([
    'src/app',
    'src/modules/profile/views/edit',
    'src/modules/profile/model'
], function (App, Edit, Model) {
    'use strict';

    describe('App.Profile.Views.Edit', function () {
        var xhr, req = [], view;

        beforeEach(function () {
            xhr = sinon.useFakeXMLHttpRequest();
            xhr.onCreate = function (xhr) {
                req.push(xhr);

                xhr.respond(200, {id: 1});
            };

            view = new Edit({model: new Model({id: 1})});
            view.render();
            view.$el.appendTo('body');
        });

        afterEach(function () {
            xhr.restore();

            view.$el.remove();
            view = undefined;
        });

        it('should exported', function () {
            expect(Edit).toBeDefined();
            expect(new Edit({model: new Model({id: 1})}) instanceof App.Profile.Views.Edit).toBeTruthy();
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
            expect(App.Profile.Views).toBeDefined();
            expect(App.Profile.Views.Edit).toBeDefined();
        });
    });
});
