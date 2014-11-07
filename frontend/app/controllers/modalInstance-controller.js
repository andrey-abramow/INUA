define(['./module'],function (controllers){
    'use strict';
    controllers.controller('modalInstanceCtrl', function ($scope, $modalInstance, items){

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    });
});
