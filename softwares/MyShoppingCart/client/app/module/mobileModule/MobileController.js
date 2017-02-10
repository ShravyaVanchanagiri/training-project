/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .controller("MobileController", MobileController);

    MobileController.$inject = ['$http', 'homeService', '$rootScope','uitService','MobileService'];

    function MobileController($http, homeService, $rootScope, uitService, MobileService) {
        var vm = this;
        vm.checkBoxes = true;
        vm.getCheckedProducts=getCheckedProducts;
        vm.model = [];

        vm.settings = {
            scrollableHeight: '100px',
            scrollable: true,
            enableSearch: true
        };

        //selected brands
        vm.brands = [];

        vm.slider = {
            min: 500,
            max: 50000,
            options: {
                floor: 500,
                ceil: 50000,
                    onChange: function() {
                        vm.mobiles = MobileService.filterMobiles(vm.slider.min, vm.slider.max, vm.brands);
                    }
            }
        };

        vm.test = "Coming here";
        vm.getJsonData=getJsonData;
        vm.getJsonData();
        vm.mobiles=[];
        vm.mobileBrands=[];

        function getJsonData(){
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response){
                $rootScope.jsonData=response.data;
                vm.data=response.data;
                $rootScope.listMobiles = homeService.getMobiles(vm.data.subType);
                vm.mobiles = $rootScope.listMobiles;
                vm.mobileBrands = MobileService.getBrands(vm.mobiles);

            }
            function gettingError(error){
                console.log(error);
            }
        }

        function getCheckedProducts(checkedProd){
            vm.brands = [];
            angular.forEach(checkedProd, function(eachSelect, index) {
                vm.brands.push(eachSelect.id);
            });

            vm.mobiles = MobileService.filterMobiles(vm.slider.min, vm.slider.max, vm.brands);
        }
    }
})();


