var capathon = angular.module("capathon", [
    'capathon.home',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'timer'
]);

capathon.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});

capathon.run(function () {});

capathon.controller('AppController', function ($scope, $window) {

    $scope.isAtTheTop = true;

    var initPagePosition = function() {

        $scope.$apply(function () {
            if($(document).scrollTop() < 20) {
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
  $scope.signUp = function() {
    $window.open('http://builders.capgemini.com/event/takeevent?content_id=0FDA6D76-FED8-3088-CEF0-D0D3ADE58A37');
  };

});