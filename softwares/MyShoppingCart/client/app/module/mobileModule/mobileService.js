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
            getMobiles: getMobiles,
            filterMobiles: filterMobiles,
            getProducts:getProducts,
           getBrands: getBrands

            /*  getDiscounts: getDiscounts,
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

        function  getProducts(min,max,data){
            var query={
                minPrice:min,
                maxPrice:max,
                subType:data
            };
            return api.getFilteredMobiles(query).$promise;
        }

        function getBrands(query){

            return api.getAllBrandNames(query).$promise;
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


