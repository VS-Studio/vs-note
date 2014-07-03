'use strict';

/* Controllers */

var module = angular.module('note.controllers', []);

module.controller('Left', ['$scope', 'Datas', function($scope, Datas) {
        $scope.categorys = Datas.category();
    }]);

module.controller('View', ['$scope', '$routeParams', 'Datas', function($scope, $routeParams, Datas) {

        $scope.category = $routeParams.cat;
        $scope.content = Datas.list({cat: $routeParams.cat}, function(con) {
            $scope.list = con;
        });

    }]);

module.controller('About', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.page = $routeParams.page;

        switch($routeParams.page)
        {
            case 'readme':
                $scope.content = "about us";break;
            default :
                $scope.content = "this is home page";break;
        }
        
    }]);

module.controller('Add', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.page = $routeParams.page;

        
        
        
    }]);