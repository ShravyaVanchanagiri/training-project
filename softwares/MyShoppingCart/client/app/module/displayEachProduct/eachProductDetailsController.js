/**
 * Created by vanchanagiri shravya on 1/20/2017.
 */
(function () {
    angular.module('product')
        .controller("productDetailsController", productDetailsController);


    productDetailsController.$inject = ['$http', '$rootScope', '$stateParams', 'productDetailsService','$scope'];
    //$scope.value=150;

    function productDetailsController($http, $rootScope, $stateParams, productDetailsService,$scope) {

        var vm = this;
        console.log("eachProjectDetailController");
        var id = $stateParams.id;
        vm.readOnly = true;
        vm.currentPage = 0;
        vm.pageSize = 4;
        vm.testObj = "testing.."
        /*vm.numberOfPages=10;*/
        vm.productDetails = productDetails;
        vm.productDetails();
        /*vm.rating=productDetailsService.getRating($stateParams.id);
        console.log(vm.similarProducts.name);*/
        //vm.numberOfPages=vm.similarProducts.length/vm.pageSize;


       /* vm.pagesShown = 1;
        vm.pageSize1 = 3;
        vm.paginationLimit=paginationLimit;
        vm.hasMoreItemsToShow=hasMoreItemsToShow;
        vm.showMoreItems = showMoreItems;*/
        function productDetails(){
            productDetailsService.getSelectedProduct($stateParams.id).then(success).catch(failure);

            function success(response){
                vm.selectedProduct = response.data;
            }

            function failure(failure){

            }
        }
      /* vm.similarProducts = similarProducts;
        vm.similarProducts();

        function similarProducts(){
            console.log('.....................getting')
            productDetailsService.getSimilarProducts(vm.selectedProduct.subType, vm.selectedProduct.name).then(success).catch(failure);
            function success(response){
                console.log('response')
                console.log(response)
                console.log('response')
                vm.similarProduct = response.data
            }

            function failure(failure){

            }
        }*/
        /*  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$")
       *//* function paginationLimit(data) {
            console.log("in pagination limit function");
            return vm.pageSize1 * vm.pagesShown;
        };

        function hasMoreItemsToShow() {
            console.log("in hasMoreItemsToShow function");
            console.log(vm.pagesShown < (vm.productDetails.comments.length / vm.pageSize1));
            return vm.pagesShown < (vm.productDetails.comments.length / vm.pageSize1);
        };

        function showMoreItems() {
            console.log("in ShowMoreItems function");
            vm.pagesShown = vm.pagesShown + 1;
        };*/
    }
})();






