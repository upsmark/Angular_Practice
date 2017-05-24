(function(){

var app = angular.module('poems', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/ocean',{
    controller: "themesCtrl",
    templateUrl: "views/ocean.html"
  })

    .when('/moon', {
      controller: "themesCtrl",
      templateUrl: "views/moon.html"
    })

    .when('/forest', {
      controller: "themesCtrl",
      templateUrl: "views/forest.html"
    })

    .when('/city', {
      controller: "themesCtrl",
      templateUrl: "views/city.html"
    })

    .when('/jungle', {
      controller: "themesCtrl",
      templateUrl: "views/jungle.html"
    })

    .when('/desert', {
      controller: "themesCtrl",
      templateUrl: "views/desert.html"
    })

    .otherwise({
      redirectTo: "/index"
    });
}); //closes app.config

})(); //closes IIFE
