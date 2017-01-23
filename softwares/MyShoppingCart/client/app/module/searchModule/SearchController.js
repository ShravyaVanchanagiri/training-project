/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(
    function(){
        angular.module('search')
            .controller("SearchController",SearchController);

        SearchController.$inject=['$http','searchService','$rootScope'];

        function SearchController($http,searchService,$rootScope){
            var vm = this;

            console.log("dataaaaa from seach controller");
            searchService.getAllData();


            //vm.products = $rootScope.jsonData;
            vm.refreshProds = function(valueEntered)
            {
                vm.productList = [];
                console.log("in refresh" +valueEntered);
                if(valueEntered != "")
                {
                    for(var i=0;i<$rootScope.jsonData.length;i++)
                    {
                        if($rootScope.jsonData[i].name.toUpperCase().includes(valueEntered.toLocaleUpperCase())) {
                            vm.productList.push($rootScope.jsonData[i]);
                            console.log("in loop refresh");
                        }
                    }
                }
                else {
                    vm.productList=[];
                }
            }
        }
    }
)();

