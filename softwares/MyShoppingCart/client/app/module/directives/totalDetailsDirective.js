/**
 * Created by vanchanagiri shravya on 1/30/2017.
 */
/**
 * Created by vanchanagiri shravya on 1/27/2017.
 */
(function () {
    angular.module('displayProducts')
        .directive('totalDetails',totalDetails);
    totalDetails.$inject=[];

    function totalDetails(){
        var directive = {
            restrict:'E',
            scope:{
                datas : '='
            },
            templateUrl: 'partials/TotalDetails.html',
        };
        return directive;
    }
})();


