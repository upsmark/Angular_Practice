var app = angular.module('myApp');

app.controller('myCtrl', function($scope){
  $scope.temperaturesC = [];
  $scope.temperaturesF = [];

  $scope.submit = function(temp){

    $scope.temperaturesC.push((temp * 9/5)+32);
      
       }



   $scope.submit1 = function(temp){


    $scope.temperaturesF.push((temp - 32) * (5/9));

    }
  });
