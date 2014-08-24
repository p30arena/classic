(function() {
    var testController = function($scope) {
        $scope.test = [1,2,3];
    }
    angular.module("PLConnect").controller("testController", testController);
}());