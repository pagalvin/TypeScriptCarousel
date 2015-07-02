# TypeScriptCarousel
Very simple carousel in TypeScript using UI Bootstrap

# Demo
http://bootstrapandtypescriptrotator.azurewebsites.net/

# Description
This is just a dead simple carousel implementation in Angular and TypeScript that uses the Angular UI Bootstrap components from here: https://angular-ui.github.io/bootstrap/

There are really just three pieces:
1. app.js that boostraps (and injects the dependency on bootstrap UI)
2. HTML view that links to the controller with the carousel's data and timer interval
3. A controller that gets some cat pictures

# App.ts

    ((): void => {
    
        'use strict';
    
        var app: ng.IModule = angular.module('app', [ 
        // Angular modules 
            "ui.bootstrap"
        ]);
        
    })();

# index.html (the important bits)

    <body data-ng-app="app" data-ng-controller="Controllers.LandingPageController as vm">
        ...

        <carousel interval="vm.myInterval">
            <slide ng-repeat="slide in vm.slides" active="slide.active">
                <img ng-src="{{slide.image}}" style="margin:auto;">
                <div class="carousel-caption">
                    <h4>Slide {{$index}}</h4>
                    <p>{{slide.text}}</p>
                </div>
            </slide>
        </carousel>

        ...
        
        <!-- Bootstrapping -->
        <script src="app/app.js"></script>
        <script src="app/LandingPage/LandingPageController.js"></script>

    </body>
    
# LandingPageController.ts

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





