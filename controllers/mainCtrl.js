/*
* Below is a function that will be called automatically & immediately because of the (); placed at the end
*/
( function(){
	"use strict";
	angular.module("yourVoiceApp")
		.controller("mainCtrl" , function($rootScope,$scope,$state,dataPointFactory){

			console.log('mainCtrl called');
			dataPointFactory.getUserDetails().then(function(dataObject){
				if(dataObject){
					$scope.userProfiles = dataObject.data;
				}
				
				console.log(dataObject);
			});


			$scope.openContact = function(){
				$state.go('stateThree');
			}


			$scope.$on('selectPic',function(event,data){
				console.log('Hello');
				console.log(data);
			});
		});
}) ();