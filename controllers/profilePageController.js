(function(){

	"use strict";

	var app = angular.module("yourVoiceApp");

	/*
	*See why it worked. Simply injecting moment gives injection issues
	*/
	app.constant("moment", moment);

	app.controller("profilePageCtrl",function($scope,moment){

		console.log('profile page called');
		var init = function(){
			$scope.filePath = '/_resources/images/profile_default.jpg';

		}
		init();

		$scope.message = {
			"title" : "Your details" ,
			"postDate" : "2017-01-23",
			"desc" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		};

		$scope.myDate="";

		$('#myDatepicker').datepicker({autoclose:true});

		$('#myDatepicker').on('change',function(e){
			$scope.myDate = this.value;
			var momentDate = moment($scope.myDate,'MM/DD/YYYY');
			console.log('moment object - ');
			console.log(momentDate);

			var formattedDate = momentDate.format("YYYYDDMM");
			console.log(formattedDate);
			$scope.$apply();
			
		});


		$scope.openExplorer = function(){
			document.getElementById("uploadPicture").click();

			var msg="Hi from explorer";
			$scope.$emit('selectPic',msg);

			$('input[type=file]').change(function () {
				$scope.filePath=$('#uploadPicture').val(); 
				console.log('File name is - '+$scope.filePath);
			});
		}

		

	});
})();