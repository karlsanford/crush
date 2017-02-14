var app = angular.module('mainApp',['ui.router'])

app.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    
    $stateProvider.state({
        name: 'home',
        url: '/home',
        templateUrl: 'views/partials/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
    }).state({
        name: 'register',
        url: '/register',
        templateUrl: 'views/partials/register.html',
        controller: 'registerCtrl',
        controllerAs: 'vm'
    }).state({
        name: 'login',
        url: '/login',
        templateUrl: 'views/partials/login.html'
    }).state({
        name: 'profile',
        url: '/profile',
        templateUrl: 'views/partials/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
    })
})

