/**
 * Created by vanchanagiri shravya on 1/30/2017.
 */

(function () {
    angular.module('rating')
        .controller("overAllRatingController", overAllRatingController);


    overAllRatingController.$inject = ['$http', '$rootScope', '$stateParams', 'overAllRatingService'];
    //$scope.value=150;

    function overAllRatingController($http, $rootScope, $stateParams, overAllRatingService) {

        var vm = this;
        vm.overAllRating = overAllRatingService.getRating();
    }
})();

