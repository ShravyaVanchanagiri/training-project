/**
 * Created by shravya on 16/3/17.
 */
(function () {
    angular.module('home')
        .controller("resetController", resetController);

    resetController.$inject = ['$scope','homeService','$stateParams','$state'];

    function resetController($scope,homeService,$stateParams,$state) {
        var vm = this;
        vm.resetPassword = resetPassword;
        function resetPassword(){
            console.log("coming here");
            var token = $stateParams.token;
            console.log("Token :",token);
            console.log(vm.user.passwordConfirm);
            homeService.restPass({token:token, pass : vm.user.passwordConfirm}).then(success).catch(failure);

            function success(response){
                $state.go('home');
            }
            function failure(failure){

            }
        }
    }
})();
