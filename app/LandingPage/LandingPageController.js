var Controllers;
(function (Controllers) {
    var LandingPageController;
    (function (_LandingPageController) {
        var LandingPageController = (function () {
            function LandingPageController() {
                this.myInterval = 2000;
                this.slides = [];
                for (var i = 0; i < 4; i++) {
                    this.addSlide();
                }
            } // constructor
            LandingPageController.prototype.addSlide = function () {
                var newWidth = 600 + this.slides.length + 1;
                var aCat = {};
                aCat.image = 'http://placekitten.com/' + newWidth + '/300';
                aCat.text = ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4];
                this.slides.push(aCat);
            }; // adSlide()
            return LandingPageController;
        })(); // class
        angular.module('app').controller('Controllers.LandingPageController', LandingPageController);
    })(LandingPageController = Controllers.LandingPageController || (Controllers.LandingPageController = {}));
})(Controllers || (Controllers = {}));
//# sourceMappingURL=LandingPageController.js.map