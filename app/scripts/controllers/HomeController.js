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

  $scope.register = function(){
    var user = {username: $scope.user.username, password:  $scope.user.password};
    HomeService.Register(user).then(function(response){
      alert('Registered in correctly!');
      $scope.login({username: user.username, password: user.password});
    }).catch(function(err){
      console.log(err);
      alert(err.data.error + " " + err.data.message);
    })
  }

}]);