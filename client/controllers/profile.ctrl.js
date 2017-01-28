var app = angular.module('mainApp')

app.controller('profileCtrl',['$rootScope','$scope',profileCtrl])

function profileCtrl($rootScope, $scope) {
    $scope.title = 'profile from ng scope'
    $scope.user = $rootScope.user;
}