var app = angular.module('mainApp')

app.controller('registerCtrl',['$scope',registerCtrl])

function registerCtrl($scope) {
    $scope.title = 'register from ng scope'
}