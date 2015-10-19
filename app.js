var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider){
    //route code here
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/main.html',
            controller: 'mainCtrl as ctrl'
        })  
    //Add pages here
        .when('/users/:userId', {
            templateUrl: 'templates/user.html',
            controller: 'UserDetailsCtrl as ctrl'
        })
    //default action
        .otherwise({
            redirectTo: '/home'
    });
});

// Change URL location notification:
app.run(function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function () {
        console.log('$locationChangeSuccess changed!');
    });
});