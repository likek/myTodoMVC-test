(function (angular) {
	'use strict';
	var myapp=angular.module('myapp',['ngRoute','app_controller_main','app_service_main']);
	myapp.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/:status?',{
				controller:'mycontroller',
				templateUrl:'main_temp'
			})
		}])
})(angular);
