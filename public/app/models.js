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
    return $resource('/api/CenterMaterials', {
    }, {
        query: {
            method: 'GET',
            isArray: false
        },
        save: {
            method: 'PUT'
        }
    })
});