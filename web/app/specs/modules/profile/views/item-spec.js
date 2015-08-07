define([
    'src/app',
    'src/modules/profile/views/item',
    'src/modules/profile/model'
], function (App, Item, Model) {
    'use strict';

    describe('App.Profile.Views.Item', function () {
        var view;

        beforeEach(function () {
            view = new Item({model: new Model({id: 1})});
            view.render();
            view.$el.appendTo('body');
        });

        afterEach(function () {
            view.$el.remove();
            view = undefined;
        });

        it('should exported', function () {
            expect(Item).toBeDefined();
            expect(new Item({model: new Model()}) instanceof App.Profile.Views.Item).toBeTruthy();
        });

        it('should exist', function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
            expect(App.Profile.Views).toBeDefined();
            expect(App.Profile.Views.Item).toBeDefined();
        });
    });
});
