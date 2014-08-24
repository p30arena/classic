(function() {
    var orderController = function($scope, $routeParams) {
        $scope.id = $routeParams.id;
        var ar = [];
        for(var i = 0; i < $scope.id; i++) {
            ar[i] = i;
        }
        $scope.list = ar;
    }
    angular.module("PLConnect").controller("orderController", orderController);
}());