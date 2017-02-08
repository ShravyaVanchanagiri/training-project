/**
 * Created by vanchanagiri shravya on 1/27/2017.
 */
(function () {
    angular.module('displayProducts')
        .directive('displayProductDetails',displayProductDetails);
    displayProductDetails.$inject=[];

    function displayProductDetails(){
        var directive = {
            restrict:'E',
            scope:{
                data : '='
            },
            templateUrl: 'partials/DisplayProductDetails.html',
            controller : function($scope){
                //console.log($scope.data);
            }
        };
        return directive;
    }
})();

