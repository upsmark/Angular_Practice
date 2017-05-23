var app = angular.module('ticketKiosk', ['ui.bootstrap']);

app.directive('purchaseDirective', function(){
      return {
        restrict: "E",
        templateUrl: "newsFeed.html",
        replace: false
      };

});
