var app = angular.module('mainApp')

app.controller('profileCtrl',['$scope',profileCtrl])

function profileCtrl($scope) {
    $scope.title = 'profile from ng scope'
}