/**
 * Created by vanchanagiri shravya on 1/17/2017.
 */
(function () {
    angular.module('comics')
        .service("comicService", comicService);


    comicService.$inject = ['$http', '$rootScope','uitService'];

    function comicService($http, $rootScope,uitService) {
        var comicService = {
            getAllData: getAllData,
            getComics: getComics
        };
        return comicService;


        function getAllData() {
            var data= uitService.returnJson();
            console.log(data);
            console.log("data");
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


