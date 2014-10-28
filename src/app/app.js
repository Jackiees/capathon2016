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
    $scope.signUp = function (size) {
        var modalInstance = $modal.open({
//            templateUrl: 'signup',
            templateUrl: 'signup/signup.tpl.html',
            controller: 'signupCtrl',
            site: size

        });
    };


});

capathon.controller("signupCtrl", function($scope, $modalInstance) {

  $scope.ok = function() {
    alert("TODO sumbit form");

  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };




});