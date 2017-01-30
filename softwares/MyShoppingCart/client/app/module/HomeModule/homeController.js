/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('home')
        .controller("homeController", homeController);

    homeController.$inject = ['$http', 'homeService', '$rootScope'];

    function homeController($http, homeService, $rootScope) {
        var vm = this;
        vm.test = "Coming here";
        //vm.fetchData = fetchData;
        console.log("HOME CONTROLLER");
        console.log($rootScope.jsonData);
        vm.mobiles=homeService.getMobiles($rootScope.jsonData.subType);
        vm.laptops=homeService.getLaptops($rootScope.jsonData.subType);
        vm.comics=homeService.getComics($rootScope.jsonData.subType);
    }
})();