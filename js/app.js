var app = angular.module('AnchormanApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/list', {
        controller: 'ListController',
        templateUrl: 'templates/list.html',
    }).when('/interests', {
        controller: 'InterestsController',
        templateUrl: 'templates/interests.html',
    }).when('/saved', {
        controller: 'SavedController',
        templateUrl: 'templates/saved.html',
    });
}]);


app.controller('ListController', ['$scope', '$http', 'StoriesService', function($scope, $http, StoriesService) {
    $http({
        method : "GET",
        url : "http://gateway.marvel.com:80/v1/public/characters?apikey=aecaf7c9b04cdd88b0fa5903dbe6402e&limit=100"
    }).then(function mySucces(response) {
        var stories = response.data;
        console.log(stories)
    }, function myError(response) {
        console.log(response.statusText);
    });
    
}]);

app.controller('InterestsController', ['$scope', 'StoriesService', function($scope, StoriesService) {
    
    
}]);

app.controller('SavedController', ['$scope', 'StoriesService', function($scope, StoriesService) {
    
    
}]);



app.factory('StoriesService', function() {
    var stories = [];
    
    
    return {
        
        
    }
});