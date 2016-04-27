(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* jslint esnext: true */
var app = angular.module('AnchormanApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
   $routeProvider
      .when('/home', {
         controller: 'HomeController',
         templateUrl: 'templates/home.html'
      })
      .when('/interests', {
         controller: 'InterestsController',
         templateUrl: 'templates/interests.html'
      })
      .when('/saved', {
         controller: 'SavedController',
         templateUrl: 'templates/saved.html'
      })
      .otherwise({
         redirectTo: '/home'
      });
}]);

// controller main page - news stream
app.controller('HomeController', ['$scope', '$location', '$window', 'NewsService', function ($scope, $location, $window, NewsService) {

   NewsService.getNews().then(function (data) {
      console.log(data.data.stories);
      $scope.stories = data.data.stories;
   });

   // open new tab navigate to vendor for full article
   $scope.getStory = function (story) {
      $window.open(`${story.link}`, '_blank');
   };

}]);

app.controller('InterestsController', ['$scope', '$location', 'NewsService', function ($scope, $location, NewsService) {
   //for 'interests' view
}]);

app.controller('SavedController', ['$scope', '$location', 'NewsService', function ($scope, $location, NewsService) {
   // for 'saved' view
}]);

app.factory('NewsService', function ($http) {

   let news = $http({
      method: 'GET',
      url: 'http://chat.queencityiron.com/api/news/latest'
   }).then(function (response) {
      return response;
   });

   return {
      getNews: function () {
         return news;
      }
   };
   // publisher data that will likely connect us to our article
   // 'http://chat.queencityiron.com/api/publishers'

   // websockets
   // ws://chat.queencityiron.com/api/feed
});

},{}]},{},[1])