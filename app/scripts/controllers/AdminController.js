angular.module('AngularScaffold.Controllers')
.controller('AdminController', ['$scope', 'UserService', '$sessionStorage', function ($scope, UserService, $sessionStorage) {
  $scope.title = "Navidad"
  $scope.template = '';
  $scope.regalo='';
  
  $scope.getRegalos = function(){
    UserService.GetRegalos().then(function(response){
      $scope.regalo = response.data;
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message)
    });
  }

  $scope.getRegalos();
  $scope.postRegalos = function(){
    UserService.PostRegalos($scope.regalo).then(function(response){
      $scope.getRegalos();
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    });
  }
/*
  $scope.register = function(){
    var user = {username: $scope.user.username, password:  $scope.user.password};
    authService.Register(user).then(function(response){
      alert('Registered in correctly!');
      $scope.login({username: user.username, password: user.password});
    }).catch(function(err){
      console.log(err);
      alert(err.data.error + " " + err.data.message);
    })
  }*/

  $scope.register = function(){
    var user = {username: $scope.user.username, password:  $scope.user.password};
    UserService.Register(user).then(function(response){
      alert('Registered in correctly!');
      $scope.login({username: user.username, password: user.password});
    }).catch(function(err){
      console.log(err);
      alert(err.data.error + " " + err.data.message);
    })
  }

  $scope.logout = function(){
    UserService.Logout().then(function(response){
      alert('logged out correctly');
      $sessionStorage.$reset();
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    })
  }

  $scope.cambiar_div = function(nombre){
    if (nombre==="inicio") {
      $scope.template = '/views/inicio.html';
    }else if (nombre==="user") {
      $scope.template = '/views/user.html';
    }else if (nombre==="gift"){
      $scope.template = '/views/gift.html';
    }
  }

}]);
