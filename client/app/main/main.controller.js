'use strict';

(function() {

    class MainController {

        constructor($http) {
            this.$http = $http;
            this.awesomeThings = [];
        }

        $onInit() {
            this.$http.get('/api/things').then(response => {
                this.awesomeThings = response.data;
            })

            function doAnimations(elems) {
                var animEndEv = 'webKitAnimationEnd animationed';
                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    // $this.$animationType = this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }
            var $myCarousel = $('#productosCarousel'),
                $firstAnimatingElems = $myCarousel.find('.item:first').find(
                    "[data-animation ^= 'animated']");

            $myCarousel.carousel();

            doAnimations($firstAnimatingElems);

            $myCarousel.on('slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find(
                    "[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });
        }
    }

    angular.module('bootstrapAppApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController,
            controllerAs: 'vm'
        });

})();