(function () {
    var loginController = function ($scope, authService, stringsService) {
        
		authService.test(
		)
		.success(function (data) {
			console.log(data);
		})
        .error(function (data, status, headers, config) {
            console.log(status);
        });
		
        $scope.show_login = true;
        $scope.show_register = true;
        $scope.show_logout = false;
        
        $scope.display_name_t = stringsService.getString('display_name');
        $scope.username_login_t = stringsService.getString('username');
        $scope.submit_login = stringsService.getString('login');
        $scope.password_login_t = stringsService.getString('password');
        $scope.username_register_t = stringsService.getString('username');
        $scope.submit_register = stringsService.getString('register');
        $scope.password_register_t = stringsService.getString('password');
        $scope.submit_logout = stringsService.getString('logout');
        
        $scope.login = function () {
            authService.login(
                $scope.username_login,
                $scope.password_login
            )
                .success(function (data) {
                    authService.store_login_information(
                        {
                            username : data.username,
                            token : data.token
                        }
                    );
                    document.location = '#';
                })
                .error(function (data, status, headers, config) {
                    console.log(status);
                });
        };
        
        $scope.register = function () {
            authService.register(
                $scope.username_register,
                $scope.password_register,
                $scope.display_name
            )
                .success(function (data) {
                })
                .error(function (data, status, headers, config) {
                    console.log(status);
                });
        };
    };
    angular.module("PLConnect").controller("loginController", loginController);
}());