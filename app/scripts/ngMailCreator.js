var mailCreator = angular.module('ngMailCreator', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mm.foundation']);

mailCreator
  .config(function ($stateProvider, $urlRouterProvider) {
  	'use strict';
    $stateProvider
      .state('home', {
        url: '/',
        views: {
        	'left-nav': {
        		templateUrl: 'partials/left-nav.html',
		        controller: 'MainCtrl'
        	},
        	'content': {
        		templateUrl: 'partials/content.html',
		        controller: 'MainCtrl'
        	},
        	'mail@home': {
        		templateUrl: 'partials/mail-preview.html',
        		controller: 'MainCtrl'
        	}
        }
      });

    $urlRouterProvider.otherwise('/');
  })
;
