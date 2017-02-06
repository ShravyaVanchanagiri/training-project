/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .controller("MobileController", MobileController);

    MobileController.$inject = ['$http', 'homeService', '$rootScope','uitService'];

    function MobileController($http, homeService, $rootScope, uitService) {
        var vm = this;
        vm.test = "Coming here";
        vm.getJsonData=getJsonData;
        vm.getJsonData();
        function getJsonData(){
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response){
                console.log('...................20');
                console.log(response.data)
                $rootScope.jsonData=response.data;
                vm.data=response.data
                console.log('............................home controller');
                console.log(vm.data);
                vm.mobiles=homeService.getMobiles(vm.data.subType);
            }
            function gettingError(error){
                console.log(error);
            }
        }
    }
})();
