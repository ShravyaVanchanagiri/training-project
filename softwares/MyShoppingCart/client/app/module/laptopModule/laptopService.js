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
            getBrands: getBrands,
            filterLaptops: filterLaptops
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

        function getBrands(laptop){
            var brands=[], brandsList=[];
            for(var i=0;i<laptop.length;i++){

                if (brandsList.indexOf(laptop[i].brand) < 0 ){
                    var brandObj  = {id:laptop[i].brand, label:laptop[i].brand};
                    brandsList.push(laptop[i].brand);
                    brands.push(brandObj);
                    console.log("getting brands");
                }
            }
            return brands;
        }

        function filterLaptops(min, max, brands) {
            var laptops = [];
            //Fiter for brands
            if(brands.length) {
                for(var i=0;i< $rootScope.listlaptops.length;i++){
                    if(brands.indexOf($rootScope.listlaptops[i].brand)>=0){
                        laptops.push($rootScope.listlaptops[i]);
                    }
                }
            }else {
                //When user doesn't select any brand
                laptops = $rootScope.listlaptops;
            }

            //filter for range
            laptops =  getProducts(min, max, laptops);

            return laptops;
        }
    }
})();


