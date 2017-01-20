/**
 * Created by vanchanagiri shravya on 1/20/2017.
 */

(function () {
    angular.module('product')
        .service("productDetailsService", productDetailsService);


    productDetailsService.$inject = ['$http', '$rootScope','uitService'];

    function productDetailsService($http, $rootScope, uitService) {
        var vm=this;
        var productService = {
            getProductDetails: getProductDetails,
            getSelectedProduct: getSelectedProduct
        };
        return productService;
        function getProductDetails(id){
            for(var i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].id == id ){
                    vm.productDetails=$rootScope.jsonData[i];
                    console.log(vm.productDetails);

                }
            }
        }

        function getSelectedProduct(id){
            for(var i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].id == id ){
                    vm.productDetails=$rootScope.jsonData[i];
                    console.log(vm.productDetails);
                    return vm.productDetails;
                }
            }
        }
    }
})();