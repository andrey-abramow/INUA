define(['./module'],function(services){
    'use strict';
    services.factory('mainService',function($http){
        return{

            doGet:function(address){
              return  $http.get(address);

            },
            doHead:function(address){
                return  $http.head(address);

            },
            fillTreeCatalog:function(catalog){
               var factoryTypes = [];
              $http.get("/api/factoryTypes")
                .success(function (data, status, headers, config){
                   for(var i =0;i<data.FactoryTypes.length;i++){
                    catalog.push({
                      label:data.FactoryTypes[i].Name,
                      noLeaf:true,
                      children:[],
                      idFactoryTypes:data.FactoryTypes[i].idFactoryTypes,
                      onSelect: function(branch){window.location.href = "#/factoryTypes/"+branch.idFactoryTypes}
                    });
                  }
                 });
              $http.get("/api/factory")
              .success(function (data, status, headers, config){
               console.log(catalog);
                for(var i =0;i<data.Factories.length;i++){
                  console.log(data.Factories);
                  catalog[data.Factories[i].idFactoryTypes-1].children.push({
                    label:data.Factories[i].Name,
                    noLeaf:false,
                    idFactory:data.Factories[i].idFactories,
                    onSelect: function(branch){window.location.href="#/factory/"+branch.idFactory}});
                }
              });
            }


        }


    });
});
