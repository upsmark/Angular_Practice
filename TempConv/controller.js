var app = angular.module('myApp');

app.controller('myCtrl', function($scope){
  $scope.convert = [];
  $scope.submit = function(temp, unit){

    function submit(temp, unit){
        if (unit === 'f'){
          $scope.convert(temp * 9/5)+32;
    }  else if (unit === 'c'){
          $scope.convert(temp -32)* (5/9);
     }
    }
  }
});
