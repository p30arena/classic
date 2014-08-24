(function () {
    var authService = function ($http) {
        
        var self = this;
        var login_information = null;
        var iHaveToken = false;
        
        self.haveToken = function () {
            return iHaveToken;
        }
        
        self.get_login_information = function () {
            if (!iHaveToken && typeof Android !== 'undefined') {
                login_information = JSON.parse(Android.get_login_information());
            }
            return login_information;
        };
        
        self.store_login_information = function (doc) {
            login_information = doc;
            iHaveToken = true;
        };
        
        self.login = function (u, p) {
            return $http.post(
                '/api/login',
                {
                    username : u,
                    password : p
                }
            );
        };
		
		self.test = function() {
		    return $http.post(
                '/api/auth',
                {
					username : 'ep',
					token : '123'
                }
            );
		};
        
        self.register = function (u, p, d) {
            return $http.post(
                '/api/register',
                {
                    username : u,
                    password : p,
                    display_name : d
                }
            );
        };
        
        self.get_friends = function (u, t) {
            return $http.post(
                '/api/getfriends',
                {
                    username : u,
                    token : t
                }
            );
        };
    };
    angular.module('PLConnect').service('authService', authService);
}());