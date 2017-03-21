/**
 * Created by praneethkumar on 19/03/17.
 */
// describe use to declare test suite in jasmine.

describe('Testing Angular JS Test Suite', function () {
    //Include angular app into our tests.
    beforeEach(module('testingAngularApp'));
    describe('Testing AngularJS Controller', function () {
        var scope, ctrl;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            //We will controller variable ctrl to our angular controller
            ctrl = $controller('testingAngularCtrl', {$scope: scope});
        }));

        afterEach(function () {
           //cleanup code.
        });
        //it block is used to describe single unit test
        it('should initialize title in scope', function () {


            //Lets initialize a empty scope object.


            // We will check if the title is defined our not
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing Angular js Applications");
            
        })
    });
});