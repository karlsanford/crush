var app = angular.module('mainApp');

app.controller('profileCtrl', ['$rootScope', '$scope', 'dataSrv', profileCtrl]);

function profileCtrl($rootScope, $scope, dataSrv) {
    var vm = this;
    
    vm.user = dataSrv.getProfile();
    console.log(vm.user);
    vm.title = 'profile from ng scope';
    
}