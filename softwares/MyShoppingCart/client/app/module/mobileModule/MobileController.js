/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(
    function(){
        angular.module('mobiles')
            .controller("MobileController",MobileController);

        MobileController.$inject=['$http','MobileService','$rootScope'];

        function MobileController($http,MobileService,$rootScope){

            console.log("mobilessssssssssss");
            console.log("dataaaaaaaaaaaaaaaaaaaaaaaa from mobile controller");

            vm.mobilesData = [];
            MobileService.getAllMobiles();
        }
    }
)();
