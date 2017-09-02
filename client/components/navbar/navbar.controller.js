'use strict';

class NavbarController {

ocultarCollapse(){
  $('.navbar-collapse').collapse('hide');
}


}

angular.module('bootstrapAppApp')
  .controller('NavbarController', NavbarController);
