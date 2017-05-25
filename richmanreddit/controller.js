var app = angular.module('mapModule');

app.controller('mapCtrl', function($scope, $http){

   $scope.maps = [];

   $http({
       method: 'GET',
       url: 'http://www.reddit.com/r/MapPorn.json'
     }).then(function yayMaps(response){
        $scope.maps = response.data.data.children;
        console.log($scope.maps);

      }, function(error){
        console.log(error);
      });
});
