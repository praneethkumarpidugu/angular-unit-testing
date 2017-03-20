/**
 * Created by praneethkumar on 19/03/17.
 */
// describe use to declare test suite in jasmine.

describe('Testing Angular JS Test Suite', function () {
    describe('Testing AngularJS Controller', function () {

        //it block is used to describe single unit test
        it('should initialize title in scope', function () {
            //Include angular app into our tests.
            module('testingAngularApp');

            //Lets initialize a empty scope object.
            var scope = {};

            // controller variable;
            var ctrl;

            // Now we will inject angular components into our tests.
            // In this case we need our controller.
            // we will $controller service.
            inject(function ($controller) {
                //We will controller variable ctrl to our angular controller
                ctrl = $controller('testingAngularCtrl', {$scope: scope});
            });

            // We will check if the title is defined our not
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing Angular js Applications");
            
        })
    });
});