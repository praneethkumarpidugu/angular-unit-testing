/**
 * Created by praneethkumar on 19/03/17.
 */
var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function ($rootScope, $scope, $http, $timeout) {
    $scope.title = "Testing Angular js Applications";
    $scope.apiKey = "3b0dbf4c43f33c1599e758e6cb24c63e";
    $scope.destinations = [];



    //We need objects to store new destinations.
    // Each destination should have atleast a city and country
    $scope.newDestination = {
        city: undefined,
        country: undefined
    };
    console.log($scope);

    //function to add a new destination to the
    // list of destinations.
    $scope.addDestination = function () {
      $scope.destinations.push({
          city: $scope.newDestination.city,
          country: $scope.newDestination.country
      });
    };

    //remove destination
    $scope.removeDestination = function (index) {
        $scope.destinations.splice(index, 1);
    };

    $scope.getWeather = function (destination) {
        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+ destination.city + "&appid="+ $scope.apiKey).then(function successCallback(response) {
            if (response.data.weather) {
                destination.weather = {};
                destination.weather.main = response.data.weather[0].main;
                destination.weather.temp = $scope.convertKelvinToCelsius(response.data.main.temp);
            } else {
                $scope.message = "city not found";
            }
        }, function errorCallback(error) {
            $scope.message = "Server Error";
        }
        );
    };
    
    $scope.convertKelvinToCelsius = function (temp) {
        return Math.round(temp - 273);
    };

    $scope.messageWatcher = $scope.$watch('message', function () {
        if ($scope.message){
            $timeout(function () {
                $scope.message = null;
            }, 3000);
        }
    });
});