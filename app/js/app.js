/**
 * Created by praneethkumar on 19/03/17.
 */
var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function ($rootScope, $scope) {
    $scope.title = "Testing Angular js Applications";
    $scope.destinations = [];

    //We need objects to store new destinations.
    // Each destination should have atleast a city and country
    $scope.newDestination = {
        city: undefined,
        country: undefined
    };

    //function to add a new destination to the
    // list of destinations.
    $scope.addDestination = function () {
      $scope.destinations.push({
          city: $scope.newDestination.city,
          country: $scope.newDestination.country
      });
    };
});