var app = angular.module('mapModule');

app.directive('mapPosts', function(){

    return{
      restrict:'E',
      replace: false,
      templateUrl: 'maps.html'
    }
});
