(function(){

var app = angular.module('poems', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/ocean',{
    controller: "oceanCtrl",
    templateUrl: "ocean.html"
  })

    .when('/moon', {
      controller: "moonCtrl",
      templateUrl: "moon.html"
    })

    .when('/forest', {
      controller: "forestCtrl",
      templateUrl: "forest.html"
    })

    .when('/city', {
      controller: "cityCtrl",
      templateUrl: "city.html"
    })

    .when('/jungle', {
      controller: "jungleCtrl",
      templateUrl: "jungle.html"
    })

    .when('/desert', {
      controller: "desertCtrl",
      templateUrl: "desert.html"
    })

    .otherwise({
      redirectTo: "/index"
    });
}); //closes app.config

})(); //closes IIFE
