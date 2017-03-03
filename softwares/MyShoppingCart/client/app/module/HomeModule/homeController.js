/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('home')
        .controller("homeController", homeController);

    homeController.$inject = ['$http', 'homeService', '$rootScope','uitService'];

    function homeController($http, homeService, $rootScope, uitService) {
        var vm = this;
        vm.topProducts = [];
        vm.topMobiles = [];
        vm.topLaptops=[];
        vm.topComics=[];
        vm.topFictions=[];
        vm.test = "Coming here";

        //vm.getJsonData=getJsonData;
        vm.getAllProducts=getAllProducts;
        vm.getAllProducts();
        vm.getAllMobiles=getAllMobiles;
        vm.getAllMobiles();
        vm.getAllLaptops=getAllLaptops;
        vm.getAllLaptops();
        vm.getAllComics=getAllComics;
        vm.getAllComics();
        vm.getAllFictions=getAllFictions;
        vm.getAllFictions();
        function getAllProducts(){
            homeService.getAllData().then(success).catch(failure);

            function success(response){
                vm.topProducts = response.data;
            }

            function failure(failure){

            }
        }
        function getAllMobiles(){
            homeService.getMobiles().then(success).catch(failure);

            function success(response){
                vm.topMobiles = response.data;
            }

            function failure(failure){

            }
        }
        function getAllLaptops(){
            homeService.getLaptops().then(success).catch(failure);
            function success(response){
                vm.topLaptops = response.data;
            }
            function failure(failure){

            }
        }
        function getAllComics(){
            homeService.getLaptops().then(success).catch(failure);
            function success(response){
                vm.topComics = response.data;
            }
            function failure(failure){

            }
        }
        function getAllFictions(){
            homeService.getLaptops().then(success).catch(failure);
            function success(response){
                vm.topFictions= response.data;
            }
            function failure(failure){

            }
        }

    }
})();
