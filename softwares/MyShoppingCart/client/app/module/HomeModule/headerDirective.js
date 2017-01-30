/**
 * Created by vanchanagiri shravya on 1/25/2017.
 */
(function () {
    angular.module('home')
        .directive('headerDirective',headerDirective);
    headerDirective.$inject=[];

    function headerDirective(){
            var directive = {
                templateUrl: 'views/header.html'
            };
            return directive;
        }
})();
