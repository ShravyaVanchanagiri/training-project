/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('comics')
        .controller("comicController", comicController);

    comicController.$inject = ['$http', 'homeService', '$rootScope','uitService','comicService'];

    function comicController($http, homeService, $rootScope, uitService,comicService) {
        var vm = this;

        vm.slider = {
            min: 100,
            max: 500,
            options: {
                floor: 100,
                ceil: 500,
                onChange: function() {
                    vm.comicList = [];
                    vm.comicListcomicList = comicService.getProducts(vm.slider.min, vm.slider.max,$rootScope.listComics);
                    vm.comics=vm.comicListcomicList;
                    //console.log(vm.mobileList);
                    //console.log(vm.mobiles);
                }
            }
        };
        vm.test = "Coming here";
        vm.getJsonData=getJsonData;
        vm.getJsonData();
        function getJsonData(){
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response){
                $rootScope.jsonData=response.data;
                vm.data=response.data
                $rootScope.listComics=homeService.getComics(vm.data.subType);
                vm.comics=$rootScope.listComics;
            }
            function gettingError(error){
                console.log(error);
            }
        }
    }
})();
