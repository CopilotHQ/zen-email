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

    $scope.headline = 'Hello there.';

    header.fadeIn(5000);
    buttons.delay( 500 ).fadeIn( 4000 );
    console.log(header);
  }]);
