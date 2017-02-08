/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .controller("MobileController", MobileController);

    MobileController.$inject = ['$http', 'homeService', '$rootScope','uitService','MobileService'];

    function MobileController($http, homeService, $rootScope, uitService, MobileService) {
        var vm = this;

        vm.slider = {
            min: 500,
            max: 50000,
            options: {
                floor: 500,
                ceil: 50000,
                    onChange: function() {
                        vm.mobileList = [];
                        vm.mobileListmobileList = MobileService.getProducts(vm.slider.min, vm.slider.max,$rootScope.listMobiles);
                        vm.mobiles=vm.mobileListmobileList;
                        //console.log(vm.mobileList);
                        //console.log(vm.mobiles);
                    }
            }
        };

        vm.test = "Coming here";
        vm.getJsonData=getJsonData;
        vm.getJsonData();
        vm.mobiles=[];
        vm.copyMobiles=[];
        function getJsonData(){
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response){
                $rootScope.jsonData=response.data;
                vm.data=response.data
                $rootScope.listMobiles=homeService.getMobiles(vm.data.subType);
                vm.mobiles=$rootScope.listMobiles;

            }
            function gettingError(error){
                console.log(error);
            }
        }
    }
})();
