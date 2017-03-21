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
            
        });

        it('should add two destinations to destination lists', function () {
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);

            scope.newDestination = {
                city:"London",
                country:"England"
            };

            scope.addDestination();

            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");

            scope.newDestination.city = "Frankfurt";
            scope.newDestination.country = "Germany";

            scope.addDestination();

            expect(scope.destinations.length).toBe(2);
            expect(scope.destinations[1].city).toBe("Frankfurt");
            expect(scope.destinations[1].country).toBe("Germany");
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");
        });
    });
});