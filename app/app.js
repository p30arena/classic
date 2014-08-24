(function() {
    var app = angular.module('PLConnect', ['ngRoute', 'ngTouch']);
    app.config(function($routeProvider){
        $routeProvider
            .when('/',
                  {
                      controller: 'mainViewController',
                      templateUrl: 'app/views/main.html'
                  })
            .when('/order/:id',
                  {
                      controller: 'orderController',
                      templateUrl: 'app/views/order.html'
                  })
            .when('/login',
                  {
                      controller: 'loginController',
                      templateUrl: 'app/views/login.html'
                  })
            .otherwise({ redirectTo: '/' });
    });
}());