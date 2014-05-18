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

RRService.factory('DashboardService', ['$resource', 'Dashboard',
    function ($resource, dashboard) {
        var dashService = {
            getTotalIntakes :  function() {
                var dashData = dashboard.query();
                dashData.$promise.then(function(results) {
                    console.log(results)
                }, function() {
                    console.log('error in getting inventory data')
                });
                return dashData
            }
        }
        return dashService
    }
]);

RRService.factory('InventoryService',['$resource','Inventory',
    function ($resource,inventory) {
        var inventoryService = {
            getInventory  : function() {
                var invData = inventory.query();
                invData.$promise.then(function(results) {
                    console.log(results)
                }, function() {
                    console.log('error in getting inventory data')
                });
                return invData
            }
        }

        return inventoryService
    }
]);