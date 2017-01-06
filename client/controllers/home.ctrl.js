var app = angular.module('mainApp')

app.controller('homeCtrl',['$scope',homeCtrl])

function homeCtrl($scope) {
    $scope.title = 'home from ng scope'
}