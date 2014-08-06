'use strict';

/* Controllers */

var module = angular.module('note.controllers', []);

module.controller('Left', ['$scope', 'Datas', function($scope, Datas) {
        $scope.categorys = Datas.category();
        $scope.newcatshow = false;
        
        $scope.newClass = function(event)
        {
            console.log(event);
            //$scope.newcatshow = true;
            //alert("aaa");
        }
        
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

module.controller('Add', ['$scope', '$routeParams', 'Store', function($scope, $routeParams, Store) {
        $scope.page = $routeParams.page;

        $scope.submit = function(){
            var title = $scope.title;
            var content = $scope.content;
            var category = $scope.category;
            console.log("title: " + title + ", content:" + content + ", category: " + category);
            console.log($scope);
            if(!title || !category || !content)
            {
                alert("input error.");
                return;
            }
            
            $scope.content = Store.create({title: title,content:content,category: category}, function(con) {
                $scope.content = '';
                alert(con.msg);
            });
	}

    }]);



