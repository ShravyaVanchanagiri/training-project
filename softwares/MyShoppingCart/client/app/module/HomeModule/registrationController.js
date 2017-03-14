/**
 * Created by shravya on 14/3/17.
 */
(function () {
    angular.module('home')
        .controller("registrationController", registrationController);

    registrationController.$inject = ['$scope','homeService','$stateParams'];

    function registrationController($scope,homeService,$stateParams) {
        var vm = this;
        vm.confirmRegistration = confirmRegistration;

        function confirmRegistration(){
            var token = $stateParams.token;
            console.log("Token :",token)
            homeService.confirmReg(token).then(success).catch(failure);

            function success(response){
                /*vm.topProducts = response.data;*/
                //console.log(response.data);
            }

            function failure(failure){

            }
        }

    }
})();
