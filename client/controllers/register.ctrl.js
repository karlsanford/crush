var app = angular.module('mainApp');

app.controller('registerCtrl', ['$scope', '$http', '$rootScope' registerCtrl]);

function registerCtrl($scope, $http, $rootScope) {
    $scope.title = 'register from ng scope';
    $scope.user = {};
    $scope.register = function (user) {
        console.log('reg called');
        if (user.name && user.email) {
            $http.post('/api/register', user)
            .then(function (obj) {
                console.log(obj);
                $rootScope.user = obj.data.token
                alert('post sucess!');
            })
            .catch(function (obj) {
                console.log(obj)
                alert(obj.data)
            });
        } else {
            alert('no user!');
        }
    };
    $scope.myAlert = function () {
        alert('working from code');
    };
}