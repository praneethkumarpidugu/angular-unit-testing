/**
 * Created by praneethkumar on 19/03/17.
 */
// describe use to declare test suite in jasmine.

describe('Testing Angular JS Test Suite', function () {
    //Include angular app into our tests.
    beforeEach(module('testingAngularApp'));
    describe('Testing AngularJS Controller', function () {
        var scope, ctrl, httpBackend, timeout;
        beforeEach(inject(function ($controller, $rootScope, $httpBackend, $timeout) {
            scope = $rootScope.$new();
            //We will controller variable ctrl to our angular controller
            ctrl = $controller('testingAngularCtrl', {$scope: scope});
            httpBackend = $httpBackend;
            timeout = $timeout;
        }));

        afterEach(function () {
           //cleanup code.
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
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

        it('should remove one destination', function () {
           scope.destinations = [
               {
                   city: "paris",
                   country: "London"
               },
               {
                   city: 'hyderabad',
                   country: 'India'
               }
           ];

           expect(scope.destinations.length).toBe(2);

           scope.removeDestination(0);

            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("hyderabad");
            expect(scope.destinations[0].country).toBe("India");
        });

        it('should update weather for a specific destination', function () {
            scope.destination = {
                city: 'Melbourne',
                country: 'Australia'
            };
            httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?q='+
                scope.destination.city + "&appid="+ scope.apiKey).respond({
                    weather : [{ main: 'Rain', detail: 'Light Rain'}],
                    main: {temp: 288}
            });
            scope.getWeather(scope.destination);
            httpBackend.flush();
            expect(scope.destination.weather.main).toBe('Rain');
            expect(scope.destination.weather.temp).toBe(15);
        });
        
        it('should remove error message after a fixed period of time', function () {
            scope.message = "error";
            expect(scope.message).toBe('error');

            //check for any messages and digest
            scope.$apply();
            timeout.flush();

            expect(scope.message).toBeNull();
        });
    });
});