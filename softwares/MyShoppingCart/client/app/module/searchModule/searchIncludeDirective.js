/**
 * Created by vanchanagiri shravya on 1/25/2017.
 */
(function () {
    angular.module('search')
        .directive('searchInclude',searchInclude);
    searchInclude.$inject=[];

    function searchInclude(){
        var directive = {
            templateUrl: 'partials/search.html'
        };
        return directive;
    }
})();

