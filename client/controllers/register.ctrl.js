var app = angular.module('mainApp');

app.controller('registerCtrl', ['$scope', '$http', '$rootScope', 'authentication', '$location', registerCtrl]);

function registerCtrl($scope, $http, $rootScope, authentication, $location) {
    vm = this;
    
    vm.credentials = {
        name: '',
        email: '',
        password: '',
        password2: ''
    }
    
    vm.onSubmit = function(){
        console.log('onSubmit')
        console.log(authentication)
        authentication.register(vm.credentials)
            .then(function(){
                $location.path('profile')
            })
            .catch(function(err){
                alert(err);
            })
    }
    
    vm.title = 'register from ng scope';
    vm.user = {};
    vm.register = function (user) {
        console.log('reg called');
        if (user.name && user.email) {
            $http.post('/api/register', user)
            .then(function (obj) {
                console.log(obj);
                $rootScope.user = obj.data.token
                alert('post sucess!' + $rootScope.user);
            })
            .catch(function (obj) {
                console.log(obj)
                alert(obj.data)
            });
        } else {
            alert('no user!');
        }
    };
    vm.myAlert = function () {
        alert('working from code');
    };
}