/**
 * Created by vanchanagiri shravya on 1/30/2017.
 */

(function () {
    angular.module('rating')
        .service("overAllRatingService", overAllRatingService);


    overAllRatingService.$inject = ['$http', '$rootScope','uitService'];

    function overAllRatingService($http, $rootScope, uitService) {

        var ratingService = {
            getRating: getRating

        };
        return ratingService;
        function getRating(){
            for(var i=0;i<$rootScope.jsonData.comments.length;i++){

            }
        }
    }
})();
