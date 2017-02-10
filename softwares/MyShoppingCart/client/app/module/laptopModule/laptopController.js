/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('laptops')
        .controller("laptopController", laptopController);

    laptopController.$inject = ['$http', 'homeService', '$rootScope','uitService','laptopService'];

    function laptopController($http, homeService, $rootScope, uitService,laptopService) {
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
                    vm.laptops = laptopService.filterLaptops(vm.slider.min, vm.slider.max, vm.brands);
                }
            }
        };

        vm.test = "Coming here";
        vm.getJsonData=getJsonData;
        vm.getJsonData();
        vm.laptops=[];
        vm.laptopBrands=[];
        function getJsonData(){
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response){
                $rootScope.jsonData=response.data;
                vm.data=response.data;
                $rootScope.listlaptops=homeService.getLaptops(vm.data.subType);
                vm.laptops=$rootScope.listlaptops;
                vm.laptopBrands = laptopService.getBrands(vm.laptops);
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

            vm.laptops = laptopService.filterLaptops(vm.slider.min, vm.slider.max, vm.brands);
        }
    }
})();
