'use strict';

/**
 * @ngdoc function
 * @name zeneditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zeneditorApp
 */
angular.module('zeneditorApp')
  .controller('SlideCtrl', ['$scope', function ($scope) {
    var header = angular.element( document.querySelector( '.header span' ) );
    var buttons = angular.element( document.querySelector( '.buttons span' ) );
    var subscriber = angular.element( document.querySelector( '.subscriber' ) );

    $scope.headline = 'Hello there.';

    subscriber.fadeIn(5000);
    header.delay(750).fadeIn(5000);
    buttons.delay(1000).fadeIn(5000);
  }]);
