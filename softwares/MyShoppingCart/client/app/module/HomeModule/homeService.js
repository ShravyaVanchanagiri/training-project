/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('home')
        .service("homeService", homeService);


    homeService.$inject = ['$http','api','$q', '$rootScope','uitService'];

    function homeService($http,api,$q, $rootScope,uitService) {
        var homeService = {
            getAllData: getAllData,
            getMobiles: getMobiles,
            getLaptops: getLaptops,
            getComics: getComics,
            getFictions: getFictions,
            register: register,
            confirmReg: confirmReg
        };
        return homeService;


        function getAllData(){
                return api.getAllTopProducts().$promise;
            }
        function getMobiles(type){
            return api.getAllMobileList().$promise;
        }
        function getLaptops(type){
            return api.getAllLaptopList().$promise;
        }
        function getComics(type){
            return api.getAllComicList().$promise;
        }
        function getFictions(type){
            return api.getAllFictionList().$promise;
        }
        function register(query){
            return api.registerUser(query).$promise;
        }
        function confirmReg(query){
            return api.confirmReg({token:query}).$promise;
        }
    }
})();
