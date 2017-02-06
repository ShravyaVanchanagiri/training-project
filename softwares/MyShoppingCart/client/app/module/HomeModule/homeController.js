/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('home')
        .controller("homeController", homeController);

    homeController.$inject = ['$http', 'homeService', '$rootScope','uitService'];

    function homeController($http, homeService, $rootScope, uitService) {
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
                vm.laptops=homeService.getLaptops(vm.data.subType);
                vm.comics=homeService.getComics(vm.data.subType);
            }
            function gettingError(error){
                console.log(error);
            }
        }
    }
})();