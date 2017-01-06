var app = angular.module('mainApp')

app.controller('mainCtrl',['$scope',mainCtrl])

function mainCtrl ($scope){
    $scope.title = 'ng title'
    
}