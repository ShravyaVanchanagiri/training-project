/**
 * Created by vanchanagiri shravya on 1/20/2017.
 */
/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('product')
        .controller("productDetailsController", productDetailsController);


    productDetailsController.$inject = ['$http', '$rootScope', '$stateParams', 'productDetailsService','$scope'];
    //$scope.value=150;

    function productDetailsController($http, $rootScope, $stateParams, productDetailsService,$scope) {
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
        vm.rating=productDetailsService.getRating($stateParams.id);
        //vm.numberOfPages =  vm.similarProducts.length/vm.pageSize;
        console.log(".......................................................................................");
        console.log(vm.similarProducts.name);
        vm.numberOfPages=vm.similarProducts.length/vm.pageSize;
        console.log("**********************************************************************************");
        console.log(vm.productDetails);
        vm.comments=vm.productDetails.comments;
        vm.limit=1;
        vm.loadMore=loadMore;
        //vm.loadMore();

        function loadMore() {
            var increamented = vm.limit + 3;
            vm.limit = increamented > vm.comments.length ? vm.comments.length : increamented;
        };
    }
})();






