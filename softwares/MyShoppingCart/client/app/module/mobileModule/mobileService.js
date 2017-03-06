/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .service("MobileService", MobileService);


    MobileService.$inject = ['$http','api','$q', '$rootScope','uitService'];

    function MobileService($http,api,$q,$rootScope,uitService) {
        var MobileService = {
            getAllData: getAllData,
            getMobiles: getMobiles
            /*getProducts:getProducts,
            getBrands: getBrands,
            filterMobiles: filterMobiles,
            getDiscounts: getDiscounts,
            filterProductsByDiscountType: filterProductsByDiscountType,*/
        };
        return MobileService;


        function getAllData() {
            var data= uitService.returnJson();
            console.log(data);
            console.log("data");
        }
        function getMobiles(){
            return api.getAllMobiles().$promise;
        }
        var mobiles=[];
        /*function getMobiles(type){
            mobiles=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "mobile"){
                    mobiles.push($rootScope.jsonData[i]);
                }
            }
            return mobiles;
        }*/
        function  getProducts(min,max,data){
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

        function getDiscounts(mobile){
            var discounts=[], discountList=[];
            for(var i=0;i<mobile.length;i++){
                var product = mobile[i];
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
        function filterProductsByDiscountType(mobile,discountType){
            var data=[];
            if(discountType.length){
                for(var i=0;i<mobile.length;i++){
                    for(var j=0;j<mobile[i].offers.length;j++){
                        if(discountType.indexOf(mobile[i].offers[j].type)>=0){
                            data.push(mobile[i]);
                        }
                    }
                }
            }else{
                data = mobile;
            }

            return data;
        }

        function filterMobiles(min, max, brands, discType) {
            var mobiles = [];
            //Fiter for brands
            if(brands.length) {
                for(var i=0;i< $rootScope.listMobiles.length;i++){
                    if(brands.indexOf($rootScope.listMobiles[i].brand)>=0){
                        mobiles.push($rootScope.listMobiles[i]);
                    }
                }
            }else {
                //When user doesn't select any brand
                mobiles = $rootScope.listMobiles;
            }

            //filter for range
            mobiles =  getProducts(min, max, mobiles);

            //filter for discounts types
            mobiles =  filterProductsByDiscountType(mobiles, discType);

            return mobiles;
        }
    }
})();


