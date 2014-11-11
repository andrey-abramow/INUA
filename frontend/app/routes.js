

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/map',{
          templateUrl:'app/templates/map.html',
          controller:'mainCtrl'
        })
        .when('/catalog/:id',{
          templateUrl:'app/templates/catalog.html',
          controller:'showFactoryCtrl'
        })



    }]);
});
