'use strict';
(function(){

class CarritoComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bootstrapAppApp')
  .component('carrito', {
    templateUrl: 'app/carrito/carrito.html',
    controller: CarritoComponent,
    controllerAs:'vm'
  });

})();
