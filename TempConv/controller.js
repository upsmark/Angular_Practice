var app = angular.module('myApp');

app.controller('myCtrl', function($scope){
  $scope.convert = [];

  $scope.submit = function submit(temp){

    $scope.convert.push(temp * 9/5)+32;

       }

   $scope.submit1 = function submit(temp){

    $scope.convert.push(temp - 32) * (5/9);

    }
  });
