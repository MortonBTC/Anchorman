var moment = require('moment');
var app = angular.module('AnchormanApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        controller: 'ListController',
        templateUrl: 'templates/home.html',
    }).when('/interests', {
        controller: 'InterestsController',
        templateUrl: 'templates/interests.html',
    }).when('/saved', {
        controller: 'SavedController',
        templateUrl: 'templates/saved.html',
    })

}]);


app.controller('ListController', ['$scope', '$http', 'NewsService', function($scope, $http, NewsService) {
    console.log('working')
    NewsService.getNews().then(function (data) {
      console.log(data);
      $scope.stories = data.data.stories;
        for (var i = 0; i < $scope.stories.length; i++) {
      $scope.stories[i].published = moment(data.data.stories[i].published).format('MMMM Do YYYY, h:mm:ss a');
        }
   });

    
}]);

app.controller('InterestsController', ['$scope', '$http', 'NewsService', function($scope, $http, NewsService) {
    
    
}]);

app.controller('SavedController', ['$scope', '$http', 'NewsService', function($scope, $http, NewsService) {
    
    
}]);



app.factory('NewsService', function($http) {
    var news = $http({
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
});