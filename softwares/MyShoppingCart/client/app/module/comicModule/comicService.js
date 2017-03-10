/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('comics')
        .service("comicService", comicService);


    comicService.$inject = ['$http','api','$q', '$rootScope','uitService'];

    function comicService($http,api,$q, $rootScope,uitService) {
        var comicService = {
            getAllData: getAllData,
            getComics: getComics
            /*getProducts: getProducts,*/
        };
        return comicService;


        function getAllData() {
            var data= uitService.returnJson();
            console.log(data);
            console.log("data");
        }
        function getComics(){
            return api.getAllComics().$promise;
        }
        /*function getProducts(min,max,data){
            $rootScope.min = min;
            console.log("min value");
            console.log($rootScope.min);

            $rootScope.max = max;
            console.log($rootScope.max);
            var filteredProducts = [];
            for(var i=0;i<data.length;i++)
            {
                var eachProduct = data[i];
                if(eachProduct.price >= min && eachProduct.price <= max)
                {
                    filteredProducts.push(eachProduct);
                }
            }
            return filteredProducts;
        }*/
    }
})();


