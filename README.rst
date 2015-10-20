Angular Rating Face
===================

This directive angular.js contains one container for rating with faces.

Install
-------

Via bower::

    bower install Angular-rating-face

Getting started
---------------

1. Add script js::

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
    <script src="bower_components/Angular-rating-face/dist/js/angular-rating-face.min.js"></script>

2. Add file css::

    <link rel="stylesheet" type="text/css" href="bower_components/Angular-rating-face/dist/css/style.css">

3. Add the module **rating-face** to module main::

    var App = angular.module("MainApp", ["rating-face"]);

4. Add to html this line::

    <rating-face model="rating_value"></rating-face>

5. Get the selected value. In your controller you can access in this way::

      alert($scope.rating_value);

Attribute
---------

Model: This attribute is the model (the your controller) that contains the value clicked.

Example
-------

Check the file `index`_.

.. image:: https://github.com/mapeveri/Angular-rating-face/blob/master/images/example.png

.. _index: https://github.com/mapeveri/Angular-rating-face/blob/master/example/index.html
