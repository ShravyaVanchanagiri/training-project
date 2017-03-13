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
    headerController.$inject = ['$uibModal','api','homeService'];
    function headerController($uibModal,api,homeService) {
        var vm=this;
        vm.openRegistrationModel=openRegistrationModel;
        function openRegistrationModel(){
            $uibModal.open({
                templateUrl: 'partials/register.html',
                controller: function($scope){
                    $scope.funOk=function(){
                        console.log($scope.user);

                        homeService.register($scope.user).then(success).catch(failure);

                        function success(response){
                            console.log("000000000000000000000");
                        }

                        function failure(failure){

                        }
                    }
                },
            });
        }

    }
}());
