/**
 * Created by vanchanagiri shravya on 2/9/2017.
 */
/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('fictions')
        .service("fictionService", fictionService);


    fictionService.$inject = ['$http', '$rootScope','uitService'];

    function fictionService($http, $rootScope,uitService) {
        var fictionService = {
            getAllData: getAllData,
            getFictions: getFictions,
            getProducts:getProducts,
        };
        return fictionService;


        function getAllData() {
            var data= uitService.returnJson();
            console.log(data);
            console.log("data");
        }
        var fictions=[];
        function getFictions(type){
            fictions=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "fiction"){
                    fictions.push($rootScope.jsonData[i]);
                }
            }
            return fictions;
        }
        function  getProducts(min,max,data){
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