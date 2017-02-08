/**
 * Created by vanchanagiri shravya on 2/8/2017.
 */
(function () {
    angular.module('priceRange')
        .component('priceRange', {
            bindings: {
                options:"=",
                min:"=",
                max:"="
            },
            templateUrl: 'partials/displayPriceRange.html',
            controller: priceRangeController,
            controllerAs: 'prc'
        });

    priceRangeController.$inject = [];

    function priceRangeController() {
        var vm = this;

    }
}());