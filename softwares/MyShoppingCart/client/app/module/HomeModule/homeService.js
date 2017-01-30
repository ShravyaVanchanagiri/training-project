/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('home')
        .service("homeService", homeService);


    homeService.$inject = ['$http', '$rootScope','uitService'];

    function homeService($http, $rootScope,uitService) {
        var homeService = {
            getAllData: getAllData,
            getMobiles: getMobiles,
            getLaptops: getLaptops,
            getComics: getComics
        };
        return homeService;


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
        function getLaptops(type){
            var laptops=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "laptop"){
                    laptops.push($rootScope.jsonData[i]);
                }
            }
            return laptops;
        }
        function getComics(type){
            var comics=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "comic"){
                    comics.push($rootScope.jsonData[i]);
                }
            }
            return comics;
        }
    }
})();

