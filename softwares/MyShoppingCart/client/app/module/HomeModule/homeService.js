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
            getFictions: getFictions
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
    }
})();



/*
(function(){
    angular.module('admin')

        .factory('addAdminPayeeService',addAdminPayeeService);
    addAdminPayeeService.$inject=['api','$q','loginService'];


    function addAdminPayeeService(api,$q,loginService){


        var service={
            getAllBanks:getAllBanks,
            submitAdminPayee:submitAdminPayee,
            getAllPayee:getAllPayee,
            editPayee:editPayee,
            deletePayee:deletePayee
        };

        return service;

        /!**
         * this fuction delete payee based on id
         * *!/
        function deletePayee(query){
            return api.deletePayee({id:query}).$promise;
        }
        /!**
         * this fuction edit payee based on id
         * *!/
        function editPayee(query){
            return api.editPayee({q:query,id:query.id}).$promise;
        }
        /!**
         * this fuction return all payee list
         * *!/
        function getAllPayee(query){
            return api.getPayees(query).$promise;
        }
        function getAllBanks(){
            addAdminPayeeService.getAllBanks().then(adminPayeeSuccess).catch(adminPayeeFailure);

            function adminPayeeSuccess(response){
                angular.forEach(response.data,function(data){
                    vm.allBanks.push({key:data.bankName,value:data._id});
                });
                vm.allBanks;
            }

            function adminPayeeFailure(failure){

            }
        }

*/
