/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .controller("MobileController", MobileController);

    MobileController.$inject = ['$http', 'homeService', '$rootScope','uitService','MobileService', 'searchService'];

    function MobileController($http, homeService, $rootScope, uitService, MobileService, searchService) {
        var vm = this;
        vm.mobiles=[];
        vm.mobileBrands=[];
        vm.checkBoxes = true;
        //vm.getCheckedProducts=getCheckedProducts;
        //vm.getProductsFilterByDisc=getProductsFilterByDisc;
        vm.getAllMobiles=getAllMobiles;
        vm.getAllMobiles();
        vm.getAllBrands=getAllBrands;
        vm.getAllBrands();
        //load mobiles from server
       /* vm.loadMobiles= loadMobiles;
        loadMobiles();*/
        vm.filterData = filterData;

        function filterData(minPrice, maxPrice,subType,brands){
            MobileService.getProducts(minPrice, maxPrice,subType,brands).then(success).catch(failure);

            function success(response){
                vm.mobiles = response.data;
            }

            function failure(failure){

            }
        }

        vm.model = [];
        vm.settings = {
            scrollableHeight: '100px',
            scrollable: true,
            enableSearch: true
        };

        //selected brands
        vm.brands = [];
        vm.discounts=[];

        vm.slider = {
            min: 500,
            max: 50000,
            options: {
                floor: 500,
                ceil: 50000,
                    onChange: function() {
                        vm.filterData(vm.slider.min, vm.slider.max,'mobile',null);
                    }
            }
        };

       /* vm.test = "Coming here";
        vm.getJsonData=getJsonData;
        vm.getJsonData();
        vm.mobiles=[];

        vm.mobileDiscounts=[];
*/
        /*function getJsonData(){
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response){
                $rootScope.jsonData=response.data;
                vm.data=response.data;
                $rootScope.listMobiles = homeService.getMobiles(vm.data.subType);
                vm.mobiles = $rootScope.listMobiles;
                vm.mobileBrands = MobileService.getBrands(vm.mobiles);
                vm.mobileDiscounts = MobileService.getDiscounts(vm.mobiles);
            }
            function gettingError(error){
                console.log(error);
            }
        }*/
        function getAllMobiles(){
            MobileService.getMobiles().then(success).catch(failure);

            function success(response){
                vm.mobiles = response.data;
            }

            function failure(failure){

            }
        }
        function getAllBrands(){
            console.log("in function");
            //console.log(vm.mobiles.subType);
            var query={subType:'mobile'};
            MobileService.getBrands(query).then(success).catch(failure);

            function success(response){
                var brandsList = [];
                if ( response.data.length ) {
                    angular.forEach(response.data, function(eachBrand, index){
                        var brandObj  = {id:index+1, label:eachBrand};
                        brandsList.push(brandObj);
                    });
                }
                vm.mobileBrands= brandsList;
            }

            function failure(failure){

            }
        }


        function getCheckedProducts(checkedProd){
            vm.brands = [];
            angular.forEach(checkedProd, function(eachSelect, index) {
                vm.brands.push(eachSelect.id);
            });

            vm.mobiles = MobileService.filterMobiles(vm.slider.min, vm.slider.max, vm.brands, vm.discounts);
        }

        /*function getProductsFilterByDisc(checkedProd){
            vm.discounts=[];
            angular.forEach(checkedProd, function(eachSelect, index) {
                vm.discounts.push(eachSelect.id);
            });



            vm.mobiles = MobileService.filterMobiles(vm.slider.min, vm.slider.max, vm.brands, vm.discounts);
        }*/
    }
})();


