define([
    'src/app',
    'backbone-validation',
    'src/modules/profile/model'
], function (App, Validation, Model) {
    'use strict';

    describe("App.Profile.Model", function () {
        var model;

        beforeEach(function () {
            model = new Model({});

            _.extend(model, Validation.mixin);
        });

        afterEach(function () {
            model = undefined;
        });

        it('should exported', function () {
            expect(Model).toBeDefined();
            expect(new Model() instanceof App.Profile.Model).toBeTruthy();
        });

        it("should exist", function () {
            expect(App).toBeDefined();
            expect(App.Profile).toBeDefined();
            expect(App.Profile.Model).toBeDefined();
        });

        it("should have urlRoot defined", function () {
            expect(model.urlRoot).toBe('profiles');
        });

        describe('when validated', function () {
            describe('the `email` attribute', function () {
                it('should be mandatory', function () {
                    model.set({email: ''}, {validate: true});

                    expect(model.isValid('email')).toBeFalsy();
                });
            });

            describe('the `firstName` attribute', function () {
                it('should be mandatory', function () {
                    model.set({firstName: ''}, {validate: true});

                    expect(model.isValid('firstName')).toBeFalsy();
                });
            });

            describe('the `lastName` attribute', function () {
                it('should be mandatory', function () {
                    model.set({lastName: ''}, {validate: true});

                    expect(model.isValid('lastName')).toBeFalsy();
                });
            });

            describe('the `phone` attribute', function () {
                it('should be mandatory', function () {
                    model.set({phone: ''}, {validate: true});

                    expect(model.isValid('phone')).toBeFalsy();
                });
            });
        });
    });
});
