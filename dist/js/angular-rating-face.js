"use strict";
var App = angular.module("rating-face", []);

App.directive("ratingFace", function($parse){
  //Get path img
  var script = angular.element(document.querySelector("script[src$='angular-rating-face.js']")).attr("src");
  var pathImg = script.substring(0, script.lastIndexOf('/') + 1);
  pathImg = pathImg.substring(0, pathImg.length -3);

  //Template with the images
  var dataTemplate = '<div class="angular-rating-face">';
  for(var i=1; i<=5;i++){
    dataTemplate += '<img ng-src="'+pathImg+'img/face_'+i+'.png" class="opacity-face" id="face'+i+'" valid="'+i+'" />'
  }
  dataTemplate += '</div>';

  return {
    restrict: 'E',
    template: dataTemplate,
    link: function(scope, element, attr){
       var value_model = $parse(attr.model);
       element.bind('click', function(e){
         try {
           var id = parseInt(e.srcElement.attributes.valid.value);
         } catch (e) {
           var id = 0;
         } finally {
           value_model.assign(scope, id);
           scope.$apply();
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
       });

       //Hoover in the faces
       element.on('mouseover', function(e) {
         try {
           var id = e.srcElement.attributes.valid.value;
         } catch (e) {
           var id = 0;
         } finally {
           for(var i=1; i<=5; i++){
             var el = angular.element(document.querySelector("#face"+i));
             if(i==id){
               el.removeClass("opacity-face");
             }else{
               el.addClass("opacity-face");
             }
           }
         }
       });

       //When I get out of the container, get value clicked
       element.on('mouseleave', function(e) {
         try {
           var id = value_model(scope);
         } catch (e) {
           var id = 0;
         } finally {
           for(var i=1; i<=5; i++){
             var el = angular.element(document.querySelector("#face"+i));
             if(i==id){
               el.removeClass("opacity-face");
             }else{
               el.addClass("opacity-face");
             }
           }
         }
       });
    }
  };
});
