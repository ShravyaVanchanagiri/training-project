/**
 * Created by vanchanagiri shravya on 2/9/2017.
 */
(function () {
    angular.module('fictions')
        .controller("fictionController", fictionController);

    fictionController.$inject = ['$http', 'homeService', '$rootScope', 'uitService', 'fictionService'];

    function fictionController($http, homeService, $rootScope, uitService, fictionService) {
        var vm = this;

        vm.slider = {
            min: 100,
            max: 300,
            options: {
                floor: 100,
                ceil: 300,
                onChange: function () {
                    vm.fictionList = [];
                    vm.fictionListfictionList = fictionService.getProducts(vm.slider.min, vm.slider.max, $rootScope.listFictions);
                    vm.fictions = vm.fictionListfictionList;
                    //console.log(vm.mobileList);
                    //console.log(vm.mobiles);
                }
            }
        };

        vm.test = "Coming here";
        vm.getJsonData = getJsonData;
        vm.getJsonData();
        vm.fictions = [];
        function getJsonData() {
            uitService.returnJson().then(gettingSuccess).catch(gettingError);
            function gettingSuccess(response) {
                $rootScope.jsonData = response.data;
                vm.data = response.data
                $rootScope.listFictions = homeService.getFictions(vm.data.subType);
                vm.fictions = $rootScope.listFictions;
                console.log("fiction...................................");
                console.log(vm.fictions);

            }

            function gettingError(error) {
                console.log(error);
            }
        }
    }
})();