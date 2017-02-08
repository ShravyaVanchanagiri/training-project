/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('comics')
        .service("comicService", comicService);


    comicService.$inject = ['$http', '$rootScope','uitService'];

    function comicService($http, $rootScope,uitService) {
        var comicService = {
            getAllData: getAllData,
            getComics: getComics,
            getProducts: getProducts,
        };
        return comicService;


        function getAllData() {
            var data= uitService.returnJson();
            console.log(data);
            console.log("data");
        }
        function getComics(type){
            var comics=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "comic"){
                    comics.push($rootScope.jsonData[i]);
                }
            }
            return comics;
        }
        function getProducts(min,max,data){
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
        }
    }
})();


