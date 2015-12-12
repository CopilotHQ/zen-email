'use strict';

/**
 * @ngdoc function
 * @name zeneditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zeneditorApp
 */
angular.module('zeneditorApp')
  .controller('MainCtrl', function () {
    var header = angular.element( document.querySelector( '.header span' ) );
    var buttons = angular.element( document.querySelector( '.buttons span' ) );

    header.fadeIn(5000);
    buttons.delay( 500 ).fadeIn( 4000 );
    console.log(header);
  });
