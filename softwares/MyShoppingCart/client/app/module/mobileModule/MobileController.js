/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .controller("MobileController", MobileController);

    MobileController.$inject = ['$http', 'homeService', '$rootScope','uitService','MobileService'];

    function MobileController($http, homeService, $rootScope, uitService, MobileService) {
        var vm = this;
        vm.getCheckedProducts=getCheckedProducts;
        vm.model = [];
        vm.settings = {
            scrollableHeight: '100px',
            scrollable: true,
            enableSearch: true
        };
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
        vm.mobileBrands=[];
        $rootScope.checkedMobileList=[];
        function getJsonData(){
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response){
                $rootScope.jsonData=response.data;
                vm.data=response.data
                $rootScope.listMobiles=homeService.getMobiles(vm.data.subType);
                vm.mobiles=$rootScope.listMobiles;
                vm.mobileBrands=MobileService.getBrands(vm.mobiles);

            }
            function gettingError(error){
                console.log(error);
            }
        }

        function getCheckedProducts(checkedProd){
            var brands = [];
            console.log(checkedProd);
            angular.forEach(checkedProd, function(eachSelect, index) {
                console.log(eachSelect);

                brands.push(eachSelect.id);
                console.log("*********************");
                console.log(brands);
            });

            vm.copyData=[];
            vm.copyData=angular.copy(vm.mobiles);
            $rootScope.checkedMobileList = []
            for(var i=0;i<vm.copyData.length;i++){
                console.log("in for loop");
               /// console.log(checkedProd);
                if(brands.indexOf(vm.copyData[i].brand)>=0){
                    console.log("in checking brand function")
                    $rootScope.checkedMobileList.push(vm.copyData[i]);
                    console.log($rootScope.checkedMobileList);
                    //vm.mobiles=$rootScope.checkedMobileList;
                }
                console.log(vm.mobiles);
            }
        }
    }
})();


