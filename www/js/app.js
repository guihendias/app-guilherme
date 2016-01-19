// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app-guilherme', ['ionic', 'ngCordova'])

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('first-page', {
    url: '/first-page',
    templateUrl: 'templates/first-page.html',
    controller: 'WelcomeCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html'
  })

  .state('sign-up', {
    url: '/sign-up',
    templateUrl: 'templates/sign-up.html',
    controller: 'SignUpCtrl'
  })

  .state('config', {
    url: '/config',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('config-profile', {
    url: '/config/profile',
    templateUrl: 'templates/config-profile.html',
    controller: 'ConfigProfileCtrl'
  })

  .state('change-picture', {
    url: '/config/profile/picture',
    templateUrl: 'templates/change-picture.html',
    controller: 'ProfilePictureCtrl'
  })

  .state('config-notifications', {
    url: '/config/notifications',
    templateUrl: 'templates/config-notifications.html',
    controller: 'NotificationsConfigCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutCtrl'
  })

  .state('report-problem', {
    url: '/report-problem',
    templateUrl: 'templates/report-problem.html',
    controller: 'ReportProblemCtrl'
  })

  .state('friends', {
    url: '/config/friends',
    templateUrl: 'templates/friends.html',
    controller: 'FriendsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');

});