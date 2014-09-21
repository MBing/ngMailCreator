var mailCreator = angular.module('ngMailCreator', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mm.foundation', 'ngDraggable']);

mailCreator
  .config(function ($stateProvider, $urlRouterProvider) {
  	'use strict';
    $stateProvider
      .state('home', {
        url: '/',
        views: {
        	'main': {
        		templateUrl: 'partials/main.html',
        		controller: 'MainCtrl'
        	},
        	'content@home': {
        		templateUrl: 'partials/content.html',
        		controller: 'MainCtrl'
        	},
        	'left-side@home': {
        		templateUrl: 'partials/left-nav.html',
        		controller: 'MainCtrl'
        	},
        	'mail-preview@home': {
        		templateUrl: 'partials/mail-preview.html',
        		controller: 'MainCtrl'
        	}
        }
      })
      .state('about', {
      	parent: 'home',
      	url: '/about',
      	views: {
      		'content@home': {
      			templateUrl: 'partials/about.html',
      			controller: 'AboutCtrl'
      		}
      	}
      });

    $urlRouterProvider.otherwise('/');
  })
;
