var app = angular.module('myApp', []);

app.directive('convertDirective', function(){
        return{
           restrict: "E",
           templateUrl: "converted.html"
           replace: false
        };


});
