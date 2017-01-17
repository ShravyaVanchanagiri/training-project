/**
 * Created by vanchanagiri shravya on 1/16/2017.
 */
(function() {
    angular.module("shoppingCart")
        .config(function ($stateProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider.state('mobile', {
                url: '/mobiles',
                templateUrl: 'partials/mobiles.html',
                controller: 'MobileController',
                controllerAs: 'mc'
            })
        })
})();