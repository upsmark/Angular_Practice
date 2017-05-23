var app = angular.module('ticketKiosk');

app.controller('myCtrl', function($scope){
  $scope.purchased = [];
  $scope.buyTick = function(name, qty){

    if(qty === 1){
      $scope.purchased.unshift(name + ' bought ' + qty + ' ticket');
    } else {
      $scope.purchased.unshift(name + ' bought ' + qty + ' tickets');
    }
    $scope.name = "";
    $scope.qty = 1;

  };

});
