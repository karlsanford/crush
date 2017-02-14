(function(){
    
    angular.module('mainApp').service('authentication',authentication)
    
    authentication.$inject = ['$http','$window']
    
    function authentication($http, $window) {
        
        
        var saveToken = function(token){
            $window.localStorage['mean-token'] = token;
        }
        
        var getToken = function(){
            return $window.localStorage['mean-token'];
        }
        
        var logout = function(){
            $window.localStorage.removeItem('mean-token');
        }
        
        var isLoggedIn = function(){
            var token = getToken();
            var payload;
            
            if(token) {
                payload = token.split('.')[1];
                payload = $window.atob(payload);
                payload = JSON.parse(payload)
                
                return payload.exp > Date.now() / 1000
            } else {
                return false
            }
        }
        var currentUser = function(){
            if(isLoggedIn){
                var token = getToken()
                var payload = token.split('.')[1];
                payload = $window.atob(payload);
                payload = JSON.parse(payload)
                
                return {
                    email: payload.email,
                    name: payload.name
                }
                
            }
        }
        
        var register = function(user){
            return $http.post('api/register',user).then(function(data){
                saveToken(data.token)
            })
            .catch(function(err){
                alert(err)
            })
        }
        
        var login = function(user){
            return $http.post('api/login', user).then(function(data){
                saveToken(data.token)
            })
        }
        
        return {
            saveToken: saveToken,
            getToken: getToken,
            logout: logout,
            isLoggedIn: isLoggedIn,
            currentUser: currentUser,
            register: register,
            login: login
        }
    }
})()