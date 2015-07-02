interface ICatSlide {
    image: string; // The URL of the cat picture.
    text: string;
}

interface ICatPage {
    myInterval: number;
    slides: ICatSlide[];
}

module Controllers.LandingPageController {

    class LandingPageController implements ICatPage {
        
        myInterval: number;
        slides: ICatSlide[]; 
         
        constructor() {

            this.myInterval = 2000;
            this.slides = [];

            for (var i = 0; i < 4; i++) {
                this.addSlide();
            }

        } // constructor

        addSlide() : void  {
            var newWidth: number = 600 + this.slides.length + 1;

            var aCat: ICatSlide = <ICatSlide>{};

            aCat.image = 'http://placekitten.com/' + newWidth + '/300';
            aCat.text =
                ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4];

            this.slides.push(aCat);

        } // adSlide()

    } // class

    angular
        .module('app')
        .controller('Controllers.LandingPageController', LandingPageController);

}


