var app = angular.module('mainApp')

app.controller('loginCtrl',['$scope',loginCtrl])

function loginCtrl($scope) {
    $scope.title = 'login from ng scope'
}