'use strict';

/* Controllers */

var module = angular.module('note.controllers', []);

module.controller('Left', ['$scope', 'Categories', function($scope, Categories) {

        $scope.categorys = Categories.get();

    }]);

module.controller('View', ['$scope', '$routeParams', 'Notes', function($scope, $routeParams, Notes) {

        $scope.category = $routeParams.cat;
        $scope.content = Notes.get({category: $routeParams.cat}, function(con) {
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

module.controller('Add', ['$scope', '$routeParams', 'Notes', 'Categories', function($scope, $routeParams, Notes, Categories) {
        $scope.page = $routeParams.page;

        $scope.categorys = Categories.get();
        

        $scope.submit = function(){
            var title = $scope.title;
            var content = $scope.content;
            var category = $scope.category;
            console.log("title: " + title + ", content:" + content + ", category: " + category);
            if(!title || !category || !content)
            {
                alert("input error.");
                return;
            }
            //如何刷新Category列表 TODO
            
            Notes.create({title: title,content:content,category: category}, function(con) {
                alert(con.msg);
            });
	}

    }]);



