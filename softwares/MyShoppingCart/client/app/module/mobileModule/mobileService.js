/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('mobiles')
        .service("MobileService", MobileService);


    MobileService.$inject = ['$http', '$rootScope','uitService'];

    function MobileService($http, $rootScope,uitService) {
        var homeService = {
            getAllData: getAllData,
            getMobiles: getMobiles
        };
        return MobileService;


        function getAllData() {
            var data= uitService.returnJson();
            console.log(data);
            console.log("data");
        }
        function getMobiles(type){
            var mobiles=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "mobile"){
                    mobiles.push($rootScope.jsonData[i]);
                }
            }
            return mobiles;
        }
    }
})();


