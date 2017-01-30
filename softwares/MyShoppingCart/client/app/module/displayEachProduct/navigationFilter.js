/**
 * Created by vanchanagiri shravya on 1/24/2017.
 */
(function () {
    angular.module('product')
        .filter("navigationFilter", function(){
            return function(input, start) {
                start = +start; //parse to int
                return input.slice(start);
            }
        });
})();