/**
 * Created by vanchanagiri shravya on 1/31/2017.
 */
(function(){
    angular.module('product')
        .component('similarProducts',{
        bindings: {
            datas: '='
        },
        templateUrl: 'partials/similarProducts.html',
            controller:productDetailsController,
            controllerAs:'pc'
    });
}());
/*(function(){
    angular.module('product')
        .component('similarProducts',{
            bindings: {
                status: '=',
                data: '='
            },
            templateUrl: '/app/partials/advices.html',
            controller:renderAdvicesController,
            controllerAs:'rac'
        });
    renderAdvicesController.$inject=['passUtilsService'];
    function renderAdvicesController(passUtilsService){
        var vm=this;
        vm.viewPendingCardButton=viewPendingCardButton;
        function viewPendingCardButton(status){
            return passUtilsService.canViewPendingAdvice(status);
        }
    }
}());*/
