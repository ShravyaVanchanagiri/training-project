/**
 * Created by vanchanagiri shravya on 1/19/2017.
 */
(function(){
    angular.module("shoppingCart")

        .factory('uitService',uitService);

    uitService.$inject=["$rootScope","$http","$q"];

    function uitService($rootScope,$http,$q){
        return{
            returnJson:returnJson
        };
        function returnJson(){

            var deffered=$q.defer();
            $http.get('module/mobileModule/Mobiles.json')
                .then(function (res) {
                    console.log('........................19');
                    console.log(res);
                    deffered.resolve(res);
                },function (error) {
                    /*error code*/
                    deffered.reject('There was an error in getting data');
                });
            return deffered.promise;
        }
    }
})();