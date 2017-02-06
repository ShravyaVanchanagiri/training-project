/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('laptops')
        .service("laptopService", laptopService);


    laptopService.$inject = ['$http', '$rootScope','uitService'];

    function laptopService($http, $rootScope,uitService) {
        var homeService = {
            getAllData: getAllData,
            getLaptops: getLaptops
        };
        return laptopService;


        function getAllData() {
            var data= uitService.returnJson();
            console.log(data);
            console.log("data");
        }
        function getLaptops(type){
            var laptops=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "laptop"){
                    laptops.push($rootScope.jsonData[i]);
                }
            }
            return laptops;
        }
    }
})();


