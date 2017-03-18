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
            confirmReg: confirmReg,
            login: login,
            logOut: logOut,
            forgot: forgot,
            restPass: restPass,
            getProfile: getProfile,
            storeAddress: storeAddress,
            getAddress : getAddress
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
        function login(query){
            return api.login(query).$promise;
        }
        function logOut(query){
            return api.logOut(query).$promise;
        }
        function forgot(query){
            return api.forgot({q:query}).$promise;
        }
        function restPass(query){
            return api.restPass(query).$promise;
        }
        function getProfile(query){
            console.log("In home service",query);
            return api.getProfile({q:query}).$promise;
        }
        function storeAddress(query){
            console.log(query);
            return api.storeAddress(query).$promise;
        }
        function getAddress(q){
            console.log("in home service *********************")
            var query=q;
            console.log(query)
            return api.getAddress(query).$promise;
        }
    }
})();
