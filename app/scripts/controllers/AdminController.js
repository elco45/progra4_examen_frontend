angular.module('AngularScaffold.Controllers')
.controller('AdminController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
  $scope.title = "Tabla de estudiantes de programamción 4."
  $scope.exampleObject = {text: "Hola, Mundo"}
  $scope.students = [];
  $scope.student = {};

  $scope.getStudents = function(){
    HomeService.GetStudents().then(function(response){
      $scope.students = response.data;
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message)
    });
  }

  $scope.postStudents = function(){
    HomeService.PostStudents($scope.student).then(function(response){
      alert("Posted to /students");
      $scope.getStudents();
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

  $scope.logout = function(){
    authService.Logout().then(function(response){
      alert('logged out correctly');
      $sessionStorage.$reset();
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    })
  }
}]);
