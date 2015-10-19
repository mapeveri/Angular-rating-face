var App = angular.module("MainApp", ["rating-face"]);

App.controller("MainController", function($scope){
  $scope.getValue = function(){
    console.log($scope.rating_value);
  }
});
