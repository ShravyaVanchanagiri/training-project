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
            //filterMobiles: filterMobiles,
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

        function  getProducts(min,max,data,brand){
            var query={
                minPrice:min,
                maxPrice:max,
                subType:data,
                brands: brand
            };
            return api.getFilteredMobiles(query).$promise;
        }

        function getBrands(query){

            return api.getAllBrandNames(query).$promise;
        }
       /* function filterMobiles(min, max, brands) {
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
        }*/

    }
})();


