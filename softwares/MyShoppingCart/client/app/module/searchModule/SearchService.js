/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(
    function(){
        angular.module('search')
            .service("searchService",searchService);


        searchService.$inject=['$http','$rootScope','uitService'];

        function searchService($http,$rootScope,uitService){
            var searchService={
                getAllData:getAllData
            };
            return searchService;

            function getAllData(){
                var data= uitService.returnJson();

            }
        }
    }
)();
