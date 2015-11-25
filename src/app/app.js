var hackathon = angular.module("hackathon", [
    'hackathon.home',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'timer'
]);

hackathon.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});

hackathon.run(function () {});

hackathon.controller('AppController', function ($scope, $window) {

    // $scope.isAtTheTop = true;

    // var initPagePosition = function() {

    //     $scope.$apply(function () {
    //         if($(document).scrollTop() < 20) {
    //             $scope.isAtTheTop = true;
    //         }
    //         else {
    //             $scope.isAtTheTop = false;
    //         }
    //     });
    // };

    // set scroll binding
    // angular.element($window).bind("scroll", function() {
    //     initPagePosition();
    // });


  // signup
  $scope.signUp = function() {
    $window.open('http://builders.capgemini.com/event/takeevent?content_id=DA93E481-6916-0F82-6615-DB62ABC5B349');
  };

});