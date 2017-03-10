/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(
    function(){
        angular.module('search')
            .service("searchService",searchService);


        searchService.$inject=['$http','api','$q','$rootScope','uitService'];

        function searchService($http,api,$q,$rootScope,uitService){
            var searchService={
                getProducts:getProducts
            };
            return searchService;

            function getProducts(valueEntered){
                var query={}
                query.keyword=valueEntered

                return api.getAllNames(query).$promise;
            }
        }
    }
)();
