/**
 * Created by shravya on 14/3/17.
 */
(function () {
    angular.module('home')
        .controller("registrationController", registrationController);

    registrationController.$inject = ['$scope','homeService','$stateParams','$state'];

    function registrationController($scope,homeService,$stateParams,$state) {
        var vm = this;
        vm.confirmRegistration = confirmRegistration;

        function confirmRegistration(){
            var token = $stateParams.token;
            console.log("Token :",token)
            homeService.confirmReg(token).then(success).catch(failure);

            function success(response){
                $state.go('home');
            }

            function failure(failure){

            }
        }

    }
})();
