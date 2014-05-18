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