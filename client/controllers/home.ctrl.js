var app = angular.module('mainApp')

app.controller('homeCtrl',['$scope',homeCtrl])

function homeCtrl($scope) {
    vm = this;
    
    vm.title = 'home from ng scope';
    
}