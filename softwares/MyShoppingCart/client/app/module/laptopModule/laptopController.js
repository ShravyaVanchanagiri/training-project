/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('laptops')
        .controller("laptopController", laptopController);

    laptopController.$inject = ['$http', 'homeService', '$rootScope','uitService','laptopService'];

    function laptopController($http, homeService, $rootScope, uitService,laptopService) {
        var vm = this;
        vm.slider = {
            min: 500,
            max: 50000,
            options: {
                floor: 500,
                ceil: 50000,
                onChange: function() {
                    vm.laptopList = [];
                    vm.laptopListlaptopList = laptopService.getProducts(vm.slider.min, vm.slider.max,$rootScope.listlaptops);
                    vm.laptops=vm.laptopListlaptopList;
                    //console.log(vm.mobileList);
                    //console.log(vm.mobiles);
                }
            }
        };

        vm.test = "Coming here";
        vm.getJsonData=getJsonData;
        vm.getJsonData();
        vm.laptops=[];
        vm.copylaptops=[];
        function getJsonData(){
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response){
                $rootScope.jsonData=response.data;
                vm.data=response.data
                $rootScope.listlaptops=homeService.getLaptops(vm.data.subType);
                vm.laptops=$rootScope.listlaptops;

            }
            function gettingError(error){
                console.log(error);
            }
        }
    }
})();
