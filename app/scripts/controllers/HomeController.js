angular.module('AngularScaffold.Controllers')
.controller('HomeController', ['HomeService', '$state','$scope', '$rootScope', '$sessionStorage',  function (HomeService,$state, $scope, $rootScope, $sessionStorage) {
  $scope.user = {};
  $scope.$sessionStorage = $sessionStorage;

  $scope.login = function(user){
    HomeService.Login(user).then(function(response){
      $sessionStorage.currentUser = response.data;
      $scope.user = {};
      if ($sessionStorage.currentUser) {
        $state.go('admin')
      };
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    });
  }

}]);