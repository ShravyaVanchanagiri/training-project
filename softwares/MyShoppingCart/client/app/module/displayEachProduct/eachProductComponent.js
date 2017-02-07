/**
 * Created by vanchanagiri shravya on 2/1/2017.
 */
(function () {
    angular.module('product')
        .component('eachProduct', {

            bindings: {
                /*eachProductData: '='*/
                productDetails:'=',
                rating:'=',
                paginationLimit:'&',
                hasMoreItemsToShow:'&',
                showMoreItems:'&'
            },
            templateUrl: 'partials/eachProduct.html',
            controller: productDetailsController,
            controllerAs: 'spc'
        });
    productDetailsController.$inject = [];
    function productDetailsController() {

        var vm = this;
        vm.productDetails;
        vm.rating;
        //vm.showMoreItems;


    }
}());
