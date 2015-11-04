//Version 0.0.6
(function(){
  "use strict";
  var App = angular.module("rating-face", []);

  App.directive("ratingFace", ["$parse", function($parse){
    return {
      restrict: 'E',
      template: function(elem,attrs) {
        //Get path img
        if(angular.isDefined(attrs.path)){
          var pathImg = attrs.path;
        }else{
          var pathImg = "bower_components/Angular-rating-face/dist/";
        }
        //Template with the images
        var dataTemplate = '<div class="angular-rating-face">';
        for(var i=1; i<=5;i++){
          dataTemplate += '<img ng-src="'+pathImg+'img/face_'+i+'.png" class="opacity-face" id="face'+i+'" val="'+i+'" />'
        }
        dataTemplate += '</div>';
        return dataTemplate;
      },
      require: 'ngModel',
      controller: ["$scope", function($scope){
        $scope.remove_class_face = function(id){
          for(var i=1; i<=5; i++){
            var el = angular.element(document.querySelector("#face"+i));
            if(i==id){
              el.removeClass("opacity-face");
              el.attr("clicked", true);
            }else{
              el.addClass("opacity-face");
            }
          }
        }
      }],
      link: function(scope, element, attr){
         var value_model = $parse(attr['ngModel']);

         //Get element clicked and selected
         var selected = value_model(scope);
         scope.remove_class_face(selected);

         element.bind('click', function(e){
           try {
             var id = parseInt(e.srcElement.attributes.val.value);
           } catch (e) {
             var id = 0;
           } finally {
             value_model.assign(scope, id);
             scope.$apply();
             scope.remove_class_face(id);
           }
         });

         //Hoover in the faces
         element.on('mouseover', function(e) {
           try {
             var id = e.srcElement.attributes.val.value;
           } catch (e) {
             var id = 0;
           } finally {
             scope.remove_class_face(id);
           }
         });

         //When I get out of the container, get value clicked
         element.on('mouseleave', function(e) {
           try {
             var id = value_model(scope);
           } catch (e) {
             var id = 0;
           } finally {
             scope.remove_class_face(id);
           }
         });

         //Whatcher for hoover
         scope.$watch(attr['ngModel'], function (v) {
              scope.remove_class_face(v);
          });
      }
    };
  }]);
})();
