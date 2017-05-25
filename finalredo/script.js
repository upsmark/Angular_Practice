
var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope){

    $scope.bought = [];

    $scope.buyNow = function(name, qty){

    $scope.bought.push(name, qty);

    };

    $scope.buyNow();

});
