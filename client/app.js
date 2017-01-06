var app = angular.module('mainApp',['ui.router'])

app.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    
    $stateProvider.state({
        name: 'home',
        url: '/home',
        templateUrl: 'views/partials/home.html'
    }).state({
        name: 'register',
        url: '/register',
        templateUrl: 'views/partials/register.html'
    }).state({
        name: 'login',
        url: '/login',
        templateUrl: 'views/partials/login.html'
    }).state({
        name: 'profile',
        url: '/profile',
        templateUrl: 'views/partials/profile.html'
    })
})

