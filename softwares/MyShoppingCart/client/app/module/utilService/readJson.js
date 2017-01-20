/**
 * Created by vanchanagiri shravya on 1/19/2017.
 */
(function(){
    angular.module("shoppingCart")

        .factory('uitService',uitService);

    uitService.$inject=["$rootScope","$http"];

    function uitService($rootScope,$http){
        return{
            returnJson:returnJson
        };

        function returnJson(){
            $http.get('module/mobileModule/Mobiles.json')
                .then(function (res) {
                    console.log(".....Service method...........");
                    $rootScope.jsonData = res.data;
                    console.log($rootScope.jsonData);
                }, function (err) {
                    /*error code*/
                });
            return $rootScope.jsonData;
        }


    }
})();