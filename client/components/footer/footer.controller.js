'use strict';
(function (){
  class FooterComponet {
    constructor() {
}
      sube(){
        console.log("estamos en el footer");
        this.el;
        this.error = Math.random() > 0.5;
        if(this.error){
          this.validarColor = "has-success";
          this.validarColorDiv = ["form-control-feedback","glyphicon","glyphicon-ok"];
          this.el = "<label class='control-label' for='inputSuccess2  '>REGISTRO EXITOSO </label>";
        }else{
          this.validarColor = "has-error";
          this.validarColorDiv = ["form-control-feedback","glyphicon","glyphicon-remove"];
          this.el = "<label class='control-label' for='inputSuccess2  '>REGISTRO FALLIDO, comuniquese con el administrador  </label>";
        }
    }
}
angular.module('bootstrapAppApp')
.component('footerDiv',{
  templateUrl: 'components/footer/footer.html',
  controller: FooterComponet,
  controllerAs: 'vm'
});
})();
