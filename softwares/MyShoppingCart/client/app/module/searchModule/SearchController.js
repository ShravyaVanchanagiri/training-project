/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(
    function(){
        angular.module('search')
            .controller("SearchController",SearchController);

        SearchController.$inject=['$http','searchService','$rootScope','$state'];

        function SearchController($http,searchService,$rootScope, $state){
            var vm = this;

            vm.searchedData=[];
            vm.refreshProds = function(valueEntered)
            {
                console.log("refresh products")
                searchService.getProducts(valueEntered).then(success).catch(failure);

                function success(response){
                    vm.searchedData = response.data;
                }

                function failure(failure){

                }
            }
        }
    }
)();

