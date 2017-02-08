/**
 * Created by vanchanagiri shravya on 1/31/2017.
 */
(function () {
    angular.module('product')
        .component('similarProducts', {

            bindings: {
                similar: '=',
                currentPage: '=',
                pageSize: '=',
                numberOfPages: '='
            },
            templateUrl: 'partials/similarProducts.html',
            controller: SimilarProductsController,
            controllerAs: 'spc'
        });
    SimilarProductsController.$inject = [];
    function SimilarProductsController() {
        var vm = this;
        vm.test="test";
    }
}());