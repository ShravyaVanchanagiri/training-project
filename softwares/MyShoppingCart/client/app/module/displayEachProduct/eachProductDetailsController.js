/**
 * Created by vanchanagiri shravya on 1/20/2017.
 */
/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('product')
        .controller("productDetailsController", productDetailsController);


    productDetailsController.$inject = ['$http', '$rootScope', '$stateParams', 'productDetailsService'];
    //$scope.value=150;

    function productDetailsController($http, $rootScope, $stateParams, productDetailsService) {
        productDetailsService.getProductDetails();

        var vm = this;
        console.log("eachProjectDetailController");
        var id = $stateParams.id;
        vm.readOnly = true;
        vm.currentPage = 0;
        vm.pageSize = 4;


        /*vm.numberOfPages=10;*/
        vm.productDetails = productDetailsService.getSelectedProduct($stateParams.id);
        vm.similarProducts = productDetailsService.getSimilarProduct(vm.productDetails.subType, vm.productDetails.name);
        //vm.numberOfPages =  vm.similarProducts.length/vm.pageSize;
        console.log(".......................................................................................");
        console.log(vm.similarProducts.name);
        vm.numberOfPages=vm.similarProducts.length/vm.pageSize;
        /*function numberOfPages(){
            console.log("//////////////////////////////////////////////////");
            console.log(vm.similarProducts.length);
            return Math.ceil(vm.similarProducts.length/vm.pageSize);
        }*/
    }
})();






