var app = angular.module('mainApp');

app.controller('registerCtrl', ['$scope', '$http', registerCtrl]);

function registerCtrl($scope, $http) {
    $scope.title = 'register from ng scope';
    $scope.user = {};
    $scope.register = function (user) {
        console.log('reg called');
        if (user) {
            $http.post('/api/register', user).success(function (obj) {
                console.log(obj);
            });
        } else {
            alert('no user!');
        }
    };
    $scope.myAlert = function () {
        alert('working from code');
    };
}