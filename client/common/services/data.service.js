(function(){
    
    angular.module('mainApp').service('dataSrv',dataSrv)
    
    dataSrv.$inject = ['$http','authentication']
    
    function dataSrv($http, authentication){
        
        var getProfile = function(){
            return $http.get('api/profile',{
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            })
        }
        
        return {
            getProfile: getProfile
        }
    }
    
}())