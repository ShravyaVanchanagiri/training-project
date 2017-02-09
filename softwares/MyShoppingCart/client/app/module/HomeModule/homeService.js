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
            getComics: getComics,
            getFictions: getFictions,
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
                    /*console.log("Displaying all mobiles");
                    console.log($rootScope.jsonData[i]);*/
                    mobiles.push($rootScope.jsonData[i]);
                }
            }
            return mobiles;
        }
        function getLaptops(type){
            var laptops=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "laptop"){
                    console.log("Displaying all laptops");
                    console.log($rootScope.jsonData[i]);
                    laptops.push($rootScope.jsonData[i]);
                }
            }
            return laptops;
        }
        function getComics(type){
            var comics=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "comic"){
                    console.log("Displaying all comics");
                    console.log($rootScope.jsonData[i]);
                    comics.push($rootScope.jsonData[i]);
                }
            }
            return comics;
        }
        function getFictions(type){
            var fictions=[];
            for(i=0;i<$rootScope.jsonData.length;i++){
                if($rootScope.jsonData[i].subType == "fiction"){
                    console.log("Displaying all comics");
                    console.log($rootScope.jsonData[i]);
                    fictions.push($rootScope.jsonData[i]);
                }
            }
            return fictions;
        }
    }
})();

