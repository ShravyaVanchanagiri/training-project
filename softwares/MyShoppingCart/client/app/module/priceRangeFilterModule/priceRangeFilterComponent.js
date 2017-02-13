/**
 * Created by vanchanagiri shravya on 2/8/2017.
 */
(function () {
    angular.module('priceRange')
        .component('filterComponent', {
            bindings: {
                options:"=",
                min:"=",
                max:"=",
                mobileBrands:"=",
                settings:"=",
                filterBrands:"&",
                checkBoxes:"=",
                mobileDiscounts:"=",
                filterDiscounts:"&"
            },
            templateUrl: 'partials/displayPriceRange.html',
            controller: priceRangeController,
            controllerAs: 'prc'
        });

    priceRangeController.$inject = [];

    function priceRangeController() {
        var vm = this;
        vm.model = [];

    }
}());