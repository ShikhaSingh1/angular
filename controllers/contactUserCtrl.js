(function(){
	"use strict";

	angular.module("yourVoiceApp")
		.controller("contactUserCtrl",function($scope,$state){

			$scope.profile = $state.params.userProfile;
		});

})();