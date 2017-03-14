/**
 * Created by shravya on 3/3/17.
 */
(function(){
    'use strict';

    angular.module('shoppingCart')
        .factory('api', api);

    api.$inject = ['$resource','$rootScope'];

    //clinical trail API for data calls
    function api ($resource, $rootScope) {
        return $resource('/', getParamDefaults(), getActions($rootScope));
    }

    //default parameters will go here..
    var getParamDefaults = function() {
        return {
            id:'@id'
        };
    };

    //default actions and methods will go here..
    var getActions = function() {
        return {
            'getAllTopProducts':{
                method : 'GET',
                url: '/topProducts'
            },
            'getAllMobileList':{
                method : 'GET',
                url: '/topMobiles'
            },
            'getAllLaptopList':{
                method : 'GET',
                url: '/topLaptops'
            },
            'getAllComicList':{
                method : 'GET',
                url: '/topComics'
            },
            'getAllFictionList':{
                method : 'GET',
                url: '/topFictions'
            },
            'getSelectedProduct':{
                method : 'GET',
                url: '/getProducts/:id'
            },
            'getSimilarProducts':{
                method : 'GET',
                url: '/similarProducts'
            },
            'getAllMobiles':{
                method : 'GET',
                url: '/mobiles'
            },
            'getAllLaptops':{
                method : 'GET',
                url: '/laptops'
            },
            'getAllComics':{
                method : 'GET',
                url: '/comics'
            },'getAllFictions':{
                method : 'GET',
                url: '/fictions'
            },
            'getFilteredMobiles':{
                method : 'GET',
                url: '/getFilteredMobile'
            },
            'getAllNames':{
                method : 'GET',
                url: '/getAllNames'
            },
            'getAllBrandNames':{
                method : 'GET',
                url: '/getAllBrandNames'
            },
            'registerUser':{
                method : 'POST',
                url: '/registerUser'
            },
            'confirmReg':{
                method : 'GET',
                url: '/ConfirmReg/:tokens'
            }
        }
    }
}());