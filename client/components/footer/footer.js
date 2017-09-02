'use strict'

  angular.module('bootstrapAppApp').config(function ($stateProvider) {
    $stateProvider.state('footer',{
      url:'/footer',
      template: '<footer-div> </footer-div>'
    });

  });
