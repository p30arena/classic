(function () {
    var pingService = function ($http) {
        
        var self = this;
        
        self.ping = function (u, t, f) {
            return $http.post(
                '/api/ping',
                {
                    username : u,
                    token : t,
                    friend : f
                }
            );
        };
        self.get_pings = function (u, t) {
            return $http.post(
                '/api/getpings',
                {
                    username : u,
                    token : t
                }
            );
        };
    };
    angular.module('PLConnect').service('pingService', pingService);
}());