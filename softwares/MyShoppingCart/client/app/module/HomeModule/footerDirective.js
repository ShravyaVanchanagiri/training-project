/**
 * Created by vanchanagiri shravya on 1/25/2017.
 */
(function () {
    angular.module('home')
        .directive('footerDirective',footerDirective);
    footerDirective.$inject=[];

    function footerDirective(){
        var directive = {
            templateUrl: 'views/footer.html'
        };
        return directive;
    }
})();
