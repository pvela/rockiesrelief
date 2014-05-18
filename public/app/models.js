var modelModule = angular.module('RR.models', ['ngResource']);

modelModule.factory('User', function($resource) {
    return $resource('/user/:id', {
        id: '@id'
    }, {
        authenticate: {
            method: 'GET',
            isArray: false
        },
        save: {
            method: 'PUT'
        }
    })
});

modelModule.factory('Inventory', function($resource) {
    return $resource('/rest/inventory', {
    }, {
        query: {
            method: 'GET',
            isArray: true
        },
        save: {
            method: 'PUT'
        }
    })
});

modelModule.factory('Dashboard', function($resource) {
    return $resource('/rest/totalIntakes', {
    }, {
        query: {
            method: 'GET',
            isArray: true
        },
        save: {
            method: 'PUT'
        }
    })
});