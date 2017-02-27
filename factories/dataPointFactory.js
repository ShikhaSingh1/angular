(function(){
	"use strict";
	angular.module("yourVoiceApp")
		.factory("dataPointFactory" , function($http){

			function getUserDetails(){
				return $http.get('../../_resources/data/users.json');
			}

			return{
				getUserDetails : getUserDetails
			}
					
				
		});
})();