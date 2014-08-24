(function () {
    var stringsService = function () {
        var self = this;
        self.getString = function (s) {
            return {
                display_name : "نام",
                login : "ورود",
                username : "نام کاربری",
                password : "رمز عبور",
                register : "ثبت نام",
                logout : "خروج"
            }[s];
        };
    };
    angular.module('PLConnect').service('stringsService', stringsService);
}());