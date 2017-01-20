/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
        angular.module('mobiles')
            .service("MobileService", MobileService);


        MobileService.$inject = ['$http', '$rootScope','uitService'];

        function MobileService($http, $rootScope, uitService) {
            var mobileService = {
                getAllMobiles: getAllMobiles
            };
            return mobileService;


            function getAllMobiles() {
                var data= uitService.returnJson();
                console.log(data);
            }
        }
    })();
