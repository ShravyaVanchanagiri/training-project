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
                showMoreItems:'&',
                testObj:'='
            },
            templateUrl: 'partials/eachProduct.html',
            controller: productDetailsController,
            controllerAs: 'epc'
        });
    productDetailsController.$inject = [];
    function productDetailsController() {

        var vm = this;
        vm.productDetails;
        //vm.showMoreItems;
        getProducts();
        function getProducts() {
            console.log('testing..obj');
            console.log(vm.productDetails);
        }

    }
}());
