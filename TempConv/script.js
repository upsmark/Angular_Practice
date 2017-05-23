var app = angular.module('myApp', []);

app.directive('convertDirective', function(){
        return{
           restrict: "E",
           template: "<h3>It is {{ temperature }} degrees Celsius</h3>",
           replace: false
        };
   });

   app.directive('convertDirectiveB', function(){
           return{
              restrict: "E",
              template: "<h3>It is {{ temperature }} degrees Fahrenheit</h3>",
              replace: false
           };
      });
