/**
 * Created by vanchanagiri shravya on 1/25/2017.
 */
(function () {
    angular.module('home')
        .component('headerDirective', {

            bindings: {},
            templateUrl: 'views/header.html',
            controller: headerController,
            controllerAs: 'h'
        });
    headerController.$inject = ['$uibModal', 'api', 'homeService', '$localStorage', '$state'];
    function headerController($uibModal, api, homeService, $localStorage, $state) {
        var vm = this;
        console.log($localStorage)
        displayUser();
        vm.openRegistrationModel = openRegistrationModel;
        function openRegistrationModel() {
            $uibModal.open({
                templateUrl: 'partials/register.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.funOk = function () {
                        console.log($scope.user);

                        homeService.register($scope.user).then(success).catch(failure);

                        function success(response) {
                            console.log("response", response);
                            //$uibModalInstance.close();
                            $uibModalInstance.close();
                        }

                        function failure(failure) {

                        }
                    }
                },
            });
        }

        vm.openLoginModel = openLoginModel;
        function openLoginModel() {
            var vm1 = this;
            $uibModal.open({
                templateUrl: 'partials/login.html',
                controller: function ($uibModalInstance) {
                    var vm2 = this;
                    vm2.openForgotPassModel = openForgotPassModel;
                    vm2.user = {}
                    console.log(vm2.user)
                    vm2.funOk1 = function () {
                        console.log(vm2.user.email);
                        var query = {email: vm2.user.email, pass: vm2.user.pass};
                        console.log(query);
                        homeService.login(query).then(success).catch(failure);
                        function success(response) {
                            console.log(response);
                            $localStorage.userDetails = {};
                            $localStorage.userDetails = response.data;
                            console.log($localStorage.userDetails);
                            console.log(vm.fname);
                            displayUser();
                            $uibModalInstance.close();

                        }

                        function failure(failure) {
                            console.log("failure............", failure);
                        }
                    }
                    function openForgotPassModel() {
                        var vm3 = this;
                        $uibModal.open({
                            templateUrl: 'partials/forgotPassword.html',
                            controller: function ($scope, $uibModalInstance) {
                                $scope.funOk = function () {
                                    console.log($scope.user.email);
                                    homeService.forgot($scope.user.email).then(success).catch(failure);
                                    function success(response) {
                                        console.log("response", response);
                                        //$uibModalInstance.close();
                                        $uibModalInstance.close();
                                    }

                                    function failure(failure) {

                                    }
                                }
                            },
                        });
                    }
                },
                controllerAs: 'l'
            });

        }

        function displayUser() {
            if ($localStorage.userDetails) {
                vm.fname = $localStorage.userDetails.firstName;
                vm.lname = $localStorage.userDetails.lastName;
                vm.currentUserSignedIn = true;
            }
            else
                vm.currentUserSignedIn = false;

        }

        vm.logOut = logOut;
        function logOut() {
            if ($localStorage.userDetails) {
                var query = {email: $localStorage.userDetails.email, token: $localStorage.userDetails.tokenId};
                console.log(query);
                homeService.logOut(query).then(success).catch(failure);
                function success(response) {
                    console.log(response);
                    $localStorage.$reset();
                    console.log($localStorage)
                    displayUser();
                }

                function failure(failure) {
                    console.log("failure............", failure);
                }
            }
            else {

            }
        }
    }
}());
