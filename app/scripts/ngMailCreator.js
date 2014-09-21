'use strict';

var mailCreator = angular.module('ngMailCreator', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mm.foundation']);

mailCreator
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        views: {
        	"left-nav": {
        		templateUrl: 'partials/main.html',
		        controller: 'MainCtrl'
        	},
        	"content": {
        		templateUrl: 'partials/main.html',
		        controller: 'MainCtrl'
        	}
        }
        
      });

    $urlRouterProvider.otherwise("/");
  })
;
