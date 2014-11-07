define(['./module'],function (controllers){
    'use strict';
    controllers.controller('mainCtrl',['$scope','$http','mainService','$modal','$log', function ($scope,$http,mainService,$modal,$log){
        $scope.address="";
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
                window.location.href="#voronin";
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
