/*

yazguq:tormahiri
wakti:2014-11-15 16:12
*/
angular.module('website', []).
config(function ($routeProvider) {
 $routeProvider.
  when('/home',

   {templateUrl:'partials/home.html',
    controller: 'MainControler' }
  ).
  when('/object', {templateUrl:'partials/object.html',
controller:'MainControler'}).
when('/funkisya', {templateUrl:'partials/funkisya.html',
controller:'MainControler'}).
when('/array', {templateUrl:'partials/array.html'
,controller:'MainControler'}).
when('/tiplar', {templateUrl:'partials/types.html',
controller:'MainControler'}).
when('/typeof', {templateUrl:'partials/typeof.html',
controller:'MainControler'}).
  otherwise({redirectTo:'/home', templateUrl:'partials/home.html'});
});

function MainControler($scope, $location, $routeParams,$rootScope) {
	$rootScope.tormahiri="تورماھىرى js قوللانمىسى";
    $scope.setRoute = function(route) {
    $location.path(route);
  };
}

function ControllerCntl($scope, $routeParams) {
  $scope.name = "ControllerCntl";

  $scope.params = $routeParams;
  $scope.loc = document.location.href;
}
