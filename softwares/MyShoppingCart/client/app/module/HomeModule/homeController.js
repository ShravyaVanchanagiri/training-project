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
        vm.fetchData = fetchData;
        console.log("dataaaaaaa from seach controller");
        //homeService.getAllData();


        //vm.products = $rootScope.jsonData;
        //fetch top 5 records from rootScope
        //vm.topRecords = getTopRatedProducts();
        function fetchData(filterString) {
            console.log("fetch data" + vm.selected);
        }
    }
})();