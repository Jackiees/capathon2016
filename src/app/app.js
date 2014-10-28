var capathon = angular.module("capathon", [
    'capathon.home',
    'capathon.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'ui.bootstrap'
]);

capathon.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});

capathon.run(function () {});

capathon.controller('AppController', function ($scope, $window, $modal) {

    $scope.isAtTheTop = true;

    var initPagePosition = function() {
        $scope.$apply(function () {
            if(document.body.scrollTop < 20) {
                $scope.isAtTheTop = true;
            }
            else {
                $scope.isAtTheTop = false;
            }
        });
    };

    // set scroll binding
    angular.element($window).bind("scroll", function() {
        initPagePosition();
    });


    // signup
    $scope.signUp = function () {
        var modalInstance = $modal.open({
            templateUrl: 'signup',
            controller: 'signupCtrl'
        });
    };


});

capathon.controller("signupCtrl", function($scope) {

});