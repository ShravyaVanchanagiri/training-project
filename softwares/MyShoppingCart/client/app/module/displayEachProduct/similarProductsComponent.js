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
            controller: productDetailsController,
            controllerAs: 'spc'
        });
    productDetailsController.$inject = [];
    function productDetailsController() {
        var vm = this;
    }
}());