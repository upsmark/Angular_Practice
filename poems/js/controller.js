(function(){

var app = angular.module('poems');

app.controller('oceanCtrl', function($scope, myService, $location){

  $scope.obj = {};

  $scope.submit = function(){

    myService.getWords($scope.obj);

    $location.path('/display');

  };
})

})();
