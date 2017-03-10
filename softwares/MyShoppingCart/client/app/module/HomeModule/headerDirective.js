/**
 * Created by vanchanagiri shravya on 1/25/2017.
 */
(function () {
    angular.module('home')
        .component('headerDirective', {

            bindings: {

            },
            templateUrl: 'views/header.html',
            controller: headerController,
            controllerAs: 'h'
        });
    headerController.$inject = ['$uibModal','$scope'];
    function headerController($uibModal,$scope) {
        var vm=this;
        vm.tets="Test";
        vm.openRegistrationModel=openRegistrationModel;
        vm.open=open;
        function openRegistrationModel(){
            $uibModal.open({
                templateUrl: 'partials/register.html',
                //controller: 'RandomController'
            });
        }

        $scope.ok = function() {
            $scope.showModal = false;
        };

        $scope.cancel = function() {
            $scope.showModal = false;
        };
    }
}());
