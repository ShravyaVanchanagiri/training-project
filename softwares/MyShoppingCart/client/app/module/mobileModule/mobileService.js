/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
        angular.module('mobiles')
            .service("MobileService", MobileService);


        MobileService.$inject = ['$http', '$rootScope','uitService'];

        function MobileService($http, $rootScope, uitService) {
            var vm=this;
            vm.mobiles=[];
            var mobileService = {
                getAllMobiles: getAllMobiles
            };
            return mobileService;

            function getAllMobiles() {
                //var data= uitService.returnJson();
                //console.log($rootScope.jsonData);
                for(var i=0;i<$rootScope.jsonData.length;i++){
                    if($rootScope.jsonData[i].subType == "mobile" ){
                        vm.mobiles=$rootScope.jsonData[i];
                        console.log("..................................");
                        console.log(vm.mobiles);
                        return vm.mobiles;
                    }
                }
            }
        }
    })();
