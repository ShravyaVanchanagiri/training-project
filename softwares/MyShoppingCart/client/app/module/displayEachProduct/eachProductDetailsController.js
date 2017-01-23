/**
 * Created by vanchanagiri shravya on 1/20/2017.
 */
/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('product')
        .controller("productDetailsController", productDetailsController);

    productDetailsController.$inject = ['$http', '$rootScope','$stateParams','productDetailsService'];

    function productDetailsController($http , $rootScope,$stateParams,productDetailsService) {
        productDetailsService.getProductDetails();
        console.log(".............................................product controller");
        console.log($stateParams.id);
        var vm=this;
        var id=$stateParams.id;
        vm.readOnly = true;
        //call some method to get selected product
        /*vm.selectedProduct = productDetailsService.getSelectedProduct($stateParams.id);*/
        vm.productDetails=productDetailsService.getSelectedProduct($stateParams.id);
        vm.similarProducts=productDetailsService.getSimilarProduct(vm.productDetails.subType);
        console.log("in similar products controller");
        console.log(vm.similarProducts);
    }
})();



