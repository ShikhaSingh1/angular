(function(){

	var app = angular.module("yourVoiceApp");

	app.directive('userList' , function($state){
		return{
			scope:{
				userProfiles : "=",
				searchKey : "="
			},
			templateUrl : '/scripts/views/userListDir.html',

			controller : function(){
				console.log('Inside userListDir controller');
			},

			link : function($scope){

			$scope.showUserContact = function(profile){
				$state.go('stateFour',{
					id: profile.id ,
					userProfile: profile 
				});
			}
		}
		}
	});
})();