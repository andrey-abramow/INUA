define(['./module'],function (controllers){
    'use strict';
    controllers.controller('mainCtrl',['$scope','$http','mainService','$modal','$log', function ($scope,$http,mainService,$modal,$log){
        $scope.address="";

        $scope.icon=['icons/map5.png'];
        navigator.geolocation.getCurrentPosition(function(pos) {
        console.log('Position=')
        console.log(pos);
          $scope.map = {
          center: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          },
          zoom: 8
        };
          //add marker
          $scope.marker = {
            id: 0,
            coords: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            },
            options: { draggable: true },
            events: {
              dragend: function (marker, eventName, args) {
                $log.log('marker dragend');
                var lat = marker.getPosition().lat();
                var lon = marker.getPosition().lng();
                $log.log(lat);
                $log.log(lon);

                $scope.marker.options = {
                  draggable: true,
                  labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                  labelAnchor: "100 0",
                  labelClass: "marker-labels"
                };
              }
            }
          };


        }, function(error) {
          $scope.map = {
            center: {
              latitude: 45,
              longitude: -73
            },
            zoom: 8
          };
        q.reject('Failed to Get Lat Long')

      });

      $scope.options = {scrollwheel: false};
        $scope.click = function()
        {
             mainService.doHead($scope.address)
                .success(function (data, status, headers, config) {

                    console.log(config);
                })
        }
        $scope.items = ['Delete problem?', 'item2', 'item3'];

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'app/templates/modal.html',
                controller: 'modalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
      $scope.my_data = [{
        label: 'CATALOG',
        children: [
          {
          label: 'Clothers',
          noLeaf: true,
            children:['firm 1','firm 2','firm 3']
          },
          {
            label: 'BOOTS',
            noLeaf: true,
            children:[{
              label: 'Voronin',
              onSelect: function(branch){
                window.location.href="#catalog/12";
              }

            },'firm 2','firm 3']

          },
          {
            label: 'TECHNICS',
            noLeaf: true,
            children:['firm 1','firm 2',{
              label: 'notebooks',
              noLeaf: true,
              children:['firm 1','firm 2',{
                label: 'notebooks',
                noLeaf: true,
                children:['firm 1','firm 2',{
                  label: 'notebooks',
                  noLeaf: true
                }]
              }]

            }]

          }
          ]


      }];


// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

}]);
});
