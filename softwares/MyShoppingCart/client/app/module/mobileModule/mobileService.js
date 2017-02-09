/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .service("MobileService", MobileService);


    MobileService.$inject = ['$http', '$rootScope','uitService'];

    function MobileService($http, $rootScope,uitService) {
        var MobileService = {
            getAllData: getAllData,
            getMobiles: getMobiles,
            getProducts:getProducts,
            getBrands: getBrands,
        };
        return MobileService;


        function getAllData() {
            var data= uitService.returnJson();
            console.log(data);
            console.log("data");
        }
        var mobiles=[];
        function getMobiles(type){
            mobiles=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "mobile"){
                    mobiles.push($rootScope.jsonData[i]);
                }
            }
            return mobiles;
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

        function getBrands(mobile){
            var brands=[], brandsList=[];
            for(var i=0;i<mobile.length;i++){

                if (brandsList.indexOf(mobile[i].brand) < 0 ){
                    var brandObj  = {id:mobile[i].brand, label:mobile[i].brand};
                    brandsList.push(mobile[i].brand);
                    brands.push(brandObj);
                }
            }
            return brands;
        }
    }
})();


