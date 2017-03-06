/**
 * Created by vanchanagiri shravya on 1/20/2017.
 */

(function () {
    angular.module('product')
        .service("productDetailsService", productDetailsService);


    productDetailsService.$inject = ['$http','api','$q', '$rootScope', 'uitService'];

    function productDetailsService($http,api,$q,$rootScope, uitService) {

        var productService = {
            getSelectedProduct: getSelectedProduct,
            getSimilarProducts: getSimilarProducts
            /*getRating: getRating*/
        };
        return productService;

        function getSelectedProduct(id) {
            return api.getSelectedProduct({id:id}).$promise;
        }
        function getSimilarProducts(subtype,name){
            console.log("%%%%%%%%%%%%%%%%%%%%%%%")
            var query={};
            query.subType=subtype;
            query.name=name;
            return api.getSimilarProducts({q: query}).$promise;
        }

        /*function getSimilarProducts(productType, productName) {
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
        }*/
    }
})();