(function(){

  var app = angular.modular('poems');

  app.controller('oceanRslt', function($scope, myService){

    $scope.obj = myService.giveWords();
    
  })
})();
