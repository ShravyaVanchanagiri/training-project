/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('laptops')
        .service("laptopService", laptopService);


    laptopService.$inject = ['$http', '$rootScope','uitService'];

    function laptopService($http, $rootScope,uitService) {
        var laptopService = {
            getAllData: getAllData,
            getLaptops: getLaptops,
            getProducts: getProducts,
        };
        return laptopService;


        function getAllData() {
            var data = uitService.returnJson();
            console.log(data);
            console.log("data");
        }

        function getLaptops(type) {
            var laptops = [];
            for (i = 0; i < $rootScope.jsonData.length; i++) {
                if ($rootScope.jsonData[i].subType == "laptop") {
                    laptops.push($rootScope.jsonData[i]);
                }
            }
            return laptops;
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


