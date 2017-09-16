'use strict';

angular.module('bootstrapAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carrito', {
        url: '/carrito',
        template: '<carrito></carrito>'
      });
  });
