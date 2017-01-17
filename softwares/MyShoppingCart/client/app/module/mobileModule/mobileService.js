/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(
    function(){
        angular.module('mobiles')
            .service("MobileService",MobileService);


        MobileService.$inject=['$http','$rootScope'];

        function MobileService($http,$rootScope){
            var mobileService={
                getAllMobiles:getAllMobiles
            };
            return mobileService;


            function getAllMobiles(){
                $http.get('module/JsonData/Mobiles.json')
                    .then(function (res) {
                        console.log(".....Service method...........");
                        $rootScope.mobileData = res.data;
                    },function (err) {
                        /*error code*/
                    });
            }
        }
    }
)();