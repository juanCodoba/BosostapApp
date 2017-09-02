'use strict';

angular.module('bootstrapAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('catalogo', {
        url: '/catalogo',
        template: '<catalogo></catalogo>'
      });
  });
