/**
 * Created by shravya on 17/3/17.
 */
(function () {
    angular.module('home')
        .controller("profileController", profileController);

    profileController.$inject = ['$http', 'homeService', '$rootScope','$localStorage','$uibModal','NgTableParams','$filter'];

    function profileController($http, homeService, $rootScope,$localStorage,$uibModal,NgTableParams,$filter) {
        var vm = this;
        vm.types = ["work", "home"];
        vm.id = $localStorage.userDetails._id;
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
        loadTable();
        function loadTable() {
            console.log("************************************** load table")
            vm.tableParams = new NgTableParams({
                page:1,
                count: 3

            },{
                counts : [2,5,10,25,50,100],
                getData: function (params) {
                    var query={
                        page_size : params.count()=== -1 ? 0 : params.count(),
                        page : (params.page()-1) * params.count(),
                        id : vm.id ,
                        sortingCriteria : params.sorting()
                    };
                    return homeService.getAddress(query).then(function (response) {
                        console.log(response)
                        /*//params.total(data.inlineCount); // recal. page nav controls*/
                        vm.userTable = response.dat;
                        console.log(vm.userTable)
                      /*  if(response.status == "ok"){
                            vm.message=response.messages;}
                        //params.total(response.pagination.total);
                        var filterObj = params.filter(),filteredData = $filter('filter')(vm.userTable, filterObj);
                        var sortObj = params.sorting(), orderedData = $filter('orderBy')(filteredData, filterObj);
                      */
                        var data= vm.userTable;
                        return data;
                    });
                }

            });
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
