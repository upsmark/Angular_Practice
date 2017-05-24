(function(){

  var app = angular.module('poems');

  app.controller('oceanRslt', function($scope, myService){

    $scope.obj = myService.giveWords();

  })
})();
