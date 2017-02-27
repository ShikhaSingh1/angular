(function(){
	angular.module("yourVoiceApp")
		.directive("helloWorld" , function(){
			return{
				template : "<h1> A hello from the directive!!</h1>"
			};
		});
})();

