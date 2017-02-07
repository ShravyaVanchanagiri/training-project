/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .controller("MobileController", MobileController);

    MobileController.$inject = ['$http', 'homeService', '$rootScope','uitService'];

    function MobileController($http, homeService, $rootScope, uitService) {
        var vm = this;

        /*$scope.slider = {
            min: 500,
            max: 50000,
            options: {
                floor: 0,
                ceil: 450
            }
        };*/

        vm.slider = {
            min: 500,
            max: 50000,
            options: {
                floor: 500,
                ceil: 50000
            }
        };



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
