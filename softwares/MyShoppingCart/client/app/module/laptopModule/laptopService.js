/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('laptops')
        .service("laptopService", laptopService);


    laptopService.$inject = ['$http','api','$q', '$rootScope','uitService'];

    function laptopService($http,api,$q, $rootScope,uitService) {
        var laptopService = {
            getLaptops: getLaptops
            /*getProducts: getProducts,
            getBrands: getBrands,
            filterLaptops: filterLaptops,
            getDiscounts: getDiscounts,
            filterProductsByDiscountType: filterProductsByDiscountType,*/
        };
        return laptopService;

        function getLaptops() {
            return api.getAllLaptops().$promise;
        }

        /*function  getProducts(min,max,data){
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
        function getDiscounts(laptops){
            var discounts=[], discountList=[];
            for(var i=0;i<laptops.length;i++){
                var product = laptops[i];
                for(var j=0;j<product.offers.length;j++){
                    if (discountList.indexOf(product.offers[j].type) < 0 ){
                        var discountObj  = {id:product.offers[j].type, label:product.offers[j].type};
                        discountList.push(product.offers[j].type);
                        discounts.push(discountObj);

                    }
                }
            }
            return discounts;
        }
        function filterProductsByDiscountType(laptops,discountType){
            var data=[];
            if(discountType.length){
                for(var i=0;i<laptops.length;i++){
                    for(var j=0;j<laptops[i].offers.length;j++){
                        if(discountType.indexOf(laptops[i].offers[j].type)>=0){
                            data.push(laptops[i]);
                        }
                    }
                }
            }else{
                data = laptops;
            }

            return data;
        }

        function filterLaptops(min, max, brands,discType) {
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


            //filter for discounts types
            laptops =  filterProductsByDiscountType(laptops, discType);

            return laptops;
        }*/
    }
})();


