var RRService = angular.module('RR.services', ['ngResource', 'RR.models']);

RRService.factory('UserService', ['$resource', 'User', '$rootScope',
    function($resource, user,  $rootScope) {

        var userService = {
            validate: function(formUser,cb) {
                var userInfo = user.authenticate(formUser);
                userInfo.$promise.then(function(results) {
                    cb(results)
                }, function() {
                    $rootScope.$emit('validateUser', 'error')
                });
            }
        }
        return userService;
    }
]);

RRService.factory('DashboardService', ['$resource', '$rootScope',
    function ($resource, $rootScope) {

    }
]);