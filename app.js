angular.module("yourVoiceApp", ["ngMaterial","ui.router"])
	.config(function($mdThemingProvider,$stateProvider) 
	{
	   $mdThemingProvider.theme('default')
	    .primaryPalette('pink')
	    .accentPalette('orange');

	    $stateProvider.
	    	state('stateOne',{
	    		url:'/users',
	    		templateUrl:'/scripts/views/userList.html',
	    		controller: 'mainCtrl'
	    	})
	    	.state('stateOne.stateTwo',{
	    		url:'/profiles',
	    		templateUrl:'/scripts/views/profilePage.html',
	    		controller:'profilePageCtrl'
	    	})
	    	.state('stateThree',{
	    		url:'/contact',
	    		templateUrl:'/scripts/views/contactUs.html'
	    	})
	    	.state('stateFour',{
	    		url:'/contactuser/:id',
	    		templateUrl:'scripts/views/contactUser.html',
	    		controller:'contactUserCtrl',
	    		params:{
	    			userProfile : null
	    		}
	    	});
 	});