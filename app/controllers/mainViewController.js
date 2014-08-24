(function () {
    var mainViewController = function ($scope, authService, pingService) {
        var login_information = authService.get_login_information();
        if (!authService.haveToken()) {
            document.location = '#/login';
            return null;
        }
        authService.get_friends(login_information.username, login_information.token)
            .success(function (data) {
                var i;
                var list = [];
                for (i in data) {
                    //list[data[i].friend] = {friend : data[i].friend, count : 0};
                    data[i].count = 0;
                    list[data[i].friend] = i;
                }
                $scope.data = data;
                $scope.list = list;
                $scope.get_pings();
            })
            .error(function (data, status, headers, config) {
                console.log(status);
            });
        $scope.ping = function(friend) {
            pingService.ping(login_information.username, login_information.token, friend)
                .success(function (data) {
                })
                .error(function (data, status, headers, config) {
                    console.log(status);
            });
        }
        $scope.get_pings = function() {
            pingService.get_pings(login_information.username, login_information.token)
                .success(function (data) {
                    var i;
                    for (i in data) {
                        //$scope.data[data[i].from_username].count = data[i].count;
                        $scope.data[$scope.list[data[i].username]].count = data[i].count;
                    }
                })
                .error(function (data, status, headers, config) {
                    console.log(status);
            });
        }
    };
    angular.module("PLConnect").controller("mainViewController", mainViewController);
}());