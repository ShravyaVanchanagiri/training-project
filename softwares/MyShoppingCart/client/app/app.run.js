/**
 * Created by vanchanagiri shravya on 1/16/2017.
 */
(function() {
    angular.module("shoppingCart")
        .run(function (homeService) {
            homeService.getAllData();

console.log("from run");
        })
})();