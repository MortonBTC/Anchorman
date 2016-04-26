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


app.controller('ListController', ['$scope', 'StoriesService', function($scope, StoriesService) {
    
    
}]);

app.controller('InterestsController', ['$scope', 'StoriesService', function($scope, StoriesService) {
    
    
}]);

app.controller('SavedController', ['$scope', 'StoriesService', function($scope, StoriesService) {
    
    
}]);



app.factory('StoriesService', function() {
    var stories = [];
    
    return {
        
    };
});