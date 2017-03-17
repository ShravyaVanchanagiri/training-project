/**
 * Created by shravya on 17/3/17.
 */
(function () {
    angular.module('home')
        .controller("profileController", profileController);

    profileController.$inject = ['$http', 'homeService', '$rootScope','$localStorage','$uibModal','NgTableParams'];

    function profileController($http, homeService, $rootScope,$localStorage,$uibModal,NgTableParams) {
        var vm = this;
        vm.types = ["work", "home"];
        vm.id = $localStorage.userDetails._id;
        var data = [{name: "Moroni", age: 50},{name: "s", age: 0},{name: "p", age: 5}  ];
        vm.tableParams = new NgTableParams({}, { dataset: data});
        homeService.getProfile(vm.id).then(success).catch(failure);
        function success(response) {
            console.log(response.data);
            vm.fname=response.data.firstName;
            vm.lname=response.data.lastName;
            vm.email=response.data.email;
        }

        function failure(failure) {
            console.log("failure............", failure);
        }
        vm.openAddressModel=openAddressModel;
        function openAddressModel(){
            $uibModal.open({
                templateUrl: 'partials/addAddressForm.html',
                controller: function ($uibModalInstance) {
                    var vm3 = this;
                    vm3.funOk = funOk;
                    function funOk() {
                         console.log(vm3.address);
                        console.log($localStorage.userDetails._id);
                        var query = {address: vm3.address, userId: $localStorage.userDetails._id};
                        homeService.storeAddress(query).then(success).catch(failure);
                        function success(response) {
                            console.log("response", response);
                            $uibModalInstance.close();
                        }
                        function failure(failure) {
                            console.log("failure", failure);
                        }
                     }
                },
                controllerAs : 'pf'
            });
        }
    }
})();
