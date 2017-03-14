/**
 * Created by vanchanagiri shravya on 1/16/2017.
 */
(function() {
    angular.module("shoppingCart")
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
            console.log("from config");

            //$locationProvider.html5Mode(true);

            $stateProvider.state('mobile', {
                url: '/mobiles',
                templateUrl: 'partials/mobiles.html',
                controller: 'MobileController',
                controllerAs: 'mc'
            }).state('laptops', {
                url: '/laptops',
                templateUrl: 'partials/laptops.html',
                controller: 'laptopController',
                controllerAs: 'lc'
            }).state('comics', {
                url: '/comics',
                templateUrl: 'partials/comics.html',
                controller: 'comicController',
                controllerAs: 'cc'
            }).state('fictions', {
                url: '/fictions',
                templateUrl: 'partials/fictions.html',
                controller: 'fictionController',
                controllerAs: 'fc'
            }).state('home',{
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'homeController',
                controllerAs: 'hc'
            }).state('productDetails',{
                url:'/home/:id',
                templateUrl: 'partials/productDetails.html',
                controller: 'productDetailsController',
                controllerAs: 'pc'
            }).state('search',{
                url:'/home/:id',
                templateUrl: 'partials/productDetails.html',
                controller: 'productDetailsController',
                controllerAs: 'sc'
            }).state('confirmRegistration',{
                url:"/confirmRegistration/:token",
                controller: 'registrationController',
                controllerAs: 'rgc',
                templateUrl: 'partials/registration.html'
            });

            $urlRouterProvider.otherwise('/home');

        })
})();

