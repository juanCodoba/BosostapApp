'use strict';
(function(){

class CatalogoComponent {
  constructor() {

  }
  $onInit(){
  //window.alert ("este es el controller para el modal ");
  if(!localStorage.respuestaModal){
  $('#modalOferta').modal();
}
  }
  noMostrarModal(){
    localStorage.respuestaModal = true;
  }
}

angular.module('bootstrapAppApp')
  .component('catalogo', {
    templateUrl: 'app/catalogo/catalogo.html',
    controller: CatalogoComponent,
    controllerAs:'vm'
  });

})();
