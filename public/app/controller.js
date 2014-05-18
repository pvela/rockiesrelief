'use strict';

/* Controllers */
console.info('Initializing Controllers')

// Controller for all the pages are defined here
function loginViewController($scope, $window,UserService) {


    // initialize scope variables
    $scope.master = {};

    // function to update the
    $scope.login = function(user) {
        var loginForm = $scope.loginForm;
        // validate name
        if (loginForm.email.$dirty && loginForm.email.$invalid) {
            $scope.errorMessage = "Please enter a valid email address";
        } else if (loginForm.password.$invalid) {
            $scope.errorMessage = "Please enter your password";
        } else {
            $scope.master = angular.copy(user);
            UserService.validate($scope.master,function(returnedUser){
                if (returnedUser.authentication == 'failed') {
                    user.email = ''
                    user.password = ''
                    $scope.errorMessage = 'Your email and/or password is not valid. Please try again'
                } else {
                    // all good redirect to the app default path
                    $window.location = '/#dashboard';
                }
            });
        }
    };

    $scope.isUnchanged = function(user) {
        return angular.equals(user, $scope.master);
    };
}
loginViewController.$inject = ['$scope', '$window','UserService'];

function dashboardViewController($scope, $window,DashboardService) {

}

dashboardViewController.$inject = ['$scope', '$window','DashboardService'];

function inventoryViewController($scope, $window) {

}

inventoryViewController.$inject = ['$scope', '$window'];
