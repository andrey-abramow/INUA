define(['./module'],function(services){
    'use strict';
    services.factory('mainService',function($http){
        return{

            doGet:function(address){
              return  $http.get(address);

            },
            doHead:function(address){
                return  $http.head(address);

            }


        }


    });
});