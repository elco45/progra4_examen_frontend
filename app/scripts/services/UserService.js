angular.module('AngularScaffold.Services').factory('UserService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dennis-cheong-backend.herokuapp.com/';
		return {
			Logout: function(){
				return $http.get(baseUrl + "v1/logout");
			},
			GetRegalos: function(){
				return $http.get(baseUrl + "v1/regalos");
			},
			PostRegalos: function(payload){
				return $http.post(baseUrl + "v1/regalo", payload);
			},
			Register: function(payload){
				return $http.post(baseUrl + "v1/register", payload);
			}
		};
	}]);
