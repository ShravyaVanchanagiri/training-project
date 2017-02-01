/**
 * Created by vanchanagiri shravya on 1/20/2017.
 */

(function () {
    angular.module('product')
        .service("productDetailsService", productDetailsService);


    productDetailsService.$inject = ['$http', '$rootScope', 'uitService'];

    function productDetailsService($http, $rootScope, uitService) {

        var productService = {
            getProductDetails: getProductDetails,
            getSelectedProduct: getSelectedProduct,
            getSimilarProduct: getSimilarProducts,
            getRating: getRating
        };
        return productService;
        function getProductDetails(id) {
            for (var i = 0; i < $rootScope.jsonData.length; i++) {
                if ($rootScope.jsonData[i].id == id) {
                    return $rootScope.jsonData[i];
                    console.log($rootScope.jsonData[i]);
                }
            }
        }

        function getSelectedProduct(id) {
            for (var i = 0; i < $rootScope.jsonData.length; i++) {
                if ($rootScope.jsonData[i].id == id) {
                    return $rootScope.jsonData[i];
                    console.log($rootScope.jsonData[i]);
                }
            }
        }

        function getSimilarProducts(productType, productName) {
            var similarProducts = [];
            for (var i = 0; i < $rootScope.jsonData.length; i++) {
                if (($rootScope.jsonData[i].subType == productType) && ($rootScope.jsonData[i].name != productName )) {
                    similarProducts.push($rootScope.jsonData[i]);
                }
            }
            return similarProducts;
        }

        function getRating(id1) {
            var rating = 0, total = 0;
            for (var i = 0; i < $rootScope.jsonData.length; i++) {
                if ($rootScope.jsonData[i].id == id1) {
                    console.log("53.......................................");
                    for (var j = 0; j < $rootScope.jsonData[i].comments.length; j++) {
                        total = total + parseFloat($rootScope.jsonData[i].comments[j].rating);
                    }
                    rating = (total / j);
                }
            }
            console.log(rating);
            return rating;

        }
    }
})();