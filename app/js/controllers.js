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

module.controller('Add', ['$scope', '$routeParams', 'Notes', function($scope, $routeParams, Notes) {
        $scope.page = $routeParams.page;

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
            
            Notes.create({title: title,content:content,category: category}, function(con) {
                alert(con.msg);
            });
	}

    }]);



module.directive("contenteditable", function (Categories) {
        return {
            link:function ($scope, ele, attrs, ctrl) {
                var ENTER_KEY = 13;
                $scope.catInput = false;
                ele.bind("keyup",function(event) {
                    if(event.keyCode === ENTER_KEY)
                    {
                        console.log($scope.category);
                        Categories.create({category:$scope.category}, function(con) {
                            $scope.category = '';
                            $scope.catInput = false;
                            alert(con.msg);
                        });
                    }
                });
            }
        };
    });