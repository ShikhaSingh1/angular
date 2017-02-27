(function(){
	"use strict";

	var app = angular.module("yourVoiceApp");

	app.directive('modelBindDir', function(){

		return{
			scope:{
					ngModel : '='
			},

			link: function($scope,element){
				
				$(element).on('change',function(){
					$scope.ngModel = element[0].value;
					console.log('inside directive');
				});
				
				
			}
		}
	});

})();