/**
 * Created by vanchanagiri shravya on 1/18/2017.
 */
(function () {
    angular.module('home')
        .service("homeService", homeService);


    homeService.$inject = ['$http', '$rootScope','uitService'];

    function homeService($http, $rootScope,uitService) {
        var homeService = {
            getAllData: getAllData
        };
        return homeService;


        function getAllData() {
          var data= uitService.returnJson();
            console.log(data);
            console.log("data");
        }
    }
})();

