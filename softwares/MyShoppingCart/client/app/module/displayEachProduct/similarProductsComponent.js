/**
 * Created by vanchanagiri shravya on 1/31/2017.
 */
(function () {
    angular.module('product')
        .component('simProd', {

            bindings: {
                pro:'='
            },
            templateUrl: 'partials/similarProducts.html',
            controller: SimilarProductController,
            controllerAs: 'epc'
        });
    SimilarProductController.$inject = ['productDetailsService'];
    function SimilarProductController(productDetailsService) {
        var vm = this;
        vm.loadSimilarProds = loadSimilarProds;
        function loadSimilarProds() {
            console.log("Coming here", vm.pro);
            productDetailsService.getSimilarProducts(vm.pro.subType,vm.pro.brand).then(success).catch(failure);
            function success(response){
                vm.similarProduct = response.data;
                console.log(vm.similarProduct);
            }

            function failure(failure){

            }
            vm.numberOfPages=vm.similarProduct.length/vm.pageSize;
            vm.pagesShown = 1;
            vm.pageSize1 = 3;
            vm.paginationLimit=paginationLimit;
           /* vm.hasMoreItemsToShow=hasMoreItemsToShow;
            vm.showMoreItems = showMoreItems;*/
            function paginationLimit(data) {
                console.log("in pagination limit function");
                return vm.pageSize1 * vm.pagesShown;
            };

            /*function hasMoreItemsToShow() {
                console.log("in hasMoreItemsToShow function");
                console.log(vm.pagesShown < (vm.productDetails.comments.length / vm.pageSize1));
                return vm.pagesShown < (vm.productDetails.comments.length / vm.pageSize1);
            };

            function showMoreItems() {
                console.log("in ShowMoreItems function");
                vm.pagesShown = vm.pagesShown + 1;
            };*/

        }
    }
}());
